"use client";

import { motion } from "framer-motion";
import { competencyImages, siteData } from "@/lib/site";
import SplitTextReveal from "@/components/effects/SplitTextReveal";

export default function CoreCompetency() {
  return (
    <section
      aria-label="Core Competency"
      className="relative bg-[var(--color-bg-dark)] py-[var(--section-py)] text-white"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
              <span className="inline-block h-px w-8 bg-white/30" />
              <span>Core Competency</span>
            </div>
            <SplitTextReveal
              as="h2"
              unit="word"
              stagger={0.05}
              className="mt-6 font-serif-kr text-[clamp(28px,3.4vw,42px)] font-medium leading-[1.28]"
            >
              구조적인 분석 기반으로 자산의 미래 가치를 설계합니다.
            </SplitTextReveal>
            <p className="mt-6 max-w-[42ch] text-[14px] leading-[1.85] text-white/60">
              자산운용사·사모펀드·자문회사 등에서 실무 경험을 축적한 전문
              인력들로 구성된 회사. 부동산 시장의 위기 대응과 정확한 판단을
              기반으로 부동산의 미래 가치를 실천합니다.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-6">
          {siteData.competencies.map((c, i) => (
            <motion.article
              key={c.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col gap-5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800" data-cursor="view" data-cursor-label={c.eyebrow}>
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale transition-[transform,filter] duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06] group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${competencyImages[i]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full"
                />
                <span className="absolute right-4 top-4 font-serif-en text-[14px] italic text-white/80">
                  {c.eyebrow}
                </span>
              </div>
              <div>
                <h3 className="font-serif-kr text-[18px] font-semibold leading-[1.4] md:text-[19px]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.8] text-white/60">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
