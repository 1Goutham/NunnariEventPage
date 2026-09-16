"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  strength = 28,
  href,
  onClick,
  target,
  rel,
  ariaLabel,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const max = strength;
    x.set(Math.max(-max, Math.min(max, relX * 0.35)));
    y.set(Math.max(-max, Math.min(max, relY * 0.35)));
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Tag = href ? motion.a : motion.button;
  const props = href ? { href, target, rel, onClick } : { onClick, type: "button" };

  return (
    <Tag
      ref={ref}
      {...props}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </Tag>
  );
}
