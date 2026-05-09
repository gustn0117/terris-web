"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteData } from "@/lib/site";

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

        <nav className="hidden items-center gap-9 md:flex">
          {siteData.menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "text-[14px] font-medium transition-base hover:text-black",
                isActive(item.href) ? "text-black" : "text-neutral-700",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
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
