import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import CategoryStrip from '@/components/CategoryStrip';
import ProductGrid from '@/components/ProductGrid';
import BrandValues from '@/components/BrandValues';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CategoryStrip />
        <TrustBar />
        <ProductGrid />
        <BrandValues />
        <Testimonials />
        <Newsletter />
      </main>
      <CartDrawer />
      <Footer />
    </>
  );
}
