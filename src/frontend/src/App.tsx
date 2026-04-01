import { Toaster } from "@/components/ui/sonner";
import ConversionSection from "./components/ConversionSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductCategories from "./components/ProductCategories";
import ProductGallery from "./components/ProductGallery";
import StickyCallButton from "./components/StickyCallButton";
import TopBar from "./components/TopBar";
import TrustBar from "./components/TrustBar";
import TrustedBrands from "./components/TrustedBrands";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen font-jakarta">
      <Toaster richColors position="top-center" />
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ProductCategories />
        <ProductGallery />
        <TrustedBrands />
        <WhyChooseUs />
        <ConversionSection />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
}
