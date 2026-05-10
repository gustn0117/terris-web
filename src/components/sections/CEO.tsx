"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ceoPortrait, ceoSignature, projectImages, siteData } from "@/lib/site";
import AnimatedNumber from "@/components/effects/AnimatedNumber";
import SpotlightCard from "@/components/effects/SpotlightCard";
import SplitTextReveal from "@/components/effects/SplitTextReveal";

export default function CEO() {
  const { ceo, stats, projects } = siteData;
  return (
    <section
      id="ceo"
      aria-label="CEO 인사말"
      className="relative bg-[var(--color-bg-dark)] py-[var(--section-py)] text-white"
    >
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-12">
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
              <span className="inline-block h-px w-8 bg-white/30" />
              <span>CEO Message</span>
            </div>
            <SplitTextReveal
              as="p"
              unit="word"
              stagger={0.05}
              className="mt-8 font-serif-kr kr-keep text-[clamp(20px,2.8vw,36px)] font-medium leading-[1.45] md:max-w-[28ch] md:text-right md:ml-auto"
            >
              {ceo.quote}
            </SplitTextReveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="group relative aspect-[4/5] overflow-hidden" data-cursor="view" data-cursor-label="CEO">
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${ceoPortrait})`,
                  filter: "grayscale(0.15) contrast(1.02)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/80">
                <span className="inline-block h-px w-6 bg-white/60" />
                Changki Jang
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-7">
            <h3 className="font-sans text-[clamp(28px,3.6vw,42px)] font-semibold leading-[1.2] tracking-[-0.02em]">
              {ceo.name}{" "}
              <span className="font-light text-white/70">{ceo.nameEn}</span>
            </h3>
            <p className="mt-2 text-[14px] font-semibold tracking-[-0.01em] text-[var(--color-sub-light)]">
              {ceo.role}
            </p>

            <div className="mt-8 space-y-5">
              {ceo.bio.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="kr-keep max-w-[52ch] text-[14px] font-light leading-[1.8] text-white/80 md:text-[15px]"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="mt-8 inline-flex">
              <Image
                src={ceoSignature}
                alt={`${ceo.name} 서명`}
                width={220}
                height={80}
                className="h-14 w-auto opacity-90 invert md:h-20"
              />
            </div>

            <div className="mt-10 md:mt-12">
              <p className="font-sans text-[15px] font-semibold tracking-[-0.01em] text-white">
                경력사항
              </p>
              <ul className="mt-4 space-y-2 text-[14px] font-light text-white/80 md:text-[15px]">
                {ceo.careers.map((c, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-8 font-medium text-white">{c.period}</span>
                    <span>{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:mt-28 md:grid-cols-3 md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              {stats.aumLabel}
            </p>
            <p className="mt-2 font-serif-en text-[48px] font-light text-white md:text-[68px]">
              <AnimatedNumber value={1.3} decimals={1} />
              <span className="ml-1 text-[28px] tracking-normal text-white/85 md:text-[36px]">
                조
              </span>
              <span className="ml-1 text-[18px] tracking-normal text-white/55 md:text-[22px]">
                원
              </span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              {stats.yearsLabel}
            </p>
            <p className="mt-2 font-serif-en text-[48px] font-light text-white md:text-[68px]">
              <AnimatedNumber value={20} />
              <span className="ml-1 text-[28px] tracking-normal text-white/85 md:text-[36px]">
                년
              </span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-2 md:col-span-1"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              주요 사업분야
            </p>
            <p className="kr-keep mt-3 max-w-[28ch] text-[13px] leading-[1.7] text-white/80 md:text-[14px]">
              국내외 REF, PFV 투자 운용 — REITs, Infrastructure, Securities를
              아우르는 부동산 자산 운용.
            </p>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="mt-20 md:mt-28">
          <div className="mb-8 flex items-center justify-between">
            <h4 className="font-serif-kr text-[20px] font-semibold md:text-[24px]">
              주요 프로젝트
            </h4>
            <a
              href="#strategy"
              className="text-[12px] uppercase tracking-[0.2em] text-white/55 hover:text-white"
            >
              전체 보기 →
            </a>
          </div>

          <div className="-mx-[var(--gutter)] flex gap-4 overflow-x-auto px-[var(--gutter)] pb-2 no-scrollbar md:gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="aspect-[3/4] w-[220px] flex-none sm:w-[260px] md:w-[300px]"
              >
                <SpotlightCard
                  glow="rgba(200,169,106,0.18)"
                  className="card-lift card-lift-dark relative h-full overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                    style={{ backgroundImage: `url(${projectImages[i]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div
                    aria-hidden
                    className="absolute inset-0 ring-1 ring-inset ring-white/0 transition-base group-hover:ring-white/30"
                  />
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                      {p.date}
                    </p>
                    <p className="mt-2 font-serif-kr text-[18px] font-medium leading-[1.35]">
                      {p.title}
                    </p>
                    <p className="mt-1 text-[12px] text-white/70">{p.scale}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
