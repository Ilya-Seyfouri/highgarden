import { notFound } from 'next/navigation';
import { getProductBySlug, getAllSlugs } from '@/lib/products';
import ProductPageLayout from '@/components/ProductPageLayout';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductPageLayout product={product} />;
}
