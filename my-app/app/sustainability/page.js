import InfoPageLayout, { Section, CalloutCard, ABOUT_NAV } from '@/components/InfoPageLayout';

const COMMITMENTS = [
  {
    icon: 'forest',
    title: 'FSC-Certified Timber, Always',
    text: '100% of the teak, eucalyptus, and pine in our range is FSC-certified from plantation forests. We do not — and never have — sourced from old-growth or wild-harvested supplies.',
  },
  {
    icon: 'recycling',
    title: 'Recycled & Recyclable Packaging',
    text: 'Every box is at least 80% recycled cardboard, with biodegradable corner protection. No plastic film, no polystyrene chips. Flatten and recycle kerbside.',
  },
  {
    icon: 'build',
    title: 'Repair, Don\'t Replace',
    text: 'We sell replacement slats, fixings, and upholstery covers for every piece in our range — for as long as we keep making it, and at least 10 years afterwards.',
  },
  {
    icon: 'co2',
    title: 'Carbon-Neutral Delivery',
    text: 'Our UK delivery fleet is 100% offset through a verified UK woodland scheme. We are working towards a fully electric fleet by 2030.',
  },
  {
    icon: 'public',
    title: 'Made Closer to Home',
    text: '42% of our range is now manufactured in the UK or EU. We are committed to lifting that to 60% by 2027 without raising prices.',
  },
  {
    icon: 'volunteer_activism',
    title: '1% for the Garden',
    text: 'We donate 1% of online revenue to the National Garden Scheme, supporting community gardens and horticultural charities across the UK.',
  },
];

const NUMBERS = [
  { value: '100%', label: 'FSC-certified timber' },
  { value: '0', label: 'plastic in our packaging' },
  { value: '92%', label: 'of products available with replacement parts' },
  { value: '12yrs', label: 'average product lifespan in customer use' },
];

export const metadata = {
  title: 'Sustainability | Heritage Garden',
  description: 'Our commitments to forest stewardship, recycled packaging, repair-not-replace, carbon-neutral delivery, and 1% for community gardens.',
};

export default function SustainabilityPage() {
  return (
    <InfoPageLayout
      label="Built to Last"
      title="Sustainability"
      intro="The most sustainable piece of furniture is the one you don't replace. Everything we do — from how we source timber to how we ship — is built around that single idea."
      currentHref="/sustainability"
      nav={ABOUT_NAV}
      navTitle="About Heritage"
      breadcrumbLabel="About"
      breadcrumbHref="/our-story"
    >
      <Section title="The headline numbers">
        <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4">
          {NUMBERS.map((n) => (
            <div key={n.label} className="p-5 bg-brand-sage text-white text-center">
              <div className="font-h1 text-3xl md:text-4xl mb-1">{n.value}</div>
              <p className="font-body-md text-xs text-white/80 leading-tight">{n.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Six commitments we hold ourselves to">
        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4">
          {COMMITMENTS.map((c) => (
            <div key={c.title} className="p-5 bg-white border border-outline-variant/40">
              <span
                className="material-symbols-outlined text-brand-sage text-3xl mb-3 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                {c.icon}
              </span>
              <p className="font-h3 text-lg text-brand-sage mb-2 leading-snug">{c.title}</p>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What we don't do">
        <p>
          We're sceptical of greenwashing — including our own. Here's what we've consciously
          chosen not to claim.
        </p>
        <ul className="not-prose space-y-3 mt-2">
          {[
            'We are not "carbon neutral" as a business — only our delivery fleet is offset, and we\'re honest about that.',
            'We do not claim our products are "100% recyclable" — many are mixed-material assemblies. They are, however, fully repairable.',
            'We do not run end-of-season "blowout" sales that encourage replacement before things wear out.',
            'We do not use the word "sustainable" without something specific behind it.',
          ].map((line) => (
            <li key={line} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-brand-terracotta text-base mt-1 shrink-0">close</span>
              <span className="text-on-surface">{line}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Working towards B Corp">
        <p>
          We submitted our B Corp Impact Assessment in late 2025 and expect certification
          in the second half of 2026. The assessment process has already pushed us to
          tighten our supplier audit policy and improve parental leave for our team —
          changes we'll be writing about in detail when certification lands.
        </p>
      </Section>

      <CalloutCard icon="description" title="Read the full Impact Report">
        Our annual Impact Report sets out the numbers — emissions, repairs sent out,
        donations made — in full. Email <a href="mailto:impact@heritagegarden.co.uk" className="text-brand-sage underline hover:text-brand-terracotta">impact@heritagegarden.co.uk</a> for a copy.
      </CalloutCard>
    </InfoPageLayout>
  );
}
