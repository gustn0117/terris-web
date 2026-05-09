import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import About from "@/components/sections/About";
import CoreCompetency from "@/components/sections/CoreCompetency";
import IntroOverlay from "@/components/IntroOverlay";
import Marquee from "@/components/effects/Marquee";

export default function HomePage() {
  return (
    <>
      <IntroOverlay />
      <Hero />

      <section
        aria-hidden
        className="relative overflow-hidden bg-[var(--color-bg-dark)] py-10 text-white md:py-14"
      >
        <Marquee
          duration={42}
          items={[
            "TERRIS",
            "Asset Management",
            "변화의 가능성을 읽다",
            "Real Estate",
            "신뢰 기반의 운용",
            "Value-Add",
            "Build Wealth",
          ]}
          className="font-serif-en text-[clamp(40px,7vw,96px)] font-light leading-none tracking-tight text-white"
        />
      </section>

      <Philosophy />
      <About />
      <CoreCompetency />
    </>
  );
}
