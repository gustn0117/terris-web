"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const firstRender = useRef(true);
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setShowCurtain(true);
    const t = setTimeout(() => setShowCurtain(false), 700);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showCurtain && (
          <motion.div
            key="route-curtain"
            aria-hidden
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{
              scaleX: [0, 1, 1, 0],
              transformOrigin: ["left", "left", "right", "right"],
            }}
            transition={{
              duration: 0.7,
              times: [0, 0.45, 0.55, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
            className="pointer-events-none fixed inset-0 z-[180] bg-[var(--color-bg-dark)]"
          />
        )}
      </AnimatePresence>
    </>
  );
}
