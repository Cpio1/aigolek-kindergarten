"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { Heart, House, Images, Menu, Phone, Puzzle, Users, UtensilsCrossed, X, type LucideIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { kindergarten, navItems, whatsappUrl, type SectionId } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Logo } from "@/components/shared/Logo";
import { Cloud, Star } from "@/components/shared/DecorativeShapes";
import { WhatsAppIcon } from "@/components/shared/WhatsAppButton";

const icons: Record<SectionId, LucideIcon> = {
  home: House,
  about: Heart,
  groups: Users,
  nutrition: UtensilsCrossed,
  activities: Puzzle,
  gallery: Images,
  contacts: Phone,
};
const tones = ["bg-sky-soft text-sky-deep", "bg-[#ffe9e3] text-[#b5513c]", "bg-mint text-mint-dark", "bg-sun-soft text-[#8a5b00]"];

export function MobileNavbar({ logo }: { logo: SiteImage | null }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus({ preventScroll: true });
  }, []);

  // Escape, фокус тұзағы және фон айналымын құлыптау
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    panelRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "Tab" && panelRef.current) {
        const items = panelRef.current.querySelectorAll<HTMLElement>("a,button");
        const first = items[0];
        const last = items[items.length - 1];
        if (document.activeElement === panelRef.current) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    // Экран 1024px-ден үлкейсе мәзірді жабу
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      html.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open, close]);

  const goTo = (id: SectionId) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.documentElement.style.overflow = "";
    setOpen(false);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === "home") window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
      });
    });
  };

  return (
    <>
      <div
        className={`transition-[background-color,box-shadow] duration-300 ${
          scrolled || open ? "bg-white/95 shadow-[0_8px_24px_-16px_rgb(38_55_74/0.4)] backdrop-blur-md" : "bg-sky-soft/80 backdrop-blur-sm"
        }`}
      >
        <nav aria-label="Мобильді мәзір" className="mx-auto flex h-16 w-full max-w-[720px] items-center justify-between gap-3 px-4 sm:px-6">
          <a href="#home" onClick={goTo("home")} className="min-w-0 text-[14px]" aria-label="Айгөлек — басты бет">
            <Logo image={logo} size={38} />
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
            className="relative grid size-11 shrink-0 place-items-center rounded-2xl bg-sky-deep text-white shadow-[0_10px_20px_-10px_rgb(43_116_176/0.9)] transition active:scale-95"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <m.div
              key="overlay"
              className="fixed inset-x-0 top-16 bottom-0 z-40 bg-ink/40 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => close(false)}
              aria-hidden="true"
            />
            <m.div
              key="panel"
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Сайт бөлімдері"
              tabIndex={-1}
              className="fixed outline-none top-16 right-0 bottom-0 z-50 flex w-[min(88vw,380px)] flex-col overflow-y-auto rounded-tl-[32px] bg-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pointer-events-none absolute -top-2 right-4 opacity-80" aria-hidden="true">
                <Cloud className="w-20 text-sky-soft" />
              </div>
              <Star className="pointer-events-none absolute right-24 top-6 size-5 text-sun-deep" />

              <ul className="relative flex flex-col gap-1.5 px-4 pt-6">
                {navItems.map((item, i) => {
                  const Icon = icons[item.id];
                  return (
                    <m.li
                      key={item.id}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.035, duration: 0.3 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={goTo(item.id)}
                        className="flex min-h-[52px] items-center gap-3.5 rounded-2xl px-3 py-2 text-[17px] font-extrabold text-ink transition active:bg-sky-mist hover:bg-sky-mist"
                      >
                        <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${tones[i % tones.length]}`}>
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        {item.label}
                      </a>
                    </m.li>
                  );
                })}
              </ul>

              <div className="mt-auto space-y-2.5 px-4 pt-6 pb-[max(20px,env(safe-area-inset-bottom))]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-wa px-5 text-base font-extrabold text-white"
                >
                  <WhatsAppIcon className="size-5" />
                  Бізге жазылыңыз
                </a>
                <a
                  href={kindergarten.phoneHref}
                  className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border-2 border-sky/25 px-5 text-base font-extrabold text-sky-dark"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {kindergarten.phone}
                </a>
              </div>
            </m.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
