import Image from "next/image";
import { Bot, MessageCircleHeart } from "lucide-react";
import { activities, kindergarten } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Cloud, Sparkle, Star, Wave } from "@/components/shared/DecorativeShapes";
import { Illustration } from "@/components/shared/Illustrations";

const styles = {
  robotics: {
    icon: Bot,
    illustration: "robot" as const,
    iconBox: "bg-sky text-white",
    tag: "bg-sky-soft text-sky-dark",
    shape: "shape-blob-1",
    glow: "bg-sky-soft",
  },
  speech: {
    icon: MessageCircleHeart,
    illustration: "speech" as const,
    iconBox: "bg-mint-deep text-white",
    tag: "bg-mint text-mint-dark",
    shape: "shape-blob-3",
    glow: "bg-mint",
  },
};

export function DesktopActivities({ robotics, speech }: { robotics: SiteImage | null; speech: SiteImage | null }) {
  const photos = { robotics, speech };
  return (
    <div className="relative isolate bg-gradient-to-b from-sun-soft/70 to-sky-mist pt-[clamp(3.5rem,8vh,4.5rem)] pb-[clamp(3.5rem,9vh,5rem)]">
      <Wave flip className="absolute inset-x-0 top-0 h-10 w-full text-white" />
      <Cloud className="absolute right-[4%] top-16 -z-10 w-[4.5rem] text-white animate-drift" />
      <Star className="absolute left-[6%] top-20 -z-10 size-5 text-sun-deep animate-spin-slow" />

      <div className="mx-auto w-full max-w-[1200px] px-8">
        <Reveal>
          <SectionHeading eyebrow={activities.eyebrow} title={activities.title} description={activities.subtitle} />
        </Reveal>

        <div className="mx-auto mt-[clamp(1.75rem,4vh,2.5rem)] grid max-w-[1080px] grid-cols-2 gap-7 xl:gap-8">
          {activities.items.map((item, i) => {
            const st = styles[item.key];
            const Icon = st.icon;
            const photo = photos[item.key];
            return (
              <Reveal key={item.key} delay={i * 0.12} className="h-full">
                <article className="group relative flex h-full min-w-0 flex-col rounded-[32px] bg-white p-5 shadow-card transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-float xl:p-6">
                  <div className="relative">
                    <div className={`absolute -inset-1.5 -z-10 ${st.shape} ${st.glow} rotate-3 transition-transform duration-700 group-hover:rotate-6`} aria-hidden="true" />
                    <div className={`relative aspect-[2/1] overflow-hidden ${st.shape}`}>
                      {photo ? (
                        <Image
                          src={photo.src}
                          alt={`${item.title} — ${kindergarten.fullName}`}
                          fill
                          sizes="(min-width: 1280px) 490px, 420px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <Illustration
                          name={st.illustration}
                          className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <span
                      className={`absolute -bottom-5 left-5 grid size-12 place-items-center rounded-[18px] border-4 border-white shadow-soft transition-transform duration-500 group-hover:-rotate-6 ${st.iconBox}`}
                    >
                      <Icon className="size-5.5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-1.5 pt-8">
                    <h3 className="font-display text-[clamp(1.35rem,1.8vw,1.6rem)] font-black text-ink">{item.title}</h3>
                    <p className="mt-2 text-[15px] xl:text-base leading-relaxed text-ink-soft">{item.description}</p>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                      {item.tags.map((t) => (
                        <li key={t} className={`rounded-full px-3 py-1 text-[13px] font-bold ${st.tag}`}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Sparkle className="absolute right-6 top-6 size-4 text-sun-deep opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
