"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: string | ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  unit?: "char" | "word";
  stagger?: number;
};

export default function SplitTextReveal({
  children,
  as = "h2",
  className,
  delay = 0,
  unit = "word",
  stagger = 0.04,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  const text = typeof children === "string" ? children : "";
  const lines = text.split("\n");

  const Tag = motion[as] as typeof motion.div;

  // Cumulative token index across lines so the cascade stagger is global
  let tokenIdx = 0;

  return (
    <div ref={ref}>
      <Tag className={className} aria-label={text.replace(/\n/g, " ")}>
        {lines.map((line, lineIdx) => {
          const tokens =
            unit === "char" ? Array.from(line) : line.split(/(\s+)/);
          return (
            <span key={lineIdx} className="block overflow-hidden">
              {tokens.map((token, i) => {
                if (/^\s+$/.test(token))
                  return <span key={i}>{token}</span>;
                const myIdx = tokenIdx++;
                return (
                  <span
                    key={i}
                    className="inline-block overflow-hidden align-baseline"
                    aria-hidden
                  >
                    <motion.span
                      className="inline-block will-change-transform"
                      initial={{ y: "110%", opacity: 0 }}
                      animate={
                        inView
                          ? { y: "0%", opacity: 1 }
                          : { y: "110%", opacity: 0 }
                      }
                      transition={{
                        duration: 0.95,
                        delay: delay + myIdx * stagger,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {token}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </Tag>
    </div>
  );
}
