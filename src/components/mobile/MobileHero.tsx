import { ArrowDown, Baby, Users, UtensilsCrossed } from "lucide-react";
import { hero, kindergarten, whatsappUrl } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { ArtImage } from "@/components/shared/ArtImage";
import { Reveal } from "@/components/shared/Reveal";
import { Blob, Cloud, Sparkle, Squiggle, Star, Sun, Wave } from "@/components/shared/DecorativeShapes";
import { Illustration } from "@/components/shared/Illustrations";
import { WhatsAppIcon } from "@/components/shared/WhatsAppButton";

const statStyles = [
  { icon: Baby, box: "bg-white", iconBox: "bg-sky text-white" },
  { icon: Users, box: "bg-sun-soft", iconBox: "bg-sun text-ink" },
  { icon: UtensilsCrossed, box: "bg-mint", iconBox: "bg-mint-deep text-white" },
];

export function MobileHero({ image }: { image: SiteImage | null }) {
  return (
    <div className="relative isolate overflow-hidden bg-sky-soft pt-5 pb-12">
      <Blob variant={1} className="absolute -right-14 -top-10 -z-10 size-36 text-white/60" />
      <Blob variant={0} className="absolute -left-12 top-[48%] -z-10 size-28 text-mint/80" />

      <div className="mx-auto w-full max-w-[560px] px-4 sm:px-6">
        {/* 1. Безендіру */}
        <div className="flex items-center justify-between" aria-hidden="true">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] font-extrabold text-sky-deep shadow-soft">
            <Star className="size-3 text-sun-deep" />
            {hero.badge}
          </span>
          <Cloud className="w-9 text-white animate-drift" />
        </div>

        {/* 2–3. Тақырып пен ішкі тақырып */}
        <h1 className="mt-4 font-display text-[clamp(1.95rem,9.4vw,2.75rem)] font-black leading-[1.06] tracking-tight text-ink">
          <span className="relative inline-block text-sky-deep">
            {hero.titleQuoted}
            <Squiggle className="absolute -bottom-1.5 left-0.5 -z-10 h-2 w-[90%] text-sun" />
          </span>
          <br />
          {hero.titleRest}
        </h1>
        <p className="mt-3.5 font-display text-[clamp(1rem,4.5vw,1.2rem)] font-extrabold leading-snug text-sky-dark text-balance">
          {hero.subtitle}
        </p>

        {/* 4. Фото */}
        <div className="relative mx-auto mt-5 w-[94%] max-w-[360px]">
          <div className="absolute -right-2 -bottom-2 -z-10 h-[94%] w-[94%] shape-blob-2 bg-sun" aria-hidden="true" />
          <div className="shape-blob-1 relative aspect-[1/0.92] overflow-hidden border-[5px] border-white bg-sky-mist shadow-float">
            {image ? (
              <ArtImage
                image={image}
                alt={`${kindergarten.fullName} — басты фото`}
                media="(max-width: 1023.98px)"
                sizes="(max-width: 600px) 88vw, 360px"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            ) : (
              <Illustration name="house" className="absolute inset-0 h-full w-full" />
            )}
          </div>
          <Sun className="absolute -top-4 -right-2 size-11 animate-float-slow" />
          <Sparkle className="absolute -left-2 bottom-6 size-3.5 text-sky-deep animate-twinkle" />
        </div>

        {/* 5. WhatsApp */}
        <div className="mt-5 flex flex-col gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-wa px-5 text-base font-extrabold text-white shadow-[0_14px_28px_-14px_rgb(22_133_74/0.9)] transition active:scale-[0.98]"
          >
            <WhatsAppIcon className="size-5.5" />
            {hero.primaryCta}
          </a>
          <a
            href="#about"
            className="flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-white/70 px-5 text-[15px] font-extrabold text-sky-dark"
          >
            {hero.secondaryCta}
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>

        {/* 6. Ақпараттық индикаторлар */}
        <ul className="mt-5 grid grid-cols-3 gap-2">
          {hero.stats.map((s, i) => {
            const st = statStyles[i];
            const Icon = st.icon;
            return (
              <li key={s.label}>
                <Reveal delay={i * 0.06} y={12} className={`flex h-full flex-col items-center rounded-[18px] px-1 py-2.5 text-center shadow-soft ${st.box}`}>
                  <span className={`grid size-7 place-items-center rounded-full ${st.iconBox}`}>
                    <Icon className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="mt-1.5 font-display text-[clamp(0.95rem,4.3vw,1.1rem)] font-black leading-none text-ink">{s.value}</span>
                  <span className="mt-1 text-[11px] font-bold leading-tight text-ink-soft">{s.label}</span>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>

      <Wave className="absolute inset-x-0 -bottom-px h-5 w-full text-white" />
    </div>
  );
}
