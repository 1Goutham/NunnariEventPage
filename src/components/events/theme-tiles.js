"use client";

import Reveal from "@/components/motion/reveal";

// Theme tiles double as filters: clicking one sets the archive's theme and
// scrolls to it. The archive listens for the custom event so the two stay
// in step without lifting state into the page.
export default function ThemeTiles({ themes }) {
  const pick = (key) => {
    window.dispatchEvent(new CustomEvent("events:theme", { detail: key }));
    document.querySelector("#archive")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    // Seven tiles: the first (largest count) spans two columns so the grid
    // closes cleanly at both breakpoints.
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {themes.map((t, i) => (
        <Reveal key={t.key} y={14} delay={0.04 * i} className={`h-full ${i === 0 ? "sm:col-span-2" : ""}`}>
          <button
            type="button"
            onClick={() => pick(t.key)}
            className="group flex h-full w-full flex-col rounded-2xl border border-line p-6 text-left transition-all duration-300 hover:border-white/60 hover:bg-white/[0.04]"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[18px] leading-7 font-medium text-white">{t.label}</p>
              <p className="text-[26px] leading-none font-medium text-white tabular-nums">{t.count}</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{t.blurb}</p>
            <span className="mt-auto pt-5 text-xs uppercase tracking-[0.12em] text-dim group-hover:text-white transition-colors">
              Filter the archive <span aria-hidden="true">→</span>
            </span>
          </button>
        </Reveal>
      ))}
    </div>
  );
}
