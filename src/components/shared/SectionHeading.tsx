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
        className={`inline-flex items-center gap-2 rounded-full bg-sun-soft px-3.5 py-1.5 font-extrabold uppercase tracking-[0.12em] text-ink ${
          size === "desktop" ? "text-xs" : "text-[11px]"
        }`}
      >
        <Star className="size-3.5 text-sun-deep" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className={`mt-3 font-display font-black leading-[1.12] tracking-tight text-ink text-balance ${
          size === "desktop" ? "text-[clamp(2rem,3vw,2.75rem)]" : "text-[clamp(1.6rem,7vw,2.1rem)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 text-ink-soft text-pretty ${
            size === "desktop" ? "text-lg" : "text-[15px] leading-relaxed"
          } ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
