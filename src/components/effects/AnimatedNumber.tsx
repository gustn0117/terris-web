"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
};

export default function AnimatedNumber({
  value,
  decimals = 0,
  duration = 2.2,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) =>
    v.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, value, duration, mv]);

  useEffect(() => {
    return display.on("change", (latest) => {
      if (ref.current) ref.current.textContent = latest;
    });
  }, [display]);

  return (
    <span ref={ref} className={className}>
      {Number(0).toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}
