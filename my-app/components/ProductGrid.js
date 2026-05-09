import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Dakota Corner Sofa Set',
    variant: 'Modular luxury in Slate & Cream',
    price: '£1,899.00',
    badge: { text: 'Quick Delivery', className: 'bg-white text-on-surface border border-outline-variant/40' },
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuU3QRN2YbaV_n8obnnVmDIsfkxFrIhgyoLaGdXXYIT0omI6ljeZQUfiNcy3OnHh5ubo56Hz-SJGfkGEFsyy4QMHyfPeKrErEecPuxGTxoqhEkizZlkZ4uktuOcI2x3iawk0Y76IksAehg3qx7bU4AhE2cqy33jmr6zD_tnW_aygCCLMsfCz4fNLWJHjpB4IxmCRVKNAkz7I74vLmyHaeoMyiLnoiHG6v8K43O-IZzluMsyqZOzikYZmisD5o0RnjEldwPZUxaunY',
    alt: 'Dakota corner sofa set with cream cushions in a stylish garden',
  },
  {
    id: 2,
    name: 'Aspen Teak Dining Set',
    variant: '8-seater sustainable teak masterpiece',
    price: '£2,450.00',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr9MDuRemSbnqhKazqggYPqsOcji5ELKhVZr5frTuVmDPrssDXfwygMn8jSfZmRFEhVMfB8P6Lf6zi2QPCM56uY_nYfJyVM1yuy410C1sEN1Sa5l_2B8knKtmvL6NG_iP-sJpxFjiE_y-5KrCBNYtAdnMp3AsQ8G_7uTQ-xpYFdRM6h5ypG_rqTo_S440NpZWQrCsOjMpcYYvAky21n4h4j900ZbwF7SQFtpIR7-e9kxQW1afFad8imSfOF_5cLw77rotWA3yirWI',
    alt: 'Aspen 8-seater teak dining set on a stone terrace',
  },
  {
    id: 3,
    name: 'Shiro Artisan Rope Set',
    variant: 'Contemporary hand-woven pair',
    price: '£895.00',
    badge: { text: 'Limited Stock', className: 'bg-brand-terracotta text-white' },
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1QOAZQXrybRu5Tdkfh0XkxtUNJ7n7zhhUhgBMZPrHH5vgzTMSIPVhv3NTS3-hEOKoIbUtvZmY5WO9djEKXMGkZuEQ6WJpNVO04i0dPEQXqG3Jj925aD0CShgR5116NLGDibK-HQBkRjCiRA2viaEyYbXyg2TzauJq291yRDU0GOoBDR731_7QvY2Q4m6SPGj_P-NIbmxHvySK-ADp1yUcYbL_3vLawxyZls4s9kIAmu04qWJnFxYt3xGtBq0GP2vUISZOzk4cfbA',
    alt: 'Shiro hand-woven rope chairs in a sunlit garden',
  },
];

export default function ProductGrid() {
  return (
    <section id="bestsellers" className="max-w-[1440px] mx-auto px-5 md:px-10 py-16 md:py-stack-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-10 md:mb-16 gap-4">
        <div>
          <span className="font-label-caps text-label-caps text-brand-terracotta mb-2 block uppercase">Most Wanted</span>
          <h2 className="font-h2 text-h2-mobile md:text-h2 text-brand-sage">The Bestseller List</h2>
        </div>
        <a
          className="font-button text-button text-brand-sage hover:text-brand-terracotta border-b border-brand-sage hover:border-brand-terracotta pb-1 transition-all uppercase self-start sm:self-end"
          href="#"
        >
          View Entire Range
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden relative mb-5 md:mb-6">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.badge && (
                <div className={`absolute top-4 left-4 px-4 py-1.5 font-label-caps text-[10px] tracking-widest shadow-sm uppercase ${product.badge.className}`}>
                  {product.badge.text}
                </div>
              )}
            </div>
            <h3 className="font-h3 text-2xl md:text-2xl text-brand-sage mb-2">{product.name}</h3>
            <p className="font-body-md text-base text-on-surface-variant mb-4 font-light">{product.variant}</p>
            <div className="flex items-center gap-4">
              <span className="font-body-lg font-bold text-brand-sage text-xl">{product.price}</span>
            </div>
            <button className="mt-5 md:mt-6 w-full min-h-[52px] bg-brand-sage text-white font-button text-button uppercase hover:bg-brand-terracotta transition-colors">
              Add to Basket
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
