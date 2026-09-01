import Stripe from 'stripe';
import { getSupabaseAdmin } from '@/lib/supabase-admin';
import { sendOrderConfirmation, sendOwnerNotification } from '@/lib/email';

// Built lazily: at build time `next build` imports this module to collect
// route data, and the Stripe constructor throws if the key isn't set yet.
let stripe;
function getStripe() {
  stripe ??= new Stripe(process.env.STRIPE_SECRET_KEY);
  return stripe;
}

export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  let event;
  try {
    event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return Response.json({ error: `Webhook signature failed: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object;

    // Confirm the order
    const { error: updateError } = await getSupabaseAdmin()
      .from('orders')
      .update({ status: 'confirmed' })
      .eq('stripe_payment_intent_id', pi.id)
      .eq('status', 'pending');

    if (updateError) {
      console.error(`Webhook: failed to confirm order for PI ${pi.id}:`, updateError);
      return Response.json({ received: true });
    }

    // Fetch full order + items for the emails
    const { data: order, error: fetchError } = await getSupabaseAdmin()
      .from('orders')
      .select(`*, order_items(*)`)
      .eq('stripe_payment_intent_id', pi.id)
      .single();

    if (fetchError || !order) {
      console.error(`Webhook: could not fetch order for emails (PI ${pi.id}):`, fetchError);
      return Response.json({ received: true });
    }

    // Send emails — log failures but don't error (order is already confirmed)
    await Promise.allSettled([
      sendOrderConfirmation(order, order.order_items).catch((e) =>
        console.error('Customer receipt failed:', e)
      ),
      sendOwnerNotification(order, order.order_items).catch((e) =>
        console.error('Owner notification failed:', e)
      ),
    ]);
  }

  return Response.json({ received: true });
}
