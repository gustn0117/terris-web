"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  glow?: string;
};

export default function SpotlightCard({
  children,
  className,
  glow = "rgba(255,255,255,0.10)",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };
  const onLeave = () => {
    mx.set(-9999);
    my.set(-9999);
  };

  const background = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, ${glow}, transparent 60%)`;

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={["group relative", className ?? ""].join(" ")}
    >
      {children}
      <motion.div
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
}
