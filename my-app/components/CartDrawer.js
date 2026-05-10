'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { formatPrice, priceToNumber } from '@/lib/products';

function FreeGiftCard({ amountToFreeGift, hasEarnedFreeGift, freeGiftProduct, progress }) {
  if (!freeGiftProduct) return null;
  return (
    <div className="mb-6 p-4 bg-brand-sage text-white">
      <div className="flex items-center gap-2 mb-2">
        <span
          className="material-symbols-outlined text-xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden="true"
        >
          {hasEarnedFreeGift ? 'redeem' : 'card_giftcard'}
        </span>
        <p className="font-button text-button uppercase tracking-widest text-white">
          {hasEarnedFreeGift ? 'Free Gift Unlocked' : 'Free Gift Offer'}
        </p>
      </div>
      <p className="font-body-md text-sm text-white/90 leading-snug mb-3">
        {hasEarnedFreeGift ? (
          <>
            We&apos;ve added a complimentary{' '}
            <strong className="text-white">{freeGiftProduct.name}</strong> to your basket — our
            thanks for spending over {formatPrice(400)}.
          </>
        ) : (
          <>
            You&apos;re{' '}
            <strong className="text-white">{formatPrice(amountToFreeGift)}</strong> away from a
            free <strong className="text-white">{freeGiftProduct.name}</strong>.
          </>
        )}
      </p>
      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-terracotta transition-all duration-500"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
    </div>
  );
}

export default function CartDrawer({ isOpen: isOpenProp, onClose: onCloseProp }) {
  const {
    items,
    isOpen: ctxIsOpen,
    closeCart,
    removeItem,
    setQty,
    subtotal,
    totalItems,
    freeGiftProduct,
    hasEarnedFreeGift,
    amountToFreeGift,
    freeGiftProgress,
  } = useCart();
  // Backwards-compatible: callers can still pass isOpen/onClose, otherwise
  // the drawer self-manages via context.
  const isOpen = isOpenProp ?? ctxIsOpen;
  const onClose = onCloseProp ?? closeCart;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[99] bg-black/30"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed right-0 top-0 bottom-0 z-[100] flex flex-col h-full w-[420px] max-w-full bg-white border-l-2 border-brand-sage shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant/40">
          <div>
            <span className="font-label-caps text-label-caps text-brand-terracotta uppercase block mb-1">
              Heritage Garden
            </span>
            <h2 className="font-h2 text-2xl text-brand-sage leading-none">
              Your Basket{' '}
              {totalItems > 0 && (
                <span className="text-on-surface-variant text-base font-body-md">
                  ({totalItems})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="w-11 h-11 border border-outline-variant flex items-center justify-center hover:border-brand-sage hover:text-brand-sage transition-all"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">
                shopping_bag
              </span>
              <p className="font-h3 text-xl text-brand-sage mb-2">Your basket is empty</p>
              <p className="font-body-md text-sm text-on-surface-variant max-w-[260px]">
                Browse the range and add the pieces that catch your eye.
              </p>
            </div>
          ) : (
            <>
              <FreeGiftCard
                amountToFreeGift={amountToFreeGift}
                hasEarnedFreeGift={hasEarnedFreeGift}
                freeGiftProduct={freeGiftProduct}
                progress={freeGiftProgress}
              />
              <ul className="space-y-6">
                {items.map((item) => {
                  const lineTotal = priceToNumber(item.product.price) * item.qty;
                  return (
                    <li key={`${item.slug}-${item.size ?? 'default'}-${item.isFreeGift ? 'gift' : 'paid'}`} className="flex gap-4 items-start">
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={onClose}
                        className="relative w-24 h-24 shrink-0 overflow-hidden border border-outline-variant/40 bg-surface-container"
                      >
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                        {item.isFreeGift && (
                          <span className="absolute top-1 left-1 px-1.5 py-0.5 bg-brand-sage text-white text-[9px] font-bold uppercase tracking-widest">
                            Free
                          </span>
                        )}
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/product/${item.slug}`}
                          onClick={onClose}
                          className="font-h3 text-base text-brand-sage leading-snug hover:text-brand-terracotta transition-colors block"
                        >
                          {item.product.name}
                        </Link>
                        {item.size && (
                          <p className="font-body-md text-xs text-on-surface-variant mt-1">
                            Size: {item.size}
                          </p>
                        )}
                        {item.isFreeGift ? (
                          <p className="mt-3 font-body-md text-xs text-brand-sage uppercase tracking-widest">
                            Complimentary gift · Qty 1
                          </p>
                        ) : (
                          <div className="flex items-center justify-between mt-3 gap-3">
                            <div className="flex items-center border border-outline-variant">
                              <button
                                onClick={() => setQty(item.slug, item.size, item.qty - 1)}
                                aria-label="Decrease quantity"
                                className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-low transition-colors"
                              >
                                <span className="material-symbols-outlined text-sm">remove</span>
                              </button>
                              <span className="w-8 text-center font-body-md text-sm">{item.qty}</span>
                              <button
                                onClick={() => setQty(item.slug, item.size, item.qty + 1)}
                                aria-label="Increase quantity"
                                className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-low transition-colors"
                              >
                                <span className="material-symbols-outlined text-sm">add</span>
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.slug, item.size)}
                              className="text-xs text-brand-terracotta font-body-md uppercase tracking-widest hover:opacity-70 transition-opacity"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                      </div>
                      <span className={`font-h3 text-base shrink-0 ${item.isFreeGift ? 'text-brand-terracotta' : 'text-brand-sage'}`}>
                        {item.isFreeGift ? 'FREE' : formatPrice(lineTotal)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-outline-variant/40 space-y-5">
          <div className="flex justify-between items-baseline">
            <span className="font-body-md text-sm text-on-surface-variant uppercase tracking-widest">
              Subtotal
            </span>
            <span className="font-h3 text-2xl text-brand-sage">
              {formatPrice(subtotal)}
            </span>
          </div>
          <p className="font-body-md text-xs text-on-surface-variant">
            Delivery calculated at checkout. Free on orders over £100.
          </p>
          <Link
            href="/checkout"
            onClick={onClose}
            aria-disabled={items.length === 0}
            className={`flex items-center justify-center text-center w-full min-h-[52px] font-button text-button uppercase transition-colors ${
              items.length === 0
                ? 'bg-outline-variant text-on-surface-variant cursor-not-allowed pointer-events-none'
                : 'bg-brand-sage text-white hover:bg-brand-terracotta'
            }`}
          >
            Proceed to Checkout
          </Link>
          <button
            onClick={onClose}
            className="block w-full min-h-[48px] border border-brand-sage text-brand-sage font-button text-button uppercase hover:bg-surface-container-low transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </aside>
    </>
  );
}
