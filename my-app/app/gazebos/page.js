import { getCategoryProducts } from '@/lib/products';
import CategoryPageLayout from '@/components/CategoryPageLayout';

const h = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTO_1CIzLx3Ktj4T8r2Q6FatCfAX5kkX5_3WTaR3QoEdm_GXzDoXQHaG30XhxD-XvAnRMAaZnOsUjzVuzVW1o19KjoMQVmVK4YLNZcN7xia3wkOlaUY6C3xtRvzgRm7htalAnY1dnnUCIfYG_rjNJ8Lv62djbySUfmqOFVpnoszH_3oPOCXaxwWtvWD_h67YRjtyeBwjPKDbOiC7eS-ulJoPWjSJk9_tzqUHujHNpHT67yVA_Z_SnRoL8nNSUzosHj469-JhT9RXo';

const category = {
  name: 'Gazebos',
  label: 'Garden Architecture',
  description: 'Transform your garden into a year-round retreat. Our gazebos and pergolas blend natural cedar, powder-coated steel and classic craftsmanship into structures built to last decades.',
  heroImage: h,
  heroAlt: 'Wooden garden gazebo with seating beneath',
  products: getCategoryProducts('/gazebos'),
};

export default function GazebosPage() {
  return <CategoryPageLayout category={category} />;
}
