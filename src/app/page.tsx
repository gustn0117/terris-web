import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import About from "@/components/sections/About";
import CoreCompetency from "@/components/sections/CoreCompetency";
import CEO from "@/components/sections/CEO";
import Strategy from "@/components/sections/Strategy";
import Notice from "@/components/sections/Notice";
import IntroOverlay from "@/components/IntroOverlay";

export default function HomePage() {
  return (
    <>
      <IntroOverlay />
      <Hero />
      <Philosophy />
      <About />
      <CoreCompetency />
      <CEO />
      <Strategy />
      <Notice />
    </>
  );
}
