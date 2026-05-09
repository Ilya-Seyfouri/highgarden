import { getCategoryProducts } from '@/lib/products';
import CategoryPageLayout from '@/components/CategoryPageLayout';

const h = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi4tH0J6OXz9SgshrPHHaA5lRxM4oLfZauwGGqjGA8UGLTNd_w0H2mDHPAS3CBM6zETAi_6qYLrajnqQy424WpxNXYKCZWnS5hNCQGzA-ozzafTO8_Vq7EDXn5cjFLZ8F7146c8w5y49_cCGF895mdJ7-CuJoTVsKHXPWQM9NrFB5RZog8FGGdxQ_C2pHlJacxComHhoyal1iXDpfO1qbttCNsTcXOwhBRcfQ1C0K4GQcDdME4evBOZL5waDqWS9I4y7Pc8HCSx7Y';

const category = {
  name: 'Outdoor Lights',
  label: 'Evening Atmosphere',
  description: 'Extend your evenings outdoors with lighting crafted for the British garden — from solar lanterns and festoon strings to sculptural path lights that look beautiful by day too.',
  heroImage: h,
  heroAlt: 'Outdoor garden lanterns lit at dusk',
  products: getCategoryProducts('/outdoor-lights'),
};

export default function OutdoorLightsPage() {
  return <CategoryPageLayout category={category} />;
}
