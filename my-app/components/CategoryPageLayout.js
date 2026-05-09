'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import TrustBar from '@/components/TrustBar';
import Newsletter from '@/components/Newsletter';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

export default function CategoryPageLayout({ category }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartOpen={() => setCartOpen(true)} />
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
              <span className="font-body-md text-sm text-on-surface-variant">Sort by:</span>
              <select className="font-body-md text-sm text-brand-sage border border-outline-variant px-4 py-2 bg-transparent focus:outline-none cursor-pointer">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {category.products.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="group block">
                <div className="aspect-[4/5] bg-surface-container overflow-hidden relative mb-5 md:mb-6">
                  <Image
                    src={product.src}
                    alt={product.alt}
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
                <h3 className="font-h3 text-2xl text-brand-sage mb-2 group-hover:text-brand-terracotta transition-colors">{product.name}</h3>
                <p className="font-body-md text-base text-on-surface-variant mb-4 font-light">{product.variant}</p>
                <span className="font-body-lg font-bold text-brand-sage text-xl block">{product.price}</span>
                <div className="mt-5 md:mt-6 w-full min-h-[52px] bg-brand-sage text-white font-button text-button uppercase hover:bg-brand-terracotta transition-colors flex items-center justify-center">
                  View Product
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Newsletter />
      </main>
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <Footer />
    </>
  );
}
