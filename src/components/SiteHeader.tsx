"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteData } from "@/lib/site";
import Magnetic from "@/components/effects/Magnetic";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-base",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-[var(--color-line)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-x flex h-[68px] items-center justify-between md:h-[80px]">
        <Link href="/" aria-label="TERRIS 홈" className="flex items-center gap-2">
          <Image
            src="/logo/terris-black.png"
            alt="TERRIS Partners"
            width={520}
            height={160}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          {siteData.menu.map((item) => {
            const active = isActive(item.href);
            return (
              <Magnetic key={item.href} strength={0.4} className="px-3 py-1">
                <Link
                  href={item.href}
                  data-cursor="hover"
                  className={[
                    "relative inline-flex items-center text-[14px] font-medium transition-base",
                    active
                      ? "text-black"
                      : "text-neutral-700 hover:text-black",
                  ].join(" ")}
                >
                  <span
                    aria-hidden
                    className={[
                      "mr-2 inline-block h-1 w-1 rounded-full bg-[var(--color-accent)] transition-base",
                      active
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0",
                    ].join(" ")}
                  />
                  <span className="link-underline">{item.label}</span>
                </Link>
              </Magnetic>
            );
          })}
        </nav>

        <button
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center"
        >
          <span
            className={[
              "block w-6 transition-base",
              "before:block before:h-px before:w-full before:bg-black before:content-['']",
              "after:mt-[6px] after:block after:h-px after:w-full after:bg-black after:content-['']",
              open ? "before:translate-y-[3.5px] before:rotate-45 after:-translate-y-[3.5px] after:-rotate-45" : "",
            ].join(" ")}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--color-line)] bg-white md:hidden"
          >
            <div className="container-x py-6">
              <ul className="flex flex-col divide-y divide-[var(--color-line)]">
                {siteData.menu.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "group flex items-center justify-between py-4 text-[16px] font-medium",
                        isActive(item.href) ? "text-black" : "text-neutral-800",
                      ].join(" ")}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={[
                            "inline-block h-1 w-1 rounded-full bg-[var(--color-accent)] transition-base",
                            isActive(item.href)
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0",
                          ].join(" ")}
                          aria-hidden
                        />
                        <span>{item.label}</span>
                      </span>
                      <span className="text-neutral-400 transition-base group-hover:translate-x-1 group-hover:text-neutral-900">
                        →
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
