"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutCity, aboutGlass, aboutLandscape } from "@/lib/site";
import SplitTextReveal from "@/components/effects/SplitTextReveal";

const cards = [
  {
    eyebrow: "About TERRIS",
    title: "Terra",
    underline: "Lease",
    sub: "임대 · 계약",
    body: "부동산의 본질적 가치를 최우선으로 두고, 수치와 조건을 넘어 환경과 변화 가능성까지 종합적으로 분석하여 안정적인 수익 구조를 구축합니다.",
    image: aboutCity,
  },
  {
    eyebrow: "About TERRIS",
    title: "Terra",
    underline: "Logic",
    sub: "구조 · 운영",
    body: "구조화된 투자 프로세스와 실물 운영 노하우. 자산이 가진 잠재력과 시장의 흐름을 정렬하여 시간을 견디는 자산을 만듭니다.",
    image: aboutGlass,
  },
];

export default function About() {
  const wideRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wideRef,
    offset: ["start end", "end start"],
  });
  const wideY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="about"
      aria-label="About Terris"
      className="relative bg-[var(--color-bg-soft)] py-[var(--section-py)]"
    >
      <div className="container-x">
        <div className="mb-12 grid grid-cols-1 items-end gap-6 md:mb-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              <span className="inline-block h-px w-8 bg-neutral-400" />
              <span>About TERRIS</span>
            </div>
            <SplitTextReveal
              as="h2"
              unit="word"
              stagger={0.05}
              className="mt-6 font-serif-kr text-[clamp(28px,3.6vw,44px)] font-medium leading-[1.25] text-neutral-900"
            >
              보는 것이 다르니까, 만드는 가치도 다릅니다.
            </SplitTextReveal>
          </div>
          <div className="md:col-span-5">
            <p className="max-w-[42ch] text-[14px] leading-[1.85] text-neutral-600">
              테리스 자산운용은 보이는 가치보다, 다음 단계의 가능성을 함께
              봅니다. 보이지 않는 가치를 발견하고, 숫자 기반의 명확한 운용으로
              결과로 증명합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
          {cards.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col gap-6"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-neutral-200">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-base group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${c.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent-deep)]" />
                  {c.eyebrow}
                </div>
                <h3 className="mt-5 font-serif-en text-[clamp(48px,7vw,84px)] font-light leading-[1.02] text-neutral-900">
                  <span className="block">{c.title}</span>
                  <span className="mt-1 block">{c.underline}</span>
                </h3>
                <span
                  aria-hidden
                  className="mt-5 block h-px w-12 bg-neutral-900/70"
                />
                <p className="mt-4 text-[12px] uppercase tracking-[0.2em] text-neutral-500">
                  {c.sub}
                </p>
                <p className="mt-5 max-w-[40ch] text-[14px] leading-[1.85] text-neutral-700">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom feature row — wide image with parallax */}
        <motion.div
          ref={wideRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-20 aspect-[16/7] overflow-hidden md:mt-28"
          data-cursor="view"
          data-cursor-label="TERRIS"
        >
          <motion.div
            style={{ y: wideY }}
            className="absolute -inset-y-[12%] inset-x-0 bg-cover bg-center"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${aboutLandscape})` }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
          <div className="container-x relative flex h-full flex-col justify-end pb-10 md:pb-16">
            <p className="font-serif-en text-[clamp(48px,9vw,140px)] font-light leading-[1] text-white">
              TERRIS
            </p>
            <p className="mt-5 text-[12px] uppercase tracking-[0.32em] text-white/80 md:mt-6 md:text-[14px]">
              asset management
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
