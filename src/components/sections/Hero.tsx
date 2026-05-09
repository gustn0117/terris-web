"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroBg, siteData } from "@/lib/site";

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

  // letter-by-letter entry
  const letters = "TERRIS".split("");

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--color-bg-soft)]"
    >
      {/* subtle top gradient that fades the page surface */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f6f5f1] to-[#f6f5f1]"
      />

      <div className="container-x flex min-h-[100svh] flex-col justify-end pb-[clamp(80px,12vh,160px)] pt-[180px] md:pt-[200px]">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500 md:mb-10 md:text-[12px]"
        >
          <span className="inline-block h-px w-8 bg-neutral-400" />
          <span>Terris partners · Asset Management</span>
        </motion.div>

        {/* Giant TERRIS — image filled */}
        <motion.h1
          aria-label="TERRIS"
          style={{ y: titleY, scale: titleScale }}
          className="text-fill-image select-none font-serif-en font-medium leading-[0.86]"
        >
          <span
            className="block text-fill-image"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 35%), url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center 35%",
              fontSize: "clamp(96px, 22vw, 360px)",
              letterSpacing: "-0.04em",
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

        {/* Tagline */}
        <motion.div
          style={{ opacity: subOpacity, y: subY }}
          className="mt-10 flex flex-col items-start justify-between gap-8 md:mt-14 md:flex-row md:items-end"
        >
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-kr max-w-[26ch] text-[20px] font-medium leading-[1.5] text-neutral-900 md:text-[28px]"
          >
            {siteData.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="flex items-center gap-4 text-[12px] uppercase tracking-[0.24em] text-neutral-500"
          >
            <span>Scroll</span>
            <span className="relative block h-px w-12 overflow-hidden bg-neutral-200">
              <motion.span
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 left-0 w-full bg-neutral-700"
              />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
