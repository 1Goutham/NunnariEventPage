"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// IntersectionObserver always delivers an initial callback after observe().
// In some embedded webviews (in-app browsers, previews) it never fires —
// and content gated behind whileInView would stay invisible forever.
// Probe once per page load; if IO is broken, reveal everything immediately.
let ioProbe;
function ioWorks() {
  if (!ioProbe) {
    ioProbe = new Promise((resolve) => {
      if (
        typeof window === "undefined" ||
        typeof IntersectionObserver === "undefined"
      ) {
        resolve(false);
        return;
      }
      const timer = setTimeout(() => {
        io.disconnect();
        resolve(false);
      }, 800);
      const io = new IntersectionObserver(() => {
        clearTimeout(timer);
        io.disconnect();
        resolve(true);
      });
      io.observe(document.documentElement);
    });
  }
  return ioProbe;
}

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
  as: Tag = "div",
}) {
  const MotionTag = motion[Tag] || motion.div;
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    let mounted = true;
    ioWorks().then((ok) => {
      if (!ok && mounted) setForceShow(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (forceShow) {
    // Plain element, no framer: animation schedulers can be throttled in the
    // same contexts where IO is broken, so anything tween-based may never paint.
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
