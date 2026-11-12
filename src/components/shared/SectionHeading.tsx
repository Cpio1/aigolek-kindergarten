import { Star } from "./DecorativeShapes";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "desktop" | "mobile";
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", size = "desktop", id }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <span
        className={`inline-flex items-center gap-2 rounded-full bg-sun-soft px-3 py-1.5 font-extrabold uppercase tracking-[0.12em] text-ink ${
          size === "desktop" ? "text-[11px] xl:text-xs" : "text-[10.5px]"
        }`}
      >
        <Star className="size-3 text-sun-deep" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className={`mt-2.5 font-display font-black leading-[1.12] tracking-tight text-ink text-balance ${
          size === "desktop" ? "text-[clamp(1.75rem,2.3vw,2.4rem)]" : "text-[clamp(1.4rem,6.4vw,1.8rem)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-2.5 text-ink-soft text-pretty ${
            size === "desktop" ? "text-[clamp(0.95rem,1.1vw,1.0625rem)] leading-relaxed" : "text-[14.5px] leading-relaxed"
          } ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
