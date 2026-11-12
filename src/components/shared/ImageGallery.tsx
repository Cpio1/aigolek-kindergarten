"use client";

import Image from "next/image";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { SiteImage } from "@/lib/images";
import { kindergarten } from "@/data/kindergarten";

export function galleryAlt(i: number) {
  return `${kindergarten.fullName} — галерея, ${i + 1}-фото`;
}

/** Фото пропорциясы (ені/биіктігі). Тым ұзын/жалпақ суреттер ғана шектеледі — бұрмаланбайды, object-cover аздап қиады. */
export function photoRatio(img: SiteImage, min = 0.75, max = 1.6) {
  return Math.min(max, Math.max(min, img.width / img.height));
}

/** Фотоларды қатарларға бөледі (әр қатардағы фотолар бір биіктікте, пропорциясы сақталады). */
export function toRows<T>(items: T[], perRow: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += perRow) rows.push(items.slice(i, i + perRow));
  return rows;
}

/** Галереяның ортақ логикасы: қанша фото көрсетілетіні және ашық фото индексі. */
export function useGallery(total: number, initialCount: number) {
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const visibleCount = expanded ? total : Math.min(total, initialCount);
  return {
    expanded,
    toggle: () => setExpanded((v) => !v),
    visibleCount,
    hasMore: total > initialCount,
    openIndex,
    open: (i: number) => setOpenIndex(i),
    close: () => setOpenIndex(null),
    setIndex: setOpenIndex,
  };
}

type LightboxProps = {
  images: SiteImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  variant: "desktop" | "mobile";
};

export function Lightbox({ images, index, onClose, onIndexChange, variant }: LightboxProps) {
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const [direction, setDirection] = useState(0);
  const open = index !== null;
  const total = images.length;

  useEffect(() => setMounted(true), []);

  const go = useCallback(
    (step: number) => {
      if (index === null || total < 2) return;
      setDirection(step);
      onIndexChange((index + step + total) % total);
    },
    [index, total, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll<HTMLElement>("button");
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [open, onClose, go]);

  if (!mounted) return null;

  const current = index !== null ? images[index] : null;
  const isMobile = variant === "mobile";

  return createPortal(
    <AnimatePresence>
      {open && current ? (
        <m.div
          key="lightbox"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Фотосуретті толық экранда қарау"
          className="fixed inset-0 z-[100] flex flex-col bg-[#13202f]/95 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div
            className="flex shrink-0 items-center justify-between px-4 pt-[max(12px,env(safe-area-inset-top))] pb-2 lg:px-8 lg:pt-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
          >
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold tabular-nums">
              {index! + 1} / {total}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="Жабу"
            >
              <X className="size-6" />
            </button>
          </div>

          <div
            className="relative min-h-0 flex-1 touch-pan-y select-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) onClose();
            }}
            onTouchStart={(e) => {
              touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }}
            onTouchEnd={(e) => {
              if (!touch.current) return;
              const dx = e.changedTouches[0].clientX - touch.current.x;
              const dy = e.changedTouches[0].clientY - touch.current.y;
              touch.current = null;
              if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
              else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) onClose();
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <m.div
                key={current.src}
                custom={direction}
                className={`pointer-events-none absolute inset-0 ${isMobile ? "mx-2 my-2" : "mx-24 my-4"}`}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={current.src}
                  alt={galleryAlt(index!)}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </m.div>
            </AnimatePresence>

            {total > 1 && !isMobile ? (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-6 top-1/2 grid size-14 -translate-y-1/2 place-items-center rounded-full bg-white/10 transition hover:bg-white/25"
                  aria-label="Алдыңғы фото"
                >
                  <ChevronLeft className="size-7" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-6 top-1/2 grid size-14 -translate-y-1/2 place-items-center rounded-full bg-white/10 transition hover:bg-white/25"
                  aria-label="Келесі фото"
                >
                  <ChevronRight className="size-7" />
                </button>
              </>
            ) : null}
          </div>

          {total > 1 && isMobile ? (
            <div className="flex shrink-0 items-center justify-center gap-6 px-4 pt-2 pb-[max(16px,env(safe-area-inset-bottom))]">
              <button
                type="button"
                onClick={() => go(-1)}
                className="grid size-12 place-items-center rounded-full bg-white/10 active:bg-white/25"
                aria-label="Алдыңғы фото"
              >
                <ChevronLeft className="size-6" />
              </button>
              <span className="text-xs font-semibold text-white/70">Саусақпен сырғытыңыз</span>
              <button
                type="button"
                onClick={() => go(1)}
                className="grid size-12 place-items-center rounded-full bg-white/10 active:bg-white/25"
                aria-label="Келесі фото"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>
          ) : (
            <div className="h-6 shrink-0" />
          )}
        </m.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
