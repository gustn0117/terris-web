"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorFollower() {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "hover" | "view">(
    "default"
  );
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringSpring = { stiffness: 220, damping: 26, mass: 0.45 };
  const dotSpring = { stiffness: 600, damping: 30, mass: 0.25 };

  const ringX = useSpring(x, ringSpring);
  const ringY = useSpring(y, ringSpring);
  const dotX = useSpring(x, dotSpring);
  const dotY = useSpring(y, dotSpring);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia?.("(pointer: fine)").matches;
    if (!isFinePointer) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const findInteractive = (el: Element | null): HTMLElement | null => {
      let current: Element | null = el;
      while (current) {
        if (current instanceof HTMLElement) {
          if (
            current.dataset.cursor === "view" ||
            current.dataset.cursor === "hover" ||
            current.tagName === "A" ||
            current.tagName === "BUTTON" ||
            current.getAttribute("role") === "button"
          ) {
            return current;
          }
        }
        current = current.parentElement;
      }
      return null;
    };

    const onOver = (e: MouseEvent) => {
      const target = findInteractive(e.target as Element);
      if (!target) {
        setVariant("default");
        setLabel(null);
        return;
      }
      const cursorAttr = target.dataset.cursor;
      if (cursorAttr === "view") {
        setVariant("view");
        setLabel(target.dataset.cursorLabel ?? "View");
      } else {
        setVariant("hover");
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!mounted || !enabled) return null;

  const ringSize =
    variant === "view" ? 88 : variant === "hover" ? 56 : 32;
  const ringOpacity = variant === "default" ? 0.55 : 1;
  const dotOpacity = variant === "default" ? 1 : 0;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[300] mix-blend-difference"
      >
        <motion.div
          animate={{ width: ringSize, height: ringSize, opacity: ringOpacity }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80"
        >
          {variant === "view" && label && (
            <span className="font-serif-en text-[11px] uppercase tracking-[0.22em] text-white">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[300] mix-blend-difference"
      >
        <motion.div
          animate={{ opacity: dotOpacity }}
          transition={{ duration: 0.2 }}
          className="h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        />
      </motion.div>
    </>
  );
}
