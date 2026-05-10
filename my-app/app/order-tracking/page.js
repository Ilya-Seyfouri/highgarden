'use client';
import { useState } from 'react';
import InfoPageLayout, { Section, CalloutCard } from '@/components/InfoPageLayout';

const STAGES = [
  { icon: 'task_alt', title: 'Order Confirmed', text: 'You\'ll receive an email within minutes of placing your order.' },
  { icon: 'inventory_2', title: 'Picked & Packed', text: 'Usually the next working day for in-stock items.' },
  { icon: 'local_shipping', title: 'Out for Delivery', text: 'A 2-hour window text the evening before.' },
  { icon: 'home', title: 'Delivered', text: 'Signed for and placed where you want it.' },
];

export default function OrderTrackingPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!orderNumber.trim() || !email.trim()) return;
    // No backend wired up yet — this surface acknowledges the request and
    // tells the customer what to expect by email.
    setSubmitted(true);
  };

  return (
    <InfoPageLayout
      label="Track Your Order"
      title="Order Tracking"
      intro="Enter your order number and email below to check the status of your delivery, or look out for our text update the evening before."
      currentHref="/order-tracking"
    >
      <Section>
        <form
          onSubmit={onSubmit}
          className="not-prose bg-white p-6 md:p-8 border border-outline-variant/40 space-y-5"
        >
          <div>
            <label htmlFor="order-number" className="font-body-md text-sm font-medium text-on-surface block mb-2">
              Order Number <span className="text-brand-terracotta">*</span>
            </label>
            <input
              id="order-number"
              type="text"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              placeholder="e.g. HG-12345"
              required
              className="w-full min-h-[52px] px-4 py-3 border border-outline-variant bg-white font-body-md text-base text-on-surface focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-colors"
            />
            <p className="font-body-md text-xs text-on-surface-variant mt-1.5">
              Begins with HG- and is shown on your order confirmation email.
            </p>
          </div>
          <div>
            <label htmlFor="email" className="font-body-md text-sm font-medium text-on-surface block mb-2">
              Email Address <span className="text-brand-terracotta">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full min-h-[52px] px-4 py-3 border border-outline-variant bg-white font-body-md text-base text-on-surface focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full min-h-[52px] bg-brand-sage text-white font-button text-button uppercase hover:bg-brand-terracotta transition-colors"
          >
            Track My Order
          </button>
          {submitted && (
            <div className="p-4 bg-brand-sage/10 border border-brand-sage/30 text-brand-sage font-body-md text-sm">
              Thanks — we've sent the latest status of order{' '}
              <strong>{orderNumber.toUpperCase()}</strong> to <strong>{email}</strong>.
              You should see it within a few minutes.
            </div>
          )}
        </form>
      </Section>

      <Section title="The Four Stages of Your Order">
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STAGES.map((stage, i) => (
            <div key={stage.title} className="p-5 bg-white border border-outline-variant/40">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-brand-sage text-white flex items-center justify-center font-body-md text-sm font-bold">
                  {i + 1}
                </span>
                <span
                  className="material-symbols-outlined text-brand-sage text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden="true"
                >
                  {stage.icon}
                </span>
              </div>
              <p className="font-h3 text-lg text-brand-sage mb-1 leading-snug">{stage.title}</p>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {stage.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CalloutCard icon="forum" title="Can't find your order number?">
        Search your inbox for "Heritage Garden order confirmation" or call our team and
        we'll look it up using your name and postcode.
      </CalloutCard>
    </InfoPageLayout>
  );
}
