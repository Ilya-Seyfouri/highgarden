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
    <aside
      className={`fixed right-0 top-0 bottom-0 z-[100] flex flex-col p-margin h-full w-96 bg-surface-dim/80 backdrop-blur-3xl saturate-180 border-l border-white/20 transition-transform duration-500 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="font-h2 text-h2 text-primary leading-none mb-1">Your Selection</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Premium Outdoor Living</p>
        </div>
        <button
          onClick={onClose}
          className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:rotate-90 transition-all duration-500"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <button className="bg-secondary-container text-on-secondary-container rounded-full px-6 py-2 font-label-caps text-label-caps flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">shopping_bag</span>
          Basket
        </button>
        <button className="text-on-surface-variant hover:text-on-surface px-6 py-2 font-label-caps text-label-caps transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">favorite</span>
          Wishlist
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6 mb-8 pr-2">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 items-center">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden glass-card flex-shrink-0">
              <Image src={item.src} alt={item.alt} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h5 className="font-h3 text-xl mb-1">{item.name}</h5>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest">Qty: {item.qty}</p>
            </div>
            <span className="font-h3 text-lg text-primary">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto space-y-6 pt-8 border-t border-white/10">
        <div className="flex justify-between items-center">
          <span className="font-label-caps text-label-caps opacity-60">Subtotal</span>
          <span className="font-h3 text-2xl text-white">£245.00</span>
        </div>
        <button className="w-full py-5 bg-primary-container text-on-primary-container rounded-full font-label-caps text-label-caps tracking-[2px] hover:scale-105 transition-all duration-300">
          Proceed to Checkout
        </button>
      </div>
    </aside>
  );
}
