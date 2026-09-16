"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";

// Bordered card whose border and fill brighten around the cursor. The glow is
// two layers driven by CSS variables the pointer updates: a soft radial fill
// and a masked ring that lights only the border. Hover-only, so touch devices
// and reduced-motion users just get the static card.
export default function SpotlightCard({ href, as, className = "", children, radius = 320, ...rest }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  const cls = `group relative isolate overflow-hidden ${className}`;
  const layers = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.07), transparent 65%)` }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: 1,
          background: `radial-gradient(${Math.round(radius * 0.75)}px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.55), transparent 70%)`,
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </>
  );

  if (href) {
    return (
      <Link ref={ref} href={href} onMouseMove={onMove} className={cls} {...rest}>
        {layers}
        {children}
      </Link>
    );
  }
  const Tag = as || "div";
  return (
    <Tag ref={ref} onMouseMove={onMove} className={cls} {...rest}>
      {layers}
      {children}
    </Tag>
  );
}
