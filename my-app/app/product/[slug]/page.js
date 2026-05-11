import { notFound } from 'next/navigation';
import {
  getProductBySlug,
  getRelatedProducts,
  getBundleProducts,
  getReviewsForProduct,
  getAllSlugs,
} from '@/lib/products';
import ProductPageLayout from '@/components/ProductPageLayout';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(slug, product.categoryHref);
  const bundleProducts = getBundleProducts(slug, product.categoryHref);
  const reviews = getReviewsForProduct(slug);

  return (
    <ProductPageLayout
      product={product}
      relatedProducts={relatedProducts}
      bundleProducts={bundleProducts}
      reviews={reviews}
    />
  );
}
