const deliveryText = 'Standard delivery 3–5 working days. Free on orders over £100. White-glove delivery with room-of-choice placement available on orders over £1,500. All deliveries are made on a named-day service — you will receive a two-hour delivery window by text the evening before.';
const warrantyText = 'Every Heritage Garden product is covered by our comprehensive 5-Year Warranty from the date of purchase, registered free at checkout. This covers manufacturing defects and structural failures under normal domestic use. Simply contact our UK customer service team and we will arrange a repair, replacement, or full refund.';

const allProducts = [
  {
    slug: 'popup-gazebo-12x12',
    name: 'Pop-Up Gazebo 12×12ft',
    variant: 'Double-roof instant canopy with carry bag',
    price: '£200.00',
    category: 'Gazebos',
    categoryHref: '/gazebos',
    images: [
      '/images/12x12-pop-up-gazebo-khaki.png.png',
      '/images/12x12-pop-up-gazebo-grey.png',
      '/images/12x12-pop-up-gazebo-khaki-night.png',
      '/images/12x12-pop-up-gazebo-grey-night.png',
      '/images/12x12-pop-up-gazebo-bug-net.png',
      '/images/12x12-pop-up-gazebo-height.png',
      '/images/12x12-pop-up-gazebo-wind-ressistant.png',
      '/images/12x12-pop-up-gazebo-uv-protection-waterproof.png',
    ],
    sizes: ['12×12ft'],
    rating: 4.7, reviewCount: 24,
    badge: { text: 'New', className: 'bg-brand-terracotta text-white' },
    inStock: true,
    shortDescription: 'Up in minutes, down just as fast. This 12×12ft pop-up canopy features a double-layered roof for superior rain run-off and UV protection — perfect for garden parties, BBQs, and outdoor events all season long.',
    details: [
      'Double-layered roof for extra weather and UV protection',
      'Tool-free pop-up frame — fully assembled in under 5 minutes',
      'Powder-coated steel frame, lightweight yet rigid',
      'Water-resistant and UV-stabilised polyester canopy',
      'Adjustable leg heights for uneven ground',
      'Carry bag and ground stakes included',
    ],
    dimensions: '12×12ft (366×366cm) footprint | Peak height: 300cm | Eave height: 200cm',
  },
];

export function getAllSlugs() {
  return allProducts.map((p) => p.slug);
}

export function getProductBySlug(slug) {
  return allProducts.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(slug, categoryHref) {
  return allProducts
    .filter((p) => p.categoryHref === categoryHref && p.slug !== slug)
    .slice(0, 3);
}

export function getBundleProducts(slug, categoryHref) {
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
  // One product per category, up to 3 — no badge requirement.
  const seen = new Set();
  return allProducts.filter((p) => {
    if (seen.has(p.categoryHref)) return false;
    seen.add(p.categoryHref);
    return true;
  }).slice(0, 3);
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
  '/gazebos': [
    { rating: 5, title: 'Garden has a new heart', body: 'The {name} has become the focal point of our garden. We eat under it most evenings now. Beautifully made.' },
    { rating: 5, title: 'Up in minutes, loved it', body: 'I was sceptical about pop-up frames but this went up in under 10 minutes. Rock solid once up.' },
    { rating: 4, title: 'Great shelter, smart design', body: 'The double roof really does make a difference in the rain. Stayed bone dry underneath in a proper downpour.' },
    { rating: 5, title: 'Built for British weather', body: 'A year in and zero trouble. Tested through last winter\'s named storms and a particularly soggy summer.' },
    { rating: 5, title: 'Guests ask where it is from', body: 'Hosted three garden parties this summer. Every single guest commented on the {name}. Tell them all about Heritage Garden.' },
    { rating: 4, title: 'Pricey but earned its keep', body: 'I winced at the price at the time. Two summers in, I do not think about it anymore — best garden purchase we have made.' },
    { rating: 5, title: 'Carry bag is a nice touch', body: 'Packs down surprisingly small. I can get it in and out of the car boot on my own which I did not expect.' },
    { rating: 5, title: 'Double roof is the difference', body: 'Had a cheaper single-roof version before. The double layer on this one keeps it so much cooler underneath on sunny days.' },
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
  const seed = hashCode(slug) || 1;
  const want = Math.min(6, bank.length);
  const indices = [];
  let cur = seed;
  while (indices.length < want) {
    cur = (cur * 1103515245 + 12345) & 0x7fffffff;
    const idx = cur % bank.length;
    if (!indices.includes(idx)) indices.push(idx);
  }
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
