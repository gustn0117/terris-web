import type { Metadata } from "next";
import {
  Noto_Sans_KR,
  Noto_Serif_KR,
  Cormorant_Garamond,
  Libre_Bodoni,
  Archivo_Black,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollProgress from "@/components/effects/ScrollProgress";
import GrainOverlay from "@/components/effects/GrainOverlay";
import PageTransition from "@/components/effects/PageTransition";

const notoSans = Noto_Sans_KR({
  variable: "--font-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif_KR({
  variable: "--font-serif-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-en",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const libreBodoni = Libre_Bodoni({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-mono-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TERRIS · 테리스자산운용",
  description:
    "변화의 흐름을 읽고, 부동산 가치를 극대화합니다. 부동산 펀드 전문가팀의 새로운 시작, 테리스(TERRIS).",
  metadataBase: new URL("https://terris-web.hsweb.pics"),
  openGraph: {
    title: "TERRIS · 테리스자산운용",
    description: "변화의 흐름을 읽고, 부동산 가치를 극대화합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSans.variable} ${notoSerif.variable} ${cormorant.variable} ${libreBodoni.variable} ${archivoBlack.variable} antialiased`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-fg)] font-sans">
        <SmoothScroll>
          <ScrollProgress />
          <GrainOverlay />
          <SiteHeader />
          <main className="relative">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
