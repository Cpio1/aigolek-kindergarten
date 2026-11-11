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
  "bg-sky-soft rounded-[32px_32px_32px_10px]",
  "bg-sun-soft rounded-[10px_32px_32px_32px] translate-y-6",
  "bg-mint rounded-[32px_10px_32px_32px]",
  "bg-[#ffe9e3] rounded-[32px_32px_10px_32px] translate-y-6",
];
const iconStyles = ["bg-sky text-white", "bg-sun text-ink", "bg-mint-deep text-white", "bg-coral text-white"];

export function DesktopAbout({ image }: { image: SiteImage | null }) {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 xl:py-28">
      <Cloud className="absolute right-[6%] top-12 -z-10 w-24 text-sky-soft animate-drift" />
      <Dots className="absolute right-[3%] bottom-16 -z-10 w-20 text-sun/60" />

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[0.92fr_1.08fr] items-center gap-14 px-8 xl:gap-20">
        {/* Фото */}
        <Reveal x={-30} y={0} className="relative mx-auto w-full max-w-[430px]">
          <Blob variant={2} className="absolute -left-14 -top-12 -z-10 size-[300px] text-sky-soft" />
          <div className="absolute -right-5 -bottom-5 -z-10 h-full w-full shape-arch bg-mint" aria-hidden="true" />
          <div className="group shape-arch relative aspect-[1/1.12] overflow-hidden border-[8px] border-white bg-sky-soft shadow-card">
            {image ? (
              <Image
                src={image.src}
                alt={`${kindergarten.fullName} — балалар ортасы`}
                fill
                sizes="430px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <Illustration name="playground" className="absolute inset-0 h-full w-full" />
            )}
          </div>
          <Star className="absolute -right-6 top-10 size-10 text-sun-deep animate-spin-slow" />
          <Sparkle className="absolute -left-4 bottom-20 size-6 text-sky animate-twinkle" />
          <div className="absolute -bottom-6 left-8 flex items-center gap-3 rounded-[20px_20px_20px_6px] bg-white px-4 py-3 shadow-card">
            <span className="grid size-10 place-items-center rounded-full bg-coral/90 text-white">
              <Heart className="size-5" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="text-sm font-extrabold leading-tight text-ink">
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
            <div className="mt-5 space-y-3 text-[17px] leading-relaxed text-ink-soft">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <ul className="mt-8 grid grid-cols-2 gap-4 pb-6">
            {about.highlights.map((h, i) => {
              const Icon = highlightIcons[h.key];
              return (
                <li key={h.key} className={cardStyles[i]}>
                  <Reveal delay={i * 0.08} className="flex h-full items-center gap-3.5 p-4 xl:p-5">
                    <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${iconStyles[i]}`}>
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block font-display text-[17px] font-black text-ink xl:text-lg">{h.title}</span>
                      <span className="mt-1 block text-sm font-semibold text-ink-soft">{h.text}</span>
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
