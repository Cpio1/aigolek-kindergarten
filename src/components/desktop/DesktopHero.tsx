"use client";

import { useReducedMotion, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { ArrowDown, Baby, Clock, Languages, Users, UtensilsCrossed } from "lucide-react";
import { hero, kindergarten, whatsappUrl } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { ArtImage } from "@/components/shared/ArtImage";
import { Blob, Cloud, Dots, Sparkle, Squiggle, Star, Sun, Wave } from "@/components/shared/DecorativeShapes";
import { Illustration } from "@/components/shared/Illustrations";
import { WhatsAppIcon } from "@/components/shared/WhatsAppButton";

const statStyles = [
  { icon: Baby, box: "bg-sky-soft rounded-[22px_22px_22px_8px]", iconBox: "bg-sky text-white" },
  { icon: Users, box: "bg-sun-soft rounded-[22px_8px_22px_22px]", iconBox: "bg-sun text-ink" },
  { icon: UtensilsCrossed, box: "bg-mint rounded-[8px_22px_22px_22px]", iconBox: "bg-mint-deep text-white" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function DesktopHero({ image }: { image: SiteImage | null }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -50]);
  const yFast = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -110]);
  const yBack = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 40]);

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-sky-mist via-sky-soft/60 to-white">
      {/* Фондық фигуралар */}
      <Blob variant={1} className="absolute -left-40 -top-40 -z-10 size-[520px] text-white/70" />
      <Blob variant={2} className="absolute -right-32 top-24 -z-10 size-[460px] text-sky-soft" />
      <m.div style={{ y: ySlow }} className="absolute left-[8%] top-10 -z-10" aria-hidden="true">
        <Cloud className="w-28 text-white animate-drift" />
      </m.div>
      <m.div style={{ y: yFast }} className="absolute left-[44%] top-[14%] -z-10" aria-hidden="true">
        <Sparkle className="size-6 text-sun-deep animate-twinkle" />
      </m.div>
      <Dots className="absolute bottom-24 left-[3%] -z-10 w-16 text-sky/25" />

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[1.05fr_0.95fr] items-center gap-10 px-8 pt-10 pb-24 xl:gap-16 xl:pt-14 xl:pb-28">
        {/* Сол жақ — мәтін */}
        <div className="relative">
          <m.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-sky-deep shadow-soft"
          >
            <span className="grid size-6 place-items-center rounded-full bg-sun">
              <Star className="size-3.5 text-ink" />
            </span>
            {hero.badge}
          </m.span>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="mt-5 font-display text-[clamp(2.9rem,4.6vw,4.4rem)] font-black leading-[1.02] tracking-tight text-ink"
          >
            <span className="relative inline-block text-sky">
              {hero.titleQuoted}
              <Squiggle className="absolute -bottom-3 left-1 -z-10 h-3.5 w-[92%] text-sun" />
            </span>
            <br />
            {hero.titleRest}
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-7 max-w-[30rem] font-display text-[clamp(1.25rem,1.7vw,1.6rem)] font-extrabold leading-snug text-sky-dark"
          >
            {hero.subtitle}
          </m.p>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease }}
            className="mt-3 max-w-[32rem] text-[17px] leading-relaxed text-ink-soft xl:text-lg"
          >
            {hero.description}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-wa px-6 py-3.5 text-base font-extrabold text-white shadow-[0_14px_30px_-14px_rgb(22_133_74/0.9)] transition hover:-translate-y-0.5 hover:bg-[#0f7340]"
            >
              <WhatsAppIcon className="size-5" />
              {hero.primaryCta}
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-sky/30 bg-white px-6 py-3 text-base font-extrabold text-sky-dark transition hover:border-sky hover:bg-sky-mist"
            >
              {hero.secondaryCta}
              <ArrowDown className="size-4.5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </m.div>

          <ul className="mt-9 grid max-w-[32rem] grid-cols-3 gap-3">
            {hero.stats.map((s, i) => {
              const st = statStyles[i];
              const Icon = st.icon;
              return (
                <m.li
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.38 + i * 0.08, ease }}
                  className={`flex items-center gap-2.5 px-3 py-3 xl:px-3.5 ${st.box}`}
                >
                  <span className={`grid size-9 shrink-0 place-items-center rounded-full ${st.iconBox}`}>
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 leading-tight">
                    <span className="block font-display text-lg font-black text-ink xl:text-xl">{s.value}</span>
                    <span className="block text-[13px] font-bold text-ink-soft">{s.label}</span>
                  </span>
                </m.li>
              );
            })}
          </ul>
        </div>

        {/* Оң жақ — фото */}
        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="relative mx-auto w-full max-w-[500px] xl:max-w-[530px]"
        >
          <m.div style={{ y: yBack }} className="absolute -right-6 -bottom-6 -z-10 h-[88%] w-[88%]" aria-hidden="true">
            <div className="shape-blob-2 h-full w-full bg-sun" />
          </m.div>
          <Blob variant={0} className="absolute -left-10 top-6 -z-10 size-40 text-mint" />

          <div className="shape-blob-1 relative aspect-[1/1.06] overflow-hidden border-[10px] border-white bg-sky-soft shadow-float">
            {image ? (
              <ArtImage
                image={image}
                alt={`${kindergarten.fullName} — басты фото`}
                media="(min-width: 1024px)"
                sizes="(min-width: 1280px) 530px, 500px"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            ) : (
              <Illustration name="house" className="absolute inset-0 h-full w-full" />
            )}
          </div>

          {/* Қалқымалы безендірулер */}
          <m.div style={{ y: yFast }} className="absolute -right-8 -top-10" aria-hidden="true">
            <Sun className="size-28 animate-float-slow" />
          </m.div>
          <m.div style={{ y: ySlow }} className="absolute -left-16 top-[16%]" aria-hidden="true">
            <Cloud className="w-32 text-white drop-shadow-[0_10px_18px_rgb(57_139_203/0.25)] animate-drift" />
          </m.div>
          <Star className="absolute -left-2 bottom-[30%] size-9 text-sun-deep animate-spin-slow" />
          <Sparkle className="absolute right-[12%] -bottom-8 size-7 text-sky animate-twinkle" />
          <span className="absolute -right-3 top-[48%] size-5 rounded-full bg-mint-deep/80 animate-float" aria-hidden="true" />

          {/* Ақпараттық чиптер */}
          <div className="absolute -left-10 bottom-8 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur animate-float-slow xl:-left-14">
            <span className="grid size-10 place-items-center rounded-xl bg-sky-soft text-sky-deep">
              <Clock className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-black text-ink">{kindergarten.hours}</span>
              <span className="block text-xs font-bold text-ink-soft">Жұмыс уақыты</span>
            </span>
          </div>
          <div className="absolute -right-4 top-[30%] flex items-center gap-2 rounded-full bg-white/95 py-2 pr-4 pl-2 shadow-card backdrop-blur animate-float xl:-right-8">
            <span className="grid size-8 place-items-center rounded-full bg-mint text-mint-dark">
              <Languages className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-extrabold text-ink">Қазақ тілінде</span>
          </div>
        </m.div>
      </div>

      <Wave className="absolute inset-x-0 -bottom-px h-16 w-full text-white" />
    </div>
  );
}
