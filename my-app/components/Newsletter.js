'use client';
export default function Newsletter() {
  return (
    <section className="py-16 md:py-stack-lg bg-surface">
      <div className="max-w-[800px] mx-auto px-5 md:px-10 text-center">
        <span className="font-label-caps text-label-caps text-brand-terracotta mb-4 block uppercase">
          The Garden Club
        </span>
        <h2 className="font-h1 text-h2-mobile md:text-h2 lg:text-5xl text-brand-sage mb-5 md:mb-6">
          Join the Garden Club
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 md:mb-12">
          Receive garden styling tips, new collection alerts, and 10% off your first order.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:border-b sm:border-brand-sage"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            aria-label="Email Address"
            className="flex-grow min-h-[60px] px-5 sm:px-0 bg-transparent border border-brand-sage sm:border-none focus:ring-0 focus:outline-none text-brand-sage text-base md:text-lg placeholder:text-brand-sage/50"
            placeholder="Enter your email address"
            type="email"
            required
          />
          <button
            className="min-h-[60px] px-8 bg-brand-sage sm:bg-transparent text-white sm:text-brand-sage font-button text-button uppercase hover:bg-brand-terracotta sm:hover:bg-transparent sm:hover:text-brand-terracotta transition-colors"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
