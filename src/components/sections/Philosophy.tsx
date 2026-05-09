"use client";

import {
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { philosophySkyline } from "@/lib/site";

const sentence =
  "부동산 시장은 끊임없이 변화합니다. 테리스 자산운용은 그 변화 속에서 가능성을 읽고, 자산의 가치를 새롭게 재정의합니다.";

function Char({
  char,
  progress,
  start,
  end,
  accentEnd,
}: {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  accentEnd: number;
}) {
  // Text is always legible (dim white). Scroll passes a warm-accent
  // highlight through each character, settling to pure white.
  const color = useTransform(
    progress,
    [start, (start + end) / 2, accentEnd],
    ["rgba(255,255,255,0.42)", "#d8b97a", "#ffffff"]
  );
  const textShadow = useTransform(
    progress,
    [start, (start + end) / 2, accentEnd],
    [
      "0 0 0 rgba(216,185,122,0)",
      "0 0 14px rgba(216,185,122,0.55)",
      "0 0 0 rgba(216,185,122,0)",
    ]
  );

  return (
    <motion.span style={{ color, textShadow }} className="inline-block">
      {char}
    </motion.span>
  );
}

function Word({
  word,
  progress,
  start,
  end,
  accentEnd,
}: {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  accentEnd: number;
}) {
  const chars = Array.from(word);
  const slot = (end - start) / Math.max(chars.length, 1);
  return (
    <span className="inline-block whitespace-nowrap">
      {chars.map((c, i) => {
        const cs = start + slot * i;
        const ce = cs + slot * 1.6;
        return (
          <Char
            key={i}
            char={c}
            progress={progress}
            start={cs}
            end={Math.min(ce, end)}
            accentEnd={accentEnd}
          />
        );
      })}
    </span>
  );
}

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.35"],
  });

  const tokens = sentence.split(" ");
  const total = tokens.length;
  const slot = 0.78 / Math.max(total, 1);

  // Page-side flourishes driven by the same scroll progress
  const lineHeight = useTransform(scrollYProgress, [0, 0.95], ["0%", "100%"]);
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0, 0.7, 1]
  );
  const bgX = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const captionOpacity = useTransform(
    scrollYProgress,
    [0.85, 1],
    [0, 1]
  );
  const ruleScaleX = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  const [counter, setCounter] = useState("00");
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setCounter(`${Math.round(v * 100)}`.padStart(2, "0"));
    });
  }, [scrollYProgress]);

  return (
    <section
      ref={ref}
      id="philosophy"
      aria-label="Philosophy"
      className="relative overflow-hidden bg-[var(--color-bg-dark)] py-[var(--section-py)] text-white"
    >
      {/* Scroll-driven warm radial spotlight that drifts with progress */}
      <motion.div
        aria-hidden
        style={{ opacity: bgOpacity, x: bgX }}
        className="pointer-events-none absolute inset-0 -z-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 40% at 50% 38%, rgba(200,169,106,0.10), transparent 70%)",
          }}
        />
      </motion.div>

      {/* Faint horizontal rule that fills with scroll, sits behind the text */}
      <div className="container-x relative">
        <div className="mb-10 flex items-end justify-between gap-4 md:mb-14">
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
            <span className="inline-block h-px w-8 bg-white/30" />
            <span>Our Philosophy</span>
          </div>
          <div
            className="hidden items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/40 md:flex"
            aria-hidden
          >
            <span className="font-serif-en text-[18px] tracking-tight text-white/85 tabular-nums">
              {counter}
            </span>
            <span className="inline-block h-px w-8 bg-white/30" />
            <span>100</span>
          </div>
        </div>

        <div className="relative">
          {/* Vertical accent line — grows with scroll */}
          <div className="pointer-events-none absolute -left-4 top-0 hidden h-full w-px overflow-hidden bg-white/[0.08] md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full origin-top bg-gradient-to-b from-[var(--color-accent)] via-white/90 to-white/30"
            />
          </div>

          <p
            aria-label={sentence}
            className="font-serif-kr text-[clamp(22px,3.6vw,46px)] font-medium leading-[1.45] md:leading-[1.4]"
          >
            {tokens.map((w, i) => {
              const start = i * slot;
              const end = start + slot * 1.6;
              const accentEnd = Math.min(end + 0.05, 1);
              return (
                <span key={i} className="inline">
                  <Word
                    word={w}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                    accentEnd={accentEnd}
                  />
                  {i < tokens.length - 1 && (
                    <span className="inline">&nbsp;</span>
                  )}
                </span>
              );
            })}
          </p>

          {/* Reveal rule that fills horizontally beneath sentence */}
          <motion.div
            aria-hidden
            style={{ scaleX: ruleScaleX }}
            className="mt-10 h-px w-full origin-left bg-gradient-to-r from-[var(--color-accent)] via-white/40 to-transparent md:mt-14"
          />

          {/* Closing caption fades in once the sentence is settled */}
          <motion.p
            style={{ opacity: captionOpacity }}
            className="mt-6 font-serif-en text-[12px] uppercase tracking-[0.32em] text-white/55"
          >
            — Reading Hidden Value
          </motion.p>
        </div>

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
