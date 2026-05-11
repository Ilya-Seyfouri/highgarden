import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(request) {
  const { order, items } = await request.json();

  const { data: row, error: orderError } = await supabaseAdmin
    .from('orders')
    .insert({
      full_name:                order.fullName,
      email:                    order.email,
      phone:                    order.phone,
      address_line_1:           order.addressLine1,
      address_line_2:           order.addressLine2 ?? null,
      city:                     order.city,
      county:                   order.county ?? null,
      postcode:                 order.postcode,
      country:                  order.country ?? 'GB',
      subtotal:                 order.subtotal,
      delivery_cost:            order.deliveryCost,
      total:                    order.total,
      payment_method:           order.paymentMethod ?? null,
      promo_code:               order.promoCode ?? null,
      marketing_opt_in:         order.marketingOptIn ?? false,
      stripe_payment_intent_id: order.stripePaymentIntentId ?? null,
    })
    .select('id')
    .single();

  if (orderError) {
    return Response.json({ error: orderError.message }, { status: 500 });
  }

  const { error: itemsError } = await supabaseAdmin.from('order_items').insert(
    items.map((item) => ({
      order_id:     row.id,
      product_slug: item.slug,
      product_name: item.name,
      size:         item.size ?? null,
      quantity:     item.quantity,
      unit_price:   item.unitPrice,
      total_price:  item.unitPrice * item.quantity,
    }))
  );

  if (itemsError) {
    return Response.json({ error: itemsError.message }, { status: 500 });
  }

  return Response.json({ orderId: row.id });
}
