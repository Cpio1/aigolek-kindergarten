import Image from "next/image";
import type { SiteImage } from "@/lib/images";
import { kindergarten } from "@/data/kindergarten";
import { Moon, Star } from "./DecorativeShapes";

type LogoProps = {
  image: SiteImage | null;
  /** Белгінің биіктігі, px */
  size?: number;
  tone?: "dark" | "light";
  showText?: boolean;
};

export function Logo({ image, size = 44, tone = "dark", showText = true }: LogoProps) {
  const width = image ? Math.round((image.width / image.height) * size) : size;
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      {image ? (
        <Image
          src={image.src}
          alt={`${kindergarten.fullName} логотипі`}
          width={width}
          height={size}
          sizes={`${width * 2}px`}
          className="shrink-0 object-contain"
          style={{ width, height: size }}
        />
      ) : (
        <span
          className="relative grid shrink-0 place-items-center rounded-full bg-sky text-sun shadow-soft"
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          <Moon className="h-[60%] w-[60%] -translate-x-[2px]" />
          <Star className="absolute right-[22%] top-[22%] h-[22%] w-[22%] text-white" />
        </span>
      )}
      {showText ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span className={`font-display text-[1.35em] font-black tracking-tight ${tone === "dark" ? "text-ink" : "text-white"}`}>
            {kindergarten.name}
          </span>
          <span className={`mt-1 text-[0.7em] font-bold uppercase tracking-[0.16em] ${tone === "dark" ? "text-sky-deep" : "text-sky-soft"}`}>
            балабақшасы
          </span>
        </span>
      ) : null}
    </span>
  );
}
