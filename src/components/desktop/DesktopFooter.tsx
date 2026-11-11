import { Clock, MapPin, Phone } from "lucide-react";
import { footer, kindergarten, navItems, whatsappUrl } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Logo } from "@/components/shared/Logo";
import { Cloud, Sparkle, Star, Wave } from "@/components/shared/DecorativeShapes";
import { WhatsAppIcon } from "@/components/shared/WhatsAppButton";

export function DesktopFooter({ logo }: { logo: SiteImage | null }) {
  const year = new Date().getFullYear();
  return (
    <div className="relative isolate overflow-hidden bg-ink pt-20 text-white">
      <Wave flip className="absolute inset-x-0 top-0 h-12 w-full text-sky-mist" />
      <Cloud className="absolute right-[6%] top-20 -z-10 w-32 text-white/5" />
      <Star className="absolute left-[45%] top-24 -z-10 size-6 text-sun/30" />
      <Sparkle className="absolute right-[30%] bottom-24 -z-10 size-5 text-sky/40" />

      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[1.3fr_0.8fr_1.1fr_1fr] gap-10 px-8 pb-12">
        <div>
          <a href="#home" className="inline-block text-base" aria-label="Айгөлек — басты бет">
            <span className={logo ? "inline-block rounded-2xl bg-white px-3 py-2" : ""}>
              <Logo image={logo} size={46} tone={logo ? "dark" : "light"} />
            </span>
          </a>
          <p className="mt-5 max-w-[17rem] text-[15px] leading-relaxed text-white/75">{footer.tagline}</p>
        </div>

        <nav aria-label="Төменгі мәзір">
          <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-sun">Мәзір</h3>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-[15px] font-semibold text-white/80 transition hover:text-sun">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-sun">Байланыс</h3>
          <ul className="mt-4 space-y-3.5 text-[15px] text-white/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
              <span>{kindergarten.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
              <a href={kindergarten.phoneHref} className="font-bold transition hover:text-sun">
                {kindergarten.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-sky" aria-hidden="true" />
              <span>{kindergarten.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-sun">{footer.whatsappTitle}</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-white/75">{footer.whatsappNote}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-wa px-5 py-3 text-[15px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#0f7340]"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-8 py-5 text-sm text-white/60">
          <span>
            © {year} {kindergarten.fullName}. {footer.rights}
          </span>
          <span>{kindergarten.ages} · Қазақ тілінде тәрбие</span>
        </div>
      </div>
    </div>
  );
}
