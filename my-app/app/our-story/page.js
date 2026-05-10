import InfoPageLayout, { Section, CalloutCard, ABOUT_NAV } from '@/components/InfoPageLayout';

const TIMELINE = [
  {
    year: '2009',
    title: 'A workshop in a barn',
    text: 'Founder Eleanor Marsh begins restoring teak garden furniture in a converted barn outside Bourton-on-the-Water — a side project that quickly outgrows the weekends.',
  },
  {
    year: '2012',
    title: 'The first Heritage collection',
    text: 'After three years of restoration work, Eleanor commissions her own range — solid teak, traditional joinery, designed to be repaired rather than replaced.',
  },
  {
    year: '2015',
    title: 'A real shop, on a real high street',
    text: 'Heritage Garden opens its first showroom on Bourton-on-the-Water\'s main parade. The studio in the barn becomes the design office.',
  },
  {
    year: '2018',
    title: 'Online, nationwide',
    text: 'After years of "do you ship?" emails, Heritage Garden launches its e-commerce site, with the same UK-wide named-driver delivery service it uses today.',
  },
  {
    year: '2022',
    title: 'The Cotswolds Studio',
    text: 'A purpose-built design and photography studio opens beside the original barn — bringing all our materials, sampling, and product testing under one roof.',
  },
  {
    year: 'Today',
    title: '40,000 customers and counting',
    text: 'Still independent. Still based in the Cotswolds. Still designing furniture we expect to outlive us.',
  },
];

export const metadata = {
  title: 'Our Story | Heritage Garden',
  description: 'How a Cotswolds restoration project became a British outdoor furniture brand built on the principle of buying once.',
};

export default function OurStoryPage() {
  return (
    <InfoPageLayout
      label="About Heritage"
      title="Our Story"
      intro="Heritage Garden began with a simple frustration: that good outdoor furniture had been replaced by disposable outdoor furniture. This is how we set out to change that."
      currentHref="/our-story"
      nav={ABOUT_NAV}
      navTitle="About Heritage"
      breadcrumbLabel="About"
      breadcrumbHref="/our-story"
    >
      <Section title="It started with a broken bench">
        <p>
          In the summer of 2008, Eleanor Marsh inherited a teak garden bench from her
          grandmother. It was forty years old, weathered to a soft silver, and one of the
          rear slats had finally given way. She took it to a local restorer, expecting to
          pay more than the bench was worth — and was told it would be cheaper to repair
          than to buy a new one of comparable quality.
        </p>
        <p>
          That conversation lit the fuse. Within a year, Eleanor had left her job in
          publishing, taught herself the basics of furniture restoration, and was renting
          a barn outside Bourton-on-the-Water to take on commissions of her own.
        </p>
      </Section>

      <Section title="What we believe">
        <p>
          We believe garden furniture should be a one-time purchase. That natural
          materials, properly sourced and properly joined, will outlive the trends — and
          their owners. That repair should always be cheaper than replacement. And that
          a UK customer should be able to ring a UK number and speak to a UK person who
          knows what they're talking about.
        </p>
        <p>
          These aren't marketing lines for us. They're the operating principles we measure
          every product, supplier and shipping decision against.
        </p>
      </Section>

      <Section title="The journey so far">
        <ol className="not-prose space-y-6">
          {TIMELINE.map((item) => (
            <li key={item.year} className="grid grid-cols-[80px_1fr] gap-5 md:gap-8">
              <div className="font-h2 text-2xl md:text-3xl text-brand-terracotta leading-none pt-1">
                {item.year}
              </div>
              <div className="border-l-2 border-brand-sage/30 pl-5 md:pl-7 pb-1">
                <p className="font-h3 text-lg md:text-xl text-brand-sage mb-2 leading-snug">
                  {item.title}
                </p>
                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <CalloutCard icon="favorite" title="Independent and intend to stay that way">
        Heritage Garden is privately owned by its founder. We've turned down two
        acquisition offers — and we plan to keep turning them down.
      </CalloutCard>
    </InfoPageLayout>
  );
}
