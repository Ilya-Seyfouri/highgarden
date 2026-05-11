import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const SAGE = '#334f2b';
const TERRACOTTA = '#c4724a';

function formatPrice(amount) {
  return `£${Number(amount).toFixed(2)}`;
}

function itemsTable(items) {
  const rows = items
    .map(
      (item) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #e8ede8;font-size:14px;color:#1c1b1f;">
          ${item.product_name}
          ${item.size ? `<span style="color:#666;font-size:12px;"> — ${item.size}</span>` : ''}
        </td>
        <td style="padding:10px 0;border-bottom:1px solid #e8ede8;font-size:14px;color:#1c1b1f;text-align:center;">
          ${item.quantity}
        </td>
        <td style="padding:10px 0;border-bottom:1px solid #e8ede8;font-size:14px;color:#1c1b1f;text-align:right;">
          ${item.unit_price === 0 ? '<span style="color:#334f2b;font-weight:600;">FREE</span>' : formatPrice(item.total_price)}
        </td>
      </tr>`
    )
    .join('');

  return `
    <table style="width:100%;border-collapse:collapse;">
      <thead>
        <tr>
          <th style="padding:8px 0;border-bottom:2px solid ${SAGE};font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:${SAGE};text-align:left;">Item</th>
          <th style="padding:8px 0;border-bottom:2px solid ${SAGE};font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:${SAGE};text-align:center;">Qty</th>
          <th style="padding:8px 0;border-bottom:2px solid ${SAGE};font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:${SAGE};text-align:right;">Price</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function totalsBlock(order) {
  return `
    <table style="width:100%;border-collapse:collapse;margin-top:16px;">
      <tr>
        <td style="padding:6px 0;font-size:14px;color:#1c1b1f;">Subtotal</td>
        <td style="padding:6px 0;font-size:14px;color:#1c1b1f;text-align:right;">${formatPrice(order.subtotal)}</td>
      </tr>
      <tr>
        <td style="padding:6px 0;font-size:14px;color:#1c1b1f;">Delivery</td>
        <td style="padding:6px 0;font-size:14px;color:#1c1b1f;text-align:right;">${Number(order.delivery_cost) === 0 ? 'FREE' : formatPrice(order.delivery_cost)}</td>
      </tr>
      <tr>
        <td style="padding:10px 0 6px;font-size:18px;font-weight:700;color:${SAGE};border-top:2px solid ${SAGE};">Total</td>
        <td style="padding:10px 0 6px;font-size:18px;font-weight:700;color:${SAGE};text-align:right;border-top:2px solid ${SAGE};">${formatPrice(order.total)}</td>
      </tr>
    </table>`;
}

function addressBlock(order) {
  const lines = [
    order.full_name,
    order.address_line_1,
    order.address_line_2,
    order.city,
    order.county,
    order.postcode,
  ]
    .filter(Boolean)
    .map((l) => `<span style="display:block;">${l}</span>`)
    .join('');
  return `<p style="font-size:14px;color:#1c1b1f;line-height:1.8;margin:0;">${lines}</p>`;
}

function wrapper(content) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f6f0;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f6f0;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #dde5dc;">

        <!-- Header -->
        <tr>
          <td style="background:${SAGE};padding:28px 40px;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.02em;">
              Heritage Garden
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            ${content}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f5f6f0;padding:24px 40px;border-top:1px solid #dde5dc;">
            <p style="margin:0;font-size:12px;color:#666;line-height:1.8;">
              Heritage Garden Ltd &middot; The Old Forge, Cotswold Way, Cheltenham GL52 6PN<br>
              Questions? Call <a href="tel:08001234567" style="color:${SAGE};">0800 123 4567</a> Mon–Sat 8am–8pm,
              or reply to this email.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function customerReceiptHtml(order, items) {
  return wrapper(`
    <h1 style="margin:0 0 8px;font-size:26px;color:${SAGE};">Order Confirmed</h1>
    <p style="margin:0 0 28px;font-size:15px;color:#444;line-height:1.6;">
      Thank you, ${order.full_name.split(' ')[0]}. Your order is confirmed and our team is getting it ready.
    </p>

    <div style="margin-bottom:28px;">
      ${itemsTable(items)}
      ${totalsBlock(order)}
    </div>

    <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
      <tr>
        <td style="vertical-align:top;padding-right:24px;width:50%;">
          <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:${SAGE};font-weight:600;">Delivering to</p>
          ${addressBlock(order)}
        </td>
        <td style="vertical-align:top;width:50%;">
          <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:${SAGE};font-weight:600;">What happens next</p>
          <p style="margin:0;font-size:14px;color:#1c1b1f;line-height:1.8;">
            Standard delivery: 3–5 working days.<br>
            You'll receive a named-day delivery window by text the evening before.
          </p>
        </td>
      </tr>
    </table>

    <div style="background:#f5f6f0;border-left:3px solid ${SAGE};padding:16px 20px;margin-bottom:28px;">
      <p style="margin:0;font-size:13px;color:#444;line-height:1.7;">
        <strong style="color:${SAGE};">5-Year Heritage Guarantee</strong> — Your products are covered from the date of purchase.
        Keep this email as your proof of purchase.
      </p>
    </div>

    <p style="margin:0;font-size:13px;color:#888;line-height:1.6;">
      Payment processed securely by Stripe &middot; PCI DSS compliant
    </p>
  `);
}

export function ownerNotificationHtml(order, items) {
  return wrapper(`
    <h1 style="margin:0 0 8px;font-size:26px;color:${SAGE};">New Order Received</h1>
    <p style="margin:0 0 28px;font-size:15px;color:#444;">
      <strong style="color:${TERRACOTTA};font-size:20px;">${formatPrice(order.total)}</strong>
      &nbsp;&mdash;&nbsp;${new Date(order.created_at).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
    </p>

    <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
      <tr>
        <td style="vertical-align:top;padding-right:24px;width:50%;">
          <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:${SAGE};font-weight:600;">Customer</p>
          <p style="margin:0;font-size:14px;color:#1c1b1f;line-height:1.8;">
            <span style="display:block;font-weight:600;">${order.full_name}</span>
            <a href="mailto:${order.email}" style="color:${SAGE};">${order.email}</a><br>
            ${order.phone}
          </p>
        </td>
        <td style="vertical-align:top;width:50%;">
          <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:${SAGE};font-weight:600;">Ship to</p>
          ${addressBlock(order)}
        </td>
      </tr>
    </table>

    <div style="margin-bottom:28px;">
      ${itemsTable(items)}
      ${totalsBlock(order)}
    </div>

    <p style="margin:0;font-size:12px;color:#888;">
      Stripe PI: <code>${order.stripe_payment_intent_id ?? 'n/a'}</code>
    </p>
  `);
}

export async function sendOrderConfirmation(order, items) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: order.email,
    subject: `Your Heritage Garden order is confirmed — ${formatPrice(order.total)}`,
    html: customerReceiptHtml(order, items),
  });
}

export async function sendOwnerNotification(order, items) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: process.env.OWNER_EMAIL,
    subject: `New order — ${order.full_name} — ${formatPrice(order.total)}`,
    html: ownerNotificationHtml(order, items),
  });
}
