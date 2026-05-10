import InfoPageLayout, { Section, CalloutCard } from '@/components/InfoPageLayout';

const OPTIONS = [
  {
    name: 'Standard Delivery',
    eta: '3–5 working days',
    price: 'FREE on orders over £100 · £4.95 below',
    blurb: 'Two-person doorstep delivery. We\'ll lift it into your hallway or porch.',
  },
  {
    name: 'Named-Day Delivery',
    eta: 'Choose your day',
    price: '£14.95',
    blurb: 'Pick the date that suits you, with a 2-hour window confirmed by text the evening before.',
  },
  {
    name: 'White-Glove Delivery',
    eta: 'Choose your day',
    price: 'From £49',
    blurb: 'Room-of-choice placement, full assembly, and packaging removed. Recommended for gazebos and large dining sets.',
  },
];

export const metadata = {
  title: 'Delivery Information | Heritage Garden',
  description: 'UK-wide delivery, lead times, white-glove service, and what to expect on the day.',
};

export default function DeliveryPage() {
  return (
    <InfoPageLayout
      label="Delivery & Logistics"
      title="Delivery Information"
      intro="Our own UK delivery fleet, with named drivers and proper care taken at every step. Here's exactly what to expect."
      currentHref="/delivery-information"
    >
      <Section title="Delivery Options">
        <div className="not-prose space-y-4">
          {OPTIONS.map((opt) => (
            <div key={opt.name} className="p-5 bg-white border border-outline-variant/40">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                <h3 className="font-h3 text-xl text-brand-sage">{opt.name}</h3>
                <span className="font-body-md text-sm font-bold text-brand-sage">{opt.price}</span>
              </div>
              <p className="font-body-md text-sm text-brand-terracotta uppercase tracking-widest mb-3">
                {opt.eta}
              </p>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {opt.blurb}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="On the Day">
        <p>
          You'll receive a text message the evening before your delivery with a two-hour
          window. If you're not going to be in, just reply to that message and we'll
          rearrange — no charge, no fuss.
        </p>
        <p>
          For larger items (gazebos, dining sets, pergolas), please make sure there's clear
          access to your garden or chosen room. If you're unsure whether something will fit
          through, just give us a call before ordering and we'll talk it through.
        </p>
      </Section>

      <Section title="Where We Deliver">
        <p>
          We deliver across the UK mainland as standard. Deliveries to the Highlands &amp;
          Islands, Northern Ireland, Isle of Man and Scilly Isles are quoted individually —
          please contact us for a price before placing your order.
        </p>
        <ul className="not-prose space-y-2">
          {[
            'England, Wales, and mainland Scotland — standard rates apply',
            'Scottish Highlands & Islands — quoted on request',
            'Northern Ireland — quoted on request',
            'Channel Islands, Isle of Man, Scilly Isles — quoted on request',
          ].map((line) => (
            <li key={line} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-terracotta text-base mt-1 shrink-0">check</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Lead Times">
        <p>
          Items shown as <strong>In Stock</strong> are despatched within 24 hours of your order
          being placed. Bespoke items (made-to-order cushions, custom canopy colours) typically
          take 14–21 days. Lead times are shown clearly on every product page.
        </p>
      </Section>

      <div className="not-prose space-y-4">
        <CalloutCard icon="info" title="A note on bank holidays">
          Deliveries pause on UK bank holidays. Orders placed on a Friday before a bank
          holiday weekend will be despatched the following Tuesday.
        </CalloutCard>
        <CalloutCard icon="eco" title="Sustainable packaging">
          Everything we ship is wrapped in recycled cardboard and biodegradable corner
          protection. We'd ask that you flatten boxes for kerbside recycling.
        </CalloutCard>
      </div>
    </InfoPageLayout>
  );
}
