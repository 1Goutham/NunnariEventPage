"use client";
import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";
import Grid from "./grid";

export default function ResearchCarousel({ posts }) {
  const ref = useRef(null);
  const [state, setState] = useState({ start: true, end: false });

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setState({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  };

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const step = (dir) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const w = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const btn = (disabled) =>
    `flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
      disabled ? "border-line text-white/30 cursor-default" : "border-line text-white hover:border-white/60"
    }`;

  return (
    <div>
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Research articles"
      >
        {posts.map((p) => (
          <div key={p.slug} data-card className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] md:w-[calc((100%-48px)/3)]">
            <Grid title={p.title} description={p.description} category={p.category} thumbnail={p.thumbnail} path={p.path} date={p.date} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <a href="/blogs" className="text-sm text-white hover:underline">
          All research articles <span aria-hidden="true">→</span>
        </a>
        <div className="flex gap-3">
          <button type="button" onClick={() => step(-1)} disabled={state.start} aria-label="Previous articles" className={btn(state.start)}>
            <Icon name="arrow-left" />
          </button>
          <button type="button" onClick={() => step(1)} disabled={state.end} aria-label="Next articles" className={btn(state.end)}>
            <Icon name="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}
