'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { useCart } from '@/lib/CartContext';

export default function ProductPageLayout({ product }) {
  const { addItem, openCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);

  const handleAddToBasket = () => {
    addItem(product.slug, { qty });
    openCart();
  };

  return (
    <>
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-5 md:px-10 py-8 md:py-12">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant mb-8">
          <Link href="/" className="hover:text-brand-sage">Home</Link>
          <span>/</span>
          <Link href={product.categoryHref} className="hover:text-brand-sage">{product.category}</Link>
          <span>/</span>
          <span className="text-brand-sage">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="aspect-square relative overflow-hidden bg-surface-container mb-3">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square relative overflow-hidden border-2 ${selectedImage === i ? 'border-brand-sage' : 'border-transparent'}`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="15vw" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="font-h1 text-4xl md:text-5xl text-brand-sage leading-tight mb-3">{product.name}</h1>
              <p className="text-base text-on-surface-variant">{product.variant}</p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-h2 text-4xl text-brand-sage">{product.price}</span>
              {product.inStock && (
                <span className="text-sm font-medium text-green-700">In stock</span>
              )}
            </div>

            <p className="text-base text-on-surface-variant leading-relaxed border-t border-outline-variant/40 pt-6">
              {product.shortDescription}
            </p>

            <div className="flex gap-3">
              <div className="flex items-center border border-outline-variant">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-11 h-[52px] flex items-center justify-center hover:bg-surface-container-low"
                >
                  −
                </button>
                <span className="w-10 text-center">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-11 h-[52px] flex items-center justify-center hover:bg-surface-container-low"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={handleAddToBasket}
                className="flex-1 min-h-[52px] bg-brand-sage text-white font-button uppercase hover:bg-brand-terracotta transition-colors"
              >
                Add to Basket
              </button>
            </div>

            <Link
              href={`/checkout?item=${product.slug}`}
              className="block w-full min-h-[52px] bg-[#E07A3C] text-white font-button uppercase hover:bg-[#C9652A] transition-colors flex items-center justify-center"
            >
              Checkout
            </Link>

            {product.details?.length > 0 && (
              <ul className="space-y-2 pt-6 border-t border-outline-variant/40">
                {product.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-base text-on-surface-variant">
                    <span className="text-brand-terracotta mt-1">•</span>
                    {d}
                  </li>
                ))}
              </ul>
            )}

            {product.dimensions && (
              <p className="text-sm text-on-surface-variant border-t border-outline-variant/40 pt-6">
                <span className="font-semibold text-brand-sage">Dimensions: </span>
                {product.dimensions}
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
