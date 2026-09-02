import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}