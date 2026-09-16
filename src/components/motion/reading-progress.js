"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

// One-pixel progress line along the top edge of the viewport.
export default function ReadingProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  if (reduced) return null;
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed left-0 right-0 top-0 z-[55] h-[2px] origin-left bg-white/80"
    />
  );
}
