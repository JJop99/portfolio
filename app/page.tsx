import InfoStrip from "./components/InfoStrip";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import FolderPrompt from "./components/FolderPrompt";
import About from "./components/About";
import CTASection from "./components/CTASection";
import Colophon from "./components/Colophon";
import KineticBootstrap from "./components/KineticBootstrap";

export default function Home() {
  return (
    <>
      <KineticBootstrap />
      <InfoStrip />
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <Marquee />
        <Services />
        <FolderPrompt />
        <About />
        <CTASection />
      </main>
      <Colophon />
    </>
  );
}
