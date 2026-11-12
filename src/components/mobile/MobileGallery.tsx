"use client";

import Image from "next/image";
import { ChevronDown, ChevronUp, Expand } from "lucide-react";
import { gallery } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Lightbox, galleryAlt, photoRatio, toRows, useGallery } from "@/components/shared/ImageGallery";
import { PhotoPlaceholder } from "@/components/shared/Illustrations";

const radii = ["rounded-[22px_22px_22px_8px]", "rounded-[22px]", "rounded-[8px_22px_22px_22px]", "rounded-[22px_8px_22px_22px]"];

export function MobileGallery({ images }: { images: SiteImage[] }) {
  const g = useGallery(images.length, gallery.initialCount);
  const visible = images.slice(0, g.visibleCount);

  return (
    <div className="relative bg-white pt-10 pb-10">
      <div className="mx-auto w-full max-w-[560px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} description={gallery.subtitle} size="mobile" />
        </Reveal>

        {images.length === 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={`overflow-hidden ${i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"} ${radii[i % radii.length]}`}>
                <PhotoPlaceholder index={i} text={gallery.placeholder} />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Екі бағанды қатарлар: жұп фотолар бір биіктікте, пропорциясы сақталады */}
            <div className="mt-6 flex flex-col gap-2.5">
              {toRows(visible.map((img, i) => ({ img, i })), 2).map((row, r) => {
                const sum = row.reduce((acc, { img }) => acc + photoRatio(img), 0);
                return (
                  <ul key={r} className="mx-auto flex w-full gap-2.5" style={{ maxWidth: `${Math.round(sum * 230)}px` }}>
                    {row.map(({ img, i }) => (
                      <li key={img.src} className="min-w-0" style={{ flex: `${photoRatio(img)} 1 0%` }}>
                        <button
                          type="button"
                          onClick={() => g.open(i)}
                          className={`relative block w-full overflow-hidden bg-sky-soft shadow-soft ${radii[i % radii.length]}`}
                          style={{ aspectRatio: photoRatio(img) }}
                          aria-label={`${galleryAlt(i)} — үлкейту`}
                        >
                          <Image
                            src={img.src}
                            alt={galleryAlt(i)}
                            fill
                            sizes="(max-width: 640px) 60vw, 320px"
                            className="object-cover object-[50%_40%]"
                          />
                          <span className="absolute right-2 bottom-2 grid size-8 place-items-center rounded-full bg-white/90 text-sky-deep shadow-soft">
                            <Expand className="size-3.5" aria-hidden="true" />
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                );
              })}
            </div>

            {g.hasMore ? (
              <button
                type="button"
                onClick={g.toggle}
                aria-expanded={g.expanded}
                className="mt-3 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border-2 border-sky/30 bg-white text-base font-extrabold text-sky-dark active:bg-sky-mist"
              >
                {g.expanded ? gallery.less : gallery.more}
                {g.expanded ? <ChevronUp className="size-5" aria-hidden="true" /> : <ChevronDown className="size-5" aria-hidden="true" />}
              </button>
            ) : null}
          </>
        )}
      </div>

      {images.length > 0 ? (
        <Lightbox images={images} index={g.openIndex} onClose={g.close} onIndexChange={g.setIndex} variant="mobile" />
      ) : null}
    </div>
  );
}
