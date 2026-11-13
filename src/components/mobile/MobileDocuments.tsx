import { ExternalLink, FileText, FolderOpen } from "lucide-react";
import { documents } from "@/data/kindergarten";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Sparkle, Star } from "@/components/shared/DecorativeShapes";
import { documentIcons } from "@/components/shared/icons";

const tones = ["bg-sky-soft text-sky-dark", "bg-mint text-mint-dark", "bg-sun-soft text-[#8a5b00]"];

export function MobileDocuments() {
  return (
    <div className="relative bg-white pt-10 pb-10">
      <div className="mx-auto w-full max-w-[560px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={documents.eyebrow} title={documents.title} description={documents.subtitle} size="mobile" />
        </Reveal>

        <Reveal className="relative mt-6 overflow-hidden rounded-[24px_24px_24px_8px] bg-sky-mist p-4 pt-6 text-center">
          <Star className="pointer-events-none absolute right-4 top-4 size-4 text-sun-deep animate-spin-slow" />
          <Sparkle className="pointer-events-none absolute left-5 top-10 size-3 text-sky animate-twinkle" />

          {/* Папка белгісі */}
          <div className="relative mx-auto size-[min(34vw,120px)]" aria-hidden="true">
            <div className="absolute inset-0 rounded-full bg-sun shadow-[0_18px_36px_-20px_rgb(245_185_53/0.9)]" />
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/70 animate-spin-slow" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="relative grid size-[52%] place-items-center rounded-[18px] bg-white text-sky-deep shadow-soft">
                <FolderOpen className="size-[55%]" strokeWidth={2.2} />
                <span className="absolute -right-1.5 -bottom-1.5 grid size-6 place-items-center rounded-lg bg-sky-deep text-white">
                  <FileText className="size-3.5" />
                </span>
              </span>
            </div>
          </div>

          <h3 className="mt-4 font-display text-[clamp(1.15rem,5.2vw,1.4rem)] font-black leading-tight text-ink text-balance">
            {documents.headline}
          </h3>
          <p className="mt-2 text-left text-[14.5px] leading-relaxed text-ink-soft">{documents.text}</p>

          <ul className="mt-4 grid grid-cols-3 gap-2">
            {documents.items.map((item, i) => {
              const Icon = documentIcons[item.key];
              return (
                <li key={item.key} className="flex min-w-0 flex-col items-center gap-1.5 rounded-2xl bg-white px-1 py-2.5 shadow-soft">
                  <span className={`grid size-9 place-items-center rounded-xl ${tones[i % tones.length]}`}>
                    <Icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <span className="max-w-full text-center text-[12px] leading-tight font-extrabold text-ink">{item.label}</span>
                </li>
              );
            })}
          </ul>

          <a
            href={documents.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-sky-deep px-5 text-base font-extrabold text-white shadow-[0_12px_24px_-12px_rgb(43_116_176/0.9)] transition active:scale-[0.98]"
          >
            <FolderOpen className="size-5 shrink-0" aria-hidden="true" />
            {documents.cta}
            <ExternalLink className="size-4 shrink-0 opacity-80" aria-hidden="true" />
            <span className="sr-only">(жаңа бетте ашылады)</span>
          </a>
          <p className="mt-2 text-[12.5px] font-semibold text-ink-soft">{documents.note}</p>
        </Reveal>
      </div>
    </div>
  );
}
