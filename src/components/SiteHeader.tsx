"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteData, placeholder } from "@/lib/site";
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
          <span
            aria-hidden
            className="block h-7 w-[91px] border border-[#98948a] md:h-8 md:w-[104px]"
            style={{ backgroundImage: `url("${placeholder}")`, backgroundSize: "cover" }}
          />
          <span className="sr-only">TERRIS Partners</span>
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
      <div
        className={[
          "md:hidden overflow-hidden transition-base",
          open ? "max-h-[80vh] border-t border-[var(--color-line)] bg-white" : "max-h-0",
        ].join(" ")}
      >
        <div className="container-x py-6">
          <ul className="flex flex-col divide-y divide-[var(--color-line)]">
            {siteData.menu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "flex items-center justify-between py-4 text-[15px] font-medium",
                    isActive(item.href) ? "text-black" : "text-neutral-800",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  <span className="text-neutral-400">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
