import Navbar from "./components/shared/navbar";
import HeroSection from "./components/sections/hero";
import NewsSection from "./components/sections/news";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <NewsSection />
    </main>
  );
}
