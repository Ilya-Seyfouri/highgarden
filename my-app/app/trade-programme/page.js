'use client';
import { useState } from 'react';
import InfoPageLayout, { Section, CalloutCard, ABOUT_NAV } from '@/components/InfoPageLayout';

const TIERS = [
  {
    name: 'Trade',
    discount: '15%',
    minSpend: 'No minimum',
    blurb: 'For interior designers, garden designers, and architects working on private residential projects.',
  },
  {
    name: 'Trade Plus',
    discount: '22%',
    minSpend: '£12,000 / year',
    blurb: 'For established practices with a regular project pipeline. Includes a dedicated account manager.',
  },
  {
    name: 'Hospitality',
    discount: '25%',
    minSpend: '£25,000 / year',
    blurb: 'For hotels, restaurants, members\' clubs, and luxury holiday lets. Bespoke contract terms available.',
  },
];

const BENEFITS = [
  { icon: 'local_shipping', text: 'Free delivery on every order, regardless of value.' },
  { icon: 'engineering', text: 'Dedicated account manager (Trade Plus and Hospitality tiers).' },
  { icon: 'image', text: 'Hi-resolution imagery and CAD files for design presentations.' },
  { icon: 'palette', text: 'Material samples sent free of charge within 48 hours.' },
  { icon: 'edit', text: 'Bespoke fabric, finish, and dimension options on most ranges.' },
  { icon: 'description', text: 'Net-30 payment terms for established trade accounts.' },
];

function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    website: '',
    tier: 'Trade',
    notes: '',
  });

  const update = (field) => (e) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="not-prose p-8 bg-brand-sage text-white text-center">
        <span
          className="material-symbols-outlined text-5xl block mb-4"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden="true"
        >
          mark_email_read
        </span>
        <p className="font-h2 text-2xl mb-3">Application received</p>
        <p className="font-body-md text-base text-white/80 max-w-md mx-auto leading-relaxed">
          Thanks {formData.name.split(' ')[0] || 'for applying'}. We'll review your application
          and come back to you within 2 working days at <strong>{formData.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="not-prose bg-white p-6 md:p-8 border border-outline-variant/40 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your Name" required value={formData.name} onChange={update('name')} autoComplete="name" />
        <Field label="Job Title" required value={formData.role} onChange={update('role')} autoComplete="organization-title" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Company / Practice" required value={formData.company} onChange={update('company')} autoComplete="organization" />
        <Field label="Website" type="url" placeholder="https://" value={formData.website} onChange={update('website')} autoComplete="url" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email Address" type="email" required value={formData.email} onChange={update('email')} autoComplete="email" />
        <Field label="Phone Number" type="tel" required value={formData.phone} onChange={update('phone')} autoComplete="tel" />
      </div>
      <div>
        <label htmlFor="tier" className="font-body-md text-sm font-medium text-on-surface block mb-2">
          Tier you&apos;re applying for <span className="text-brand-terracotta">*</span>
        </label>
        <select
          id="tier"
          value={formData.tier}
          onChange={update('tier')}
          className="w-full min-h-[52px] px-4 py-3 border border-outline-variant bg-white font-body-md text-base text-on-surface focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-colors"
        >
          {TIERS.map((t) => (
            <option key={t.name} value={t.name}>{t.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="notes" className="font-body-md text-sm font-medium text-on-surface block mb-2">
          Tell us a bit about your work
        </label>
        <textarea
          id="notes"
          rows={4}
          value={formData.notes}
          onChange={update('notes')}
          placeholder="Recent projects, the kind of clients you work with, what drew you to Heritage Garden…"
          className="w-full px-4 py-3 border border-outline-variant bg-white font-body-md text-base text-on-surface focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-colors resize-y"
        />
      </div>
      <button
        type="submit"
        className="w-full min-h-[52px] bg-brand-sage text-white font-button text-button uppercase hover:bg-brand-terracotta transition-colors"
      >
        Submit Application
      </button>
      <p className="font-body-md text-xs text-on-surface-variant text-center">
        We typically respond within 2 working days. Trade applications are reviewed by a real person.
      </p>
    </form>
  );
}

function Field({ label, required, ...rest }) {
  return (
    <div>
      <label className="font-body-md text-sm font-medium text-on-surface block mb-2">
        {label}
        {required && <span className="text-brand-terracotta ml-1">*</span>}
      </label>
      <input
        required={required}
        className="w-full min-h-[52px] px-4 py-3 border border-outline-variant bg-white font-body-md text-base text-on-surface focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-colors"
        {...rest}
      />
    </div>
  );
}

export default function TradePage() {
  return (
    <InfoPageLayout
      label="For Designers, Architects & Hospitality"
      title="Trade Programme"
      intro="A discount programme for professionals specifying Heritage Garden in their projects — with dedicated support, samples, and bespoke options not available on the public site."
      currentHref="/trade-programme"
      nav={ABOUT_NAV}
      navTitle="About Heritage"
      breadcrumbLabel="About"
      breadcrumbHref="/our-story"
    >
      <Section title="Three tiers, one programme">
        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4">
          {TIERS.map((tier) => (
            <div key={tier.name} className="p-6 bg-white border border-outline-variant/40 flex flex-col">
              <p className="font-button text-button uppercase tracking-widest text-brand-terracotta mb-2">
                {tier.name}
              </p>
              <p className="font-h1 text-4xl text-brand-sage mb-1">{tier.discount}</p>
              <p className="font-body-md text-sm text-on-surface-variant mb-4">
                Off list price · {tier.minSpend}
              </p>
              <p className="font-body-md text-sm text-on-surface leading-relaxed">
                {tier.blurb}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What's included">
        <ul className="not-prose space-y-3">
          {BENEFITS.map((b) => (
            <li key={b.text} className="flex items-start gap-3">
              <span
                className="material-symbols-outlined text-brand-sage text-xl shrink-0"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                {b.icon}
              </span>
              <span className="text-on-surface">{b.text}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Apply">
        <p>
          Fill in the form below and we&apos;ll be in touch within 2 working days. We typically
          ask for a short conversation to understand your work before approving an account.
        </p>
        <ApplicationForm />
      </Section>

      <CalloutCard icon="contact_phone" title="Already a trade account holder?">
        Email <a href="mailto:trade@heritagegarden.co.uk" className="text-brand-sage underline hover:text-brand-terracotta">trade@heritagegarden.co.uk</a> or
        call your account manager directly. New project quotes are typically returned within 24 hours.
      </CalloutCard>
    </InfoPageLayout>
  );
}
