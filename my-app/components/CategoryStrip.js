import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 'tables',
    name: 'Outdoor Furniture',
    href: '/outdoor-furniture',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5YvNmC6TY6wVXHZZg6B45BVvANZC1oc3zpMMa8E4H7a-8_vU1bmXW8xC7jyjWB-PlwDbrAcCYC5N_xFQ-kmBs71DIuC5qeo3Px802dx6DUhR5-V5RHJkG6IusXuFaPWWkb6PMQzXHaVbGmRmXE1BAPQaV3S1Pm-9Rrddl_QyqL_y9aU4CGOJQ9oo_lBDxAWMn5JNVzS9_vbfCLXrJW31Xc16HmXrJ7IPgkECZREUQ3DybnFuBXwWHVosASFOxagq7kIDoY-XnO8E',
    alt: 'Outdoor teak dining table set on a stone terrace',
  },
  {
    id: 'umbrellas',
    name: 'Garden Parasols',
    href: '/garden-parasols',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRgQKN_dRlJAVzVi8SCBgkpfZlpm004A4zFstdLye0NNj61iLmoBXQAFgkoxWLuLE3QL-xQjHL32iP3zuIhZP_vcWLnYH9s3dun0S7baaZP0Fj7vEX1k546A5FalBw1Di9PphiDpyAkpvSCs8cvEfpyrAVuDrvO4J0gBaMSWoKL4tCAjQY06sHJ5STTWWFMbshTNBKNZQG7Ewscj4-Wu4kawIXSs_3SlQgTfO_xNmJ2D9xS40Cg2_ccKkvq-31GjRWOj_fuDJUjTM',
    alt: 'Garden parasol shading an outdoor seating area',
  },
  {
    id: 'gazebos',
    name: 'Gazebos',
    href: '/gazebos',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTO_1CIzLx3Ktj4T8r2Q6FatCfAX5kkX5_3WTaR3QoEdm_GXzDoXQHaG30XhxD-XvAnRMAaZnOsUjzVuzVW1o19KjoMQVmVK4YLNZcN7xia3wkOlaUY6C3xtRvzgRm7htalAnY1dnnUCIfYG_rjNJ8Lv62djbySUfmqOFVpnoszH_3oPOCXaxwWtvWD_h67YRjtyeBwjPKDbOiC7eS-ulJoPWjSJk9_tzqUHujHNpHT67yVA_Z_SnRoL8nNSUzosHj469-JhT9RXo',
    alt: 'Wooden garden gazebo with seating beneath',
  },
  {
    id: 'lights',
    name: 'Outdoor Lights',
    href: '/outdoor-lights',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi4tH0J6OXz9SgshrPHHaA5lRxM4oLfZauwGGqjGA8UGLTNd_w0H2mDHPAS3CBM6zETAi_6qYLrajnqQy424WpxNXYKCZWnS5hNCQGzA-ozzafTO8_Vq7EDXn5cjFLZ8F7146c8w5y49_cCGF895mdJ7-CuJoTVsKHXPWQM9NrFB5RZog8FGGdxQ_C2pHlJacxComHhoyal1iXDpfO1qbttCNsTcXOwhBRcfQ1C0K4GQcDdME4evBOZL5waDqWS9I4y7Pc8HCSx7Y',
    alt: 'Outdoor garden lanterns lit at dusk',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    href: '/accessories',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCacYqZiVEBbcCpuDzLYx_sQfVK6ISVzkWrOm5EhQqQT8Zniyinhl7kYinMIly93cITqAkb7WXUgBkcLZTXjjA4izycC7fVh4VgjW7dJTsSs5hMvTrO6-dn6jTjDraxEdw8Gw_gpfBwHxMp2ZnymmMAQd3NI-aoFw3-IFZ6gJ33AgcM9iZiTs88FnmYGtawWMuqT1BLnoEOTYwfh5uRKelVU-jhRfUt0WUMkfJ9mCIF4qAZRM-cm5z2uF6QrL2_IHg4x1YnVkXi6I',
    alt: 'Outdoor cushions and decorative items styled on a garden bench',
  },
];

function CategoryTile({ cat, spanClass }) {
  return (
    <Link
      href={cat.href}
      aria-label={`Shop ${cat.name}`}
      className={`relative aspect-square sm:aspect-[4/3] overflow-hidden block group shadow-md hover:shadow-2xl transition-shadow duration-500 ${spanClass}`}
    >
      <Image
        src={cat.src}
        alt={cat.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />
      <div className="absolute inset-x-0 bottom-6 md:bottom-10 text-center text-white px-4">
        <h3 className="font-h1 text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-5 drop-shadow-md">
          {cat.name}
        </h3>
        <span className="inline-flex items-center justify-center min-h-[56px] px-8 bg-white text-brand-sage font-button text-button uppercase border-2 border-white group-hover:bg-brand-terracotta group-hover:text-white group-hover:border-brand-terracotta transition-colors">
          Shop Now
        </span>
      </div>
    </Link>
  );
}

export default function CategoryStrip() {
  return (
    <section className="py-16 md:py-stack-lg bg-surface">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 mb-10 md:mb-12 text-center">
        <span className="font-label-caps text-label-caps text-brand-terracotta mb-3 block uppercase">
          Shop by Category
        </span>
        <h2 className="font-h2 text-h2-mobile md:text-h2 text-brand-sage">
          Everything for the Garden
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 md:gap-5">
          {categories.map((cat, i) => {
            let span = '';
            if (i < 3) {
              span = 'md:col-span-2';
            } else if (i === 3) {
              span = 'md:col-span-3';
            } else {
              span = 'sm:col-span-2 md:col-span-3';
            }
            return <CategoryTile key={cat.id} cat={cat} spanClass={span} />;
          })}
        </div>
      </div>
    </section>
  );
}
