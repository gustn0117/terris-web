import type { Metadata } from "next";
import CEO from "@/components/sections/CEO";

export const metadata: Metadata = {
  title: "CEO · TERRIS",
  description:
    "테리스자산운용 대표이사 장창기. 투자의 본질은 숫자가 아닌, 결국 지켜낸 약속에 있습니다.",
};

export default function CeoPage() {
  return (
    <>
      <div className="h-[80px] bg-[var(--color-bg-dark)]" aria-hidden />
      <CEO />
    </>
  );
}
