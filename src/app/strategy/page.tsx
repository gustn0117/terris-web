import type { Metadata } from "next";
import Strategy from "@/components/sections/Strategy";

export const metadata: Metadata = {
  title: "투자 및 전략 · TERRIS",
  description:
    "Value-Add를 중심으로 다양한 투자 전략을 유기적으로 운용합니다. 구조화된 투자 프로세스와 위험관리 절차로 투자자의 자산을 보호합니다.",
};

export default function StrategyPage() {
  return (
    <>
      <div className="h-[80px] bg-[var(--color-bg-soft)]" aria-hidden />
      <Strategy />
    </>
  );
}
