"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/site";

export default function Notice() {
  return (
    <section
      id="notice"
      aria-label="경영정보"
      className="relative bg-white py-[var(--section-py)]"
    >
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-neutral-500">
              <span className="inline-block h-px w-8 bg-neutral-400" />
              <span>Management Information</span>
            </div>
            <h2 className="mt-6 font-serif-kr text-[clamp(32px,4vw,52px)] font-medium leading-[1.1] text-neutral-900">
              경영정보
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-[12px] tracking-[0.04em] text-neutral-500">
              총{" "}
              <span className="font-medium text-neutral-900">
                {siteData.notices.length}
              </span>
              건
            </p>
            <a
              href="#"
              className="ml-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-neutral-700 hover:text-black"
            >
              전체보기 <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <ul className="mt-12 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {siteData.notices.map((n, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.5,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href="#"
                className="group flex items-center gap-4 py-5 transition-base hover:bg-[var(--color-bg-soft)]/40 md:gap-8 md:py-6"
              >
                <span className="w-[88px] flex-none text-[12px] tracking-[0.06em] text-neutral-500 md:w-[120px] md:text-[13px]">
                  {n.date}
                </span>
                <span className="hidden flex-none rounded-full border border-[var(--color-line)] px-3 py-1 text-[11px] tracking-[0.06em] text-neutral-500 md:inline-block">
                  {n.tag}
                </span>
                <span className="flex-1 truncate text-[14px] font-medium text-neutral-900 transition-base group-hover:text-black md:text-[15px]">
                  {n.title}
                </span>
                <span
                  aria-hidden
                  className="flex-none text-[14px] text-neutral-400 transition-base group-hover:translate-x-1 group-hover:text-neutral-900"
                >
                  →
                </span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Closing wordmark */}
        <div className="mt-24 md:mt-32">
          <p className="font-serif-en text-[clamp(64px,12vw,180px)] font-light leading-[0.92] tracking-tight text-neutral-900">
            Build wealth
            <br />
            with TERRIS.
          </p>
        </div>
      </div>
    </section>
  );
}
