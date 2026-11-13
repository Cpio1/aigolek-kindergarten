import { ExternalLink, FileText, FolderOpen } from "lucide-react";
import { documents } from "@/data/kindergarten";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Blob, Cloud, Sparkle, Star } from "@/components/shared/DecorativeShapes";
import { documentIcons } from "@/components/shared/icons";

/** Папка айналасындағы шағын құжат белгішелері */
const orbit = [
  { pos: "-left-3 top-[18%]", tone: "bg-white text-sky-deep", rotate: "-rotate-6" },
  { pos: "-right-2 top-[10%]", tone: "bg-mint-deep text-white", rotate: "rotate-6" },
  { pos: "right-[6%] -bottom-2", tone: "bg-coral text-white", rotate: "-rotate-3" },
];
const chipTones = ["bg-sky-soft text-sky-dark", "bg-mint text-mint-dark", "bg-sun-soft text-[#8a5b00]"];

export function DesktopDocuments() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-[clamp(3rem,8vh,4.5rem)]">
      <Blob variant={1} className="absolute -right-24 top-10 -z-10 size-[220px] text-sun-soft" />
      <Sparkle className="absolute left-[7%] top-16 -z-10 size-4 text-sky animate-twinkle" />

      <div className="mx-auto w-full max-w-[1200px] px-8">
        <Reveal>
          <SectionHeading eyebrow={documents.eyebrow} title={documents.title} description={documents.subtitle} />
        </Reveal>

        <Reveal className="mx-auto mt-[clamp(1.75rem,4vh,2.5rem)] max-w-[1000px]">
          <div className="relative grid grid-cols-[0.8fr_1.2fr] items-center gap-10 overflow-hidden rounded-[40px_40px_40px_14px] bg-sky-mist px-10 py-9 xl:gap-14 xl:px-12">
            <Cloud className="pointer-events-none absolute right-6 top-5 w-16 text-white animate-drift" />
            <Star className="pointer-events-none absolute bottom-6 left-8 size-4 text-sun-deep animate-spin-slow" />

            {/* Папка композициясы */}
            <div className="relative mx-auto size-[clamp(180px,16vw,210px)]" aria-hidden="true">
              <div className="absolute inset-0 rounded-full bg-sun shadow-[0_26px_50px_-26px_rgb(245_185_53/0.9)]" />
              <div className="absolute inset-3.5 rounded-full border-[3px] border-dashed border-white/70 animate-spin-slow" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="relative grid size-[46%] place-items-center rounded-[28px] bg-white text-sky-deep shadow-card">
                  <FolderOpen className="size-[52%]" strokeWidth={2.2} />
                  <span className="absolute -right-2 -bottom-2 grid size-8 place-items-center rounded-xl bg-sky-deep text-white shadow-soft">
                    <FileText className="size-4" />
                  </span>
                </span>
              </div>
              {documents.items.map((item, i) => {
                const Icon = documentIcons[item.key];
                const o = orbit[i];
                return (
                  <span
                    key={item.key}
                    className={`absolute ${o.pos} animate-float`}
                    style={{ animationDelay: `${i * 0.8}s` }}
                  >
                    <span className={`grid size-11 place-items-center rounded-2xl border-[3px] border-white shadow-soft ${o.tone} ${o.rotate}`}>
                      <Icon className="size-5" />
                    </span>
                  </span>
                );
              })}
            </div>

            {/* Мәтін және батырма */}
            <div className="relative">
              <h3 className="font-display text-[clamp(1.35rem,1.9vw,1.75rem)] font-black leading-tight text-ink text-balance">
                {documents.headline}
              </h3>
              <p className="mt-2.5 max-w-[34rem] text-[15px] leading-relaxed text-ink-soft xl:text-base">{documents.text}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {documents.items.map((item, i) => {
                  const Icon = documentIcons[item.key];
                  return (
                    <li
                      key={item.key}
                      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-extrabold ${chipTones[i % chipTones.length]}`}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      {item.label}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <a
                  href={documents.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-sky-deep px-6 py-3 text-[15px] font-extrabold text-white shadow-[0_14px_30px_-14px_rgb(43_116_176/0.9)] transition hover:-translate-y-0.5 hover:bg-sky-dark"
                >
                  <FolderOpen className="size-5" aria-hidden="true" />
                  {documents.cta}
                  <ExternalLink className="size-4 opacity-80" aria-hidden="true" />
                  <span className="sr-only">(жаңа бетте ашылады)</span>
                </a>
                <span className="text-[13px] font-semibold text-ink-soft">{documents.note}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
