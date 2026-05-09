import Image from 'next/image';

const cartItems = [
  {
    id: 1,
    name: 'Arden Pillar Light',
    qty: 1,
    price: '£245',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGpdDE17cuSHtIdMdYIZe83f2jh2f9i3CtRvHRA4WjwOoSzSAqJTHV9lDqkNOfkgNKDgs8HhHjvnJAhYnUAU0hZIUy4_jghb_zdcxsRtIgq5nOtD8lXG3iD5q3mvtB95Fmf_sKWeUJKNarBn8LQZIkS5Rp7BEQr8DrARd2DE3IZhZsfhlBlSfoQzclV4xm7_IlU_WDcbXUEhcZGM3Io8acICJtwVqIqA9QxVfLVxS-V8MEU-u0UEEK3ww-orsSphTIrWRVhSVDgGQ',
    alt: 'Close up of Arden Pillar Light',
  },
];

export default function CartDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
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
            <span className="font-label-caps text-label-caps text-brand-terracotta uppercase block mb-1">Heritage Garden</span>
            <h2 className="font-h2 text-2xl text-brand-sage leading-none">Your Selection</h2>
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
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-5 items-start">
              <div className="relative w-24 h-24 shrink-0 overflow-hidden border border-outline-variant/40">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="font-h3 text-lg text-brand-sage mb-1 leading-snug">{item.name}</h5>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-body-md text-xs text-on-surface-variant uppercase tracking-widest">Qty: {item.qty}</span>
                  <button className="text-xs text-brand-terracotta font-body-md uppercase tracking-widest hover:opacity-70 transition-opacity">Remove</button>
                </div>
              </div>
              <span className="font-h3 text-lg text-brand-sage shrink-0">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-outline-variant/40 space-y-5">
          <div className="flex justify-between items-center">
            <span className="font-body-md text-sm text-on-surface-variant uppercase tracking-widest">Subtotal</span>
            <span className="font-h3 text-2xl text-brand-sage">£245.00</span>
          </div>
          <p className="font-body-md text-xs text-on-surface-variant">Delivery calculated at checkout. Free on orders over £100.</p>
          <button className="w-full min-h-[52px] bg-brand-sage text-white font-button text-button uppercase hover:bg-brand-terracotta transition-colors">
            Proceed to Checkout
          </button>
          <button
            onClick={onClose}
            className="w-full min-h-[48px] border border-brand-sage text-brand-sage font-button text-button uppercase hover:bg-surface-container-low transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </aside>
    </>
  );
}
