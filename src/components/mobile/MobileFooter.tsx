import { Clock, MapPin, Phone } from "lucide-react";
import { footer, kindergarten, whatsappUrl } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Logo } from "@/components/shared/Logo";
import { Star, Wave } from "@/components/shared/DecorativeShapes";
import { WhatsAppIcon } from "@/components/shared/WhatsAppButton";

export function MobileFooter({ logo }: { logo: SiteImage | null }) {
  const year = new Date().getFullYear();
  return (
    <div className="relative isolate overflow-hidden bg-ink pt-10 text-white">
      <Wave flip className="absolute inset-x-0 top-0 h-5 w-full text-sky-mist" />
      <Star className="absolute right-6 top-10 -z-10 size-3.5 text-sun/40" />

      <div className="mx-auto w-full max-w-[560px] px-4 pb-[calc(88px+env(safe-area-inset-bottom))] sm:px-6">
        <a href="#home" className="inline-block text-[14px]" aria-label="Айгөлек — басты бет">
          <span className={logo ? "inline-block rounded-2xl bg-white px-2.5 py-1.5" : ""}>
            <Logo image={logo} size={40} tone={logo ? "dark" : "light"} />
          </span>
        </a>
        <p className="mt-3 text-sm text-white/70">{footer.tagline}</p>

        <ul className="mt-6 space-y-3 text-[15px] text-white/85">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
            <span>{kindergarten.address}</span>
          </li>
          <li className="flex gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
            <a href={kindergarten.phoneHref} className="font-bold">
              {kindergarten.phone}
            </a>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
            <span>
              {kindergarten.hours} · {kindergarten.ages}
            </span>
          </li>
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex min-h-[50px] items-center justify-center gap-2.5 rounded-full bg-wa px-5 text-base font-extrabold text-white"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </a>

        <p className="mt-7 border-t border-white/10 pt-5 text-[13px] leading-relaxed text-white/55">
          © {year} {kindergarten.fullName}. {footer.rights}
        </p>
      </div>
    </div>
  );
}
