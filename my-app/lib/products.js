const allProducts = [
  {
    slug: 'popup-gazebo-12x12',
    name: 'Pop-Up Gazebo 12×12ft',
    variant: 'Double-roof instant canopy with carry bag',
    price: '£200.00',
    category: 'Gazebos',
    categoryHref: '/gazebos',
    images: [
      '/images/1.png',
      '/images/2.png',
      '/images/3.png',
      '/images/4.png',
      '/images/5.png',
      '/images/6.png',
      '/images/7.png',
      '/images/8.png',
    ],
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

export function priceToNumber(price) {
  return Number(String(price).replace(/[^0-9.]/g, '')) || 0;
}

export function formatPrice(value) {
  return `£${value.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function getHomeBestsellers() {
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
    .map((p) => ({
      id: p.slug,
      slug: p.slug,
      name: p.name,
      variant: p.variant,
      price: p.price,
      src: p.images[0],
      alt: p.name,
    }));
}
