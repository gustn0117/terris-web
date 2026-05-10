"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroVideo, heroBg, siteData } from "@/lib/site";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const subOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);

  const letters = "TERRIS".split("");

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background video — autoplay/loop/muted, with a poster fallback */}
      <motion.div
        style={{ opacity: videoOpacity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroBg}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,0,0,0), rgba(0,0,0,0.5) 80%)",
          }}
        />
      </motion.div>

      <div className="container-x relative flex min-h-[100svh] flex-col items-center justify-center pb-[clamp(60px,11vh,160px)] pt-[112px] text-center md:pt-[160px]">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/70 sm:gap-3 sm:text-[11px] sm:tracking-[0.28em] md:mb-10 md:text-[12px]"
        >
          <span className="inline-block h-px w-6 bg-white/50 sm:w-8" />
          <span>Terris partners · Asset Management</span>
          <span className="inline-block h-px w-6 bg-white/50 sm:w-8" />
        </motion.div>

        {/* Giant TERRIS — Archivo Black, sky filled inside the glyphs */}
        <motion.h1
          aria-label="TERRIS"
          style={{ y: titleY, scale: titleScale }}
          className="select-none font-mono-display leading-[0.85]"
        >
          <span
            className="text-fill-image mx-auto block whitespace-nowrap"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 30%), url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center 35%",
              fontSize: "clamp(80px, 22vw, 320px)",
              letterSpacing: "-0.06em",
            }}
          >
            {letters.map((ch, i) => (
              <motion.span
                key={i}
                initial={{ y: "60%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ display: "inline-block" }}
              >
                {ch}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Tagline (centered) */}
        <motion.div
          style={{ opacity: subOpacity, y: subY }}
          className="mt-10 flex flex-col items-center gap-8 md:mt-14"
        >
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="kr-balance mx-auto max-w-[36ch] font-sans text-[16px] font-normal leading-[1.55] tracking-[-0.02em] text-white sm:text-[20px] md:text-[28px]"
          >
            {siteData.tagline}
          </motion.p>
        </motion.div>

        {/* Scroll cue — pinned bottom-center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          style={{ opacity: subOpacity }}
          className="absolute inset-x-0 bottom-[clamp(28px,5vh,56px)] flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/65"
        >
          <span>Scroll</span>
          <span className="relative block h-px w-12 overflow-hidden bg-white/25">
            <motion.span
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 left-0 w-full bg-white"
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
