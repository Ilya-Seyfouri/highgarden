'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import TrustBar from '@/components/TrustBar';
import Newsletter from '@/components/Newsletter';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { priceToNumber } from '@/lib/products';
import { useCart } from '@/lib/CartContext';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export default function CategoryPageLayout({ category }) {
  const { addItem, openCart } = useCart();
  const [sort, setSort] = useState('featured');

  const sortedProducts = useMemo(() => {
    const list = [...category.products];
    switch (sort) {
      case 'price-asc':
        return list.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
      case 'price-desc':
        return list.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
      case 'newest':
        // No created-at field on the dataset; treat array order as oldest-first
        // and reverse so the most recently added products appear first.
        return list.reverse();
      default:
        return list;
    }
  }, [category.products, sort]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          <Image
            src={category.heroImage}
            alt={category.heroAlt}
            fill
            sizes="100vw"
            className="object-cover scale-105"
            priority
          />
          {/* Layered gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Content — vertically centred, left-aligned */}
          <div className="absolute inset-0 flex flex-col justify-center max-w-[1440px] mx-auto px-5 md:px-10 w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/50 text-[11px] font-body-md uppercase tracking-widest mb-8">
              <Link href="/" className="hover:text-white/90 transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80">{category.name}</span>
            </nav>

            {/* Label */}
            <span className="font-label-caps text-label-caps text-brand-terracotta uppercase mb-4 block">
              {category.label}
            </span>

            {/* Title */}
            <h1 className="font-h1 text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none max-w-3xl">
              {category.name}
            </h1>

            {/* Divider */}
            <div className="w-16 h-px bg-brand-terracotta mb-6" />

            {/* Description */}
            <p className="font-body-lg text-base md:text-lg text-white/75 max-w-lg leading-relaxed">
              {category.description}
            </p>

            {/* CTA */}
            <a
              href="#products"
              className="mt-10 self-start inline-flex items-center gap-3 min-h-[52px] px-8 bg-brand-terracotta text-white font-button text-button uppercase hover:bg-white hover:text-brand-sage transition-all duration-300"
            >
              Shop Now
              <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_downward</span>
            </a>
          </div>

        </div>

        <TrustBar />

        {/* Products */}
        <section id="products" className="max-w-[1440px] mx-auto px-5 md:px-10 py-12 md:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14 pb-6 border-b border-outline-variant/40">
            <div>
              <span className="font-label-caps text-label-caps text-brand-terracotta uppercase mb-2 block">
                {category.label}
              </span>
              <h2 className="font-h2 text-h2-mobile md:text-h2 text-brand-sage">
                {category.products.length} Products
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="sort-by" className="font-body-md text-sm text-on-surface-variant">
                Sort by:
              </label>
              <select
                id="sort-by"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="font-body-md text-sm text-brand-sage border border-outline-variant px-4 py-2 bg-transparent focus:outline-none cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {sortedProducts.map((product) => {
              // Sale tag takes priority over the existing badge: clearance first,
              // then a generic "Save £X" tag if there's a strike-through price.
              const saleTag = product.clearance
                ? { text: `Clearance · ${product.discountPct}% Off`, className: 'bg-brand-terracotta text-white' }
                : product.saving > 0
                  ? { text: `Save £${product.saving.toLocaleString('en-GB')}`, className: 'bg-brand-sage text-white' }
                  : null;
              const topBadge = saleTag ?? product.badge;
              const lowStock = product.stockCount != null && product.stockCount <= 5;

              return (
                <div key={product.id} className="group block">
                  <Link href={`/product/${product.slug}`} prefetch className="block">
                    <div className="aspect-[4/5] bg-surface-container overflow-hidden relative mb-5 md:mb-6">
                      <Image
                        src={product.src}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {topBadge && (
                        <div className={`absolute top-4 left-4 px-4 py-1.5 font-label-caps text-[10px] tracking-widest shadow-sm uppercase ${topBadge.className}`}>
                          {topBadge.text}
                        </div>
                      )}
                    </div>
                    <h3 className="font-h3 text-2xl text-brand-sage mb-2 group-hover:text-brand-terracotta transition-colors">{product.name}</h3>
                    <p className="font-body-md text-base text-on-surface-variant mb-4 font-light">{product.variant}</p>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="font-body-lg font-bold text-brand-sage text-xl">{product.price}</span>
                      {product.originalPrice && (
                        <span className="font-body-md text-base text-on-surface-variant line-through">
                          {product.originalPrice}
                        </span>
                      )}
                      {product.saving > 0 && (
                        <span className="font-body-md text-sm font-semibold text-brand-terracotta">
                          Save £{product.saving.toLocaleString('en-GB')}
                        </span>
                      )}
                    </div>
                    <p className={`mt-2 font-body-md text-sm ${lowStock ? 'text-brand-terracotta font-semibold' : 'text-on-surface-variant'}`}>
                      {lowStock ? (
                        <>
                          <span className="inline-block w-2 h-2 rounded-full bg-brand-terracotta mr-2 align-middle" />
                          Low In Stock — Only {product.stockCount} available
                        </>
                      ) : (
                        <>
                          <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 align-middle" />
                          In Stock
                        </>
                      )}
                    </p>
                    <div className="mt-5 md:mt-6 w-full min-h-[52px] bg-brand-sage text-white font-button text-button uppercase group-hover:bg-brand-terracotta transition-colors flex items-center justify-center">
                      View Product
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      addItem(product.slug);
                      openCart();
                    }}
                    className="mt-2 w-full min-h-[52px] bg-[#E07A3C] text-white font-button text-button uppercase hover:bg-[#C9652A] transition-colors flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base" aria-hidden="true">add_shopping_cart</span>
                    Add to Basket
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <Newsletter />
      </main>
      <CartDrawer />
      <Footer />
    </>
  );
}
