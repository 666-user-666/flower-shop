import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Catalog />
      <About />
      <Reviews />
      <Contact />
    </div>
  );
}