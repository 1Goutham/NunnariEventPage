"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export default function CountUp({
  to,
  from = 0,
  duration = 1.6,
  prefix = "",
  suffix = "",
  format = (v) => Math.round(v).toLocaleString(),
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  // Default to the final value so SSR output, crawlers, and any context
  // where IntersectionObserver never fires still show the real number.
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
      onComplete: () => setValue(to),
    });
    return () => {
      controls.stop();
      setValue(to);
    };
  }, [inView, from, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {format(value)}
      {suffix}
    </span>
  );
}
