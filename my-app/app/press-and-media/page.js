import InfoPageLayout, { Section, CalloutCard, ABOUT_NAV } from '@/components/InfoPageLayout';

const COVERAGE = [
  {
    publication: 'House & Garden',
    date: 'April 2026',
    title: 'The British brands quietly redefining outdoor living',
    excerpt: '"…Heritage Garden\'s Aspen dining set is the kind of considered, properly-made piece you\'d expect to find in a holiday cottage in the Cotswolds — because, in a sense, that\'s exactly where it comes from."',
  },
  {
    publication: 'The Guardian Weekend',
    date: 'February 2026',
    title: 'Furniture you can hand down: the rise of buy-once garden brands',
    excerpt: '"Eleanor Marsh\'s Heritage Garden has built a quiet reputation on a single, unfashionable principle: making things that don\'t need replacing."',
  },
  {
    publication: 'Country Living',
    date: 'November 2025',
    title: '50 British design heroes for 2026',
    excerpt: '"A Cotswolds-based independent that has resisted private equity twice over and uses the words \'sustainable\' and \'heritage\' with admirable precision."',
  },
  {
    publication: 'Gardens Illustrated',
    date: 'August 2025',
    title: 'In conversation: Eleanor Marsh',
    excerpt: '"Most outdoor furniture is designed to be replaced in seven years. We design ours to be inherited."',
  },
];

const RELEASES = [
  { date: '12 March 2026', title: 'Heritage Garden submits B Corp Impact Assessment' },
  { date: '08 January 2026', title: 'Spring/Summer 2026 collection unveiled at the Cotswolds Studio' },
  { date: '21 October 2025', title: 'Heritage Garden expands repair-parts programme to all current ranges' },
  { date: '04 June 2025', title: 'Heritage Garden donates £42,000 to the National Garden Scheme' },
];

export const metadata = {
  title: 'Press & Media | Heritage Garden',
  description: 'Press releases, media coverage, and journalist contacts for Heritage Garden.',
};

export default function PressPage() {
  return (
    <InfoPageLayout
      label="For Journalists & Editors"
      title="Press & Media"
      intro="Press releases, recent coverage, our brand assets, and a direct line to our press office. We respond to all genuine media enquiries within 24 hours."
      currentHref="/press-and-media"
      nav={ABOUT_NAV}
      navTitle="About Heritage"
      breadcrumbLabel="About"
      breadcrumbHref="/our-story"
    >
      <Section title="Press contact">
        <div className="not-prose bg-white p-6 border border-outline-variant/40">
          <p className="font-h3 text-xl text-brand-sage mb-1">Caroline Hartley</p>
          <p className="font-body-md text-sm text-on-surface-variant mb-4">
            Head of Communications, Heritage Garden
          </p>
          <div className="space-y-2 font-body-md text-base">
            <p>
              <a
                href="mailto:press@heritagegarden.co.uk"
                className="text-brand-sage hover:text-brand-terracotta underline"
              >
                press@heritagegarden.co.uk
              </a>
            </p>
            <p>
              <a
                href="tel:01451123456"
                className="text-brand-sage hover:text-brand-terracotta"
              >
                01451 123 456
              </a>
              <span className="text-on-surface-variant text-sm ml-2">(direct line)</span>
            </p>
          </div>
        </div>
      </Section>

      <Section title="Recent coverage">
        <ul className="not-prose space-y-5">
          {COVERAGE.map((c) => (
            <li key={c.title} className="border-l-2 border-brand-sage/30 pl-5">
              <div className="flex items-baseline gap-3 flex-wrap mb-1">
                <span className="font-button text-button uppercase tracking-widest text-brand-terracotta">
                  {c.publication}
                </span>
                <span className="font-body-md text-xs text-on-surface-variant">{c.date}</span>
              </div>
              <p className="font-h3 text-lg text-brand-sage mb-2 leading-snug">{c.title}</p>
              <p className="font-body-md text-sm text-on-surface-variant italic leading-relaxed">
                {c.excerpt}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Press releases">
        <ul className="not-prose divide-y divide-outline-variant/40 border-y border-outline-variant/40">
          {RELEASES.map((r) => (
            <li key={r.title} className="flex items-baseline justify-between gap-4 py-4">
              <div>
                <p className="font-body-md text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                  {r.date}
                </p>
                <p className="font-h3 text-base text-brand-sage leading-snug">{r.title}</p>
              </div>
              <a
                href="mailto:press@heritagegarden.co.uk"
                className="font-button text-button uppercase tracking-widest text-brand-sage hover:text-brand-terracotta transition-colors text-sm shrink-0"
              >
                Request →
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Brand assets & imagery">
        <p>
          Hi-resolution product photography, founder portraits, studio shots, and our
          brand logo (in EPS, PNG, and SVG) are available on request. Please specify
          intended usage when you get in touch.
        </p>
        <div className="not-prose mt-4">
          <a
            href="mailto:press@heritagegarden.co.uk?subject=Press%20kit%20request"
            className="inline-flex items-center gap-2 min-h-[52px] px-6 bg-brand-sage text-white font-button text-button uppercase hover:bg-brand-terracotta transition-colors"
          >
            <span className="material-symbols-outlined text-base">download</span>
            Request the Press Kit
          </a>
        </div>
      </Section>

      <CalloutCard icon="schedule" title="Response times">
        We aim to respond to every press enquiry within 24 hours, Monday to Friday. For
        same-day deadlines, please call Caroline directly.
      </CalloutCard>
    </InfoPageLayout>
  );
}
