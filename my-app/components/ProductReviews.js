'use client';
import { useState } from 'react';

function StarRow({ rating, sizeClass = 'text-base' }) {
  return (
    <div className="flex gap-0.5" style={{ color: '#FFB800' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined ${sizeClass}`}
          style={{ fontVariationSettings: i < Math.floor(rating) ? "'FILL' 1" : "'FILL' 0" }}
          aria-hidden="true"
        >
          star
        </span>
      ))}
    </div>
  );
}

function formatReviewDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function ProductReviews({ product, reviews }) {
  const [expanded, setExpanded] = useState(false);
  if (!reviews || reviews.length === 0) return null;

  const visibleReviews = expanded ? reviews : reviews.slice(0, 3);

  // Distribution mirrors the sample reviews we generated so the bars match
  // what's actually shown — gives a customer something honest to scan.
  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));
  const distMax = Math.max(...distribution.map((d) => d.count), 1);

  return (
    <section className="mt-16 md:mt-20 max-w-4xl border-t border-outline-variant/40 pt-12">
      {/* Header + summary */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 mb-10">
        <div>
          <span className="font-label-caps text-label-caps text-brand-terracotta uppercase mb-2 block">
            Customer Reviews
          </span>
          <h2 className="font-h2 text-2xl md:text-3xl text-brand-sage mb-4 leading-tight">
            What our customers say
          </h2>
          <div className="flex items-center gap-4">
            <span className="font-h1 text-5xl text-brand-sage leading-none">
              {product.rating}
            </span>
            <div>
              <StarRow rating={product.rating} sizeClass="text-lg" />
              <p className="font-body-md text-xs text-on-surface-variant mt-1">
                {product.reviewCount.toLocaleString('en-GB')} verified reviews
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {distribution.map(({ star, count }) => {
            const pct = (count / distMax) * 100;
            return (
              <div key={star} className="flex items-center gap-3">
                <span className="font-body-md text-xs text-on-surface-variant w-12">
                  {star} star
                </span>
                <div className="flex-1 h-2 bg-surface-container overflow-hidden">
                  <div
                    className="h-full bg-brand-sage transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="font-body-md text-xs text-on-surface-variant w-6 text-right">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Review list */}
      <div className="space-y-6">
        {visibleReviews.map((review) => (
          <article
            key={review.id}
            className="pb-6 border-b border-outline-variant/40 last:border-b-0 last:pb-0"
          >
            <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
              <div className="min-w-0">
                <StarRow rating={review.rating} sizeClass="text-base" />
                <p className="font-h3 text-base md:text-lg text-brand-sage leading-snug mt-1.5">
                  {review.title}
                </p>
              </div>
              <span className="font-body-md text-xs text-on-surface-variant shrink-0 mt-1">
                {formatReviewDate(review.date)}
              </span>
            </div>
            <p className="font-body-md text-base text-on-surface leading-relaxed mb-3">
              {review.body}
            </p>
            <p className="font-body-md text-sm text-on-surface-variant">
              <strong className="text-brand-sage">{review.author}</strong> · {review.location}
              {review.verified && (
                <span className="ml-3 inline-flex items-center gap-1 text-brand-sage uppercase text-[10px] tracking-widest font-button">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    verified
                  </span>
                  Verified Purchase
                </span>
              )}
            </p>
          </article>
        ))}
      </div>

      {reviews.length > 3 && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-8 inline-flex items-center gap-2 min-h-[48px] px-6 border border-brand-sage text-brand-sage font-button text-button uppercase hover:bg-brand-sage hover:text-white transition-colors"
        >
          {expanded
            ? 'Show fewer reviews'
            : `Show all ${product.reviewCount.toLocaleString('en-GB')} reviews`}
          <span
            className="material-symbols-outlined text-base transition-transform"
            style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
            aria-hidden="true"
          >
            expand_more
          </span>
        </button>
      )}
    </section>
  );
}
