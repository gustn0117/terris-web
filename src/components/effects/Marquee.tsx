"use client";

import { ReactNode } from "react";

type Props = {
  items: string[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  separator?: ReactNode;
};

export default function Marquee({
  items,
  duration = 40,
  reverse = false,
  className,
  separator,
}: Props) {
  const sep = separator ?? (
    <span className="mx-8 inline-block h-1.5 w-1.5 translate-y-[-4px] rotate-45 bg-current opacity-40" />
  );

  return (
    <div
      className={[
        "relative w-full overflow-hidden",
        className ?? "",
      ].join(" ")}
      aria-hidden
    >
      <div
        className="marquee-track flex shrink-0 whitespace-nowrap"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center pr-0"
          >
            {items.map((it, i) => (
              <li key={`${copy}-${i}`} className="flex items-center">
                <span>{it}</span>
                {sep}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
