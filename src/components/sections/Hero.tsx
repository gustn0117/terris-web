"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteData } from "@/lib/site";

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
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#f6f5f1]"
    >
      {/* layered backdrop: soft cream base + warm radial + faint vignette */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f4] via-[#f3f0e9] to-[#ebe7dd]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 25% 30%, rgba(200,169,106,0.16), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 80% 70%, rgba(28,46,74,0.10), transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
      </motion.div>

      <div className="container-x relative flex min-h-[100svh] flex-col items-center justify-center pb-[clamp(60px,11vh,160px)] pt-[112px] text-center md:pt-[160px]">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500 sm:gap-3 sm:text-[11px] sm:tracking-[0.28em] md:mb-10 md:text-[12px]"
        >
          <span className="inline-block h-px w-6 bg-neutral-400 sm:w-8" />
          <span>Terris partners · Asset Management</span>
          <span className="inline-block h-px w-6 bg-neutral-400 sm:w-8" />
        </motion.div>

        {/* Giant TERRIS — heavy serif filled with dark metallic gradient */}
        <motion.h1
          aria-label="TERRIS"
          style={{ y: titleY, scale: titleScale }}
          className="select-none font-display-en font-black leading-[0.85]"
        >
          <span
            className="text-fill-image hero-shimmer mx-auto block whitespace-nowrap"
            style={{
              backgroundImage:
                "linear-gradient(115deg, #050505 0%, #1c2e4a 22%, #c8a96a 50%, #1c2e4a 78%, #050505 100%)",
              backgroundSize: "220% 100%",
              backgroundPosition: "0% 50%",
              fontSize: "clamp(80px, 21vw, 290px)",
              letterSpacing: "-0.055em",
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
            className="font-serif-kr kr-balance mx-auto max-w-[36ch] text-[16px] font-medium leading-[1.55] text-neutral-900 sm:text-[20px] md:text-[28px]"
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
          className="absolute inset-x-0 bottom-[clamp(28px,5vh,56px)] flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.32em] text-neutral-500"
        >
          <span>Scroll</span>
          <span className="relative block h-px w-12 overflow-hidden bg-neutral-300">
            <motion.span
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 left-0 w-full bg-neutral-800"
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
