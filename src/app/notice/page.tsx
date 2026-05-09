import type { Metadata } from "next";
import Notice from "@/components/sections/Notice";

export const metadata: Metadata = {
  title: "경영정보 · TERRIS",
  description: "테리스자산운용의 공시·공지사항을 안내합니다.",
};

export default function NoticePage() {
  return (
    <>
      <div className="h-[80px] bg-white" aria-hidden />
      <Notice />
    </>
  );
}
