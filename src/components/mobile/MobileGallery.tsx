"use client";

import Image from "next/image";
import { ChevronDown, ChevronUp, Expand } from "lucide-react";
import { gallery } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Lightbox, galleryAlt, useGallery } from "@/components/shared/ImageGallery";
import { PhotoPlaceholder } from "@/components/shared/Illustrations";

const radii = ["rounded-[22px_22px_22px_8px]", "rounded-[22px]", "rounded-[8px_22px_22px_22px]", "rounded-[22px_8px_22px_22px]"];

/** Фото пропорциясы сақталады (бет кесілмейді); тым ұзын суреттер ғана шектеледі. */
function ratio(img: SiteImage, min = 0.7, max = 1.8) {
  return Math.min(max, Math.max(min, img.width / img.height));
}

export function MobileGallery({ images }: { images: SiteImage[] }) {
  const g = useGallery(images.length, gallery.initialCount);
  const visible = images.slice(0, g.visibleCount);
  const [first, ...rest] = visible;

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
            <div className="mt-6">
              {first ? (
                <button
                  type="button"
                  onClick={() => g.open(0)}
                  className="relative block w-full overflow-hidden rounded-[24px_24px_24px_8px] bg-sky-soft shadow-soft"
                  style={{ aspectRatio: ratio(first, 1.15, 1.8) }}
                  aria-label={`${galleryAlt(0)} — үлкейту`}
                >
                  <Image src={first.src} alt={galleryAlt(0)} fill sizes="(max-width: 600px) 92vw, 520px" className="object-cover object-[50%_30%]" />
                  <span className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full bg-white/90 text-sky-deep shadow-soft">
                    <Expand className="size-4" aria-hidden="true" />
                  </span>
                </button>
              ) : null}

              {rest.length > 0 ? (
                <ul className="mt-2.5 columns-2 gap-2.5 sm:columns-3">
                  {rest.map((img, j) => {
                    const i = j + 1;
                    return (
                      <li key={img.src} className="mb-2.5 break-inside-avoid">
                        <button
                          type="button"
                          onClick={() => g.open(i)}
                          className={`relative block w-full overflow-hidden bg-sky-soft shadow-soft ${radii[i % radii.length]}`}
                          style={{ aspectRatio: ratio(img, 0.75, 1.6) }}
                          aria-label={`${galleryAlt(i)} — үлкейту`}
                        >
                          <Image
                            src={img.src}
                            alt={galleryAlt(i)}
                            fill
                            sizes="(max-width: 640px) 46vw, 30vw"
                            className="object-cover object-[50%_30%]"
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
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
