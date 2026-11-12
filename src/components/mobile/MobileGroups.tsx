import Image from "next/image";
import { groups, groupsSection, kindergarten } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Cloud, Star, Wave } from "@/components/shared/DecorativeShapes";
import { Illustration } from "@/components/shared/Illustrations";

const accents = [
  { badge: "bg-sky text-white", tag: "bg-sky-soft text-sky-dark", star: "text-sun-deep", radius: "rounded-[28px_28px_28px_10px]" },
  { badge: "bg-sun text-ink", tag: "bg-mint text-mint-dark", star: "text-sky", radius: "rounded-[28px_28px_10px_28px]" },
];

export function MobileGroups({ images }: { images: Record<1 | 2, SiteImage | null> }) {
  return (
    <div className="relative isolate overflow-hidden bg-sky-mist pt-10 pb-12">
      <Wave flip className="absolute inset-x-0 top-0 h-5 w-full text-white" />
      <Cloud className="absolute -right-2 top-8 -z-10 w-11 text-white" />

      <div className="mx-auto w-full max-w-[560px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={groupsSection.eyebrow} title={groupsSection.title} description={groupsSection.description} size="mobile" />
        </Reveal>

        <div className="mt-6 flex flex-col gap-5">
          {groups.map((g, i) => {
            const a = accents[i % accents.length];
            const img = images[g.id as 1 | 2];
            return (
              <Reveal key={g.id} y={20}>
                <article className={`relative overflow-hidden bg-white shadow-card ${a.radius}`}>
                  <div className="relative aspect-[16/9]">
                    {img ? (
                      <Image
                        src={img.src}
                        alt={`${g.title} — ${kindergarten.fullName}`}
                        fill
                        sizes="(max-width: 600px) 92vw, 520px"
                        className="object-cover"
                      />
                    ) : (
                      <Illustration name={g.illustration} className="absolute inset-0 h-full w-full" />
                    )}
                    <Wave className="absolute inset-x-0 -bottom-px h-4 w-full text-white" />
                    <span
                      className={`absolute right-4 -bottom-5 grid size-11 place-items-center rounded-full border-4 border-white font-display text-xl font-black shadow-soft ${a.badge}`}
                      aria-hidden="true"
                    >
                      {g.id}
                    </span>
                  </div>
                  <div className="relative px-4 pt-2.5 pb-5">
                    <h3 className="pr-14 font-display text-xl font-black text-ink">{g.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{g.description}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5 pr-6">
                      {g.tags.map((t) => (
                        <li key={t} className={`rounded-full px-2.5 py-1 text-[12px] font-bold ${a.tag}`}>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Star className={`absolute right-4 bottom-4 size-4 opacity-70 ${a.star}`} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <Wave className="absolute inset-x-0 -bottom-px h-5 w-full text-white" />
    </div>
  );
}
