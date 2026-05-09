'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { deliveryText, warrantyText } from '@/lib/products';

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" style={{ color: '#FFB800' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-lg"
          style={{ fontVariationSettings: i < Math.floor(rating) ? "'FILL' 1" : "'FILL' 0" }}
          aria-hidden="true"
        >
          star
        </span>
      ))}
    </div>
  );
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant/40">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-button text-button uppercase tracking-widest text-brand-sage">{title}</span>
        <span className="material-symbols-outlined text-brand-sage transition-transform duration-300" style={{ transform: open ? 'rotate(180deg)' : 'none' }}>
          expand_more
        </span>
      </button>
      {open && (
        <div className="pb-6 font-body-md text-base text-on-surface-variant leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPageLayout({ product, relatedProducts }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? null);
  const [qty, setQty] = useState(1);

  return (
    <>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <main>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-8 md:py-12">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-body-md uppercase tracking-widest text-on-surface-variant mb-8">
            <Link href="/" className="hover:text-brand-sage transition-colors">Home</Link>
            <span>/</span>
            <Link href={product.categoryHref} className="hover:text-brand-sage transition-colors">{product.category}</Link>
            <span>/</span>
            <span className="text-brand-sage">{product.name}</span>
          </nav>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

            {/* ── Image Gallery ── */}
            <div>
              {/* Main image */}
              <div className="aspect-square relative overflow-hidden bg-surface-container mb-3">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                {product.badge && (
                  <div className={`absolute top-4 left-4 px-4 py-1.5 font-label-caps text-[10px] tracking-widest uppercase ${product.badge.className}`}>
                    {product.badge.text}
                  </div>
                )}
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square relative overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-brand-sage' : 'border-transparent hover:border-outline-variant'}`}
                  >
                    <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" sizes="15vw" />
                  </button>
                ))}
              </div>
            </div>

            {/* ── Product Info ── */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-6">

              {/* Name + rating */}
              <div>
                <h1 className="font-h1 text-4xl md:text-5xl text-brand-sage leading-tight mb-3">{product.name}</h1>
                <div className="flex items-center gap-3">
                  <Stars rating={product.rating} />
                  <span className="font-body-md text-sm text-on-surface-variant">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-h2 text-4xl text-brand-sage">{product.price}</span>
                {product.inStock ? (
                  <span className="flex items-center gap-1.5 text-sm font-medium text-green-700">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    In stock
                  </span>
                ) : (
                  <span className="text-sm text-brand-terracotta font-medium">Out of stock</span>
                )}
              </div>

              {/* Short description */}
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed border-t border-outline-variant/40 pt-6">
                {product.shortDescription}
              </p>

              {/* Size selector */}
              {product.sizes?.length > 0 && (
                <div>
                  <p className="font-button text-button uppercase tracking-widest text-brand-sage mb-3">
                    Size: <span className="text-brand-terracotta">{selectedSize}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border font-body-md text-sm transition-colors ${
                          selectedSize === size
                            ? 'border-brand-sage bg-brand-sage text-white'
                            : 'border-outline-variant text-on-surface hover:border-brand-sage'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Qty + Add to basket */}
              <div className="flex gap-3">
                <div className="flex items-center border border-outline-variant">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-11 h-[52px] flex items-center justify-center hover:bg-surface-container-low transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">remove</span>
                  </button>
                  <span className="w-10 text-center font-body-md text-base">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-11 h-[52px] flex items-center justify-center hover:bg-surface-container-low transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">add</span>
                  </button>
                </div>
                <button className="flex-1 min-h-[52px] bg-brand-sage text-white font-button text-button uppercase hover:bg-brand-terracotta transition-colors">
                  Add to Basket
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-outline-variant/40">
                {[
                  { icon: 'local_shipping', label: 'Free Delivery', sub: 'Over £100' },
                  { icon: 'keyboard_return', label: '30-Day Returns', sub: 'From your home' },
                  { icon: 'workspace_premium', label: '5-Year Warranty', sub: 'Registered free' },
                ].map((b) => (
                  <div key={b.label} className="flex flex-col items-center text-center gap-1 p-3 bg-surface-container-low">
                    <span className="material-symbols-outlined text-brand-sage text-2xl">{b.icon}</span>
                    <span className="font-body-md text-xs font-semibold text-brand-sage leading-tight">{b.label}</span>
                    <span className="font-body-md text-[11px] text-on-surface-variant">{b.sub}</span>
                  </div>
                ))}
              </div>

              {/* Payment methods */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="font-body-md text-xs text-on-surface-variant uppercase tracking-widest mr-1">Pay with:</span>
                {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Klarna'].map((p) => (
                  <span key={p} className="text-[10px] uppercase tracking-wide font-bold text-on-surface-variant border border-outline-variant/60 px-2 py-1 bg-white">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Accordions ── */}
          <div className="mt-16 md:mt-24 max-w-3xl border-t border-outline-variant/40">
            <Accordion title="Product Details">
              <ul className="space-y-2 mt-2">
                {product.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-brand-terracotta text-base mt-0.5 shrink-0">check</span>
                    {d}
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Dimensions & Specifications">
              <p className="mt-2">{product.dimensions}</p>
            </Accordion>
            <Accordion title="Delivery Information">
              <p className="mt-2">{deliveryText}</p>
            </Accordion>
            <Accordion title="5-Year Warranty">
              <p className="mt-2">{warrantyText}</p>
            </Accordion>
          </div>

          {/* ── Related Products ── */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 md:mt-28">
              <div className="mb-10">
                <span className="font-label-caps text-label-caps text-brand-terracotta uppercase mb-2 block">You May Also Like</span>
                <h2 className="font-h2 text-h2-mobile md:text-h2 text-brand-sage">Complete Your Garden</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((p) => (
                  <Link key={p.slug} href={`/product/${p.slug}`} className="group">
                    <div className="aspect-[4/5] bg-surface-container overflow-hidden relative mb-4">
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-h3 text-xl text-brand-sage mb-1">{p.name}</h3>
                    <p className="font-body-md text-sm text-on-surface-variant mb-2">{p.variant}</p>
                    <span className="font-body-lg font-bold text-brand-sage">{p.price}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
