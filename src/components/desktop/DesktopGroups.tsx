import Image from "next/image";
import { groups, groupsSection, kindergarten } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Cloud, Sparkle, Star, Wave } from "@/components/shared/DecorativeShapes";
import { Illustration } from "@/components/shared/Illustrations";

const accents = [
  { badge: "bg-sky text-white", ring: "ring-sky-soft", tag: "bg-sky-soft text-sky-dark", corner: "text-sun-deep", radius: "rounded-[36px_36px_36px_14px]" },
  { badge: "bg-sun text-ink", ring: "ring-sun-soft", tag: "bg-mint text-mint-dark", corner: "text-sky", radius: "rounded-[36px_36px_14px_36px]" },
];

export function DesktopGroups({ images }: { images: Record<1 | 2, SiteImage | null> }) {
  return (
    <div className="relative isolate bg-sky-mist pt-[clamp(3.5rem,8vh,4.5rem)] pb-[clamp(3.5rem,9vh,5rem)]">
      <Wave flip className="absolute inset-x-0 top-0 h-10 w-full text-white" />
      <Cloud className="absolute left-[4%] top-16 -z-10 w-[4.5rem] text-white animate-drift" />
      <Sparkle className="absolute right-[8%] top-20 -z-10 size-5 text-sun-deep animate-twinkle" />

      <div className="mx-auto w-full max-w-[1200px] px-8">
        <Reveal>
          <SectionHeading
            eyebrow={groupsSection.eyebrow}
            title={groupsSection.title}
            description={groupsSection.description}
          />
        </Reveal>

        <div className="mx-auto mt-[clamp(1.75rem,4vh,2.5rem)] grid max-w-[1080px] grid-cols-2 gap-7 xl:gap-8">
          {groups.map((g, i) => {
            const a = accents[i % accents.length];
            const img = images[g.id as 1 | 2];
            return (
              <Reveal key={g.id} delay={i * 0.1} className="h-full">
                <article
                  className={`group relative flex h-full min-w-0 flex-col overflow-hidden bg-white shadow-card ring-[6px] ${a.ring} ${a.radius} transition-transform duration-500 hover:-translate-y-2`}
                >
                  <div className="relative aspect-[2/1] overflow-hidden">
                    {img ? (
                      <Image
                        src={img.src}
                        alt={`${g.title} — ${kindergarten.fullName}`}
                        fill
                        sizes="(min-width: 1280px) 530px, 460px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <Illustration
                        name={g.illustration}
                        className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <Wave className="absolute inset-x-0 -bottom-px h-7 w-full text-white" />
                  </div>

                  <div className="relative flex flex-1 flex-col px-7 pt-1 pb-6 xl:px-8">
                    <span
                      className={`absolute -top-9 right-7 grid size-14 place-items-center rounded-full border-[5px] border-white font-display text-2xl font-black shadow-soft ${a.badge}`}
                      aria-hidden="true"
                    >
                      {g.id}
                    </span>
                    <h3 className="pr-16 font-display text-[clamp(1.4rem,1.9vw,1.75rem)] font-black text-ink">{g.title}</h3>
                    <p className="mt-2 max-w-[30rem] text-[15px] xl:text-base leading-relaxed text-ink-soft">{g.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2 pr-8">
                      {g.tags.map((t) => (
                        <li key={t} className={`rounded-full px-3 py-1 text-[13px] font-bold ${a.tag}`}>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Star className={`absolute right-6 bottom-6 size-5 opacity-80 transition-transform duration-700 group-hover:rotate-[72deg] ${a.corner}`} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <Wave className="absolute inset-x-0 -bottom-px h-10 w-full text-white" />
    </div>
  );
}
