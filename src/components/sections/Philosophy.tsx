"use client";

import {
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { philosophySkyline } from "@/lib/site";

const sentence =
  "부동산 시장은 끊임없이 변화합니다. 테리스 자산운용은 그 변화 속에서 가능성을 읽고, 자산의 가치를 새롭게 재정의합니다.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="inline-block whitespace-pre text-white"
    >
      {children + " "}
    </motion.span>
  );
}

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  const words = sentence.split(" ");

  return (
    <section
      ref={ref}
      id="philosophy"
      aria-label="Philosophy"
      className="relative bg-[var(--color-bg-dark)] py-[var(--section-py)] text-white"
    >
      <div className="container-x">
        <div className="mb-10 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/45 md:mb-14">
          <span className="inline-block h-px w-8 bg-white/30" />
          <span>Our Philosophy</span>
        </div>

        <p className="font-serif-kr text-[clamp(22px,3.6vw,46px)] font-medium leading-[1.45] md:leading-[1.4]">
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {w}
              </Word>
            );
          })}
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="text-[13px] uppercase tracking-[0.2em] text-white/40">
              Our Mission
            </p>
            <h3 className="mt-4 font-serif-en text-[34px] font-medium leading-[1.04] text-white md:text-[44px]">
              Reading
              <br />
              Hidden Value
            </h3>
            <p className="mt-6 max-w-[42ch] text-[14px] leading-[1.8] text-white/65">
              테리스 자산운용은 보이는 가치보다, 다음 단계의 가치를 함께 봅니다.
              구조·임차·자본의 가능성을 정렬해, 숫자가 가치를 담아내는 길을
              설계합니다.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] overflow-hidden md:col-span-8"
          >
            <div
              className="absolute inset-0 bg-cover bg-center grayscale-[0.2]"
              style={{ backgroundImage: `url(${philosophySkyline})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <span className="font-serif-en text-[18px] italic">
                Seoul · Real Estate
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                01 / 06
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
