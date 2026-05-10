import InfoPageLayout, { Section, CalloutCard } from '@/components/InfoPageLayout';

const MATERIALS = [
  {
    icon: 'forest',
    name: 'Teak & Hardwood',
    intro: 'The heritage choice. Naturally rot-resistant, beautifully grained, and built to last decades — but it changes character as it ages, and that\'s the point.',
    do: [
      'Wipe down with warm soapy water and a soft cloth at the start and end of each season.',
      'Apply teak oil once a year (spring) if you want to maintain the warm honey colour.',
      'Allow it to weather naturally to a soft silver-grey if you prefer the lived-in look.',
    ],
    dont: [
      'Use a pressure washer — it lifts the grain and damages the surface.',
      'Cover whilst still wet — trapped moisture causes mildew.',
      'Use bleach or harsh chemical cleaners.',
    ],
  },
  {
    icon: 'cabin',
    name: 'Rattan & Synthetic Weave',
    intro: 'Our PE rattan is UV-stabilised, frost-proof, and engineered for British weather. It\'s very low maintenance — but a little care goes a long way.',
    do: [
      'Hose down monthly during the summer to remove pollen and dust.',
      'Use a soft brush in the weave occasionally to dislodge stuck debris.',
      'Cover or store cushions over winter to extend their life.',
    ],
    dont: [
      'Drag it across paving — lift to move to avoid scuffing the feet.',
      'Use abrasive scourers on the weave.',
      'Leave loose weave ends untreated — call us and we\'ll send you the right adhesive.',
    ],
  },
  {
    icon: 'square',
    name: 'Powder-Coated Metal',
    intro: 'Aluminium and steel frames are powder-coated to withstand rain, frost, and seaside salt air. They look after themselves with the gentlest of routines.',
    do: [
      'Wipe with a damp cloth seasonally to remove dirt and water marks.',
      'Touch up small chips with the colour-matched paint pen we can supply.',
      'Lubricate folding mechanisms once a year with a light silicone spray.',
    ],
    dont: [
      'Use wire wool or abrasive pads — they\'ll mark the powder coat.',
      'Leave water pooling on flat surfaces — empty after heavy rain.',
      'Store stacked when wet — air-dry first.',
    ],
  },
  {
    icon: 'dry_cleaning',
    name: 'Outdoor Fabric & Cushions',
    intro: 'Our solution-dyed fabrics are designed to live outdoors. They shrug off light rain and resist fading — but they perform best with a little seasonal care.',
    do: [
      'Brush off loose dirt before it sets in.',
      'Spot-clean spills with mild soap and warm water.',
      'Machine wash covers at 30°C and air-dry — never tumble dry.',
    ],
    dont: [
      'Iron the fabric — heat damages the protective finish.',
      'Use bleach unless dealing with mildew, and even then, dilute heavily.',
      'Store damp cushions in a covered box — they\'ll mildew.',
    ],
  },
  {
    icon: 'cookie',
    name: 'Terracotta & Stone',
    intro: 'Hand-thrown and high-fired for genuine frost resistance. Each piece is unique and ages beautifully with use.',
    do: [
      'Lift onto pot feet to allow drainage and air circulation underneath.',
      'Bring inside or wrap in fleece if a hard frost is forecast on saturated pots.',
      'Use a stiff brush and water to remove green algae from glazed surfaces.',
    ],
    dont: [
      'Plant in waterlogged compost — saturated terracotta cracks more easily in frost.',
      'Use de-icing salts nearby — they leach into the clay.',
      'Stack pots inside one another when storing — they\'ll bind.',
    ],
  },
];

export const metadata = {
  title: 'Furniture Care Guide | Heritage Garden',
  description: 'How to care for teak, rattan, metal, fabric, and terracotta to keep your garden furniture looking its best.',
};

export default function FurnitureCarePage() {
  return (
    <InfoPageLayout
      label="Care & Maintenance"
      title="Furniture Care Guide"
      intro="Garden furniture lives a hard life — but with a little seasonal attention, ours will look beautiful for decades. Here's exactly what to do, and what to avoid, by material."
      currentHref="/furniture-care-guide"
    >
      {MATERIALS.map((m) => (
        <Section key={m.name} title={m.name}>
          <div className="not-prose flex items-start gap-4 mb-5">
            <span
              className="material-symbols-outlined text-brand-sage text-3xl shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden="true"
            >
              {m.icon}
            </span>
            <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
              {m.intro}
            </p>
          </div>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-white border border-outline-variant/40">
              <p className="font-button text-button uppercase tracking-widest text-brand-sage mb-3">Do</p>
              <ul className="space-y-2.5">
                {m.do.map((line) => (
                  <li key={line} className="flex items-start gap-3 font-body-md text-sm">
                    <span className="material-symbols-outlined text-brand-sage text-base mt-0.5 shrink-0">check</span>
                    <span className="text-on-surface">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 bg-white border border-outline-variant/40">
              <p className="font-button text-button uppercase tracking-widest text-brand-terracotta mb-3">Don&apos;t</p>
              <ul className="space-y-2.5">
                {m.dont.map((line) => (
                  <li key={line} className="flex items-start gap-3 font-body-md text-sm">
                    <span className="material-symbols-outlined text-brand-terracotta text-base mt-0.5 shrink-0">close</span>
                    <span className="text-on-surface">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <CalloutCard icon="winter" title="Winter storage in 60 seconds">
        If you have the space, bring cushions and umbrellas indoors. Frames are happy
        outdoors year-round — just make sure they're dry before any cover goes on, and lift
        them off the ground if you can.
      </CalloutCard>
    </InfoPageLayout>
  );
}
