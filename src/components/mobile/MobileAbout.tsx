import Image from "next/image";
import { about, kindergarten } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Sparkle, Star } from "@/components/shared/DecorativeShapes";
import { Illustration } from "@/components/shared/Illustrations";
import { highlightIcons } from "@/components/shared/icons";

const cardStyles = [
  "bg-sky-soft rounded-[26px_26px_26px_8px]",
  "bg-sun-soft rounded-[26px_26px_8px_26px]",
  "bg-mint rounded-[26px_8px_26px_26px]",
  "bg-[#ffe9e3] rounded-[8px_26px_26px_26px]",
];
const iconStyles = ["bg-sky text-white", "bg-sun text-ink", "bg-mint-deep text-white", "bg-coral text-white"];

export function MobileAbout({ image }: { image: SiteImage | null }) {
  return (
    <div className="relative bg-white pt-8 pb-10">
      <div className="mx-auto w-full max-w-[560px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} size="mobile" />
        </Reveal>

        <Reveal className="relative mx-auto mt-5 w-[94%] max-w-[440px]">
          <div className="absolute -left-2 -top-2 -z-0 h-full w-full shape-photo-about-back bg-mint" aria-hidden="true" />
          <div className="shape-photo-about relative aspect-[4/3.1] overflow-hidden border-4 border-white bg-sky-soft shadow-card">
            {image ? (
              <Image
                src={image.src}
                alt={`${kindergarten.fullName} — балалар ортасы`}
                fill
                sizes="(max-width: 600px) 90vw, 440px"
                className="object-cover object-[50%_45%]"
              />
            ) : (
              <Illustration name="playground" className="absolute inset-0 h-full w-full" />
            )}
          </div>
          <Star className="absolute -right-2 -top-4 size-5 text-sun-deep animate-spin-slow" />
          <Sparkle className="absolute -left-3 -bottom-3 size-3.5 text-sky animate-twinkle" />
        </Reveal>

        <Reveal className="mt-5 space-y-2.5 text-[14.5px] leading-relaxed text-ink-soft sm:text-base">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-pretty">
              {p}
            </p>
          ))}
        </Reveal>

        <ul className="mt-5 grid grid-cols-2 gap-2.5">
          {about.highlights.map((h, i) => {
            const Icon = highlightIcons[h.key];
            return (
              <li key={h.key} className={cardStyles[i]}>
                <Reveal delay={i * 0.05} y={14} className="flex h-full flex-col gap-2 p-3">
                  <span className={`grid size-9 place-items-center rounded-xl ${iconStyles[i]}`}>
                    <Icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <span className="leading-tight">
                    <span className="block font-display text-[14px] font-black text-ink min-[375px]:text-[15px]">{h.title}</span>
                    <span className="mt-0.5 block text-[12.5px] font-semibold text-ink-soft">{h.text}</span>
                  </span>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
