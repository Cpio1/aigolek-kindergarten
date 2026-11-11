import Image from "next/image";
import { Bot, MessageCircleHeart } from "lucide-react";
import { activities, kindergarten } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Sparkle, Wave } from "@/components/shared/DecorativeShapes";
import { Illustration } from "@/components/shared/Illustrations";

const styles = {
  robotics: { icon: Bot, illustration: "robot" as const, iconBox: "bg-sky text-white", tag: "bg-sky-soft text-sky-dark", radius: "rounded-[32px_32px_32px_12px]" },
  speech: { icon: MessageCircleHeart, illustration: "speech" as const, iconBox: "bg-mint-deep text-white", tag: "bg-mint text-mint-dark", radius: "rounded-[32px_32px_12px_32px]" },
};

export function MobileActivities({ robotics, speech }: { robotics: SiteImage | null; speech: SiteImage | null }) {
  const photos = { robotics, speech };
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-sun-soft/70 to-sky-mist pt-14 pb-16">
      <Wave flip className="absolute inset-x-0 top-0 h-7 w-full text-white" />
      <Sparkle className="absolute right-6 top-14 -z-10 size-6 text-sun-deep animate-twinkle" />

      <div className="mx-auto w-full max-w-[560px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={activities.eyebrow} title={activities.title} description={activities.subtitle} size="mobile" />
        </Reveal>

        <div className="mt-8 flex flex-col gap-6">
          {activities.items.map((item) => {
            const st = styles[item.key];
            const Icon = st.icon;
            const photo = photos[item.key];
            return (
              <Reveal key={item.key} y={20}>
                <article className={`relative bg-white p-3 shadow-card ${st.radius}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[24px]">
                    {photo ? (
                      <Image
                        src={photo.src}
                        alt={`${item.title} — ${kindergarten.fullName}`}
                        fill
                        sizes="(max-width: 600px) 88vw, 500px"
                        className="object-cover"
                      />
                    ) : (
                      <Illustration name={st.illustration} className="absolute inset-0 h-full w-full" />
                    )}
                  </div>
                  <div className="px-2.5 pt-4 pb-3">
                    <div className="flex items-center gap-3">
                      <span className={`grid size-11 shrink-0 place-items-center rounded-2xl ${st.iconBox}`}>
                        <Icon className="size-5.5" aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-[22px] font-black text-ink">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{item.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <li key={t} className={`rounded-full px-3 py-1 text-[13px] font-bold ${st.tag}`}>
                          {t}
                        </li>
                      ))}
                    </ul>
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
