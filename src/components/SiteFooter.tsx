import Image from "next/image";
import { siteData } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[var(--color-bg-dark)] text-white">
      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Image
              src="/logo/terris-white.png"
              alt="TERRIS Partners"
              width={520}
              height={160}
              className="h-9 w-auto opacity-95"
            />
            <p className="mt-6 max-w-[36ch] text-[13px] leading-[1.7] text-white/60">
              부동산의 본질적 가치를 최우선으로 두고, 수치와 조건을 넘어 환경과
              변화 가능성까지 종합적으로 분석하여 안정적인 수익 구조를 구축합니다.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
              Address
            </div>
            <p className="mt-3 text-[13px] leading-[1.7] text-white/80">
              {siteData.contact.address}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
              Contact
            </div>
            <ul className="mt-3 space-y-1.5 text-[13px] text-white/80">
              <li>T. {siteData.contact.tel}</li>
              <li>F. {siteData.contact.fax}</li>
              <li>M. {siteData.contact.mobile}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-[12px] text-[var(--color-sub-faint)] md:flex-row md:items-center md:justify-between">
          <p className="font-serif-kr">© {year} TERRIS partners. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/55">
            <li>
              <a className="transition-base hover:text-white" href="/">
                회사소개
              </a>
            </li>
            <li>
              <a className="transition-base hover:text-white" href="/ceo">
                CEO
              </a>
            </li>
            <li>
              <a className="transition-base hover:text-white" href="/strategy">
                투자 및 전략
              </a>
            </li>
            <li>
              <a className="transition-base hover:text-white" href="/notice">
                경영정보
              </a>
            </li>
            <li>
              <a className="transition-base hover:text-white" href="#">
                개인정보처리방침
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
