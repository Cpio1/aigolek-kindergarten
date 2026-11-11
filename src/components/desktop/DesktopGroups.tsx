import Image from "next/image";
import { groups, groupsSection, kindergarten } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Cloud, Sparkle, Star, Wave } from "@/components/shared/DecorativeShapes";
import { Illustration } from "@/components/shared/Illustrations";

const accents = [
  { badge: "bg-sky text-white", ring: "ring-sky-soft", tag: "bg-sky-soft text-sky-dark", corner: "text-sun-deep", radius: "rounded-[44px_44px_44px_16px]" },
  { badge: "bg-sun text-ink", ring: "ring-sun-soft", tag: "bg-mint text-mint-dark", corner: "text-sky", radius: "rounded-[44px_44px_16px_44px]" },
];

export function DesktopGroups({ images }: { images: Record<1 | 2, SiteImage | null> }) {
  return (
    <div className="relative isolate bg-sky-mist pt-20 pb-24 xl:pb-28">
      <Wave flip className="absolute inset-x-0 top-0 h-14 w-full text-white" />
      <Cloud className="absolute left-[4%] top-24 -z-10 w-28 text-white animate-drift" />
      <Sparkle className="absolute right-[8%] top-28 -z-10 size-7 text-sun-deep animate-twinkle" />

      <div className="mx-auto w-full max-w-[1200px] px-8">
        <Reveal>
          <SectionHeading
            eyebrow={groupsSection.eyebrow}
            title={groupsSection.title}
            description={groupsSection.description}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-8 xl:gap-10">
          {groups.map((g, i) => {
            const a = accents[i % accents.length];
            const img = images[g.id as 1 | 2];
            return (
              <Reveal key={g.id} delay={i * 0.1} className="h-full">
                <article
                  className={`group relative flex h-full flex-col overflow-hidden bg-white shadow-card ring-8 ${a.ring} ${a.radius} transition-transform duration-500 hover:-translate-y-2`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {img ? (
                      <Image
                        src={img.src}
                        alt={`${g.title} — ${kindergarten.fullName}`}
                        fill
                        sizes="(min-width: 1280px) 560px, 460px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <Illustration
                        name={g.illustration}
                        className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <Wave className="absolute inset-x-0 -bottom-px h-10 w-full text-white" />
                  </div>

                  <div className="relative flex flex-1 flex-col px-8 pt-2 pb-8 xl:px-10">
                    <span
                      className={`absolute -top-12 right-8 grid size-20 place-items-center rounded-full border-[6px] border-white font-display text-3xl font-black shadow-soft ${a.badge}`}
                      aria-hidden="true"
                    >
                      {g.id}
                    </span>
                    <h3 className="font-display text-3xl font-black text-ink">{g.title}</h3>
                    <p className="mt-3 max-w-[30rem] text-[17px] leading-relaxed text-ink-soft">{g.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {g.tags.map((t) => (
                        <li key={t} className={`rounded-full px-3.5 py-1.5 text-sm font-bold ${a.tag}`}>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Star className={`absolute right-8 bottom-8 size-8 opacity-80 transition-transform duration-700 group-hover:rotate-[72deg] ${a.corner}`} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <Wave className="absolute inset-x-0 -bottom-px h-14 w-full text-white" />
    </div>
  );
}
