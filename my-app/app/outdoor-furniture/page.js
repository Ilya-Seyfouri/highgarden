import { getCategoryProducts } from '@/lib/products';
import CategoryPageLayout from '@/components/CategoryPageLayout';

const h = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5YvNmC6TY6wVXHZZg6B45BVvANZC1oc3zpMMa8E4H7a-8_vU1bmXW8xC7jyjWB-PlwDbrAcCYC5N_xFQ-kmBs71DIuC5qeo3Px802dx6DUhR5-V5RHJkG6IusXuFaPWWkb6PMQzXHaVbGmRmXE1BAPQaV3S1Pm-9Rrddl_QyqL_y9aU4CGOJQ9oo_lBDxAWMn5JNVzS9_vbfCLXrJW31Xc16HmXrJ7IPgkECZREUQ3DybnFuBXwWHVosASFOxagq7kIDoY-XnO8E';

const category = {
  name: 'Outdoor Furniture',
  label: 'Al Fresco Living',
  description: 'From intimate bistro sets to grand eight-seater dining tables — crafted in sustainably sourced teak and built to weather every British season.',
  heroImage: h,
  heroAlt: 'Outdoor teak dining table set on a stone terrace',
  products: getCategoryProducts('/outdoor-furniture'),
};

export default function OutdoorFurniturePage() {
  return <CategoryPageLayout category={category} />;
}
