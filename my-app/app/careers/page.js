import InfoPageLayout, { Section, CalloutCard, ABOUT_NAV } from '@/components/InfoPageLayout';

const ROLES = [
  {
    title: 'Senior Furniture Designer',
    location: 'Cotswolds Studio · Full-time',
    salary: '£48,000 – £58,000',
    blurb: 'Lead the design of new collections from sketch to production. Five years\' product or furniture design experience required.',
  },
  {
    title: 'Customer Service Advisor',
    location: 'Cheltenham · Full-time',
    salary: '£28,000 – £32,000',
    blurb: 'The voice on the end of our 0800 line. Patience, product curiosity, and a proper command of English required.',
  },
  {
    title: 'Workshop Apprentice',
    location: 'Cotswolds Studio · 2-year apprenticeship',
    salary: '£22,000 starting',
    blurb: 'Learn timber joinery, prototyping, and finishing under our senior maker. No experience needed — we\'ll teach you everything.',
  },
  {
    title: 'Logistics Coordinator',
    location: 'Cheltenham · Full-time',
    salary: '£32,000 – £36,000',
    blurb: 'Plan and route our UK delivery fleet. Experience with route-planning software and a calm head essential.',
  },
];

const PERKS = [
  { icon: 'beach_access', title: '28 days holiday + bank holidays', text: 'Plus your birthday off, and the working week between Christmas and New Year.' },
  { icon: 'savings', title: '8% employer pension', text: 'Auto-enrolled from day one. We pay 8%, you pay 3% (or more if you like).' },
  { icon: 'spa', title: 'Enhanced parental leave', text: '6 months full pay for the primary carer, 6 weeks full pay for the secondary carer.' },
  { icon: 'directions_bike', title: 'Cycle-to-work scheme', text: 'Save up to 42% on a new bike, plus secure parking and showers at the studio.' },
  { icon: 'sell', title: '40% staff discount', text: 'On everything we make. Family discount of 25% for partners and parents.' },
  { icon: 'school', title: '£1,000 annual learning budget', text: 'For courses, books, conferences — anything that makes you better at what you do.' },
];

export const metadata = {
  title: 'Careers | Heritage Garden',
  description: 'Open roles, our culture, and what it\'s like to work at the Cotswolds studio.',
};

export default function CareersPage() {
  return (
    <InfoPageLayout
      label="Join the Team"
      title="Careers at Heritage Garden"
      intro="A small, independent team building the kind of company we'd want to work at. Real autonomy, no quarterly targets, no open-plan torture chambers."
      currentHref="/careers"
      nav={ABOUT_NAV}
      navTitle="About Heritage"
      breadcrumbLabel="About"
      breadcrumbHref="/our-story"
    >
      <Section title="Open roles">
        <div className="not-prose space-y-4">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="p-5 md:p-6 bg-white border border-outline-variant/40 hover:border-brand-sage transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-h3 text-xl text-brand-sage leading-snug mb-1">{role.title}</p>
                  <p className="font-body-md text-sm text-on-surface-variant mb-2">
                    {role.location} · {role.salary}
                  </p>
                  <p className="font-body-md text-sm text-on-surface leading-relaxed max-w-2xl">
                    {role.blurb}
                  </p>
                </div>
                <a
                  href={`mailto:careers@heritagegarden.co.uk?subject=${encodeURIComponent('Application: ' + role.title)}`}
                  className="shrink-0 inline-flex items-center justify-center min-h-[44px] px-5 bg-brand-sage text-white font-button text-button uppercase text-sm hover:bg-brand-terracotta transition-colors"
                >
                  Apply →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What it's like to work here">
        <p>
          We're a team of 34, based across the Cotswolds Studio (designers, makers,
          photographers) and our Cheltenham office (customer service, logistics, finance,
          marketing). We are not remote-first — most roles are in-person at one of those
          two sites — but we are flexible-first, with no fixed start times and a culture
          of grown-ups managing their own diaries.
        </p>
        <p>
          We hire slowly, value tenure, and try very hard to be the best employer most
          of our team have ever had. The proof, we think, is that nobody has left us in
          the last 18 months.
        </p>
      </Section>

      <Section title="Benefits">
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PERKS.map((p) => (
            <div key={p.title} className="flex items-start gap-4 p-5 bg-white border border-outline-variant/40">
              <span
                className="material-symbols-outlined text-brand-sage text-3xl shrink-0"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                {p.icon}
              </span>
              <div>
                <p className="font-h3 text-base text-brand-sage mb-1 leading-snug">{p.title}</p>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our hiring process">
        <ol className="not-prose space-y-4">
          {[
            ['Application', 'Email a CV and a short note on why this role to careers@heritagegarden.co.uk. No covering letter templates please.'],
            ['Conversation', 'A 30-minute call with the hiring manager. Mostly listening on our end.'],
            ['Practical', 'A short, paid task or workshop visit, depending on the role. Designed to take no more than 2–3 hours.'],
            ['Final interview', 'In person at the studio, with the team you\'d be working with. We\'ll cover travel.'],
            ['Offer', 'Within 48 hours of the final interview, with a salary range agreed up front — no negotiation tactics.'],
          ].map(([title, text], i) => (
            <li key={title} className="flex gap-4">
              <span className="w-9 h-9 shrink-0 rounded-full bg-brand-sage text-white flex items-center justify-center font-body-md text-base font-bold">
                {i + 1}
              </span>
              <div>
                <p className="font-h3 text-lg text-brand-sage mb-1 leading-snug">{title}</p>
                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CalloutCard icon="diversity_3" title="Our hiring commitment">
        We are an equal-opportunity employer. We anonymise CVs at first review, publish
        salary bands openly, and report on our gender and ethnicity pay gaps annually
        even though we're not legally required to.
      </CalloutCard>
    </InfoPageLayout>
  );
}
