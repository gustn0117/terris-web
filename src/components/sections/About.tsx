"use client";

import { motion } from "framer-motion";
import { aboutCity, aboutGlass, aboutWideVideo } from "@/lib/site";
import SplitTextReveal from "@/components/effects/SplitTextReveal";

const cards = [
  {
    eyebrow: "About TERRIS",
    title: "Terra",
    underline: "Lease",
    subKr: "(라틴어) 땅, 대지",
    body: "땅은 단순한 공간이 아니라, 그 자체로 고유한 흐름과 가능성을 품고 있는 자산입니다. 저희는 그 안에 담긴 입지의 맥락과 잠재력, 그리고 시간이 만들어낼 가치를 깊이 있게 바라봅니다.",
    image: aboutCity,
  },
  {
    eyebrow: "About TERRIS",
    title: "Terra",
    underline: "Logic",
    subKr: "(라틴어) 구조, 논리",
    body: "구조화된 투자 프로세스와 실물 운영 노하우. 자산이 가진 잠재력과 시장의 흐름을 정렬하여 시간을 견디는 자산을 만듭니다.",
    image: aboutGlass,
  },
];

export default function About() {
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
              className="mt-6 font-serif-kr kr-keep text-[clamp(26px,3.6vw,44px)] font-medium leading-[1.25] text-neutral-900"
            >
              {"보는 것이 다르니까,\n만드는 가치도 다릅니다."}
            </SplitTextReveal>
          </div>
          <div className="md:col-span-5">
            <p className="kr-keep max-w-[42ch] text-[13px] leading-[1.85] text-neutral-600 md:text-[14px]">
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
              <div className="card-lift relative aspect-[5/4] overflow-hidden bg-neutral-200">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                  style={{ backgroundImage: `url(${c.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px w-0 bg-[var(--color-accent-deep)] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent-dot)]" />
                  {c.eyebrow}
                </div>
                <h3 className="mt-5 font-display-en text-[clamp(44px,7vw,84px)] font-normal leading-[1.02] tracking-[-0.03em] text-neutral-900">
                  <span className="block">{c.title}</span>
                  <span className="mt-1 block">{c.underline}</span>
                </h3>
                <span
                  aria-hidden
                  className="mt-5 block h-px w-full bg-neutral-300"
                />
                <p className="mt-4 text-[12px] font-semibold tracking-[-0.01em] text-[var(--color-sub-mid)]">
                  {c.subKr}
                </p>
                <p className="kr-keep mt-3 max-w-[40ch] text-[13.5px] font-light leading-[1.85] text-[var(--color-sub-mid)] md:text-[14px]">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom feature row — autoplay video with TERRIS overlay */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 aspect-[16/9] overflow-hidden sm:aspect-[16/8] md:mt-28 md:aspect-[16/7]"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={aboutWideVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25" />
          <div className="container-x relative flex h-full flex-col justify-center pb-0">
            <div className="text-center">
              <p className="font-mono-display text-[clamp(56px,12vw,180px)] leading-[0.92] tracking-[-0.05em] text-white/95">
                TERRIS
              </p>
              <p className="mt-3 font-mono-display text-[clamp(20px,4vw,56px)] leading-none tracking-[-0.04em] text-white/85 md:mt-4">
                asset management
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
