import Link from 'next/link';

const helpLinks = [
  { label: 'Customer Service', href: '/customer-service' },
  { label: 'Delivery Information', href: '/delivery-information' },
  { label: 'Returns & Refunds', href: '/returns-refunds' },
  { label: 'Order Tracking', href: '/order-tracking' },
  { label: 'Furniture Care Guide', href: '/furniture-care-guide' },
  { label: 'FAQs', href: '/faqs' },
];

const shopLinks = [
  { label: 'Outdoor Furniture', href: '/outdoor-furniture' },
  { label: 'Garden Parasols', href: '/garden-parasols' },
  { label: 'Gazebos', href: '/gazebos' },
  { label: 'Outdoor Lights', href: '/outdoor-lights' },
  { label: 'Accessories', href: '/accessories' },
  { label: 'Outlet', href: '#' },
];

const aboutLinks = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'The Cotswolds Studio', href: '/the-cotswolds-studio' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Press & Media', href: '/press-and-media' },
  { label: 'Careers', href: '/careers' },
  { label: 'Trade Programme', href: '/trade-programme' },
];

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay', 'Google Pay', 'Klarna'];


export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/40">
      {/* Main column area */}
      <div className="bg-brand-sage text-white">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16">
            {/* Brand */}
            <div className="lg:col-span-4 space-y-6 md:space-y-8">
              <div className="font-h1 text-3xl md:text-4xl text-white tracking-tight">Heritage Garden</div>
              <p className="font-body-md text-base text-white/75 leading-relaxed max-w-sm">
                Refining the British outdoor experience with furniture and decor crafted to last a lifetime.
              </p>
              <address className="not-italic font-body-md text-sm text-white/75 leading-relaxed space-y-1">
                <p className="font-bold text-white uppercase tracking-widest text-[11px] mb-2 font-button">
                  Cotswolds Design Studio
                </p>
                <p>1 Garden Lane</p>
                <p>Bourton-on-the-Water</p>
                <p>Gloucestershire GL54 0AA</p>
                <p className="pt-2">
                  <a href="mailto:hello@heritagegarden.co.uk" className="text-white hover:text-brand-terracotta transition-colors">
                    hello@heritagegarden.co.uk
                  </a>
                </p>
              </address>
              <div className="flex gap-3 pt-2">
                {[
                  { icon: 'facebook', label: 'Facebook' },
                  { icon: 'camera', label: 'Instagram' },
                  { icon: 'public', label: 'Pinterest' },
                  { icon: 'play_circle', label: 'YouTube' },
                ].map((s) => (
                  <a
                    key={s.label}
                    aria-label={s.label}
                    href="#"
                    className="w-11 h-11 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-brand-sage hover:border-white transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Help & Information */}
            <div className="lg:col-span-3 space-y-5 md:space-y-6">
              <h4 className="font-button text-button uppercase text-white">Help &amp; Information</h4>
              <ul className="space-y-3 md:space-y-4 font-body-md text-base text-white/75">
                {helpLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="hover:text-brand-terracotta transition-colors" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop */}
            <div className="lg:col-span-2 space-y-5 md:space-y-6">
              <h4 className="font-button text-button uppercase text-white">Shop</h4>
              <ul className="space-y-3 md:space-y-4 font-body-md text-base text-white/75">
                {shopLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="hover:text-brand-terracotta transition-colors" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="lg:col-span-3 space-y-5 md:space-y-6">
              <h4 className="font-button text-button uppercase text-white">About Heritage</h4>
              <ul className="space-y-3 md:space-y-4 font-body-md text-base text-white/75">
                {aboutLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="hover:text-brand-terracotta transition-colors" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Trust + Payments strip */}
      <div className="border-t border-outline-variant/40">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-8 md:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5" style={{ color: '#FFB800' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="text-sm text-on-surface-variant">
                <span className="font-bold text-brand-sage">4.8 / 5</span> on Trustpilot
              </span>
            </div>
            <span className="hidden sm:block w-px h-6 bg-outline-variant/60" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-outline-variant/60 text-xs text-on-surface-variant">
              <span
                className="material-symbols-outlined text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
                aria-hidden="true"
              >
                verified
              </span>
              Made in Britain
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-outline-variant/60 text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-base" aria-hidden="true">eco</span>
              FSC Certified Timber
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-widest text-on-surface-variant/80 font-button mr-2">
              Secure payment
            </span>
            {paymentMethods.map((p) => (
              <span
                key={p}
                className="text-[11px] uppercase tracking-wide font-bold text-on-surface-variant border border-outline-variant/60 px-2.5 py-1.5 bg-white"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
