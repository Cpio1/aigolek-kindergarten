import Image from "next/image";
import { HeartPulse } from "lucide-react";
import { kindergarten, nutrition } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Sparkle, Star } from "@/components/shared/DecorativeShapes";
import { mealIcons } from "@/components/shared/icons";

const tones = ["bg-sky-soft text-sky-dark", "bg-mint text-mint-dark", "bg-sun-soft text-[#8a5b00]", "bg-[#ffe9e3] text-[#b5513c]", "bg-sky-soft text-sky-dark"];

export function MobileNutrition({ images }: { images: SiteImage[] }) {
  return (
    <div className="relative bg-white pt-10 pb-10">
      <div className="mx-auto w-full max-w-[560px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={nutrition.eyebrow} title={nutrition.title} size="mobile" />
        </Reveal>

        <Reveal scale={0.92} y={0} className="relative mx-auto mt-6 size-[min(50vw,190px)]">
          <div className="absolute inset-0 rounded-full bg-sun shadow-[0_24px_44px_-22px_rgb(245_185_53/0.9)]" />
          <div className="absolute inset-2.5 rounded-full border-2 border-dashed border-white/70 animate-spin-slow" aria-hidden="true" />
          <div className="relative flex h-full flex-col items-center justify-center text-ink">
            <span className="font-display text-[min(22vw,88px)] font-black leading-[0.9]" aria-hidden="true">
              {kindergarten.mealsPerDay}
            </span>
            <span className="font-display text-[13px] font-black">мезгіл тамақ</span>
          </div>
          <Star className="absolute -right-3 top-1 size-5 text-sky animate-float" />
          <Sparkle className="absolute -left-4 bottom-5 size-3.5 text-sun-deep animate-twinkle" />
        </Reveal>

        <h3 className="mt-5 text-center font-display text-[clamp(1.2rem,5.6vw,1.5rem)] font-black text-ink">{nutrition.mobileHeadline}</h3>

        <ol className="mx-auto mt-4 grid max-w-[340px] grid-cols-5 gap-1.5 min-[360px]:gap-2">
          {nutrition.meals.map((meal, i) => {
            const Icon = mealIcons[i];
            return (
              <li key={meal.n} className="flex flex-col items-center">
                <Reveal delay={i * 0.05} y={10} className="flex flex-col items-center">
                  <span className={`relative grid aspect-square w-full max-w-[54px] min-w-[44px] place-items-center rounded-[16px] border-[3px] border-white shadow-soft ${tones[i]}`}>
                    <Icon className="size-5" aria-hidden="true" />
                    <span className="absolute -top-1.5 -right-1.5 grid size-5 place-items-center rounded-full bg-ink text-[11px] font-black text-white">
                      {meal.n}
                    </span>
                  </span>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mt-5 rounded-[24px_24px_24px_8px] bg-sky-mist p-4">
          <p className="text-[14.5px] leading-relaxed text-ink-soft">{nutrition.text}</p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-extrabold text-sky-dark shadow-soft">
            <HeartPulse className="size-4 text-coral" aria-hidden="true" />
            {nutrition.tag}
          </p>
        </Reveal>

        {images.length > 0 ? (
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {images.slice(0, 2).map((img, i) => (
              <div key={img.src} className={`relative aspect-[4/3.4] overflow-hidden border-[3px] border-white shadow-card ${i === 0 ? "shape-blob-1" : "shape-pebble"}`}>
                <Image
                  src={img.src}
                  alt={`${kindergarten.fullName} — тамақтану, ${i + 1}-фото`}
                  fill
                  sizes="(max-width: 600px) 46vw, 260px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
