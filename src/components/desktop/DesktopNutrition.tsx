import Image from "next/image";
import { HeartPulse } from "lucide-react";
import { kindergarten, nutrition } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Blob, Sparkle, Star } from "@/components/shared/DecorativeShapes";
import { mealIcons } from "@/components/shared/icons";

const orbit = [
  { pos: "left-1/2 -top-4 -translate-x-1/2", tone: "bg-sky text-white" },
  { pos: "-right-2 top-[30%]", tone: "bg-mint-deep text-white" },
  { pos: "right-[8%] -bottom-1", tone: "bg-coral text-white" },
  { pos: "left-[8%] -bottom-1", tone: "bg-sky-deep text-white" },
  { pos: "-left-2 top-[30%]", tone: "bg-white text-sun-deep" },
];
const stepTones = ["bg-sky-soft text-sky-dark", "bg-mint text-mint-dark", "bg-sun-soft text-[#8a5b00]", "bg-[#ffe9e3] text-[#b5513c]", "bg-sky-soft text-sky-dark"];
const photoShapes = ["shape-blob-1", "shape-pebble", "shape-blob-3"];

export function DesktopNutrition({ images }: { images: SiteImage[] }) {
  return (
    <div className="relative isolate overflow-hidden bg-white py-[clamp(3rem,8vh,4.5rem)]">
      <Blob variant={0} className="absolute -right-28 top-8 -z-10 size-[280px] text-mint/70" />
      <Blob variant={1} className="absolute -left-32 bottom-0 -z-10 size-[240px] text-sun-soft" />

      <div className="mx-auto w-full max-w-[1200px] px-8">
        <Reveal>
          <SectionHeading eyebrow={nutrition.eyebrow} title={nutrition.title} />
        </Reveal>

        <div className="mt-[clamp(1.75rem,4vh,2.5rem)] grid grid-cols-[0.75fr_1.25fr] items-center gap-10 xl:gap-14">
          {/* Үлкен «5» белгісі */}
          <Reveal scale={0.9} y={0} className="relative mx-auto size-[clamp(210px,18vw,260px)]">
            <div className="absolute inset-0 rounded-full bg-sun shadow-[0_30px_60px_-28px_rgb(245_185_53/0.9)]" />
            <div className="absolute inset-4 rounded-full border-[3px] border-dashed border-white/70 animate-spin-slow" aria-hidden="true" />
            <div className="absolute inset-8 rounded-full bg-white/35" aria-hidden="true" />
            <div className="relative flex h-full flex-col items-center justify-center text-ink">
              <span className="font-display text-[clamp(84px,7.5vw,112px)] font-black leading-[0.9]" aria-hidden="true">
                {kindergarten.mealsPerDay}
              </span>
              <span className="font-display text-base font-black tracking-wide xl:text-lg">мезгіл тамақ</span>
            </div>
            {orbit.map((o, i) => {
              const Icon = mealIcons[i];
              return (
                <span
                  key={i}
                  className={`absolute grid size-11 place-items-center rounded-full border-[3px] border-white shadow-soft animate-float ${o.pos} ${o.tone}`}
                  style={{ animationDelay: `${i * 0.6}s` }}
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </span>
              );
            })}
            <Sparkle className="absolute -left-8 top-3 size-4 text-sky animate-twinkle" />
          </Reveal>

          {/* Мәтін және 5 мезгіл */}
          <div>
            <Reveal>
              <div className="relative rounded-[32px_32px_32px_12px] bg-sky-mist p-6 xl:p-7">
                <Star className="absolute -top-3 right-8 size-6 text-sun-deep animate-spin-slow" />
                <h3 className="font-display text-[clamp(1.35rem,1.9vw,1.8rem)] font-black leading-tight text-ink">
                  {nutrition.headline}
                </h3>
                <p className="mt-2.5 max-w-[34rem] text-[15px] leading-relaxed text-ink-soft xl:text-base">{nutrition.text}</p>
                <p className="mt-3.5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-extrabold text-sky-dark shadow-soft">
                  <HeartPulse className="size-4.5 text-coral" aria-hidden="true" />
                  {nutrition.tag}
                </p>
              </div>
            </Reveal>

            <ol className="relative mt-6 grid grid-cols-5 gap-3">
              <span
                className="absolute inset-x-[10%] top-7 -z-10 border-t-[3px] border-dashed border-sky/30"
                aria-hidden="true"
              />
              {nutrition.meals.map((meal, i) => {
                const Icon = mealIcons[i];
                return (
                  <li key={meal.n}>
                    <Reveal delay={i * 0.07} className="group flex flex-col items-center text-center">
                      <span
                        className={`relative grid size-14 place-items-center rounded-[20px] border-[3px] border-white shadow-soft transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:rotate-6 ${stepTones[i]}`}
                      >
                        <Icon className="size-6" aria-hidden="true" />
                        <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-ink font-display text-xs font-black text-white">
                          {meal.n}
                        </span>
                      </span>
                      <span className="mt-2 text-sm font-extrabold text-ink">{meal.label}</span>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {images.length > 0 ? (
          <div className="mt-[clamp(2rem,5vh,3rem)] grid grid-cols-3 gap-5">
            {images.slice(0, 3).map((img, i) => (
              <Reveal key={img.src} delay={i * 0.08}>
                <div className={`group relative aspect-[16/10] overflow-hidden border-[5px] border-white shadow-card ${photoShapes[i]}`}>
                  <Image
                    src={img.src}
                    alt={`${kindergarten.fullName} — тамақтану, ${i + 1}-фото`}
                    fill
                    sizes="380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
