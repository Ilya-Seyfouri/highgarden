import { getCategoryProducts } from '@/lib/products';
import CategoryPageLayout from '@/components/CategoryPageLayout';

const h = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRgQKN_dRlJAVzVi8SCBgkpfZlpm004A4zFstdLye0NNj61iLmoBXQAFgkoxWLuLE3QL-xQjHL32iP3zuIhZP_vcWLnYH9s3dun0S7baaZP0Fj7vEX1k546A5FalBw1Di9PphiDpyAkpvSCs8cvEfpyrAVuDrvO4J0gBaMSWoKL4tCAjQY06sHJ5STTWWFMbshTNBKNZQG7Ewscj4-Wu4kawIXSs_3SlQgTfO_xNmJ2D9xS40Cg2_ccKkvq-31GjRWOj_fuDJUjTM';

const category = {
  name: 'Garden Parasols',
  label: 'Shade & Style',
  description: 'Elegant garden parasols and cantilever umbrellas engineered to handle wind, rain and relentless sunshine — without compromising on style.',
  heroImage: h,
  heroAlt: 'Garden parasol shading an outdoor seating area',
  products: getCategoryProducts('/garden-parasols'),
};

export default function GardenParasolsPage() {
  return <CategoryPageLayout category={category} />;
}
