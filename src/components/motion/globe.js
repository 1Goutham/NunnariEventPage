"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const THREE_SRC = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

// Mounts the Nunnari globe (public/nunnari-globe.js). The two scripts are
// fetched only after the page has loaded and the browser is idle, so the
// hero text and LCP image are never blocked by three.js. The globe pauses
// itself off-screen. Users who prefer reduced motion get the empty stage.
export default function Globe({ className = "" }) {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [threeReady, setThreeReady] = useState(false);
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.THREE) setThreeReady(true);
    if (window.NunnariGlobe) setGlobeReady(true);
    let cancelled = false;
    const start = () => {
      if (cancelled) return;
      if ("requestIdleCallback" in window) window.requestIdleCallback(() => !cancelled && setShouldLoad(true), { timeout: 2500 });
      else setTimeout(() => !cancelled && setShouldLoad(true), 800);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => { cancelled = true; window.removeEventListener("load", start); };
  }, []);

  useEffect(() => {
    if (!threeReady || !globeReady || !ref.current) return;
    const instance = window.NunnariGlobe(ref.current, {
      accent: "#c9b8ff",
      inbound: "#9f7dff",
    });
    return () => instance && instance.destroy();
  }, [threeReady, globeReady]);

  return (
    <>
      {shouldLoad ? (
        <>
          <Script src={THREE_SRC} strategy="afterInteractive" onLoad={() => setThreeReady(true)} />
          <Script src="/nunnari-globe.js" strategy="afterInteractive" onLoad={() => setGlobeReady(true)} />
        </>
      ) : null}
      <div ref={ref} className={className} role="img" aria-label="Animated globe showing Nunnari AI capabilities" />
    </>
  );
}
