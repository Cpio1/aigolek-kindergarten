import Image from "next/image";
import { Heart } from "lucide-react";
import { about, kindergarten } from "@/data/kindergarten";
import { highlightIcons } from "@/components/shared/icons";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Blob, Cloud, Dots, Sparkle, Star } from "@/components/shared/DecorativeShapes";
import { Illustration } from "@/components/shared/Illustrations";

const cardStyles = [
  "bg-sky-soft rounded-[28px_28px_28px_10px]",
  "bg-sun-soft rounded-[10px_28px_28px_28px] translate-y-3",
  "bg-mint rounded-[28px_10px_28px_28px]",
  "bg-[#ffe9e3] rounded-[28px_28px_10px_28px] translate-y-3",
];
const iconStyles = ["bg-sky text-white", "bg-sun text-ink", "bg-mint-deep text-white", "bg-coral text-white"];

export function DesktopAbout({ image }: { image: SiteImage | null }) {
  return (
    <div className="relative isolate overflow-hidden bg-white py-[clamp(3rem,8vh,4.5rem)]">
      <Cloud className="absolute right-[4%] top-8 -z-10 w-16 text-sky-soft animate-drift" />
      <Dots className="absolute right-[2%] bottom-10 -z-10 w-12 text-sun/60" />

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[0.85fr_1.15fr] items-center gap-12 px-8 xl:gap-16">
        {/* Фото */}
        <Reveal x={-30} y={0} className="relative mx-auto w-full max-w-[clamp(280px,25vw,360px)]">
          <Blob variant={2} className="absolute -left-9 -top-8 -z-10 size-[190px] text-sky-soft" />
          <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full shape-arch bg-mint" aria-hidden="true" />
          <div className="group shape-arch relative aspect-[1/1.1] overflow-hidden border-[6px] border-white bg-sky-soft shadow-card">
            {image ? (
              <Image
                src={image.src}
                alt={`${kindergarten.fullName} — балалар ортасы`}
                fill
                sizes="360px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <Illustration name="playground" className="absolute inset-0 h-full w-full" />
            )}
          </div>
          <Star className="absolute -right-8 top-6 size-6 text-sun-deep animate-spin-slow" />
          <Sparkle className="absolute -left-6 bottom-24 size-4 text-sky animate-twinkle" />
          <div className="absolute -bottom-5 left-6 flex items-center gap-2.5 rounded-[18px_18px_18px_6px] bg-white px-3 py-2 shadow-card">
            <span className="grid size-8 place-items-center rounded-full bg-coral/90 text-white">
              <Heart className="size-4" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="text-[13px] font-extrabold leading-tight text-ink">
              Мейірім мен
              <br />
              қамқорлық
            </span>
          </div>
        </Reveal>

        {/* Мәтін */}
        <div>
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} align="left" />
            <div className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-soft xl:text-base">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <ul className="mt-6 grid grid-cols-2 gap-3 pb-3">
            {about.highlights.map((h, i) => {
              const Icon = highlightIcons[h.key];
              return (
                <li key={h.key} className={cardStyles[i]}>
                  <Reveal delay={i * 0.08} className="flex h-full items-center gap-3 p-3.5 xl:p-4">
                    <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${iconStyles[i]}`}>
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block font-display text-[15px] font-black text-ink xl:text-base">{h.title}</span>
                      <span className="mt-0.5 block text-[13px] font-semibold text-ink-soft">{h.text}</span>
                    </span>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
