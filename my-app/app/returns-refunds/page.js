import InfoPageLayout, { Section, CalloutCard } from '@/components/InfoPageLayout';

const STEPS = [
  {
    title: 'Get in touch',
    text: 'Email returns@heritagegarden.co.uk or call us on 0800 123 4567 with your order number.',
  },
  {
    title: 'Pick a collection day',
    text: 'We\'ll arrange a free home collection on a day that suits you, with a 2-hour window.',
  },
  {
    title: 'Pack it up',
    text: 'Items must be returned in their original packaging. If you\'ve thrown it away, just let us know — we can usually help.',
  },
  {
    title: 'Refund processed',
    text: 'Once we\'ve checked the item back into our warehouse, your refund is issued within 3 working days to your original payment method.',
  },
];

export const metadata = {
  title: 'Returns & Refunds | Heritage Garden',
  description: 'A simple, no-quibble 30-day returns policy with free home collection.',
};

export default function ReturnsPage() {
  return (
    <InfoPageLayout
      label="No-Quibble Returns"
      title="Returns & Refunds"
      intro="Changed your mind? Not quite right for the space? Send it back within 30 days, free of charge — we'll collect it from your home."
      currentHref="/returns-refunds"
    >
      <Section title="The 30-Day Promise">
        <p>
          You have 30 days from the day your order arrives to return any item for a full
          refund — no questions asked, no restocking fees, no return-postage charge.
          Collection is arranged from your home at a time that suits you.
        </p>
        <p>
          We ask that items are returned in a re-saleable condition, ideally in their
          original packaging. If something has been used and is no longer re-saleable, we
          may need to apply a deduction — we'll always discuss this with you first.
        </p>
      </Section>

      <Section title="How to Return an Item">
        <ol className="not-prose space-y-5">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="w-9 h-9 shrink-0 rounded-full bg-brand-sage text-white flex items-center justify-center font-body-md text-base font-bold">
                {i + 1}
              </span>
              <div>
                <p className="font-h3 text-lg text-brand-sage mb-1 leading-snug">{step.title}</p>
                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Refund Timing">
        <ul className="not-prose space-y-2">
          {[
            ['Credit / Debit Card', '3 working days after the item is checked in'],
            ['PayPal', 'Within 24 hours of check-in'],
            ['Klarna', 'Updated on your Klarna account same day'],
            ['Bank Transfer', '5 working days, requires bank details'],
          ].map(([method, timing]) => (
            <li key={method} className="flex justify-between items-baseline gap-4 py-3 border-b border-outline-variant/40">
              <span className="font-body-md text-base text-brand-sage font-semibold">{method}</span>
              <span className="font-body-md text-sm text-on-surface-variant text-right">{timing}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Faulty or Damaged Items">
        <p>
          In the very rare event that something arrives damaged or develops a fault, please
          let us know within 48 hours of delivery. We'll arrange a free collection,
          replacement, or full refund — your choice. Photos of the issue help us resolve
          things quickly.
        </p>
        <p>
          For items still under our 5-Year Warranty, see the warranty section in our{' '}
          <a href="/faqs#warranty" className="text-brand-sage underline hover:text-brand-terracotta">
            FAQs
          </a>
          .
        </p>
      </Section>

      <Section title="Items We Cannot Accept Back">
        <ul className="not-prose space-y-2">
          {[
            'Bespoke or made-to-order items (custom canopy colours, made-to-measure cushions)',
            'Items that have been assembled outdoors and weathered',
            'Used candles, oils, or other consumables',
          ].map((line) => (
            <li key={line} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-terracotta text-base mt-1 shrink-0">close</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CalloutCard icon="info" title="This doesn't affect your statutory rights">
        Our 30-day policy is in addition to the statutory 14-day right of cancellation
        under the Consumer Contracts Regulations 2013.
      </CalloutCard>
    </InfoPageLayout>
  );
}
