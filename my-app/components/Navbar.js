'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';

const leftLinks = [
  { label: 'Outdoor Furniture', href: '/outdoor-furniture' },
  { label: 'Garden Parasols', href: '/garden-parasols', accent: true },
  { label: 'Gazebos', href: '/gazebos' },
];

const rightLinks = [
  { label: 'Outdoor Lights', href: '/outdoor-lights' },
  { label: 'Accessories', href: '/accessories', accent: true },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Navbar({ onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const handleCartClick = onCartOpen ?? openCart;

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-outline-variant/40">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10">
          <div className="relative flex items-center justify-between h-16 md:h-20">
            <button
              aria-label="Open menu"
              className="lg:hidden p-3 -ml-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>

            <div className="hidden lg:flex items-center gap-6">
              {leftLinks.map((l) => (
                <Link
                  key={l.label}
                  className={`font-button text-button uppercase transition-colors whitespace-nowrap ${
                    l.accent ? 'text-brand-terracotta hover:opacity-80' : 'text-primary hover:text-brand-terracotta'
                  }`}
                  href={l.href}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <Link
              className="absolute left-1/2 -translate-x-1/2 font-h1 text-2xl md:text-4xl text-brand-sage tracking-tight"
              href="/"
            >
              Heritage Garden
            </Link>

            <div className="flex items-center gap-1 md:gap-3">
              <div className="hidden lg:flex items-center gap-6 mr-4">
                {rightLinks.map((l) => (
                  <Link
                    key={l.label}
                    className={`font-button text-button uppercase transition-colors whitespace-nowrap ${
                      l.accent ? 'text-brand-terracotta hover:opacity-80' : 'text-primary hover:text-brand-terracotta'
                    }`}
                    href={l.href}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <button
                aria-label="Search"
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-brand-terracotta transition-colors"
              >
                <span className="material-symbols-outlined">search</span>
              </button>
              <button
                aria-label="Open cart"
                className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center relative hover:text-brand-terracotta transition-colors"
                onClick={handleCartClick}
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                <span
                  className={`absolute top-1 right-1 bg-brand-terracotta text-white text-[10px] min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center transition-opacity ${
                    totalItems > 0 ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {totalItems}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-brand-sage text-white py-2.5 text-center text-[12px] sm:text-[13px] font-medium tracking-widest uppercase px-4 flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-base" aria-hidden="true">local_shipping</span>
        Free Delivery on Orders Over &pound;100
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-[360px] bg-surface flex flex-col">
            <div className="flex items-center justify-between h-16 px-5 border-b border-outline-variant/40">
              <span className="font-h1 text-2xl text-brand-sage">Heritage Garden</span>
              <button
                aria-label="Close menu"
                className="p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                onClick={() => setMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>
            <nav className="flex flex-col py-4">
              {allLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-5 py-4 font-button text-button uppercase border-b border-outline-variant/30 ${
                    l.accent ? 'text-brand-terracotta' : 'text-primary'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
