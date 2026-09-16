"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Wipes a pull quote in from the left as it enters view. The animation runs
// on the paragraph itself, not on child spans: the site's two-tone headline
// is a background-clip gradient, and any descendant with its own transform
// or filter would stop that gradient painting through it.
export default function QuoteReveal({ text, className = "", as: Tag = "p", children }) {
  const reduced = useReducedMotion();
  const MotionTag = motion[Tag] || motion.p;
  const body = (
    <>
      <span aria-hidden="true">&ldquo;</span>
      {text}
      <span aria-hidden="true">&rdquo;</span>
      {children}
    </>
  );
  if (reduced) return <Tag className={className}>{body}</Tag>;
  return (
    <MotionTag
      initial={{ clipPath: "inset(0 100% -0.2em 0)", opacity: 0.4, y: 10 }}
      whileInView={{ clipPath: "inset(0 0% -0.2em 0)", opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.1, ease: EASE }}
      className={className}
    >
      {body}
    </MotionTag>
  );
}
