"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { strategyImage, siteData } from "@/lib/site";
import SplitTextReveal from "@/components/effects/SplitTextReveal";
import SpotlightCard from "@/components/effects/SpotlightCard";

export default function Strategy() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["-10%", "10%"]);
  const heroScale = useTransform(heroProgress, [0, 1], [1.05, 1]);

  return (
    <section
      id="strategy"
      aria-label="투자 및 전략"
      className="relative bg-[var(--color-bg-soft)] py-[var(--section-py)]"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              <span className="inline-block h-px w-8 bg-neutral-400" />
              <span>Investment Strategy</span>
            </div>
            <SplitTextReveal
              as="h2"
              unit="word"
              stagger={0.05}
              className="mt-6 font-serif-kr kr-keep text-[clamp(26px,3.4vw,42px)] font-medium leading-[1.28] text-neutral-900"
            >
              {"전략은 넓게, 실행은 깊게.\n성과는 반드시 만들어냅니다."}
            </SplitTextReveal>
          </div>
          <div className="md:col-span-5 md:pt-2">
            <p className="kr-keep max-w-[44ch] text-[13.5px] leading-[1.85] text-neutral-700 md:text-[14px]">
              Value-Add를 중심으로 다양한 투자 전략을 유기적으로 운용합니다.
              구조화된 투자 프로세스와 위험관리 절차로 투자자의 자산을 보호하는
              &ldquo;보이지 않는 방패&rdquo;를 운용합니다.
            </p>
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 aspect-[16/9] overflow-hidden sm:aspect-[16/8] md:mt-20 md:aspect-[16/7]"
        >
          <motion.div
            style={{ y: heroY, scale: heroScale }}
            className="absolute -inset-y-[12%] inset-x-0"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${strategyImage})` }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </motion.div>

        {/* Specialty area */}
        <div className="mt-16 md:mt-28">
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
            Area of Specialty
          </p>
          <h3 className="kr-keep mt-4 font-serif-kr text-[clamp(20px,2.6vw,32px)] font-medium leading-[1.35] text-neutral-900">
            <span className="font-serif-en italic text-[var(--color-accent-deep)]">
              Value-Add
            </span>
            를 중심으로,
            <br />
            다섯 가지 투자 전략을 유기적으로 운용합니다.
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 md:mt-14 md:grid-cols-5">
            {siteData.specialty.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "flex flex-col gap-3 p-6 md:p-7",
                  s.featured
                    ? "bg-[var(--color-accent-deep)] text-white"
                    : "bg-white text-neutral-900",
                ].join(" ")}
              >
                <span
                  className={[
                    "text-[11px] uppercase tracking-[0.22em]",
                    s.featured ? "text-white/70" : "text-neutral-500",
                  ].join(" ")}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-serif-en text-[17px] font-medium leading-[1.2] md:text-[19px]">
                  {s.title}
                </h4>
                <p
                  className={[
                    "kr-keep text-[12.5px] leading-[1.7]",
                    s.featured ? "text-white/80" : "text-neutral-600",
                  ].join(" ")}
                >
                  {s.desc}
                </p>
                {s.featured && (
                  <span className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white">
                    Core Focus
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Investment Process */}
        <div className="mt-16 md:mt-28">
          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
            Investment Process
          </p>
          <h3 className="kr-keep mt-4 font-serif-kr text-[clamp(20px,2.6vw,32px)] font-medium leading-[1.35] text-neutral-900">
            구조화된 투자 프로세스를 통해
            <br />
            안정적인 성과를 만듭니다.
          </h3>

          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
            {siteData.strategy.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12%" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <SpotlightCard
                  glow="rgba(28,46,74,0.08)"
                  className="flex h-full flex-col gap-3 border border-[var(--color-line)] bg-white p-6 transition-base hover:-translate-y-1 hover:border-neutral-900 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif-en text-[12px] tracking-[0.18em] text-[var(--color-accent-deep)]">
                      {s.step}
                    </span>
                    <span className="font-serif-en text-[28px] font-light text-neutral-300 transition-base group-hover:text-neutral-500">
                      0{i + 1}
                    </span>
                  </div>
                  <h4 className="font-serif-en text-[20px] font-medium leading-[1.2] text-neutral-900">
                    {s.title}
                  </h4>
                  <p className="text-[13px] leading-[1.75] text-neutral-600">
                    {s.desc}
                  </p>
                  <div
                    aria-hidden
                    className="mt-auto h-px w-0 bg-[var(--color-accent-deep)] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full"
                  />
                </SpotlightCard>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
