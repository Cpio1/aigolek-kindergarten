import { getImageProps } from "next/image";
import type { SiteImage } from "@/lib/images";

const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

type ArtImageProps = {
  image: SiteImage;
  alt: string;
  /** Сурет тек осы media query сәйкес келгенде жүктеледі */
  media: string;
  sizes: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Desktop және Mobile нұсқалары бір уақытта DOM-да тұрады, бірақ
 * <picture><source media> арқылы әр құрылғыда тек біреуі ғана жүктеледі.
 * Басты экрандағы (LCP) сурет үшін — eager + fetchPriority=high.
 */
export function ArtImage({ image, alt, media, sizes, className, style }: ArtImageProps) {
  const { props } = getImageProps({
    src: image.src,
    width: image.width,
    height: image.height,
    alt,
    sizes,
  });
  return (
    <picture>
      <source media={media} srcSet={props.srcSet} sizes={sizes} />
      <img
        src={BLANK}
        alt={alt}
        width={image.width}
        height={image.height}
        decoding="async"
        loading="eager"
        fetchPriority="high"
        className={className}
        style={style}
      />
    </picture>
  );
}
