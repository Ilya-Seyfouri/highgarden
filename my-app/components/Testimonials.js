const reviews = [
  {
    rating: 5,
    quote: 'Bought this for our diamond anniversary and I must say, it has held up beautifully. Two summers in the rain and not a mark on it. Pleased we spent the money rather than going to one of the catalogue places.',
    name: 'Margaret Whitfield',

    location: 'North Yorkshire',
    product: 'Aspen Teak Dining Set',
  },
  {
    rating: 5,
    quote: 'Wife and I had been putting off replacing our old set for years. Finally took the plunge. Build quality is leagues above what we paid for back in 2009. The cushions do not sag, which I appreciate at my age.',
    name: 'David Thornton',
    location: 'Surrey',
    product: 'Dakota Corner Sofa',
  },
  {
    rating: 5,
    quote: 'Frankly, at 72 I wanted something that would outlast me. Lovely teak, sensible assembly. My son had it together in an afternoon while we had tea. No complaints whatsoever.',
    name: 'Elizabeth Pemberton',
    location: 'Cotswolds',
    product: 'Hartwood Extending Set',
  },
  {
    rating: 5,
    quote: 'Delivery chaps were polite and brought it round the back without me having to ask. That alone earns five stars these days. The furniture itself is excellent.',
    name: 'John Beaumont',
    location: 'Cheshire',
    product: 'Brompton 6-Seater',
  },
  {
    rating: 5,
    quote: 'Three storms this autumn and the umbrella has not so much as flinched. The fabric on our previous one tore in the first proper wind. Money well spent.',
    name: 'Patricia Hartley',
    location: 'Devon',
    product: 'Riviera Cantilever 3m',
  },
  {
    rating: 5,
    quote: 'Our gazebo arrived precisely when promised. Took a weekend to put together with my brother-in-law’s help. Looks rather grand, actually. The neighbours have been popping by to admire it.',
    name: 'Robert Sinclair',
    location: 'Hampshire',
    product: 'Manor Cedar Gazebo',
  },
  {
    rating: 4,
    quote: 'Cushions stood up to a Scottish summer, which says something. Colours have not faded one bit. Delivery was a few days late but the customer service team rang to apologise, which was decent of them.',
    name: 'Susan Forrester',
    location: 'Edinburgh',
    product: 'Linen Scatter Cushions',
  },
  {
    rating: 5,
    quote: 'Refreshing to find a company that does not treat us older customers like we are bothering them. The lady on the phone took her time explaining the warranty. I ended up buying twice as much as I had planned.',
    name: 'William Ashcroft',
    location: 'Pembrokeshire',
    product: 'Heritage Octagonal Gazebo',
  },
  {
    rating: 5,
    quote: 'Second purchase from Heritage. Lights this time. Husband was sceptical about the price but agreed they were properly made when they arrived. We use the garden far more in the evenings now.',
    name: 'Helen Marston',
    location: 'Northumberland',
    product: 'Festoon String Lights',
  },
  {
    rating: 5,
    quote: 'Hosted a fortieth around the new dining table last weekend. Everyone wanted to know where it came from. Worth every pound, even if my wife had to convince me at the time.',
    name: 'George Whitmore',
    location: 'Bath',
    product: 'Aspen Teak Dining Set',
  },
  {
    rating: 5,
    quote: 'I am rather wary of buying furniture online but a friend recommended Heritage. The five-year warranty gave me the confidence to go ahead. Sturdy, arrived on the day they said it would. No fuss.',
    name: 'Margaret Hughes',
    location: 'Bristol',
    product: 'Cotswold Round Bistro',
  },
  {
    rating: 5,
    quote: 'Should have bought these years ago. They have transformed our patio in the evenings. We sit out far later now. My wife has commented twice this week, and that is high praise from her.',
    name: 'Anthony Cromwell',
    location: 'Norfolk',
    product: 'Edison Bulb String Lights',
  },
  {
    rating: 5,
    quote: 'An heirloom piece, no doubt about it. Solid build, beautiful finish. We hope to pass it on to our daughter eventually. Heritage Garden have done a proper job here.',
    name: 'Catherine Blackwood',
    location: 'Kent',
    product: 'Hartwood Extending Set',
  },
  {
    rating: 5,
    quote: 'My wife and I are both in our seventies and finding outdoor furniture we can comfortably get in and out of is harder than people realise. The bench set was just right. Sturdy, decent height, no wobble.',
    name: 'Frederick Hawthorne',
    location: 'Yorkshire Dales',
    product: 'Devonshire Bench Set',
  },
  {
    rating: 4,
    quote: 'Wood quality was better than I had hoped. Took us longer than expected to assemble but the instructions were clear enough. Survived three months of Lake District weather without issue, which is the real test.',
    name: 'Joan Pickering',
    location: 'Lake District',
    product: 'Marlow 4-Seater Café',
  },
];

function Stars({ rating, size = 'text-base' }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) stars.push('star');
  if (half) stars.push('star_half');
  while (stars.length < 5) stars.push('star_outline');
  return (
    <div className="flex gap-0.5" style={{ color: '#FFB800' }}>
      {stars.map((icon, i) => (
        <span
          key={i}
          className={`material-symbols-outlined ${size}`}
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden="true"
        >
          {icon}
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="flex-none w-[300px] sm:w-[340px] md:w-[380px] bg-white text-on-surface p-6 md:p-7 shadow-lg flex flex-col gap-4 mx-3">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} size="text-lg" />
        <span className="flex items-center gap-1 text-[11px] text-brand-sage font-button uppercase tracking-widest">
          <span
            className="material-symbols-outlined text-base"
            style={{ fontVariationSettings: "'FILL' 1" }}
            aria-hidden="true"
          >
            verified
          </span>
          Verified
        </span>
      </div>
      <p className="font-body-md text-[15px] leading-relaxed text-on-surface">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="mt-auto pt-4 border-t border-outline-variant/40 space-y-2.5">
        <p className="font-bold text-brand-sage text-base">{review.name}</p>
        <div className="flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant text-[11px] font-medium">
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden="true"
            >
              location_on
            </span>
            {review.location}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sage/10 text-brand-sage text-[10px] uppercase tracking-widest font-button">
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden="true"
            >
              shopping_bag
            </span>
            {review.product}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const trackReviews = [...reviews, ...reviews];

  return (
    <section className="bg-brand-sage text-white py-16 md:py-stack-lg overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 text-center mb-10 md:mb-14">
        <span className="font-label-caps text-label-caps text-white/80 mb-4 block uppercase">
          Verified Customer Reviews
        </span>
        <h2 className="font-h2 text-h2-mobile md:text-h2 lg:text-5xl mb-6 md:mb-8">
          Loved by Gardeners Across Britain
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <Stars rating={5} size="text-2xl md:text-3xl" />
          <div className="text-base md:text-lg flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
            <span className="font-bold text-xl md:text-2xl">Excellent &middot; 4.8 / 5</span>
            <span className="text-white/80">from 4,287 verified reviews</span>
          </div>
        </div>
      </div>

      <div
        className="overflow-hidden"
        role="region"
        aria-label="Customer reviews carousel"
      >
        <div className="flex animate-scroll-reviews">
          {trackReviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>

      <div className="text-center mt-10 md:mt-14">
        <a
          href="#"
          className="inline-flex items-center gap-2 font-button text-button uppercase border-b-2 border-white pb-1 hover:border-white/60 transition-colors"
        >
          Read All 4,287 Reviews
          <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}
