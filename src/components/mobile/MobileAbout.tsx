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
    <div className="relative bg-white pt-10 pb-14">
      <div className="mx-auto w-full max-w-[560px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} size="mobile" />
        </Reveal>

        <Reveal className="relative mx-auto mt-7 w-[92%] max-w-[400px]">
          <div className="absolute -left-3 -top-3 -z-0 h-full w-full shape-blob-3 bg-mint" aria-hidden="true" />
          <div className="shape-blob-2 relative aspect-[4/3.4] overflow-hidden border-[5px] border-white bg-sky-soft shadow-card">
            {image ? (
              <Image
                src={image.src}
                alt={`${kindergarten.fullName} — балалар ортасы`}
                fill
                sizes="(max-width: 600px) 86vw, 400px"
                className="object-cover object-center"
              />
            ) : (
              <Illustration name="playground" className="absolute inset-0 h-full w-full" />
            )}
          </div>
          <Star className="absolute -right-2 -top-3 size-8 text-sun-deep animate-spin-slow" />
          <Sparkle className="absolute -left-3 bottom-4 size-5 text-sky animate-twinkle" />
        </Reveal>

        <Reveal className="mt-7 space-y-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-pretty">
              {p}
            </p>
          ))}
        </Reveal>

        <ul className="mt-7 grid grid-cols-2 gap-3">
          {about.highlights.map((h, i) => {
            const Icon = highlightIcons[h.key];
            return (
              <li key={h.key} className={cardStyles[i]}>
                <Reveal delay={i * 0.05} y={14} className="flex h-full flex-col gap-2.5 p-3.5">
                  <span className={`grid size-10 place-items-center rounded-xl ${iconStyles[i]}`}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="leading-tight">
                    <span className="block font-display text-[15px] font-black text-ink min-[375px]:text-base">{h.title}</span>
                    <span className="mt-1 block text-[13px] font-semibold text-ink-soft">{h.text}</span>
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
