import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const HELP_NAV = [
  { label: 'Customer Service', href: '/customer-service' },
  { label: 'Delivery Information', href: '/delivery-information' },
  { label: 'Returns & Refunds', href: '/returns-refunds' },
  { label: 'Order Tracking', href: '/order-tracking' },
  { label: 'Furniture Care Guide', href: '/furniture-care-guide' },
  { label: 'FAQs', href: '/faqs' },
];

export const ABOUT_NAV = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'The Cotswolds Studio', href: '/the-cotswolds-studio' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Press & Media', href: '/press-and-media' },
  { label: 'Careers', href: '/careers' },
  { label: 'Trade Programme', href: '/trade-programme' },
];

export default function InfoPageLayout({
  label,
  title,
  intro,
  currentHref,
  nav = HELP_NAV,
  navTitle = 'More Help',
  breadcrumbLabel = 'Help',
  breadcrumbHref = '/customer-service',
  children,
}) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero band */}
        <section className="bg-brand-sage text-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-14 md:py-20">
            <nav className="flex items-center gap-2 text-xs font-body-md uppercase tracking-widest text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href={breadcrumbHref} className="hover:text-white transition-colors">{breadcrumbLabel}</Link>
              <span>/</span>
              <span className="text-white/90">{title}</span>
            </nav>
            <span className="font-label-caps text-label-caps text-white/70 uppercase mb-3 block">
              {label}
            </span>
            <h1 className="font-h1 text-4xl md:text-6xl leading-tight mb-5 max-w-3xl">
              {title}
            </h1>
            {intro && (
              <p className="font-body-lg text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                {intro}
              </p>
            )}
          </div>
        </section>

        {/* Body */}
        <section className="bg-surface">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">
              <div className="min-w-0">{children}</div>

              <aside className="lg:sticky lg:top-24 space-y-6">
                <nav className="bg-surface-container-low p-6 border border-outline-variant/40">
                  <p className="font-button text-button uppercase tracking-widest text-brand-sage mb-4">
                    {navTitle}
                  </p>
                  <ul className="space-y-1">
                    {nav.map((item) => {
                      const active = item.href === currentHref;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block py-2.5 px-3 -mx-3 font-body-md text-sm transition-colors ${
                              active
                                ? 'bg-brand-sage text-white'
                                : 'text-on-surface hover:text-brand-sage hover:bg-white'
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="bg-brand-sage text-white p-6">
                  <p className="font-button text-button uppercase tracking-widest text-white/70 mb-3">
                    Speak to Us
                  </p>
                  <p className="font-body-md text-sm text-white/80 mb-5 leading-relaxed">
                    Prefer to talk it through? Our UK customer service team are based in
                    Cheltenham and happy to help.
                  </p>
                  <a
                    href="tel:08001234567"
                    className="block font-h3 text-2xl mb-1 hover:text-brand-terracotta transition-colors"
                  >
                    0800 123 4567
                  </a>
                  <p className="font-body-md text-xs text-white/70 mb-4">
                    Mon–Sat, 8am–8pm · Calls are free
                  </p>
                  <a
                    href="mailto:hello@heritagegarden.co.uk"
                    className="font-body-md text-sm text-white/90 underline hover:text-white"
                  >
                    hello@heritagegarden.co.uk
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <CartDrawer />
      <Footer />
    </>
  );
}

// Reusable building blocks for the page bodies

export function Section({ title, children }) {
  return (
    <section className="mb-12 last:mb-0">
      {title && (
        <h2 className="font-h2 text-2xl md:text-3xl text-brand-sage mb-5">{title}</h2>
      )}
      <div className="font-body-md text-base text-on-surface leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

export function CalloutCard({ icon, title, children }) {
  return (
    <div className="flex gap-4 p-5 bg-surface-container-low border border-outline-variant/40">
      {icon && (
        <span
          className="material-symbols-outlined text-brand-sage text-3xl shrink-0"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <div className="min-w-0">
        {title && (
          <p className="font-h3 text-lg text-brand-sage mb-1 leading-snug">{title}</p>
        )}
        <div className="font-body-md text-sm text-on-surface-variant leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
