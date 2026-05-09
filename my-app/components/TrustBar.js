const items = [
  {
    icon: 'support_agent',
    title: 'UK Customer Service',
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
    title: 'Free Premium Delivery',
    body: (
      <>
        On orders over &pound;1,500.
        <br />
        White-glove service available.
      </>
    ),
  },
  {
    icon: 'keyboard_return',
    title: '30-Day Returns',
    body: 'Hassle-free returns with collection from your home.',
  },
  {
    icon: 'workspace_premium',
    title: '5 Year Warranty',
    body: 'Comprehensive cover on every purchase, registered free.',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-surface-container-lowest border-y border-outline-variant/40">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <span
              className="material-symbols-outlined text-brand-sage text-4xl shrink-0"
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <div>
              <p className="font-h3 text-lg text-brand-sage mb-1.5">{item.title}</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
