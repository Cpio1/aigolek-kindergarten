"use client";

import Image from "next/image";
import { ChevronDown, ChevronUp, ZoomIn } from "lucide-react";
import { gallery } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Blob, Sparkle } from "@/components/shared/DecorativeShapes";
import { Lightbox, galleryAlt, useGallery } from "@/components/shared/ImageGallery";
import { PhotoPlaceholder } from "@/components/shared/Illustrations";

const radii = [
  "rounded-[36px_36px_36px_12px]",
  "rounded-[12px_36px_36px_36px]",
  "rounded-[36px]",
  "rounded-[36px_12px_36px_36px]",
  "rounded-[36px_36px_12px_36px]",
  "rounded-[28px]",
];

/** Фото жоқ кезде асимметриялық тор (6 плитка) */
const placeholderLayout = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-2 row-span-1",
];

export function DesktopGallery({ images }: { images: SiteImage[] }) {
  const g = useGallery(images.length, gallery.initialCount);

  return (
    <div className="relative isolate overflow-hidden bg-white py-24 xl:py-28">
      <Blob variant={2} className="absolute -left-40 top-20 -z-10 size-[380px] text-sky-mist" />
      <Sparkle className="absolute right-[10%] top-20 -z-10 size-7 text-sun-deep animate-twinkle" />

      <div className="mx-auto w-full max-w-[1200px] px-8">
        <Reveal>
          <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} description={gallery.subtitle} />
        </Reveal>

        {images.length === 0 ? (
          <div className="mt-14 grid auto-rows-[170px] grid-cols-4 gap-5">
            {placeholderLayout.map((cls, i) => (
              <div key={i} className={`overflow-hidden ${cls} ${radii[i]}`}>
                <PhotoPlaceholder index={i} text={gallery.placeholder} />
              </div>
            ))}
          </div>
        ) : (
          <>
            <ul className="mt-14 columns-3 gap-5 [column-fill:_balance]">
              {images.slice(0, g.visibleCount).map((img, i) => (
                <li key={img.src} className="mb-5 break-inside-avoid">
                  <Reveal delay={(i % 3) * 0.06} y={18}>
                    <button
                      type="button"
                      onClick={() => g.open(i)}
                      className={`group relative block w-full overflow-hidden bg-sky-soft shadow-soft ${radii[i % radii.length]}`}
                      style={{ aspectRatio: `${img.width} / ${img.height}` }}
                      aria-label={`${galleryAlt(i)} — үлкейту`}
                    >
                      <Image
                        src={img.src}
                        alt={galleryAlt(i)}
                        fill
                        sizes="(min-width: 1280px) 380px, 310px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="absolute right-4 bottom-4 grid size-11 translate-y-2 place-items-center rounded-full bg-white/95 text-sky-deep opacity-0 shadow-soft transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <ZoomIn className="size-5" aria-hidden="true" />
                      </span>
                    </button>
                  </Reveal>
                </li>
              ))}
            </ul>

            {g.hasMore ? (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={g.toggle}
                  aria-expanded={g.expanded}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-sky/30 bg-white px-7 py-3 text-base font-extrabold text-sky-dark shadow-soft transition hover:-translate-y-0.5 hover:border-sky hover:bg-sky-mist"
                >
                  {g.expanded ? gallery.less : gallery.more}
                  {g.expanded ? <ChevronUp className="size-5" aria-hidden="true" /> : <ChevronDown className="size-5" aria-hidden="true" />}
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>

      {images.length > 0 ? (
        <Lightbox images={images} index={g.openIndex} onClose={g.close} onIndexChange={g.setIndex} variant="desktop" />
      ) : null}
    </div>
  );
}
