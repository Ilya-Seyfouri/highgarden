import Stripe from 'stripe';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { sendOrderConfirmation, sendOwnerNotification } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return Response.json({ error: `Webhook signature failed: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object;

    // Confirm the order
    const { error: updateError } = await supabaseAdmin
      .from('orders')
      .update({ status: 'confirmed' })
      .eq('stripe_payment_intent_id', pi.id)
      .eq('status', 'pending');

    if (updateError) {
      console.error(`Webhook: failed to confirm order for PI ${pi.id}:`, updateError);
      return Response.json({ received: true });
    }

    // Fetch full order + items for the emails
    const { data: order, error: fetchError } = await supabaseAdmin
      .from('orders')
      .select(`*, order_items(*, products(name, slug))`)
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
