'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getProductBySlug, priceToNumber } from '@/lib/products';

const CartContext = createContext(null);

const STORAGE_KEY = 'hg-cart-v1';

// Free-gift upsell: spend this much (in £, before delivery) and we add a
// complementary accessory to the basket as a thank-you.
export const FREE_GIFT_THRESHOLD = 400;
export const FREE_GIFT_SLUG = 'teak-furniture-oil';

function readStorage() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage once on mount.
  useEffect(() => {
    setItems(readStorage());
    setHydrated(true);
  }, []);

  // Persist after every change, but only after hydration so we don't
  // overwrite a returning visitor's cart with the initial empty array.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage may be full or blocked — silently degrade to in-memory cart.
    }
  }, [items, hydrated]);

  const addItem = useCallback((slug, { qty = 1, size = null } = {}) => {
    setItems((prev) => {
      // Treat slug+size as the line-item key so the same product in
      // different sizes stacks separately.
      const idx = prev.findIndex((c) => c.slug === slug && c.size === size);
      if (idx === -1) return [...prev, { slug, qty, size }];
      const next = [...prev];
      next[idx] = { ...next[idx], qty: next[idx].qty + qty };
      return next;
    });
  }, []);

  const removeItem = useCallback((slug, size = null) => {
    setItems((prev) => prev.filter((c) => !(c.slug === slug && c.size === size)));
  }, []);

  const setQty = useCallback((slug, size, qty) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((c) => !(c.slug === slug && c.size === size)));
      return;
    }
    setItems((prev) =>
      prev.map((c) => (c.slug === slug && c.size === size ? { ...c, qty } : c))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  // Hydrate items with the live product record so consumers always get
  // a fresh price/image even if a stored slug's data has been edited.
  const paidItems = useMemo(
    () =>
      items
        .map((c) => {
          const product = getProductBySlug(c.slug);
          if (!product) return null;
          return { ...c, product };
        })
        .filter(Boolean),
    [items]
  );

  const subtotal = useMemo(
    () => paidItems.reduce((sum, c) => sum + priceToNumber(c.product.price) * c.qty, 0),
    [paidItems]
  );

  // Free-gift logic. If the customer has already manually added the gift
  // product, we don't want to surprise-double it — they keep theirs and we
  // skip the auto-add.
  const freeGiftProduct = getProductBySlug(FREE_GIFT_SLUG);
  const userHasGiftSlug = items.some((c) => c.slug === FREE_GIFT_SLUG);
  const hasEarnedFreeGift = subtotal >= FREE_GIFT_THRESHOLD && !!freeGiftProduct && !userHasGiftSlug;
  const amountToFreeGift = Math.max(0, FREE_GIFT_THRESHOLD - subtotal);
  const freeGiftProgress = Math.min(1, subtotal / FREE_GIFT_THRESHOLD);

  const detailedItems = useMemo(() => {
    if (!hasEarnedFreeGift) return paidItems;
    return [
      ...paidItems,
      {
        slug: freeGiftProduct.slug,
        qty: 1,
        size: null,
        product: freeGiftProduct,
        isFreeGift: true,
      },
    ];
  }, [paidItems, hasEarnedFreeGift, freeGiftProduct]);

  const totalItems = useMemo(
    () => detailedItems.reduce((sum, c) => sum + c.qty, 0),
    [detailedItems]
  );

  const value = useMemo(
    () => ({
      items: detailedItems,
      hydrated,
      isOpen,
      addItem,
      removeItem,
      setQty,
      clear,
      openCart,
      closeCart,
      totalItems,
      subtotal,
      freeGiftThreshold: FREE_GIFT_THRESHOLD,
      freeGiftProduct,
      hasEarnedFreeGift,
      amountToFreeGift,
      freeGiftProgress,
    }),
    [detailedItems, hydrated, isOpen, addItem, removeItem, setQty, clear, openCart, closeCart, totalItems, subtotal, freeGiftProduct, hasEarnedFreeGift, amountToFreeGift, freeGiftProgress]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
