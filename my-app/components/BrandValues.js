import Image from 'next/image';

export default function BrandValues() {
  return (
    <section className="bg-surface-container-lowest border-y border-outline-variant/40 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="font-label-caps text-label-caps text-brand-terracotta uppercase block mb-4">The Heritage Promise</span>
            <div className="space-y-6 md:space-y-8">
            <h2 className="font-h1 text-h2-mobile md:text-h2 lg:text-5xl text-brand-sage leading-tight">
              British Heritage Meets Modern Innovation
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              From our studio in the heart of the Cotswolds, we design furniture that respects the timeless beauty of the English garden while embracing materials that thrive in our unique climate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 md:pt-6">
              <div className="space-y-2 bg-white border border-outline-variant rounded-3xl px-6 py-6 shadow-md">
                <h4 className="font-h3 text-xl text-brand-sage">Built to Last</h4>
                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                  Sustainably sourced Grade-A teak and UV-resistant performance fabrics.
                </p>
              </div>
              <div className="space-y-2 bg-white border border-outline-variant rounded-3xl px-6 py-6 shadow-md">
                <h4 className="font-h3 text-xl text-brand-sage">Smart Design</h4>
                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                  Easy assembly systems and modular layouts for effortless versatility.
                </p>
              </div>
            </div>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden bg-surface-container order-1 lg:order-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRgQKN_dRlJAVzVi8SCBgkpfZlpm004A4zFstdLye0NNj61iLmoBXQAFgkoxWLuLE3QL-xQjHL32iP3zuIhZP_vcWLnYH9s3dun0S7baaZP0Fj7vEX1k546A5FalBw1Di9PphiDpyAkpvSCs8cvEfpyrAVuDrvO4J0gBaMSWoKL4tCAjQY06sHJ5STTWWFMbshTNBKNZQG7Ewscj4-Wu4kawIXSs_3SlQgTfO_xNmJ2D9xS40Cg2_ccKkvq-31GjRWOj_fuDJUjTM"
              alt="Heritage Garden design studio in the Cotswolds"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white p-5 md:p-8 max-w-[260px] shadow-2xl">
              <p className="font-h3 text-base md:text-lg text-brand-sage italic mb-2">
                &ldquo;Quality is never an accident; it is always the result of intelligent effort.&rdquo;
              </p>
              <span className="font-label-caps text-[10px] uppercase text-brand-terracotta">Cotswolds Design Studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
