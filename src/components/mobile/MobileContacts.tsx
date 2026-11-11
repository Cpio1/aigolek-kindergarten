import { Clock, MapPin, Phone } from "lucide-react";
import { contacts, kindergarten, map, whatsappUrl } from "@/data/kindergarten";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Cloud, Wave } from "@/components/shared/DecorativeShapes";
import { MapCard } from "@/components/shared/MapCard";
import { WhatsAppIcon } from "@/components/shared/WhatsAppButton";

export function MobileContacts() {
  const rows = [
    { icon: MapPin, label: "Мекенжай", value: kindergarten.address, href: map.searchUrl, external: true, tone: "bg-sky-soft text-sky-deep" },
    { icon: Phone, label: "Телефон", value: kindergarten.phone, href: kindergarten.phoneHref, external: false, tone: "bg-mint text-mint-dark" },
    { icon: Clock, label: "Жұмыс уақыты", value: kindergarten.hours, href: null, external: false, tone: "bg-sun-soft text-[#8a5b00]" },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-sky-mist pt-14 pb-14">
      <Wave flip className="absolute inset-x-0 top-0 h-7 w-full text-white" />
      <Cloud className="absolute -left-4 top-12 -z-10 w-20 text-white" />

      <div className="mx-auto w-full max-w-[560px] px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={contacts.eyebrow} title={contacts.title} description={contacts.subtitle} size="mobile" />
        </Reveal>

        <Reveal className="mt-7 rounded-[30px_30px_30px_10px] bg-white p-5 shadow-card">
          <h3 className="font-display text-xl font-black text-ink">{kindergarten.fullName}</h3>
          <ul className="mt-4 space-y-2">
            {rows.map((r) => {
              const Icon = r.icon;
              const inner = (
                <>
                  <span className={`grid size-11 shrink-0 place-items-center rounded-2xl ${r.tone}`}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink-soft">{r.label}</span>
                    <span className="mt-0.5 block text-[15px] font-extrabold text-ink break-words">{r.value}</span>
                  </span>
                </>
              );
              return (
                <li key={r.label}>
                  {r.href ? (
                    <a
                      href={r.href}
                      {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex min-h-[52px] items-center gap-3 rounded-2xl p-1 active:bg-sky-mist"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex min-h-[52px] items-center gap-3 p-1">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <div className="mt-5 flex flex-col gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[56px] items-center justify-center gap-2.5 rounded-full bg-wa px-6 text-[17px] font-extrabold text-white shadow-[0_14px_28px_-14px_rgb(22_133_74/0.9)] active:scale-[0.98]"
          >
            <WhatsAppIcon className="size-5.5" />
            {contacts.whatsapp}
          </a>
          <a
            href={kindergarten.phoneHref}
            className="flex min-h-[56px] items-center justify-center gap-2.5 rounded-full bg-sky-deep px-6 text-[17px] font-extrabold text-white active:scale-[0.98]"
          >
            <Phone className="size-5" aria-hidden="true" />
            {contacts.call}
          </a>
        </div>

        <Reveal className="mt-6">
          <MapCard compact className="h-[320px] w-full rounded-[28px] border-[5px] border-white shadow-card" />
        </Reveal>
      </div>
    </div>
  );
}
