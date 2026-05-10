const IMG = {
  dining:    'https://lh3.googleusercontent.com/aida-public/AB6AXuBr9MDuRemSbnqhKazqggYPqsOcji5ELKhVZr5frTuVmDPrssDXfwygMn8jSfZmRFEhVMfB8P6Lf6zi2QPCM56uY_nYfJyVM1yuy410C1sEN1Sa5l_2B8knKtmvL6NG_iP-sJpxFjiE_y-5KrCBNYtAdnMp3AsQ8G_7uTQ-xpYFdRM6h5ypG_rqTo_S440NpZWQrCsOjMpcYYvAky21n4h4j900ZbwF7SQFtpIR7-e9kxQW1afFad8imSfOF_5cLw77rotWA3yirWI',
  terrace:   'https://lh3.googleusercontent.com/aida-public/AB6AXuC5YvNmC6TY6wVXHZZg6B45BVvANZC1oc3zpMMa8E4H7a-8_vU1bmXW8xC7jyjWB-PlwDbrAcCYC5N_xFQ-kmBs71DIuC5qeo3Px802dx6DUhR5-V5RHJkG6IusXuFaPWWkb6PMQzXHaVbGmRmXE1BAPQaV3S1Pm-9Rrddl_QyqL_y9aU4CGOJQ9oo_lBDxAWMn5JNVzS9_vbfCLXrJW31Xc16HmXrJ7IPgkECZREUQ3DybnFuBXwWHVosASFOxagq7kIDoY-XnO8E',
  umbrella:  'https://lh3.googleusercontent.com/aida-public/AB6AXuBRgQKN_dRlJAVzVi8SCBgkpfZlpm004A4zFstdLye0NNj61iLmoBXQAFgkoxWLuLE3QL-xQjHL32iP3zuIhZP_vcWLnYH9s3dun0S7baaZP0Fj7vEX1k546A5FalBw1Di9PphiDpyAkpvSCs8cvEfpyrAVuDrvO4J0gBaMSWoKL4tCAjQY06sHJ5STTWWFMbshTNBKNZQG7Ewscj4-Wu4kawIXSs_3SlQgTfO_xNmJ2D9xS40Cg2_ccKkvq-31GjRWOj_fuDJUjTM',
  gazebo:    'https://lh3.googleusercontent.com/aida-public/AB6AXuBTO_1CIzLx3Ktj4T8r2Q6FatCfAX5kkX5_3WTaR3QoEdm_GXzDoXQHaG30XhxD-XvAnRMAaZnOsUjzVuzVW1o19KjoMQVmVK4YLNZcN7xia3wkOlaUY6C3xtRvzgRm7htalAnY1dnnUCIfYG_rjNJ8Lv62djbySUfmqOFVpnoszH_3oPOCXaxwWtvWD_h67YRjtyeBwjPKDbOiC7eS-ulJoPWjSJk9_tzqUHujHNpHT67yVA_Z_SnRoL8nNSUzosHj469-JhT9RXo',
  lights:    'https://lh3.googleusercontent.com/aida-public/AB6AXuAi4tH0J6OXz9SgshrPHHaA5lRxM4oLfZauwGGqjGA8UGLTNd_w0H2mDHPAS3CBM6zETAi_6qYLrajnqQy424WpxNXYKCZWnS5hNCQGzA-ozzafTO8_Vq7EDXn5cjFLZ8F7146c8w5y49_cCGF895mdJ7-CuJoTVsKHXPWQM9NrFB5RZog8FGGdxQ_C2pHlJacxComHhoyal1iXDpfO1qbttCNsTcXOwhBRcfQ1C0K4GQcDdME4evBOZL5waDqWS9I4y7Pc8HCSx7Y',
  cosmetics: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCacYqZiVEBbcCpuDzLYx_sQfVK6ISVzkWrOm5EhQqQT8Zniyinhl7kYinMIly93cITqAkb7WXUgBkcLZTXjjA4izycC7fVh4VgjW7dJTsSs5hMvTrO6-dn6jTjDraxEdw8Gw_gpfBwHxMp2ZnymmMAQd3NI-aoFw3-IFZ6gJ33AgcM9iZiTs88FnmYGtawWMuqT1BLnoEOTYwfh5uRKelVU-jhRfUt0WUMkfJ9mCIF4qAZRM-cm5z2uF6QrL2_IHg4x1YnVkXi6I',
};

const deliveryText = 'Standard delivery 3–5 working days. Free on orders over £100. White-glove delivery with room-of-choice placement available on orders over £1,500. All deliveries are made on a named-day service — you will receive a two-hour delivery window by text the evening before.';
const warrantyText = 'Every Heritage Garden product is covered by our comprehensive 5-Year Warranty from the date of purchase, registered free at checkout. This covers manufacturing defects and structural failures under normal domestic use. Simply contact our UK customer service team and we will arrange a repair, replacement, or full refund.';

const allProducts = [
  // ─── Outdoor Furniture ────────────────────────────────────────────────────
  {
    slug: 'aspen-teak-dining-set',
    name: 'Aspen Teak Dining Set',
    variant: '8-seater sustainable teak masterpiece',
    price: '£2,450.00',
    originalPrice: '£2,995.00',
    category: 'Outdoor Furniture',
    categoryHref: '/outdoor-furniture',
    images: [IMG.dining, IMG.terrace, IMG.dining, IMG.terrace],
    sizes: ['6 Seater', '8 Seater', '10 Seater'],
    rating: 4.9, reviewCount: 127,
    badge: { text: 'Best Seller', className: 'bg-brand-sage text-white' },
    inStock: true,
    shortDescription: 'Our flagship dining collection, crafted from Grade-A sustainably sourced teak. The Aspen set combines timeless design with exceptional durability — built to age beautifully through every British season.',
    details: ['Grade-A sustainably sourced teak', 'Seats 8 as standard, available in 6 or 10 seater', 'Natural weathering to silver-grey patina, or maintain with teak oil', 'Brass-capped leg protectors included', 'All fixings in marine-grade stainless steel', 'Folds flat for winter storage'],
    dimensions: 'Table: W220 × D100 × H75cm | Chair: W58 × D62 × H90cm | Weight: 68kg (table)',
  },
  {
    slug: 'hartwood-extending-set',
    name: 'Hartwood Extending Set',
    variant: 'Extends from 6 to 10 seats',
    price: '£1,895.00',
    originalPrice: '£2,495.00',
    clearance: true,
    category: 'Outdoor Furniture',
    categoryHref: '/outdoor-furniture',
    images: [IMG.terrace, IMG.dining, IMG.terrace, IMG.dining],
    sizes: ['6–8 Seater', '8–10 Seater'],
    rating: 4.8, reviewCount: 84,
    inStock: true,
    shortDescription: 'Cleverly engineered butterfly-extension table that grows with your guest list. Pull either end to reveal the hidden leaf in seconds, with no loose parts to store away.',
    details: ['Solid FSC-certified eucalyptus', 'Self-storing butterfly extension leaf', 'Extends from 180cm to 240cm', 'Stainless steel extension mechanism', 'Six chairs included as standard', 'Foldable chairs for easy storage'],
    dimensions: 'Closed: W180 × D95 × H75cm | Open: W240 × D95 × H75cm',
  },
  {
    slug: 'brompton-6-seater',
    name: 'Brompton 6-Seater',
    variant: 'Classic all-weather rattan',
    price: '£1,299.00',
    stockCount: 2,
    category: 'Outdoor Furniture',
    categoryHref: '/outdoor-furniture',
    images: [IMG.dining, IMG.terrace, IMG.dining, IMG.terrace],
    sizes: ['4 Seater', '6 Seater', '8 Seater'],
    rating: 4.7, reviewCount: 203,
    badge: { text: 'Quick Delivery', className: 'bg-white text-on-surface border border-outline-variant/40' },
    inStock: true,
    shortDescription: 'The Brompton brings a relaxed garden aesthetic to al fresco dining. Handwoven PE rattan over a powder-coated aluminium frame means zero maintenance and a lifetime of evenings outside.',
    details: ['Handwoven PE rattan, UV stabilised', 'Powder-coated aluminium frame, rust-free', 'Tempered safety glass table top', 'Seat cushions included in weatherproof fabric', 'Stackable chairs for compact storage', 'Parasol hole with brass cap'],
    dimensions: 'Table: W180 × D90 × H74cm | Chair: W56 × D58 × H86cm',
  },
  {
    slug: 'cotswold-round-bistro',
    name: 'Cotswold Round Bistro',
    variant: 'Intimate 2-seater bistro table',
    price: '£485.00',
    category: 'Outdoor Furniture',
    categoryHref: '/outdoor-furniture',
    images: [IMG.terrace, IMG.dining, IMG.terrace, IMG.dining],
    sizes: ['2 Seater'],
    rating: 4.8, reviewCount: 61,
    inStock: true,
    shortDescription: 'A beautifully considered bistro set for balconies, courtyards and intimate garden corners. Solid teak top with a slender wrought-iron frame — classic British garden style in compact form.',
    details: ['Solid teak slatted table top', 'Wrought iron base, powder-coated black', 'Two matching folding bistro chairs', 'Folds completely flat for storage', 'Diameter 60cm, ideal for small spaces', 'Pre-oiled for immediate use'],
    dimensions: 'Table: Ø60 × H72cm | Chair: W42 × D46 × H84cm',
  },
  {
    slug: 'marlow-4-seater-cafe-set',
    name: 'Marlow 4-Seater Café Set',
    variant: 'Café-inspired garden dining',
    price: '£745.00',
    category: 'Outdoor Furniture',
    categoryHref: '/outdoor-furniture',
    images: [IMG.dining, IMG.terrace, IMG.dining, IMG.terrace],
    sizes: ['4 Seater'],
    rating: 4.6, reviewCount: 45,
    inStock: true,
    shortDescription: 'Parisian café charm meets English garden sensibility. The Marlow features a round table with laser-cut decorative apron and four matching stackable chairs — perfect for a sheltered patio.',
    details: ['Laser-cut powder-coated steel', 'Decorative scroll detail on table apron', 'Four stackable chairs with cushions', 'All-weather powder-coat finish', 'Parasol hole included', 'Assembled on delivery'],
    dimensions: 'Table: Ø80 × H72cm | Chair: W44 × D50 × H88cm',
  },
  {
    slug: 'devon-folding-teak-set',
    name: 'Devon Folding Teak Set',
    variant: 'Space-saving solid teak',
    price: '£895.00',
    category: 'Outdoor Furniture',
    categoryHref: '/outdoor-furniture',
    images: [IMG.terrace, IMG.dining, IMG.terrace, IMG.dining],
    sizes: ['4 Seater', '6 Seater'],
    rating: 4.7, reviewCount: 38,
    badge: { text: 'Limited Stock', className: 'bg-brand-terracotta text-white' },
    inStock: true,
    shortDescription: 'When space is at a premium, the Devon delivers without compromise. The butterfly-fold table and fully folding chairs store in a fraction of the footprint — without sacrificing solid teak quality.',
    details: ['Solid Grade-A teak throughout', 'Table folds to 28cm depth', 'Chairs fold completely flat', 'Stainless steel hinges and fixings', 'Pre-assembled — ready in minutes', 'Storage bag included'],
    dimensions: 'Table (open): W150 × D80 × H74cm | Folded depth: 28cm',
  },

  // ─── Garden Parasols ──────────────────────────────────────────────────────
  {
    slug: 'riviera-cantilever-3m',
    name: 'Riviera Cantilever 3m',
    variant: 'Wind-resistant side-post parasol',
    price: '£395.00',
    originalPrice: '£475.00',
    category: 'Garden Parasols',
    categoryHref: '/garden-parasols',
    images: [IMG.umbrella, IMG.umbrella, IMG.umbrella, IMG.umbrella],
    sizes: ['3m Round', '3.5m Round'],
    rating: 4.8, reviewCount: 156,
    badge: { text: 'Best Seller', className: 'bg-brand-sage text-white' },
    inStock: true,
    shortDescription: 'Our best-selling side-post parasol lets you shade any seating configuration without a central pole in the way. The 360° rotation and multi-position tilt adjust shade throughout the day.',
    details: ['Canopy: solution-dyed acrylic, UPF 50+', 'Frame: powder-coated aluminium, rust-free', '360° rotation, 5-position tilt', 'Wind vents prevent lift in gusts', 'Weighted base included', 'Carries in supplied canvas bag'],
    dimensions: 'Canopy: Ø300cm | Pole height: 255cm | Base weight: 55kg',
  },
  {
    slug: 'heritage-classic-parasol',
    name: 'Heritage Classic Parasol 2.5m',
    variant: 'Traditional push-up parasol in ecru',
    price: '£245.00',
    category: 'Garden Parasols',
    categoryHref: '/garden-parasols',
    images: [IMG.umbrella, IMG.umbrella, IMG.umbrella, IMG.umbrella],
    sizes: ['2m', '2.5m', '3m'],
    rating: 4.7, reviewCount: 92,
    inStock: true,
    shortDescription: 'The timeless garden parasol, done properly. Solid hardwood pole, brass pulley mechanism, and a solution-dyed acrylic canopy in a warm ecru that complements any garden scheme.',
    details: ['FSC-certified hardwood pole', 'Brass pulley crank mechanism', 'Solution-dyed acrylic canopy, UPF 50+', 'Available in ecru, sage, and stone', 'Tilt function for afternoon shade', 'Fits standard 48mm parasol hole'],
    dimensions: 'Canopy: Ø250cm | Pole height: 235cm | Packed length: 195cm',
  },
  {
    slug: 'bali-sun-shade-4m',
    name: 'Bali Sun Shade 4m Square',
    variant: 'Oversized square cantilever',
    price: '£545.00',
    originalPrice: '£695.00',
    clearance: true,
    category: 'Garden Parasols',
    categoryHref: '/garden-parasols',
    images: [IMG.umbrella, IMG.umbrella, IMG.umbrella, IMG.umbrella],
    sizes: ['3m Square', '4m Square'],
    rating: 4.6, reviewCount: 47,
    badge: { text: 'Quick Delivery', className: 'bg-white text-on-surface border border-outline-variant/40' },
    inStock: true,
    shortDescription: 'For those who want serious shade. The Bali covers up to 16m² with a single elegant post, making it the perfect overhead anchor for a large dining or lounging area.',
    details: ['4m square high-density polyester canopy', 'UPF 50+ sun protection', 'Rotating arm for repositioning', 'Pneumatic tilt: 0–30°', 'Reinforced heavy-duty base required (sold separately)', 'Wind rating: Beaufort 4'],
    dimensions: 'Canopy: 400 × 400cm | Arm reach: 360cm | Post height: 280cm',
  },
  {
    slug: 'tuscany-market-umbrella',
    name: 'Tuscany Market Umbrella 3m',
    variant: 'Hand-stitched canopy, aluminium pole',
    price: '£315.00',
    category: 'Garden Parasols',
    categoryHref: '/garden-parasols',
    images: [IMG.umbrella, IMG.umbrella, IMG.umbrella, IMG.umbrella],
    sizes: ['2.5m', '3m'],
    rating: 4.7, reviewCount: 73,
    inStock: true,
    shortDescription: 'Inspired by the market squares of Tuscany, this classic centre-pole parasol features a hand-stitched scalloped valance and a crank-and-tilt aluminium pole in an antique bronze finish.',
    details: ['Hand-stitched scalloped valance', 'Solution-dyed canvas canopy', 'Crank-lift with push-button tilt', 'Antique bronze powder-coated pole', '8-rib fibreglass frame', 'Available in 6 canopy colours'],
    dimensions: 'Canopy: Ø300cm | Pole height: 240cm | Pole diameter: 48mm',
  },
  {
    slug: 'clifton-led-parasol',
    name: 'Clifton LED Parasol 2.7m',
    variant: 'Solar-charged LED canopy lighting',
    price: '£485.00',
    category: 'Garden Parasols',
    categoryHref: '/garden-parasols',
    images: [IMG.umbrella, IMG.umbrella, IMG.umbrella, IMG.umbrella],
    sizes: ['2.7m Round'],
    rating: 4.5, reviewCount: 29,
    inStock: true,
    shortDescription: 'The Clifton extends your garden evenings well beyond sunset. 24 warm-white LEDs embedded along the ribs charge via an integrated solar panel on the canopy cap — no wiring required.',
    details: ['24 warm-white LED lights (3000K)', 'Integrated solar panel with 8hr run time', 'USB backup charging port in pole', '3 brightness settings + pulse mode', 'IP44 weatherproof rating', 'Auto dusk-to-dawn sensor option'],
    dimensions: 'Canopy: Ø270cm | Pole height: 245cm | Solar panel: 20 × 20cm',
  },
  {
    slug: 'coastal-tilt-umbrella',
    name: 'Coastal Tilt Umbrella 2m',
    variant: 'Compact tilt parasol for small terraces',
    price: '£195.00',
    stockCount: 3,
    category: 'Garden Parasols',
    categoryHref: '/garden-parasols',
    images: [IMG.umbrella, IMG.umbrella, IMG.umbrella, IMG.umbrella],
    sizes: ['2m'],
    rating: 4.6, reviewCount: 88,
    badge: { text: 'Limited Stock', className: 'bg-brand-terracotta text-white' },
    inStock: true,
    shortDescription: 'Ideal for balconies, compact patios, and smaller bistro sets. The Coastal tilts to 40° for precise afternoon shade — all from a lightweight aluminium frame you can carry with one hand.',
    details: ['Compact 2m canopy, UPF 40+', 'One-touch 40° tilt button', 'Lightweight aluminium pole: 3.2kg total', 'Crank-open mechanism', 'Fits 38mm standard parasol hole', 'Available in 4 canopy colours'],
    dimensions: 'Canopy: Ø200cm | Pole height: 220cm | Packed length: 175cm',
  },

  // ─── Gazebos ──────────────────────────────────────────────────────────────
  {
    slug: 'manor-cedar-gazebo',
    name: 'Manor Cedar Gazebo 3×4m',
    variant: 'FSC-certified cedar with copper roof finials',
    price: '£2,850.00',
    originalPrice: '£3,250.00',
    category: 'Gazebos',
    categoryHref: '/gazebos',
    images: [IMG.gazebo, IMG.gazebo, IMG.gazebo, IMG.gazebo],
    sizes: ['3×3m', '3×4m', '4×4m'],
    rating: 4.9, reviewCount: 64,
    badge: { text: 'Best Seller', className: 'bg-brand-sage text-white' },
    inStock: true,
    shortDescription: 'A true garden centrepiece. The Manor is hand-built from FSC-certified Western red cedar — naturally aromatic, rot-resistant, and dimensionally stable through the wettest British winters.',
    details: ['FSC-certified Western red cedar', 'Copper roof finials, age to verdigris', 'Pressure-treated base posts', 'Tongue-and-groove roof panels', 'Optional side lattice panels available', 'Delivered flat-pack, assembly guide included'],
    dimensions: '3×4m footprint | Ridge height: 280cm | Eave height: 210cm | Weight: 320kg',
  },
  {
    slug: 'heritage-octagonal-gazebo',
    name: 'Heritage Octagonal Gazebo',
    variant: 'Classic octagonal form, solid softwood',
    price: '£3,495.00',
    category: 'Gazebos',
    categoryHref: '/gazebos',
    images: [IMG.gazebo, IMG.gazebo, IMG.gazebo, IMG.gazebo],
    sizes: ['3m Diameter', '4m Diameter'],
    rating: 4.8, reviewCount: 31,
    inStock: true,
    shortDescription: 'The quintessential English garden structure, reimagined with Heritage precision. Eight sides, a pitched cedar-shingle roof, and decorative fretwork make this the focal point of any garden.',
    details: ['Pressure-treated Scandinavian redwood', 'Cedar-shingle roof tiles', 'Decorative carved fretwork on all sides', 'Built-in bench seating for 8', 'Optional screening curtains available', 'Professional installation recommended'],
    dimensions: '4m diameter | Ridge height: 310cm | Internal diameter: 370cm',
  },
  {
    slug: 'pavilion-steel-pergola',
    name: 'Pavilion Steel Pergola 4×3m',
    variant: 'Powder-coated steel with louvre roof',
    price: '£1,295.00',
    originalPrice: '£1,795.00',
    clearance: true,
    category: 'Gazebos',
    categoryHref: '/gazebos',
    images: [IMG.gazebo, IMG.gazebo, IMG.gazebo, IMG.gazebo],
    sizes: ['3×3m', '4×3m', '5×4m'],
    rating: 4.6, reviewCount: 52,
    badge: { text: 'Quick Delivery', className: 'bg-white text-on-surface border border-outline-variant/40' },
    inStock: true,
    shortDescription: 'A modern alternative to timber, the Pavilion pergola features adjustable aluminium louvre blades that rotate from 0° to 135° — controlling light, ventilation and rain protection at the turn of a handle.',
    details: ['Powder-coated aluminium frame', 'Adjustable aluminium louvre blades', 'Built-in guttering and drainage post', 'Max load: 30kg/m² (for hanging plants)', 'Expandable with side screen panels', 'Drill-free surface mounting kit included'],
    dimensions: '4×3m footprint | Height: 240cm | Louvre depth: 14cm',
  },
  {
    slug: 'cotswold-garden-arch',
    name: 'Cotswold Garden Arch',
    variant: 'Climbing plant support arch in treated timber',
    price: '£485.00',
    category: 'Gazebos',
    categoryHref: '/gazebos',
    images: [IMG.gazebo, IMG.gazebo, IMG.gazebo, IMG.gazebo],
    sizes: ['Standard', 'Wide'],
    rating: 4.7, reviewCount: 44,
    inStock: true,
    shortDescription: 'Frame your garden path or gate with the Cotswold arch. Hand-finished pressure-treated timber with diagonal trellis panels provides instant structure for roses, wisteria, and clematis.',
    details: ['Pressure-treated FSC softwood', 'Diagonal trellis side panels', 'Galvanised steel ground spikes', 'Tongue-and-groove arch top', 'Pre-drilled for easy assembly', 'Paints and stains readily'],
    dimensions: 'W120 × D50 × H220cm | Clear height: 200cm | Clear width: 100cm',
  },
  {
    slug: 'belgravia-pergola',
    name: 'Belgravia Pergola 5×4m',
    variant: 'Grand open-top pergola with side panels',
    price: '£2,195.00',
    stockCount: 1,
    category: 'Gazebos',
    categoryHref: '/gazebos',
    images: [IMG.gazebo, IMG.gazebo, IMG.gazebo, IMG.gazebo],
    sizes: ['4×3m', '5×4m', '6×4m'],
    rating: 4.7, reviewCount: 28,
    inStock: true,
    shortDescription: 'For gardens that deserve a statement. The Belgravia combines slatted timber beams, decorative carved posts, and optional privacy side panels into an outdoor room with genuine architectural presence.',
    details: ['Kiln-dried Scandinavian pine', 'Decorative turned post caps', 'Slatted rafter beams, 6cm spacing', 'Optional side trellis panels', 'Wall-mount or free-standing configuration', 'Ground anchors included'],
    dimensions: '5×4m footprint | Post height: 250cm | Beam height: 280cm',
  },
  {
    slug: 'pemberton-arbour',
    name: 'Pemberton Arbour',
    variant: 'Intimate corner seat with arched canopy',
    price: '£745.00',
    category: 'Gazebos',
    categoryHref: '/gazebos',
    images: [IMG.gazebo, IMG.gazebo, IMG.gazebo, IMG.gazebo],
    sizes: ['Single', 'Double'],
    rating: 4.8, reviewCount: 57,
    badge: { text: 'Limited Stock', className: 'bg-brand-terracotta text-white' },
    inStock: true,
    shortDescription: 'A private retreat for two. The Pemberton arbour wraps a slatted bench in a latticed trellis arch — the ideal structure for climbing roses or sweet peas to frame a quiet reading corner.',
    details: ['FSC-certified pressure-treated pine', 'Lattice side and back panels', 'Slatted bench seat: W120cm', 'Arched roof with spaced slat canopy', 'Galvanised ground fixings', 'Suitable for corner or wall placement'],
    dimensions: 'W140 × D85 × H210cm | Seat height: 44cm | Internal width: 120cm',
  },

  // ─── Outdoor Lights ───────────────────────────────────────────────────────
  {
    slug: 'festoon-string-lights-10m',
    name: 'Festoon String Lights 10m',
    variant: '40 warm-white bulbs, IP44 rated',
    price: '£95.00',
    originalPrice: '£119.00',
    category: 'Outdoor Lights',
    categoryHref: '/outdoor-lights',
    images: [IMG.lights, IMG.lights, IMG.lights, IMG.lights],
    sizes: ['10m / 40 bulbs', '20m / 80 bulbs'],
    rating: 4.9, reviewCount: 312,
    badge: { text: 'Best Seller', className: 'bg-brand-sage text-white' },
    inStock: true,
    shortDescription: 'The most popular lighting choice in the Heritage Garden range. 40 warm-white (2700K) globe bulbs on a 10m mains cable — perfect strung between posts, along a fence, or beneath a gazebo.',
    details: ['40 × E27 globe bulbs, 2700K warm white', 'IP44 rated: rain and splash proof', 'Mains-powered with 1.5m lead', 'Spacing: 25cm between bulbs', 'Spare bulbs included', 'Connectable: up to 3 strings in series'],
    dimensions: 'Length: 10m | Bulb diameter: 45mm | Cable: black rubber',
  },
  {
    slug: 'edison-bulb-string-lights',
    name: 'Edison Bulb String Lights 5m',
    variant: 'Vintage filament bulbs, 20 lights',
    price: '£65.00',
    originalPrice: '£95.00',
    clearance: true,
    category: 'Outdoor Lights',
    categoryHref: '/outdoor-lights',
    images: [IMG.lights, IMG.lights, IMG.lights, IMG.lights],
    sizes: ['5m / 20 bulbs', '10m / 40 bulbs'],
    rating: 4.8, reviewCount: 174,
    inStock: true,
    shortDescription: 'Vintage Edison filament bulbs create a warm, amber glow that transforms any outdoor space into an evening destination. The visible spiral filament adds character even before they are switched on.',
    details: ['20 × vintage Edison filament bulbs', 'Amber 2200K ultra-warm glow', 'IP44 weatherproof rating', 'Twisted brown textile cable', 'Dimmable with compatible dimmer switch', 'Replacement bulbs available individually'],
    dimensions: 'Length: 5m | Bulb size: ST64 (6.4cm diameter)',
  },
  {
    slug: 'solar-lantern-set',
    name: 'Solar Lantern Set of 4',
    variant: 'Brushed brass finish, auto dusk-to-dawn',
    price: '£125.00',
    category: 'Outdoor Lights',
    categoryHref: '/outdoor-lights',
    images: [IMG.lights, IMG.lights, IMG.lights, IMG.lights],
    sizes: ['Set of 4', 'Set of 8'],
    rating: 4.7, reviewCount: 91,
    badge: { text: 'Quick Delivery', className: 'bg-white text-on-surface border border-outline-variant/40' },
    inStock: true,
    shortDescription: 'No wiring, no running costs. These brushed brass solar lanterns charge silently during the day and activate automatically at dusk, casting a warm flame-effect glow for up to 10 hours.',
    details: ['Brushed brass frame, smoked glass panels', 'Integrated monocrystalline solar panel', 'Auto dusk-to-dawn PIR sensor', 'Up to 10 hours run time per charge', 'Warm flame-effect LED (non-replaceable)', 'Hanging hook and spike stake included'],
    dimensions: 'W12 × D12 × H28cm | Solar panel: 6 × 6cm',
  },
  {
    slug: 'heritage-path-lights',
    name: 'Heritage Path Lights Set of 6',
    variant: 'Stainless steel spike path lights',
    price: '£195.00',
    category: 'Outdoor Lights',
    categoryHref: '/outdoor-lights',
    images: [IMG.lights, IMG.lights, IMG.lights, IMG.lights],
    sizes: ['Set of 6', 'Set of 12'],
    rating: 4.6, reviewCount: 63,
    inStock: true,
    shortDescription: 'Define your garden pathways with precision. Brushed stainless steel spike lights with 360° diffused ground illumination — hard-wired low-voltage design for reliable all-season performance.',
    details: ['Brushed 316-grade marine stainless steel', '12V low-voltage system', 'Transformer included (12-way output)', '360° ground-level diffused glow', 'IP67: fully weatherproof', 'Spike depth: 22cm'],
    dimensions: 'Head: Ø10 × H8cm | Total height: 30cm | Cable: 50cm per light',
  },
  {
    slug: 'copper-garden-flares',
    name: 'Copper Garden Flares Set of 8',
    variant: 'Real copper with citronella oil',
    price: '£85.00',
    category: 'Outdoor Lights',
    categoryHref: '/outdoor-lights',
    images: [IMG.lights, IMG.lights, IMG.lights, IMG.lights],
    sizes: ['Set of 8'],
    rating: 4.5, reviewCount: 38,
    inStock: true,
    shortDescription: 'Solid copper torch flares that double as natural mosquito deterrents. Pre-filled with premium citronella oil and mounted on tall bamboo poles, they create dramatic poolside or pathway lighting.',
    details: ['Solid copper torch heads', 'Pre-filled with 150ml citronella oil', 'Each flare burns approx. 4–6 hours', 'Snuffer cap included', 'Bamboo pole: 120cm length', 'Replacement oil refill packs available'],
    dimensions: 'Torch head: Ø8 × H10cm | Pole height: 120cm | Total: 130cm',
  },
  {
    slug: 'greenwich-bollard-light',
    name: 'Greenwich Bollard Light',
    variant: 'Cast aluminium, mains-powered',
    price: '£145.00',
    stockCount: 4,
    category: 'Outdoor Lights',
    categoryHref: '/outdoor-lights',
    images: [IMG.lights, IMG.lights, IMG.lights, IMG.lights],
    sizes: ['Single', 'Pack of 2', 'Pack of 4'],
    rating: 4.7, reviewCount: 52,
    badge: { text: 'Limited Stock', className: 'bg-brand-terracotta text-white' },
    inStock: true,
    shortDescription: 'A substantial garden bollard that brings architectural gravitas to driveways, borders, and path edges. Die-cast aluminium in a satin anthracite finish with a frosted polycarbonate diffuser.',
    details: ['Die-cast aluminium housing', 'Satin anthracite powder-coat finish', 'Frosted polycarbonate diffuser', '13W LED (900 lm, 3000K)', 'IP65 weatherproof rating', 'Suitable for mains or low-voltage systems'],
    dimensions: 'Ø12 × H60cm | Cable entry: bottom | Weight: 2.8kg',
  },

  // ─── Accessories ──────────────────────────────────────────────────────────
  {
    slug: 'linen-scatter-cushions',
    name: 'Linen Scatter Cushions Set of 4',
    variant: 'Fade-resistant outdoor linen, 45×45cm',
    price: '£145.00',
    originalPrice: '£175.00',
    category: 'Accessories',
    categoryHref: '/accessories',
    images: [IMG.cosmetics, IMG.cosmetics, IMG.cosmetics, IMG.cosmetics],
    sizes: ['45×45cm', '50×50cm', '30×50cm Lumbar'],
    rating: 4.8, reviewCount: 143,
    badge: { text: 'Best Seller', className: 'bg-brand-sage text-white' },
    inStock: true,
    shortDescription: 'Outdoor cushions that actually look good. Our scatter cushion covers are woven from solution-dyed linen-look polyester — fade-resistant, quick-drying, and machine washable at 30°.',
    details: ['Solution-dyed polyester linen weave', 'Fade-resistant up to 2000 hours UV exposure', 'Removable zip cover, machine washable 30°', 'Hollow-fibre filled insert included', 'Water-repellent treatment', 'Available in sage, ecru, terracotta, and stone'],
    dimensions: '45 × 45cm | Cover weight: 220gsm | Insert: hollow-fibre',
  },
  {
    slug: 'heritage-outdoor-rug',
    name: 'Heritage Outdoor Rug 200×300cm',
    variant: 'UV-stable flatweave in sage & cream',
    price: '£285.00',
    stockCount: 2,
    category: 'Accessories',
    categoryHref: '/accessories',
    images: [IMG.cosmetics, IMG.cosmetics, IMG.cosmetics, IMG.cosmetics],
    sizes: ['160×230cm', '200×300cm', '250×350cm'],
    rating: 4.7, reviewCount: 67,
    inStock: true,
    shortDescription: 'Define your outdoor room with a rug that handles everything the British weather can throw at it. UV-stable polypropylene flatweave in our signature sage and cream colourway.',
    details: ['100% UV-stable polypropylene', 'Flatweave: low-profile, anti-trip edge', 'Non-slip latex backing', 'Hose-clean and quick-drying', 'Suitable for covered and uncovered use', 'Available in 3 colourways'],
    dimensions: '200 × 300cm | Pile height: 4mm | Weight: 1.8kg/m²',
  },
  {
    slug: 'cotswold-planter-pair',
    name: 'Cotswold Planter Pair',
    variant: 'Handthrown terracotta, frost-proof glaze',
    price: '£195.00',
    category: 'Accessories',
    categoryHref: '/accessories',
    images: [IMG.cosmetics, IMG.cosmetics, IMG.cosmetics, IMG.cosmetics],
    sizes: ['Small (H30cm)', 'Medium (H40cm)', 'Large (H55cm)'],
    rating: 4.9, reviewCount: 89,
    badge: { text: 'Quick Delivery', className: 'bg-white text-on-surface border border-outline-variant/40' },
    inStock: true,
    shortDescription: 'Handthrown on a traditional kick-wheel and fired at 1200°C to ensure a frost-proof finish that will not crack or spall even in the hardest British winters. Each planter is uniquely individual.',
    details: ['Handthrown terracotta, each unique', 'High-fire frost-proof glaze', 'Drainage hole with clay crock included', 'Food-safe glaze (safe for herbs)', 'Sold as matching pair', 'Available glazed or natural terracotta'],
    dimensions: 'Large: Ø32 × H55cm | Medium: Ø26 × H40cm | Drainage: Ø2cm',
  },
  {
    slug: 'teak-furniture-oil',
    name: 'Teak Furniture Oil 500ml',
    variant: 'Nourishing oil for all teak pieces',
    price: '£18.00',
    category: 'Accessories',
    categoryHref: '/accessories',
    images: [IMG.cosmetics, IMG.cosmetics, IMG.cosmetics, IMG.cosmetics],
    sizes: ['500ml', '1 Litre'],
    rating: 4.8, reviewCount: 224,
    inStock: true,
    shortDescription: 'Formulated specifically for Grade-A teak and other dense hardwoods. One application per season maintains the warm honey tone, protects against UV greyening, and feeds the wood\'s natural oils.',
    details: ['Linseed and tung oil base', 'UV inhibitors prevent silver-grey weathering', 'Apply with included lint-free cloth', 'One 500ml bottle treats approx. 6 chairs', 'Fully penetrating: no surface film', 'Odourless when dry (2–4 hours)'],
    dimensions: '500ml bottle | Coverage: approx. 8m² per coat',
  },
  {
    slug: 'garden-wind-chime',
    name: 'Garden Wind Chime',
    variant: 'Solid brass tubes, hand-tuned',
    price: '£35.00',
    category: 'Accessories',
    categoryHref: '/accessories',
    images: [IMG.cosmetics, IMG.cosmetics, IMG.cosmetics, IMG.cosmetics],
    sizes: ['Small (5 tubes)', 'Large (8 tubes)'],
    rating: 4.6, reviewCount: 48,
    inStock: true,
    shortDescription: 'Hand-tuned to a pentatonic scale so every breeze produces a harmonious chord. Solid brass tubes with a natural lacquer finish age beautifully to a warm patina over time.',
    details: ['8 solid brass tubes, hand-tuned', 'Pentatonic scale: always melodious', 'Teak top cap and wind sail', 'Natural lacquer ages to warm patina', 'Nylon-coated stainless wire', 'Supplied with adjustable hanging hook'],
    dimensions: 'Overall H: 65cm | Tube lengths: 18–36cm | Width: 22cm',
  },
  {
    slug: 'garden-candle-lantern-set',
    name: 'Garden Candle Lantern Set of 2',
    variant: 'Galvanised steel with smoked glass',
    price: '£65.00',
    originalPrice: '£85.00',
    clearance: true,
    category: 'Accessories',
    categoryHref: '/accessories',
    images: [IMG.cosmetics, IMG.cosmetics, IMG.cosmetics, IMG.cosmetics],
    sizes: ['Small (H25cm)', 'Large (H40cm)', 'Mixed Set (1 of each)'],
    rating: 4.7, reviewCount: 112,
    badge: { text: 'Limited Stock', className: 'bg-brand-terracotta text-white' },
    inStock: true,
    shortDescription: 'Galvanised steel and hand-blown smoked glass — a pairing that looks considered on any surface. Designed to hold a standard pillar candle or a standard tea light for versatile ambient lighting.',
    details: ['Galvanised steel frame, rust-resistant', 'Hand-blown smoked glass panels', 'Hinged door for easy candle access', 'Holds up to 10cm pillar candle', 'Carry handle on top', 'Suitable for indoor and outdoor use'],
    dimensions: 'Large: W18 × D18 × H40cm | Small: W14 × D14 × H25cm',
  },
];

export function getProductBySlug(slug) {
  return allProducts.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(slug, categoryHref) {
  return allProducts
    .filter((p) => p.categoryHref === categoryHref && p.slug !== slug)
    .slice(0, 3);
}

export function getBundleProducts(slug, categoryHref) {
  // Pick 2 complementary picks: prefer same-category neighbours,
  // then fill from the Accessories range so most bundles include an extra.
  const sameCategory = allProducts.filter(
    (p) => p.categoryHref === categoryHref && p.slug !== slug
  );
  const accessories = allProducts.filter(
    (p) => p.categoryHref === '/accessories' && p.slug !== slug
  );
  const picks = [];
  if (sameCategory[0]) picks.push(sameCategory[0]);
  if (categoryHref !== '/accessories' && accessories[0]) picks.push(accessories[0]);
  else if (sameCategory[1]) picks.push(sameCategory[1]);
  return picks.slice(0, 2);
}

export function priceToNumber(price) {
  return Number(String(price).replace(/[^0-9.]/g, '')) || 0;
}

export function formatPrice(value) {
  return `£${value.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function getHomeBestsellers() {
  // Pick the highest-rated product per category, capped at 3 — used for the
  // homepage Bestseller strip so each tile links to a real product page.
  const seen = new Set();
  return allProducts
    .filter((p) => p.badge?.text === 'Best Seller')
    .filter((p) => {
      if (seen.has(p.categoryHref)) return false;
      seen.add(p.categoryHref);
      return true;
    })
    .slice(0, 3);
}

export function getCategoryProducts(categoryHref) {
  return allProducts
    .filter((p) => p.categoryHref === categoryHref)
    .map((p) => {
      const original = p.originalPrice ? priceToNumber(p.originalPrice) : null;
      const current = priceToNumber(p.price);
      const saving = original && original > current ? original - current : 0;
      const discountPct = original && original > current
        ? Math.round(((original - current) / original) * 100)
        : 0;
      return {
        id: p.slug,
        slug: p.slug,
        name: p.name,
        variant: p.variant,
        price: p.price,
        originalPrice: p.originalPrice ?? null,
        clearance: p.clearance ?? false,
        stockCount: p.stockCount ?? null,
        saving,
        discountPct,
        src: p.images[0],
        alt: p.name,
        badge: p.badge,
      };
    });
}

// ─── Reviews ────────────────────────────────────────────────────────────────

const REVIEWERS = [
  { name: 'Margaret W.', location: 'Surrey' },
  { name: 'David T.', location: 'North Yorkshire' },
  { name: 'Susan H.', location: 'Gloucestershire' },
  { name: 'Robert M.', location: 'Kent' },
  { name: 'Patricia C.', location: 'Devon' },
  { name: 'James R.', location: 'Hampshire' },
  { name: 'Christine B.', location: 'Edinburgh' },
  { name: 'Michael F.', location: 'Worcestershire' },
  { name: 'Linda S.', location: 'Cornwall' },
  { name: 'Andrew P.', location: 'Cheshire' },
  { name: 'Jennifer K.', location: 'Suffolk' },
  { name: 'Peter N.', location: 'Sussex' },
  { name: 'Helen D.', location: 'Oxfordshire' },
  { name: 'Stephen J.', location: 'Wiltshire' },
];

const REVIEW_BANK = {
  '/outdoor-furniture': [
    { rating: 5, title: 'Built like the old days', body: 'Solid teak, properly mortised joints, and the brass fixings are a lovely touch. Arrived in two boxes, took an evening to assemble. Very happy with the {name}.' },
    { rating: 5, title: 'A real centrepiece', body: 'We chose the {name} for our terrace and it has completely transformed how we use the garden. Five months in and it still looks brand new.' },
    { rating: 4, title: 'Beautiful but heavier than expected', body: 'Stunning piece — exactly as pictured. Took two of us to move it. One slight scratch on a corner from delivery, but Heritage sent a touch-up kit straight away.' },
    { rating: 5, title: 'Worth saving up for', body: 'I went back and forth between this and a much cheaper set on Amazon. So glad I chose Heritage Garden. The quality difference is enormous.' },
    { rating: 5, title: 'Excellent customer service', body: 'I rang to ask about teak care before ordering and the lady I spoke to was incredibly helpful. The furniture itself is wonderful.' },
    { rating: 4, title: 'Lovely but assembly took a while', body: 'Took me about 90 minutes to put together rather than the 30 quoted. Once up though, it is rock-solid.' },
    { rating: 5, title: 'Survived our first winter', body: 'Left out under a cover all winter and it still looks beautiful. The teak has greyed slightly which I love.' },
    { rating: 5, title: 'Hand on heart, the best', body: 'Tried three other brands over the years. Nothing comes close to this. Heritage Garden have a customer for life.' },
  ],
  '/garden-parasols': [
    { rating: 5, title: 'Survived three storms', body: 'Bought this last spring and it has handled everything the British weather has thrown at it. The wind vents really do work.' },
    { rating: 5, title: 'Beautiful canopy colour', body: 'The ecru is the perfect off-white — not too cream, not too stark. Goes with absolutely everything in our garden.' },
    { rating: 4, title: 'Heavier base needed', body: 'The parasol itself is wonderful but I had to buy a heavier base separately. Worth flagging on the product page.' },
    { rating: 5, title: 'Tilt mechanism is smooth', body: 'I expected the tilt to be fiddly but it operates with one hand. Brilliant piece of engineering.' },
    { rating: 5, title: 'Looks more expensive than it is', body: 'Genuinely looks like the £800 parasols at the garden centre. Very pleased with the {name}.' },
    { rating: 4, title: 'Took some assembly', body: 'Instructions were clear but it does take a good 45 minutes to set up properly. Once up, it is flawless.' },
    { rating: 5, title: 'Delivered in two days', body: 'Ordered Wednesday, arrived Friday by a real driver who carried it round the side. Could not fault the experience.' },
    { rating: 5, title: 'Five years and still going', body: 'Fifth summer with my Heritage parasol. Canopy still holding its colour, mechanism still smooth. Properly impressed.' },
  ],
  '/gazebos': [
    { rating: 5, title: 'Garden has a new heart', body: 'The {name} has become the focal point of our garden. We eat under it most evenings now. Beautifully made.' },
    { rating: 5, title: 'Cedar smells incredible', body: 'The first few weeks the cedar aroma was lovely. The roof is properly weatherproof — sheltered from a downpour last week and stayed bone dry underneath.' },
    { rating: 4, title: 'Big job to assemble', body: 'Took three of us a full Saturday. Instructions were good but it is a serious bit of kit. Worth the white-glove option.' },
    { rating: 5, title: 'Built for British winters', body: 'A year in and there is zero movement, zero rot, zero trouble. Tested through last winter\'s named storms.' },
    { rating: 5, title: 'The copper finials are everything', body: 'Such a small detail but it really lifts the whole structure. They have already started to verdigris beautifully.' },
    { rating: 4, title: 'Pricey but earned its keep', body: 'I winced at the price at the time. Two summers in, I do not think about it anymore — best garden purchase we have made.' },
    { rating: 5, title: 'Foundations were the only extra', body: 'Worth knowing you need a solid base before installation. Once that is done, the rest goes up beautifully.' },
    { rating: 5, title: 'Guests ask where it is from', body: 'Hosted three garden parties this summer. Every single guest commented on the gazebo. Tell them all about Heritage Garden.' },
  ],
  '/outdoor-lights': [
    { rating: 5, title: 'Transformed the patio', body: 'Strung the {name} along the pergola and the garden has come alive in the evenings. The warm white is exactly right.' },
    { rating: 5, title: 'Survived three British winters', body: 'IP44 rating is no joke — these have weathered three winters left out and are still going strong.' },
    { rating: 4, title: 'Cable shorter than expected', body: 'The lead from the plug to the first bulb is shorter than the listing suggests. Just needed an extension.' },
    { rating: 5, title: 'Edison bulbs are gorgeous', body: 'The amber glow is exactly what I was after. Looks straight out of a Cotswold pub garden.' },
    { rating: 5, title: 'Spare bulbs included', body: 'Lovely touch — spare bulbs in the box. Replacement is straightforward when one eventually goes.' },
    { rating: 5, title: 'Better than the high street', body: 'Bought a similar-looking string from a big DIY store last year — they fell apart by August. These are properly made.' },
    { rating: 4, title: 'Wish they were dimmable', body: 'Lovely lights but it would be nice to have a dimmer option for the brighter evenings. Tiny gripe.' },
    { rating: 5, title: 'Solar version is a winner', body: 'No wiring, no electricity bill, just glow. Charges fine even in cloudy weather.' },
  ],
  '/accessories': [
    { rating: 5, title: 'Completely changed the set', body: 'The {name} totally lifted our garden furniture. Proper feel, proper weight, properly made.' },
    { rating: 5, title: 'Fabric is gorgeous', body: 'Soft to the touch but feels sturdy. Survived two unexpected showers without staining.' },
    { rating: 4, title: 'Colour slightly different in person', body: 'The sage is a touch deeper than on screen — actually nicer than I expected. Just worth knowing.' },
    { rating: 5, title: 'Tied the whole space together', body: 'Had the furniture for a year and never quite felt finished. This was the missing piece.' },
    { rating: 5, title: 'Quick delivery, properly packed', body: 'Arrived next day, beautifully wrapped in recycled paper. Lovely touches throughout.' },
    { rating: 4, title: 'Wish there was a bigger size', body: 'Love it. Would buy a larger size if you offered one.' },
    { rating: 5, title: 'Heritage quality even on the small things', body: 'You can really feel the difference vs. similar items elsewhere. Made me want to order more.' },
    { rating: 5, title: 'Hoses clean in seconds', body: 'After a muddy weekend it took two minutes with the hose. Back to looking new.' },
  ],
};

function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export function getReviewsForProduct(slug) {
  const product = getProductBySlug(slug);
  if (!product) return [];
  const bank = REVIEW_BANK[product.categoryHref] || [];
  if (bank.length === 0) return [];
  // Deterministic pseudo-random selection so each product always shows the
  // same reviews (no SSR/CSR mismatch, stable across reloads).
  const seed = hashCode(slug) || 1;
  const want = Math.min(6, bank.length);
  const indices = [];
  let cur = seed;
  while (indices.length < want) {
    cur = (cur * 1103515245 + 12345) & 0x7fffffff;
    const idx = cur % bank.length;
    if (!indices.includes(idx)) indices.push(idx);
  }
  // Anchor dates from a fixed reference so SSR and CSR agree.
  const reference = new Date('2026-05-10T00:00:00Z');
  return indices.map((idx, i) => {
    const tpl = bank[idx];
    const reviewer = REVIEWERS[(seed + i * 7) % REVIEWERS.length];
    const daysAgo = ((seed + i * 31) % 280) + 6;
    const date = new Date(reference);
    date.setUTCDate(date.getUTCDate() - daysAgo);
    return {
      id: `${slug}-${idx}`,
      rating: tpl.rating,
      title: tpl.title,
      body: tpl.body.replace(/\{name\}/g, product.name),
      author: reviewer.name,
      location: reviewer.location,
      date: date.toISOString().slice(0, 10),
      verified: true,
    };
  });
}

export { deliveryText, warrantyText };
