"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Small scroll-linked drift for an image inside a fixed-aspect frame. The
// child is scaled up slightly so the movement never exposes an edge.
export default function Parallax({ children, amount = 14, className = "" }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={reduced ? undefined : { y, scale: 1.06 }} className="absolute inset-0">
        {children}
      </motion.div>
    </div>
  );
}
