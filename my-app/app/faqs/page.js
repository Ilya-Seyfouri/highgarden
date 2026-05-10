'use client';
import { useState } from 'react';
import InfoPageLayout, { Section } from '@/components/InfoPageLayout';

const FAQ_GROUPS = [
  {
    id: 'orders',
    title: 'Orders & Payment',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, Klarna Pay in 3, and bank transfer. All card payments are processed securely by Stripe — we never see or store your card details.',
      },
      {
        q: 'Can I order over the phone?',
        a: 'Yes — call our UK team on 0800 123 4567 (Mon–Sat 8am–8pm, Sun 10am–4pm) and we\'ll happily take your order. We can also help if you have questions about a product before buying.',
      },
      {
        q: 'Can I amend or cancel an order after placing it?',
        a: 'If your order hasn\'t been despatched yet, we can usually amend or cancel it without issue. Call us as soon as possible — once an item has left our warehouse, we treat changes as a return.',
      },
      {
        q: 'Do you offer trade or interior designer pricing?',
        a: 'We do — visit our Trade Programme page or email trade@heritagegarden.co.uk for an account application.',
      },
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery',
    items: [
      {
        q: 'How long will my order take to arrive?',
        a: 'In-stock items are despatched within 24 hours and arrive within 3–5 working days on standard delivery. Bespoke and made-to-order items take 14–21 days. Lead times are shown on every product page.',
      },
      {
        q: 'Do you deliver outside mainland UK?',
        a: 'Yes — we deliver to the Highlands & Islands, Northern Ireland, the Isle of Man, and the Channel Islands. These areas are quoted individually, so please contact us for a price before placing your order.',
      },
      {
        q: 'What is white-glove delivery?',
        a: 'White-glove is our premium service: two-person delivery into the room of your choice, full assembly on site, and removal of all packaging. Recommended for gazebos, large dining sets, and anything heavy or awkward.',
      },
      {
        q: 'Can I choose a specific delivery date?',
        a: 'Yes — Named-Day Delivery (£14.95) lets you pick the day, with a 2-hour window confirmed by text the evening before.',
      },
    ],
  },
  {
    id: 'returns',
    title: 'Returns & Refunds',
    items: [
      {
        q: 'What is your returns policy?',
        a: 'You have 30 days from delivery to return any item for a full refund. Collection is free from your home — we arrange a date that suits you.',
      },
      {
        q: 'How long do refunds take?',
        a: 'Refunds are issued within 3 working days of the item arriving back at our warehouse, to your original payment method.',
      },
      {
        q: 'What if my item arrives damaged?',
        a: 'Please let us know within 48 hours of delivery. We\'ll arrange a free collection and offer you a replacement or full refund — your choice. Photos help us resolve things quickly.',
      },
    ],
  },
  {
    id: 'warranty',
    title: '5-Year Warranty',
    items: [
      {
        q: 'What does the 5-Year Warranty cover?',
        a: 'Manufacturing defects and structural failures under normal domestic use. This covers things like frame failures, joint failures, fabric defects, and finish degradation beyond reasonable wear.',
      },
      {
        q: 'How do I register my warranty?',
        a: 'It\'s registered automatically when you check out — no additional action needed. Keep your order confirmation email as proof of purchase.',
      },
      {
        q: 'How do I make a warranty claim?',
        a: 'Email warranty@heritagegarden.co.uk with your order number and photos of the issue. We\'ll respond within 2 working days with a repair, replacement, or refund.',
      },
      {
        q: 'What is not covered by the warranty?',
        a: 'Normal weathering of natural materials (teak silvering, copper patina), damage from misuse or accidents, commercial use, and general wear and tear are not covered. We treat each case on its merits — call us if you\'re unsure.',
      },
    ],
  },
  {
    id: 'products',
    title: 'Products & Materials',
    items: [
      {
        q: 'Is your teak sustainably sourced?',
        a: 'All our teak is FSC-certified Grade-A teak from plantation forests — we don\'t source from old-growth or wild-harvested supplies. Our certification numbers are on every product page.',
      },
      {
        q: 'Will my furniture survive a British winter?',
        a: 'Yes. All our furniture is designed and engineered for year-round outdoor use in the UK. Cushions and umbrellas are best brought indoors over winter to extend their life — frames are happy left out.',
      },
      {
        q: 'Do I need to assemble it myself?',
        a: 'Most items arrive partially assembled and take 15–30 minutes to finish. Larger items like gazebos take longer — we recommend white-glove delivery for these. Full instructions are included.',
      },
    ],
  },
  {
    id: 'account',
    title: 'My Account',
    items: [
      {
        q: 'Do I need an account to place an order?',
        a: 'No — guest checkout is available at every step. Creating an account just makes it easier to track orders and reorder favourites.',
      },
      {
        q: 'How do I unsubscribe from marketing emails?',
        a: 'Click the unsubscribe link at the bottom of any email, or update your preferences in your account. We never share your details with third parties.',
      },
    ],
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-h3 text-base md:text-lg text-brand-sage leading-snug">{q}</span>
        <span
          className="material-symbols-outlined text-brand-sage transition-transform duration-300 shrink-0"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>
      {open && (
        <p className="pb-6 font-body-md text-base text-on-surface-variant leading-relaxed pr-12">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FaqsPage() {
  return (
    <InfoPageLayout
      label="Common Questions"
      title="Frequently Asked Questions"
      intro="If your question isn't answered below, please call us on 0800 123 4567 — we're happy to help."
      currentHref="/faqs"
    >
      {FAQ_GROUPS.map((group) => (
        <Section key={group.id} title={group.title}>
          <div id={group.id} className="not-prose -mt-2">
            {group.items.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Section>
      ))}
    </InfoPageLayout>
  );
}
