import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function createOrder(orderData, items) {
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      full_name:                orderData.fullName,
      email:                    orderData.email,
      phone:                    orderData.phone,
      address_line_1:           orderData.addressLine1,
      address_line_2:           orderData.addressLine2 ?? null,
      city:                     orderData.city,
      county:                   orderData.county ?? null,
      postcode:                 orderData.postcode,
      country:                  orderData.country ?? 'GB',
      subtotal:                 orderData.subtotal,
      delivery_cost:            orderData.deliveryCost,
      total:                    orderData.total,
      payment_method:           orderData.paymentMethod ?? null,
      promo_code:               orderData.promoCode ?? null,
      marketing_opt_in:         orderData.marketingOptIn ?? false,
      stripe_payment_intent_id: orderData.stripePaymentIntentId ?? null,
    })
    .select('id')
    .single();

  if (orderError) return { error: orderError };

  const { error: itemsError } = await supabase.from('order_items').insert(
    items.map((item) => ({
      order_id:     order.id,
      product_slug: item.slug,
      product_name: item.name,
      size:         item.size ?? null,
      quantity:     item.quantity,
      unit_price:   item.unitPrice,
      total_price:  item.unitPrice * item.quantity,
    }))
  );

  if (itemsError) return { error: itemsError };

  return { orderId: order.id };
}
