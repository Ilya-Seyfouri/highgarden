const orange = { WebkitTextFillColor: 'var(--color-brand-terracotta)' };

const items = [
  {
    icon: 'support_agent',
    title: (
      <>
        <span className="text-brand-terracotta" style={orange}>UK</span><br />Customer Service
      </>
    ),
    body: (
      <>
        Mon&ndash;Sat 9am&ndash;6pm
        <br />
        <a href="tel:08001234567" className="font-bold text-brand-sage hover:text-brand-terracotta">
          0800 123 4567
        </a>
      </>
    ),
  },
  {
    icon: 'local_shipping',
    title: (
      <>
        <span className="text-brand-terracotta" style={orange}>Free</span><br />Premium Delivery
      </>
    ),
    body: (
      <>
        On orders over &pound;1,500.
        <br />
        White-glove service available.
      </>
    ),
  },
  {
    icon: 'inventory_2',
    title: (
      <>
        <span className="text-brand-terracotta" style={orange}>30-Day </span>Returns
      </>
    ),
    body: 'Hassle-free returns with collection from your home.',
  },
  {
    icon: 'workspace_premium',
    title: (
      <>
        <span className="text-4xl font-extrabold leading-none" style={orange}>5</span>
        {' '}Year Warranty
      </>
    ),
    body: 'Comprehensive cover on every purchase, registered free.',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-surface-container-lowest border-y border-outline-variant/40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.icon}
            className="flex flex-col items-start gap-3 bg-white border border-outline-variant rounded-3xl px-7 py-8 shadow-md"
          >
            <span
              className="material-symbols-outlined text-brand-sage text-5xl shrink-0"
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <p className="trust-title-shine font-h3 text-2xl font-semibold">{item.title}</p>
            <p className="text-base text-on-surface leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
