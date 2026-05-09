import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts } from '@/lib/products';
import ProductPageLayout from '@/components/ProductPageLayout';

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(params.slug, product.categoryHref);

  return <ProductPageLayout product={product} relatedProducts={relatedProducts} />;
}
