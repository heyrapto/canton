import Navbar from "./components/shared/navbar";
import HeroSection from "./components/sections/hero";
import NewsSection from "./components/sections/news";
import FeaturesSection from "./components/sections/features";
import ConnectSection from "./components/sections/connect";
import Footer from "./components/shared/footer";
import CTASection from "./components/sections/cta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <NewsSection />
      <FeaturesSection />
      <CTASection />
      <ConnectSection />
      <Footer />
    </main>
  );
}