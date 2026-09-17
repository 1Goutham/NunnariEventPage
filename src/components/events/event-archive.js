"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import Icon from "@/components/ui/icon";

const EASE = [0.22, 1, 0.36, 1];

function shortDate(iso, precision) {
  const [, m, d] = iso.split("-").map(Number);
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1];
  return precision === "approx" ? month : `${d} ${month}`;
}

// Pill group with per-option counts. Counts reflect the other group's
// current selection, so a user can see what each choice would leave.
function FilterGroup({ label, options, value, onChange, layoutId, counts }) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label={label}>
      <span className="mr-1 text-xs uppercase tracking-[0.12em] text-dim">{label}</span>
      {options.map((o) => {
        const active = o.key === value;
        const n = counts[o.key] ?? 0;
        const empty = !active && n === 0;
        return (
          <motion.button
            key={o.key}
            type="button"
            onClick={() => onChange(o.key)}
            aria-pressed={active}
            disabled={empty}
            whileTap={empty ? undefined : { scale: 0.96 }}
            className={`relative rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              active
                ? "border-transparent text-black"
                : empty
                  ? "border-line/60 text-dim/60 cursor-default"
                  : "border-line text-muted hover:text-white hover:border-white/40"
            }`}
          >
            {active ? (
              <motion.span layoutId={layoutId} className="absolute inset-0 rounded-full bg-white" transition={{ duration: 0.35, ease: EASE }} />
            ) : null}
            <span className="relative">
              {o.label}
              {o.key !== "all" ? (
                <span className={`ml-1.5 tabular-nums ${active ? "text-black/55" : "text-dim"}`}>{n}</span>
              ) : null}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

// Floating thumbnail that trails the cursor and tilts with its horizontal
// velocity, like a card being slid across a desk.
function HoverPreview({ item, x, y, rotate }) {
  return (
    <motion.div style={{ x, y, rotate }} className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block" aria-hidden="true">
      <div className="-translate-x-1/2 -translate-y-[112%]">
        <AnimatePresence mode="popLayout">
          {item?.cover ? (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, scale: 0.92, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="relative w-[220px] aspect-[16/10] overflow-hidden rounded-xl border border-line bg-[#010314] shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
            >
              <Image src={item.cover.src} alt="" fill sizes="220px" placeholder="blur" blurDataURL={item.cover.blur} className="object-cover" />
              <span className="absolute bottom-2 left-2 rounded-full bg-[#010314]/80 px-2 py-0.5 text-[11px] text-white/90 tabular-nums">
                {item.galleryCount} {item.galleryCount === 1 ? "photo" : "photos"}
              </span>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function EventArchive({ items, roleKinds, types, today }) {
  const router = useRouter();
  const search = useSearchParams();
  const reduced = useReducedMotion();
  const [role, setRole] = useState(search.get("role") || "all");
  const [type, setType] = useState(search.get("type") || "all");
  const [activeYear, setActiveYear] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [cursorSlug, setCursorSlug] = useState(null);
  const [canHover, setCanHover] = useState(false);
  const yearRefs = useRef({});
  const listRef = useRef(null);

  // Cursor-following preview position, with velocity-driven tilt.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 260, damping: 26, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 260, damping: 26, mass: 0.5 });
  const vx = useVelocity(sx);
  const tilt = useTransform(vx, [-2000, 2000], [-5, 5]);
  const rotate = useSpring(tilt, { stiffness: 200, damping: 22 });

  // Rail progress: how far through the archive the reader is.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.4", "end 0.6"] });
  const railFill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setCanHover(fine && !reduced);
  }, [reduced]);

  // Keep the URL in step with the filters so a shared link
  // lands on the same view. Replace, not push, so back stays predictable.
  useEffect(() => {
    const params = new URLSearchParams();
    if (role !== "all") params.set("role", role);
    if (type !== "all") params.set("type", type);
    const qs = params.toString();
    if (qs === search.toString()) return;
    router.replace(`/events${qs ? `?${qs}` : ""}`, { scroll: false });
  }, [role, type, router, search]);

  const matchRole = useCallback((i, r) => r === "all" || i.roleKind === r, []);
  const matchType = useCallback((i, t) => t === "all" || i.typeKeys.includes(t), []);

  const filtered = useMemo(() => items.filter((i) => matchRole(i, role) && matchType(i, type)), [items, role, type, matchRole, matchType]);

  // Cross-filter counts: each role count honours the type filter and vice versa.
  const roleCounts = useMemo(() => {
    const c = { all: items.filter((i) => matchType(i, type)).length };
    roleKinds.forEach((r) => (c[r.key] = items.filter((i) => i.roleKind === r.key && matchType(i, type)).length));
    return c;
  }, [items, roleKinds, type, matchType]);
  const typeCounts = useMemo(() => {
    const c = { all: items.filter((i) => matchRole(i, role)).length };
    types.forEach((t) => (c[t.key] = items.filter((i) => i.typeKeys.includes(t.key) && matchRole(i, role)).length));
    return c;
  }, [items, types, role, matchRole]);

  const groups = useMemo(() => {
    const map = new Map();
    filtered.forEach((i) => {
      const key = today && i.date >= today ? "upcoming" : i.date.slice(0, 4);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(i);
    });
    const entries = [...map.entries()];
    // Upcoming events are listed soonest first; the past stays newest first.
    entries.forEach(([k, list]) => k === "upcoming" && list.sort((a, b) => a.date.localeCompare(b.date)));
    return entries;
  }, [filtered, today]);

  const years = groups.map(([y]) => y);
  const filtering = role !== "all" || type !== "all";

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
    if (el) el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  // Arrow keys move between rows; Home and End jump to the ends.
  const onKeyDown = (e) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return;
    const rows = [...(listRef.current?.querySelectorAll("a[data-row]") || [])];
    if (!rows.length) return;
    const i = rows.indexOf(document.activeElement);
    let next = i;
    if (e.key === "ArrowDown") next = Math.min(rows.length - 1, i + 1);
    if (e.key === "ArrowUp") next = Math.max(0, i - 1);
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = rows.length - 1;
    if (next !== i || i === -1) {
      e.preventDefault();
      rows[next < 0 ? 0 : next].focus({ preventScroll: false });
    }
  };

  const clear = () => {
    setRole("all");
    setType("all");
  };

  const roleOptions = [{ key: "all", label: "All" }, ...roleKinds];
  const typeOptions = [{ key: "all", label: "All" }, ...types];
  const activeChips = [
    role !== "all" ? { key: "role", label: roleKinds.find((r) => r.key === role)?.label, onRemove: () => setRole("all") } : null,
    type !== "all" ? { key: "type", label: types.find((t) => t.key === type)?.label, onRemove: () => setType("all") } : null,
  ].filter(Boolean);

  let rowIndex = 0;

  return (
    <div id="archive" className="scroll-mt-28">
      <div className="flex flex-col gap-4 border-b border-line pb-8">
        <FilterGroup label="Role" options={roleOptions} value={role} onChange={setRole} layoutId="events-role" counts={roleCounts} />
        <FilterGroup label="Type" options={typeOptions} value={type} onChange={setType} layoutId="events-type" counts={typeCounts} />
      </div>

      <div className="mt-10 grid lg:grid-cols-12 gap-x-10">
        <aside className="hidden lg:block lg:col-span-2">
          <div className="sticky top-28">
            <ul className="relative border-l border-line pl-5">
              {/* Progress fill along the rail's spine. */}
              <motion.span aria-hidden="true" style={{ scaleY: reduced ? 1 : railFill }} className="absolute -left-[1px] top-0 bottom-0 w-[1px] origin-top bg-white/40" />
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
                      {y === "upcoming" ? "Upcoming" : y}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 text-xs text-dim tabular-nums" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={filtered.length} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }} className="inline-block">
                  {filtered.length} of {items.length} events
                </motion.span>
              </AnimatePresence>
            </div>

            <AnimatePresence initial={false}>
              {filtering ? (
                <motion.div key="chips" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: EASE }} className="overflow-hidden">
                  <ul className="mt-3 flex flex-col items-start gap-1.5">
                    {activeChips.map((c) => (
                      <li key={c.key}>
                        <button
                          type="button"
                          onClick={c.onRemove}
                          className="group/chip inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-white/85 hover:border-white/50 transition-colors"
                          aria-label={`Remove ${c.label} filter`}
                        >
                          {c.label}
                          <span aria-hidden="true" className="text-dim group-hover/chip:text-white transition-colors">×</span>
                        </button>
                      </li>
                    ))}
                    <li>
                      <button type="button" onClick={clear} className="text-xs text-dim hover:text-white transition-colors underline-offset-4 hover:underline">
                        Clear all
                      </button>
                    </li>
                  </ul>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <p className="mt-8 text-[11px] leading-5 text-dim/80">
              <kbd className="rounded border border-line px-1 font-sans">↑</kbd> <kbd className="rounded border border-line px-1 font-sans">↓</kbd> move
              <span className="mx-1.5">·</span>
              <kbd className="rounded border border-line px-1 font-sans">↵</kbd> open
            </p>
          </div>
        </aside>

        <div
          ref={listRef}
          className="lg:col-span-10"
          onMouseMove={onMove}
          onMouseLeave={() => {
            setHovered(null);
            setCursorSlug(null);
          }}
          onKeyDown={onKeyDown}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {groups.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-16">
                <p className="text-muted">Nothing matches that combination yet.</p>
                <button type="button" onClick={clear} className="mt-4 inline-flex items-center gap-2 text-sm text-white hover:text-slate-200 transition-colors">
                  Clear filters
                  <Icon name="arrow-right" className="text-xs" />
                </button>
              </motion.div>
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
                <h3 className="pt-2 pb-3 text-xs uppercase tracking-[0.12em] text-dim tabular-nums">{year === "upcoming" ? "Upcoming" : year}</h3>
                <ul className="mb-10">
                  <AnimatePresence initial={false}>
                    {list.map((item) => {
                      const i = rowIndex++;
                      const isCursor = cursorSlug === item.slug;
                      return (
                        <motion.li
                          key={item.slug}
                          layout
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, ease: EASE, delay: Math.min(i, 14) * 0.025 }}
                          onMouseEnter={(e) => {
                            mx.set(e.clientX);
                            my.set(e.clientY);
                            setHovered(item);
                            setCursorSlug(item.slug);
                          }}
                          className="border-t border-line last:border-b"
                        >
                          <Link
                            href={`/events/${item.slug}`}
                            data-row
                            onFocus={() => setCursorSlug(item.slug)}
                            className="group relative grid grid-cols-[64px_1fr_auto] md:grid-cols-[88px_1fr_auto_28px] items-baseline gap-x-4 md:gap-x-8 py-5 -mx-4 px-4 rounded-xl transition-colors hover:bg-white/[0.03] focus:outline-none focus-visible:bg-white/[0.04]"
                          >
                            {isCursor ? (
                              <motion.span
                                layoutId="events-row-cursor"
                                aria-hidden="true"
                                className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-white"
                                transition={{ duration: 0.3, ease: EASE }}
                              />
                            ) : null}
                            <span className={`text-sm tabular-nums transition-colors ${isCursor ? "text-white" : "text-white/70"}`}>
                              {shortDate(item.date, item.datePrecision)}
                            </span>
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
                          </Link>
                        </motion.li>
                      );
                    })}
                  </AnimatePresence>
                </ul>
              </motion.section>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {canHover ? <HoverPreview item={hovered} x={sx} y={sy} rotate={rotate} /> : null}
    </div>
  );
}
