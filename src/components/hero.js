"use client";
import Icon from "@/components/ui/icon";

import MagneticButton from "./motion/magnetic-button";
import Globe from "./motion/globe";
import Reveal from "./motion/reveal";
import { track, CALENDLY, EMAIL } from "@/lib/track";

export default function Hero() {
  return (
    <div id="hero" className="relative overflow-hidden bg-[#010314]">
      {/* Hero gradient as a real image (not a CSS background) so it is the LCP element with high fetch priority. */}
      <img
        src="/gradientHero.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="sync"
        width={1600}
        height={960}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom"
      />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 items-center gap-y-8 md:gap-x-8 pt-10 pb-16 md:py-0 md:h-[calc(100vh-127px)] md:min-h-[560px] md:max-h-[860px]">
          <div className="flex flex-col justify-center">

            <Reveal y={20} duration={0.7} delay={0.05}>
              <h1 className="headline text-[40px] md:text-[48px] lg:text-[56px] leading-[1.12] font-medium max-w-[640px]">
                Frontier and Sovereign AI, across the physical and digital worlds.
              </h1>
            </Reveal>

            <Reveal y={16} duration={0.6} delay={0.15}>
              <p className="text-muted mt-5 text-[15px] leading-[27px] max-w-md">
                ISO/IEC 42001 certified AI engineering for enterprise and
                government — measured on the outcome, not the effort.
              </p>
            </Reveal>

            <Reveal y={12} duration={0.6} delay={0.25}>
              <div className="mt-7 flex flex-wrap items-center gap-6">
                <MagneticButton
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("book_call", { location: "hero" })}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors"
                >
                  <Icon name="calendar-check" />
                  Let&rsquo;s collaborate
                </MagneticButton>
                <MagneticButton
                  href={`mailto:${EMAIL}`}
                  onClick={() => track("email_click", { location: "hero" })}
                  className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:text-slate-200 transition-colors"
                >
                  <Icon name="envelope" />
                  {EMAIL}
                </MagneticButton>
              </div>
            </Reveal>

          </div>

          <div className="relative w-full h-[320px] sm:h-[420px] md:h-full md:max-h-[760px]">
            <Globe className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
