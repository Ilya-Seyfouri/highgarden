import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdZtFtNdNk6iA3QLaE3LkqP75wdEQteVY9z2qbn3bqnblDoIoP68y-Qn-svKdG46oceWJQRPSWbMv5QmMUGl3gnM861A_tXeULAv6lcstih9FsTHmQX0tsCUUUlwhRvcNkHAXIm3utVRrjKVgcmDh9bmQmKi9ye87FNTW8iQGuV_ijqC3TVWZyTAfAIzq2LYSQ1i4jUsA6bgLZEvj2_qaGtPOEAGlmTGVHi57CSZJjawzf3s_owcSCkRCfTbOgbfXy0LDs_36fafA"
          alt="A luxurious British country garden at golden hour with an outdoor corner sofa set with cream cushions and a low wooden coffee table."
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
      </div>

      <div className="relative z-10 text-center text-white px-5 md:px-8 w-full">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <span className="font-label-caps text-label-caps text-white/90 uppercase block">
            The 2024 Outdoor Collection
          </span>
          <h1 className="font-h1 text-h1-mobile md:text-h1 lg:text-[80px] drop-shadow-md">
            Crafted for English Summers
          </h1>
          <p className="font-body-lg text-lg md:text-2xl text-white max-w-2xl mx-auto font-light leading-relaxed">
            Elevating outdoor living with timeless design and sustainable craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-2 md:pt-4 max-w-md sm:max-w-none mx-auto">
            <a
              className="min-h-[60px] px-8 md:px-12 flex items-center justify-center bg-brand-terracotta text-white font-button text-button uppercase border-2 border-brand-terracotta hover:bg-transparent hover:text-white transition-all duration-300"
              href="#bestsellers"
            >
              Shop The Collection
            </a>
            <a
              className="min-h-[60px] px-8 md:px-12 flex items-center justify-center bg-white text-brand-sage font-button text-button uppercase border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300"
              href="#bestsellers"
            >
              Explore Dining Sets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
