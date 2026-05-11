import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

export default function CategoryPageLayout({ category }) {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative h-[50vh] overflow-hidden">
          <Image
            src={category.heroImage}
            alt={category.heroAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center max-w-[1200px] mx-auto px-5 md:px-10 text-white">
            <h1 className="font-h1 text-5xl md:text-7xl mb-4">{category.name}</h1>
            <p className="text-base md:text-lg max-w-xl">{category.description}</p>
          </div>
        </div>

        <section className="max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                prefetch
                className="group block"
              >
                <div className="aspect-[4/5] bg-surface-container overflow-hidden relative mb-4">
                  <Image
                    src={product.src}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-h3 text-2xl text-brand-sage mb-1 group-hover:text-brand-terracotta transition-colors">
                  {product.name}
                </h3>
                <p className="text-base text-on-surface-variant mb-2">{product.variant}</p>
                <span className="font-bold text-brand-sage text-xl">{product.price}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <CartDrawer />
      <Footer />
    </>
  );
}
