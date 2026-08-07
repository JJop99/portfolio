import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import FolderPrompt from "./components/FolderPrompt";
import About from "./components/About";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <FolderPrompt />
      <About />
      <CTASection />
    </main>
  );
}
