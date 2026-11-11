import Image from "next/image";
import { groups, groupsSection, kindergarten } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Cloud, Star, Wave } from "@/components/shared/DecorativeShapes";
import { Illustration } from "@/components/shared/Illustrations";

const accents = [
  { badge: "bg-sky text-white", tag: "bg-sky-soft text-sky-dark", star: "text-sun-deep", radius: "rounded-[34px_34px_34px_12px]" },
  { badge: "bg-sun text-ink", tag: "bg-mint text-mint-dark", star: "text-sky", radius: "rounded-[34px_34px_12px_34px]" },
];

export function MobileGroups({ images }: { images: Record<1 | 2, SiteImage | null> }) {
  return (
    <div className="relative isolate overflow-hidden bg-sky-mist pt-14 pb-16">
      <Wave flip className="absolute inset-x-0 top-0 h-7 w-full text-white" />
      <Cloud className="absolute -right-4 top-12 -z-10 w-20 text-white" />

      <div className="mx-auto w-full max-w-[560px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={groupsSection.eyebrow} title={groupsSection.title} description={groupsSection.description} size="mobile" />
        </Reveal>

        <div className="mt-8 flex flex-col gap-7">
          {groups.map((g, i) => {
            const a = accents[i % accents.length];
            const img = images[g.id as 1 | 2];
            return (
              <Reveal key={g.id} y={20}>
                <article className={`relative overflow-hidden bg-white shadow-card ${a.radius}`}>
                  <div className="relative aspect-[16/10]">
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
                    <Wave className="absolute inset-x-0 -bottom-px h-6 w-full text-white" />
                    <span
                      className={`absolute right-5 -bottom-6 grid size-14 place-items-center rounded-full border-[5px] border-white font-display text-2xl font-black shadow-soft ${a.badge}`}
                      aria-hidden="true"
                    >
                      {g.id}
                    </span>
                  </div>
                  <div className="relative px-5 pt-3 pb-6">
                    <h3 className="font-display text-2xl font-black text-ink">{g.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{g.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {g.tags.map((t) => (
                        <li key={t} className={`rounded-full px-3 py-1 text-[13px] font-bold ${a.tag}`}>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Star className={`absolute right-5 bottom-5 size-6 opacity-70 ${a.star}`} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <Wave className="absolute inset-x-0 -bottom-px h-7 w-full text-white" />
    </div>
  );
}
