import { getCategoryProducts } from '@/lib/products';
import CategoryPageLayout from '@/components/CategoryPageLayout';

const h = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCacYqZiVEBbcCpuDzLYx_sQfVK6ISVzkWrOm5EhQqQT8Zniyinhl7kYinMIly93cITqAkb7WXUgBkcLZTXjjA4izycC7fVh4VgjW7dJTsSs5hMvTrO6-dn6jTjDraxEdw8Gw_gpfBwHxMp2ZnymmMAQd3NI-aoFw3-IFZ6gJ33AgcM9iZiTs88FnmYGtawWMuqT1BLnoEOTYwfh5uRKelVU-jhRfUt0WUMkfJ9mCIF4qAZRM-cm5z2uF6QrL2_IHg4x1YnVkXi6I';

const category = {
  name: 'Accessories',
  label: 'Finishing Touches',
  description: 'The details that make a garden feel truly curated — outdoor cushions, planters, rugs, lanterns and care products chosen to complement every Heritage Garden piece.',
  heroImage: h,
  heroAlt: 'Outdoor cushions and decorative items styled on a garden bench',
  products: getCategoryProducts('/accessories'),
};

export default function AccessoriesPage() {
  return <CategoryPageLayout category={category} />;
}
