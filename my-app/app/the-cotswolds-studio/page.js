import InfoPageLayout, { Section, CalloutCard, ABOUT_NAV } from '@/components/InfoPageLayout';

const SPACES = [
  {
    icon: 'design_services',
    title: 'The Design Office',
    text: 'A first-floor studio overlooking the original barn, where every product begins life on paper before any sample is commissioned.',
  },
  {
    icon: 'inventory_2',
    title: 'The Materials Library',
    text: 'Every timber, weave, fabric, and finish we use — physically present, ageing in real-world conditions for years before approval.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'The Workshop',
    text: 'Where prototypes are built, joined, and stress-tested by hand. If a piece can\'t survive our workshop, it doesn\'t reach our customers.',
  },
  {
    icon: 'photo_camera',
    title: 'The Photography Garden',
    text: 'A walled garden adjoining the studio, used for every product shot you see on the site. No CGI, no rentals — just real Cotswold light.',
  },
];

export const metadata = {
  title: 'The Cotswolds Studio | Heritage Garden',
  description: 'A purpose-built design and photography studio outside Bourton-on-the-Water — where every Heritage Garden piece begins.',
};

export default function StudioPage() {
  return (
    <InfoPageLayout
      label="Where We Work"
      title="The Cotswolds Studio"
      intro="Every Heritage Garden product is conceived, prototyped, tested, and photographed in the same place — a converted barn and walled garden in Gloucestershire."
      currentHref="/the-cotswolds-studio"
      nav={ABOUT_NAV}
      navTitle="About Heritage"
      breadcrumbLabel="About"
      breadcrumbHref="/our-story"
    >
      <Section title="A working studio, not a showroom">
        <p>
          The studio sits on the edge of Bourton-on-the-Water, in a converted dairy barn
          that's been part of the village for over 200 years. We expanded into a purpose-built
          extension in 2022 — but the original barn is still where the messy, important work
          happens: prototyping, sampling, joinery testing, and the kind of long arguments
          about whether a particular brass screw is the right brass screw.
        </p>
        <p>
          We don't do sales here, and we don't have a public showroom. The studio exists so
          our designers and our makers can be in the same room, looking at the same piece of
          wood, having the same conversation. If you'd like to visit by appointment — say,
          to see a large gazebo before ordering — please get in touch.
        </p>
      </Section>

      <Section title="What's inside">
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SPACES.map((s) => (
            <div key={s.title} className="p-5 bg-white border border-outline-variant/40">
              <span
                className="material-symbols-outlined text-brand-sage text-3xl mb-3 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                {s.icon}
              </span>
              <p className="font-h3 text-lg text-brand-sage mb-1 leading-snug">{s.title}</p>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How a piece comes to life">
        <p>
          A new Heritage Garden product takes between 18 and 36 months from sketch to
          shelf. We don't believe in seasonal "drops" — every piece has to earn its place
          alongside what we already make.
        </p>
        <ol className="not-prose space-y-4 mt-2">
          {[
            ['Concept', 'A specific problem we keep hearing about — "no good 6-seater under £1,500", say — turns into a brief.'],
            ['Material study', 'We sample timbers, finishes, and fixings in the materials library. Anything new sits outside through a winter before approval.'],
            ['Prototype', 'A first piece is built in the workshop. We sit on it. We rain on it. We over-load it. We break it on purpose to find the weak point.'],
            ['Refinement', 'A second prototype incorporates what we learned. Often a third. Occasionally a fourth.'],
            ['Production sample', 'Our manufacturing partners build a pre-production sample. We test it again, in the studio, before approving the run.'],
            ['Photography & launch', 'The product is shot in the walled garden, in real light, on real paving — and then it joins the range.'],
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

      <CalloutCard icon="map" title="Visiting by appointment">
        We're not open to the public, but we're happy to show large items in person.
        Email <a href="mailto:studio@heritagegarden.co.uk" className="text-brand-sage underline hover:text-brand-terracotta">studio@heritagegarden.co.uk</a> with the
        product you'd like to see and a couple of dates that suit you.
      </CalloutCard>
    </InfoPageLayout>
  );
}
