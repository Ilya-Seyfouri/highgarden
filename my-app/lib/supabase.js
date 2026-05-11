import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Insert a guest order (status: pending) and its line items.
 * Pass stripePaymentIntentId so the webhook can confirm it later.
 *
 * @param {{ fullName, email, phone, addressLine1, addressLine2, city, county,
 *           postcode, country, subtotal, deliveryCost, total,
 *           paymentMethod, promoCode, marketingOptIn,
 *           stripePaymentIntentId }} orderData
 * @param {{ slug, size, quantity, unitPrice }[]} items
 * @returns {{ orderId: string } | { error: Error }}
 */
export async function createOrder(orderData, items) {
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      full_name:                  orderData.fullName,
      email:                      orderData.email,
      phone:                      orderData.phone,
      address_line_1:             orderData.addressLine1,
      address_line_2:             orderData.addressLine2 ?? null,
      city:                       orderData.city,
      county:                     orderData.county ?? null,
      postcode:                   orderData.postcode,
      country:                    orderData.country ?? 'GB',
      subtotal:                   orderData.subtotal,
      delivery_cost:              orderData.deliveryCost,
      total:                      orderData.total,
      payment_method:             orderData.paymentMethod ?? null,
      promo_code:                 orderData.promoCode ?? null,
      marketing_opt_in:           orderData.marketingOptIn ?? false,
      stripe_payment_intent_id:   orderData.stripePaymentIntentId ?? null,
    })
    .select('id')
    .single();

  if (orderError) return { error: orderError };

  // Resolve product UUIDs from slugs
  const slugs = items.map((i) => i.slug);
  const { data: products, error: productError } = await supabase
    .from('products')
    .select('id, slug')
    .in('slug', slugs);

  if (productError) return { error: productError };

  const slugToId = Object.fromEntries(products.map((p) => [p.slug, p.id]));

  const lineItems = items.map((item) => ({
    order_id:    order.id,
    product_id:  slugToId[item.slug],
    size:        item.size ?? null,
    quantity:    item.quantity,
    unit_price:  item.unitPrice,
    total_price: item.unitPrice * item.quantity,
  }));

  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(lineItems);

  if (itemsError) return { error: itemsError };

  return { orderId: order.id };
}
