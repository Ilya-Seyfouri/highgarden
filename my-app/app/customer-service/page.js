import Link from 'next/link';
import InfoPageLayout, { Section } from '@/components/InfoPageLayout';

const HUB_LINKS = [
  {
    icon: 'local_shipping',
    title: 'Delivery Information',
    text: 'Delivery options, lead times, and white-glove service.',
    href: '/delivery-information',
  },
  {
    icon: 'card_giftcard',
    title: 'Returns & Refunds',
    text: 'Our 30-day no-quibble returns policy and how it works.',
    href: '/returns-refunds',
  },
  {
    icon: 'pin_drop',
    title: 'Track an Order',
    text: 'Check the status of an existing order in seconds.',
    href: '/order-tracking',
  },
  {
    icon: 'eco',
    title: 'Furniture Care',
    text: 'How to keep teak, rattan, metal, and fabric looking their best.',
    href: '/furniture-care-guide',
  },
  {
    icon: 'contact_support',
    title: 'Frequently Asked Questions',
    text: 'Answers to the questions we hear most often.',
    href: '/faqs',
  },
  {
    icon: 'workspace_premium',
    title: '5-Year Warranty',
    text: 'How our warranty works and how to register a claim.',
    href: '/faqs#warranty',
  },
];

export const metadata = {
  title: 'Customer Service | Heritage Garden',
  description: 'How we help — delivery, returns, order tracking, furniture care, and FAQs.',
};

export default function CustomerServicePage() {
  return (
    <InfoPageLayout
      label="We're Here to Help"
      title="Customer Service"
      intro="Real people, based in our Cheltenham studio, ready to help with anything from a delivery question to a care recommendation. Find the answer you need below, or call us for a chat."
      currentHref="/customer-service"
    >
      <Section title="How can we help today?">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          {HUB_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex gap-4 p-5 bg-white border border-outline-variant/40 hover:border-brand-sage transition-colors"
            >
              <span
                className="material-symbols-outlined text-brand-sage text-3xl shrink-0 group-hover:text-brand-terracotta transition-colors"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="font-h3 text-lg text-brand-sage mb-1 leading-snug group-hover:text-brand-terracotta transition-colors">
                  {item.title}
                </p>
                <p className="font-body-md text-sm text-on-surface-variant">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Our Promise to You">
        <p>
          Every Heritage Garden order is backed by four commitments: free UK delivery on orders
          over £100, a comprehensive 5-Year Warranty, a no-quibble 30-day returns policy with
          home collection, and a UK customer service team you can actually reach. We design,
          source, and ship from our base in the Cotswolds — so when you call, you're talking to
          someone who knows the products inside out.
        </p>
        <p>
          If something has gone wrong, please tell us. We'd much rather hear about a problem
          and put it right than discover it through a review.
        </p>
      </Section>

      <Section title="Opening Hours">
        <ul className="not-prose divide-y divide-outline-variant/40 border-y border-outline-variant/40">
          {[
            ['Monday – Friday', '8:00am – 8:00pm'],
            ['Saturday', '9:00am – 6:00pm'],
            ['Sunday', '10:00am – 4:00pm'],
            ['Bank Holidays', '10:00am – 4:00pm'],
          ].map(([day, hours]) => (
            <li key={day} className="flex justify-between py-3 font-body-md text-base">
              <span className="text-brand-sage font-semibold">{day}</span>
              <span className="text-on-surface-variant">{hours}</span>
            </li>
          ))}
        </ul>
      </Section>
    </InfoPageLayout>
  );
}
