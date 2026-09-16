"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Icon from "@/components/ui/icon";

const EASE = [0.22, 1, 0.36, 1];

function shortDate(iso, precision) {
  const [, m, d] = iso.split("-").map(Number);
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1];
  return precision === "approx" ? month : `${d} ${month}`;
}

function FilterGroup({ label, options, value, onChange, layoutId }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs uppercase tracking-[0.12em] text-dim">{label}</span>
      {options.map((o) => {
        const active = o.key === value;
        return (
          <button
            key={o.key}
            type="button"
            onClick={() => onChange(o.key)}
            aria-pressed={active}
            className={`relative rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              active ? "border-transparent text-black" : "border-line text-muted hover:text-white hover:border-white/40"
            }`}
          >
            {active ? (
              <motion.span layoutId={layoutId} className="absolute inset-0 rounded-full bg-white" transition={{ duration: 0.35, ease: EASE }} />
            ) : null}
            <span className="relative">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// Floating thumbnail that trails the cursor over rows with photography.
function HoverPreview({ item, x, y }) {
  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
      aria-hidden="true"
    >
      {/* Offset lives on a plain wrapper: framer writes its own inline
          transform on the animated element and would override it. */}
      <div className="-translate-x-1/2 -translate-y-[112%]">
        <AnimatePresence mode="popLayout">
          {item?.cover ? (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, scale: 0.92, rotate: -1.5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="relative w-[220px] aspect-[16/10] overflow-hidden rounded-xl border border-line bg-[#010314] shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
            >
              <Image src={item.cover.src} alt="" fill sizes="220px" placeholder="blur" blurDataURL={item.cover.blur} className="object-cover" />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function EventArchive({ items, roleKinds, themes }) {
  const router = useRouter();
  const search = useSearchParams();
  const [role, setRole] = useState(search.get("role") || "all");
  const [theme, setTheme] = useState(search.get("theme") || "all");
  const [activeYear, setActiveYear] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [canHover, setCanHover] = useState(false);
  const yearRefs = useRef({});

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 260, damping: 26, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 260, damping: 26, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanHover(fine && !reduced);
  }, []);

  // Keep the URL in step with the filters so a theme tile or a shared link
  // lands on the same view. Replace, not push, so back stays predictable.
  useEffect(() => {
    const params = new URLSearchParams();
    if (role !== "all") params.set("role", role);
    if (theme !== "all") params.set("theme", theme);
    const qs = params.toString();
    if (qs === search.toString()) return;
    router.replace(`/events${qs ? `?${qs}` : ""}`, { scroll: false });
  }, [role, theme, router, search]);

  useEffect(() => {
    const onTheme = (e) => setTheme(e.detail || "all");
    window.addEventListener("events:theme", onTheme);
    return () => window.removeEventListener("events:theme", onTheme);
  }, []);

  const filtered = useMemo(
    () =>
      items.filter(
        (i) => (role === "all" || i.roleKind === role) && (theme === "all" || i.themeKeys.includes(theme))
      ),
    [items, role, theme]
  );

  const groups = useMemo(() => {
    const map = new Map();
    filtered.forEach((i) => {
      const y = i.date.slice(0, 4);
      if (!map.has(y)) map.set(y, []);
      map.get(y).push(i);
    });
    return [...map.entries()];
  }, [filtered]);

  const years = groups.map(([y]) => y);

  // Year rail follows scroll position.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveYear(visible[0].target.dataset.year);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 }
    );
    Object.values(yearRefs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [groups]);

  useEffect(() => {
    if (!activeYear || !years.includes(activeYear)) setActiveYear(years[0] || null);
  }, [years, activeYear]);

  const onMove = useCallback(
    (e) => {
      if (!canHover) return;
      mx.set(e.clientX);
      my.set(e.clientY);
    },
    [canHover, mx, my]
  );

  const jump = (y) => {
    const el = yearRefs.current[y];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const roleOptions = [{ key: "all", label: "All" }, ...roleKinds];
  const themeOptions = [{ key: "all", label: "All" }, ...themes];

  return (
    <div id="archive" className="scroll-mt-28">
      <div className="flex flex-col gap-4 border-b border-line pb-8">
        <FilterGroup label="Role" options={roleOptions} value={role} onChange={setRole} layoutId="events-role" />
        <FilterGroup label="Theme" options={themeOptions} value={theme} onChange={setTheme} layoutId="events-theme" />
      </div>

      <div className="mt-10 grid lg:grid-cols-12 gap-x-10">
        <aside className="hidden lg:block lg:col-span-2">
          <div className="sticky top-28">
            <ul className="relative border-l border-line pl-5">
              {years.map((y) => {
                const active = y === activeYear;
                return (
                  <li key={y} className="relative py-1.5">
                    {active ? (
                      <motion.span layoutId="events-year-marker" className="absolute -left-[1px] top-1/2 h-6 w-[2px] -translate-y-1/2 bg-white" transition={{ duration: 0.35, ease: EASE }} />
                    ) : null}
                    <button
                      type="button"
                      onClick={() => jump(y)}
                      className={`text-[15px] tabular-nums transition-colors ${active ? "text-white" : "text-dim hover:text-white"}`}
                    >
                      {y}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-xs text-dim tabular-nums">
              {filtered.length} of {items.length} events
            </p>
          </div>
        </aside>

        <div className="lg:col-span-10" onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
          <AnimatePresence initial={false} mode="popLayout">
            {groups.length === 0 ? (
              <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16 text-muted">
                Nothing matches that combination yet.
              </motion.p>
            ) : null}
            {groups.map(([year, list]) => (
              <motion.section
                key={year}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: EASE }}
                ref={(el) => (yearRefs.current[year] = el)}
                data-year={year}
                className="scroll-mt-32"
              >
                <h3 className="pt-2 pb-3 text-xs uppercase tracking-[0.12em] text-dim tabular-nums">{year}</h3>
                <ul className="mb-10">
                  <AnimatePresence initial={false}>
                    {list.map((item) => (
                      <motion.li
                        key={item.slug}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        onMouseEnter={(e) => {
                          mx.set(e.clientX);
                          my.set(e.clientY);
                          setHovered(item);
                        }}
                        className="border-t border-line last:border-b"
                      >
                        <a
                          href={`/events/${item.slug}`}
                          className="group grid grid-cols-[64px_1fr_auto] md:grid-cols-[88px_1fr_auto_28px] items-baseline gap-x-4 md:gap-x-8 py-5 transition-colors hover:bg-white/[0.03] -mx-4 px-4 rounded-xl"
                        >
                          <span className="text-sm text-white/80 tabular-nums">{shortDate(item.date, item.datePrecision)}</span>
                          <span className="min-w-0">
                            <span className="block text-[17px] md:text-[18px] leading-[1.4] font-medium text-white group-hover:text-slate-200 transition-colors">
                              {item.title}
                            </span>
                            <span className="mt-1 block text-sm text-dim">
                              {[item.organisers[0], item.city].filter(Boolean).join(" · ")}
                              {item.galleryCount > 1 ? <span className="hidden md:inline"> · {item.galleryCount} photos</span> : null}
                              {item.hasVideo ? <span className="hidden md:inline"> · video</span> : null}
                            </span>
                          </span>
                          <span className="hidden md:inline-flex text-xs uppercase tracking-[0.12em] text-dim group-hover:text-white transition-colors whitespace-nowrap">
                            {item.role}
                          </span>
                          <span aria-hidden="true" className="justify-self-end text-muted group-hover:text-white group-hover:translate-x-1 transition-all">
                            <Icon name="arrow-right" className="text-sm" />
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </motion.section>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {canHover ? <HoverPreview item={hovered} x={sx} y={sy} /> : null}
    </div>
  );
}
