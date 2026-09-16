"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const EASE = [0.22, 1, 0.36, 1];

function isPortrait(img) {
  return img.height / img.width > 1.15;
}

export default function EventGallery({ images, title }) {
  const [open, setOpen] = useState(null); // index or null
  const closeRef = useRef(null);
  const returnRef = useRef(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? null : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => closeRef.current?.focus(), 50);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prev;
      clearTimeout(t);
      returnRef.current?.focus?.();
    };
  }, [open, close, step]);

  if (!images?.length) return null;
  const current = open === null ? null : images[open];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 [grid-auto-rows:150px] md:[grid-auto-rows:180px] lg:[grid-auto-rows:200px] grid-flow-dense">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            layoutId={`gallery-${img.src}`}
            onClick={(e) => {
              returnRef.current = e.currentTarget;
              setOpen(i);
            }}
            aria-label={`Open photo ${i + 1} of ${images.length}`}
            className={`group relative overflow-hidden rounded-xl border border-line bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
              isPortrait(img) ? "row-span-2" : ""
            }`}
          >
            <Image
              src={img.src}
              alt={`${title}, photo ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
              placeholder="blur"
              blurDataURL={img.blur}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {current ? (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} photos`}
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#010314]/95 backdrop-blur-md"
            onClick={close}
          >
            <div className="flex items-center justify-between px-6 py-4 lg:px-10">
              <p className="text-sm text-muted tabular-nums">
                {open + 1} <span className="text-dim">/ {images.length}</span>
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-white hover:border-white/60 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="relative flex flex-1 min-h-0 items-center justify-center px-6 pb-6 lg:px-10" onClick={(e) => e.stopPropagation()}>
              {/* Frame takes the photo's own aspect ratio, sized to whichever
                  of the viewport's width or height runs out first. */}
              <motion.div
                key={current.src}
                layoutId={`gallery-${current.src}`}
                transition={{ duration: 0.4, ease: EASE }}
                style={{
                  aspectRatio: `${current.width} / ${current.height}`,
                  width: `min(100%, 1100px, calc((100vh - 120px) * ${current.width / current.height}))`,
                }}
                className="relative overflow-hidden rounded-2xl border border-line bg-white/[0.03]"
              >
                <Image src={current.src} alt={`${title}, photo ${open + 1}`} fill sizes="100vw" placeholder="blur" blurDataURL={current.blur} className="object-cover" />
              </motion.div>

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                    className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-[#010314]/70 text-white hover:border-white/60 transition-colors"
                  >
                    <Icon name="arrow-left" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                    className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-[#010314]/70 text-white hover:border-white/60 transition-colors"
                  >
                    <Icon name="arrow-right" />
                  </button>
                </>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
