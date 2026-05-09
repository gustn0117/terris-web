import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import About from "@/components/sections/About";
import CoreCompetency from "@/components/sections/CoreCompetency";
import IntroOverlay from "@/components/IntroOverlay";

export default function HomePage() {
  return (
    <>
      <IntroOverlay />
      <Hero />
      <Philosophy />
      <About />
      <CoreCompetency />
    </>
  );
}
