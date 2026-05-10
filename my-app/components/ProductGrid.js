import Image from 'next/image';
import Link from 'next/link';
import { getHomeBestsellers } from '@/lib/products';

export default function ProductGrid() {
  const products = getHomeBestsellers();

  return (
    <section id="bestsellers" className="max-w-[1440px] mx-auto px-5 md:px-10 py-16 md:py-stack-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 md:mb-16 gap-4">
        <div>
          <span className="font-label-caps text-label-caps text-brand-terracotta mb-2 block uppercase">Most Wanted</span>
          <h2 className="font-h2 text-h2-mobile md:text-h2 text-brand-sage">The Bestseller List</h2>
        </div>
        <Link
          className="font-button text-button text-brand-sage hover:text-brand-terracotta border-b border-brand-sage hover:border-brand-terracotta pb-1 transition-all uppercase self-start sm:self-end"
          href="/outdoor-furniture"
        >
          View Entire Range
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {products.map((product) => (
          <Link key={product.slug} href={`/product/${product.slug}`} className="group block">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden relative mb-5 md:mb-6">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.badge && (
                <div className={`absolute top-4 left-4 px-4 py-1.5 font-label-caps text-[10px] tracking-widest shadow-sm uppercase ${product.badge.className}`}>
                  {product.badge.text}
                </div>
              )}
            </div>
            <h3 className="font-h3 text-2xl md:text-2xl text-brand-sage mb-2 group-hover:text-brand-terracotta transition-colors">{product.name}</h3>
            <p className="font-body-md text-base text-on-surface-variant mb-4 font-light">{product.variant}</p>
            <div className="flex items-center gap-4">
              <span className="font-body-lg font-bold text-brand-sage text-xl">{product.price}</span>
            </div>
            <div className="mt-5 md:mt-6 w-full min-h-[52px] bg-brand-sage text-white font-button text-button uppercase group-hover:bg-brand-terracotta transition-colors flex items-center justify-center">
              View Product
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
