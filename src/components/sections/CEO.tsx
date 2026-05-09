"use client";

import { motion } from "framer-motion";
import { ceoPortrait, projectImages, siteData } from "@/lib/site";

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
            <p className="mt-8 font-serif-kr text-[clamp(22px,2.8vw,36px)] font-medium leading-[1.45] md:max-w-[28ch] md:text-right md:ml-auto">
              {ceo.quote}
            </p>
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
            <div className="relative aspect-[4/5] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${ceoPortrait})`,
                  filter: "grayscale(0.15) contrast(1.02)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="md:col-span-7">
            <h3 className="font-serif-en text-[clamp(32px,3.6vw,46px)] font-medium tracking-tight">
              {ceo.name}{" "}
              <span className="text-white/60">{ceo.nameEn}</span>
            </h3>
            <p className="mt-2 text-[12px] uppercase tracking-[0.22em] text-white/45">
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
                  className="max-w-[52ch] text-[14px] leading-[1.85] text-white/75"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="mt-10 inline-flex font-serif-en text-[28px] italic text-white/85">
              {ceo.name}
            </div>

            <div className="mt-12">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                Career
              </p>
              <ul className="mt-4 space-y-2 text-[14px] text-white/80">
                {ceo.careers.map((c, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-8 text-white/45">{c.period}</span>
                    <span>{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-8 border-t border-white/10 pt-12 md:mt-28 md:grid-cols-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              {stats.aumLabel}
            </p>
            <p className="mt-2 font-serif-en text-[48px] font-light text-white md:text-[68px]">
              {stats.aum}
              <span className="ml-1 text-[18px] tracking-normal text-white/55 md:text-[22px]">
                원
              </span>
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              {stats.yearsLabel}
            </p>
            <p className="mt-2 font-serif-en text-[48px] font-light text-white md:text-[68px]">
              {stats.years}
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
              주요 사업분야
            </p>
            <p className="mt-3 max-w-[24ch] text-[14px] leading-[1.7] text-white/80">
              국내외 REF, PFV 투자 운용 — REITs, Infrastructure, Securities를
              아우르는 부동산 자산 운용.
            </p>
          </div>
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
                className="group relative aspect-[3/4] w-[260px] flex-none overflow-hidden md:w-[300px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-base group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${projectImages[i]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 text-white">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                    {p.date}
                  </p>
                  <p className="mt-2 font-serif-kr text-[18px] font-medium leading-[1.35]">
                    {p.title}
                  </p>
                  <p className="mt-1 text-[12px] text-white/70">{p.scale}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
