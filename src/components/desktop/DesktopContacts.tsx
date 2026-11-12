import { Clock, MapPin, Map as MapIcon, Phone } from "lucide-react";
import { contacts, kindergarten, map, whatsappUrl } from "@/data/kindergarten";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Cloud, Star } from "@/components/shared/DecorativeShapes";
import { MapCard } from "@/components/shared/MapCard";
import { WhatsAppIcon } from "@/components/shared/WhatsAppButton";

export function DesktopContacts() {
  const rows = [
    { icon: MapPin, label: "Мекенжай", value: kindergarten.address, href: map.searchUrl, external: true, tone: "bg-sky-soft text-sky-deep" },
    { icon: Phone, label: "Телефон", value: kindergarten.phone, href: kindergarten.phoneHref, external: false, tone: "bg-mint text-mint-dark" },
    { icon: Clock, label: "Жұмыс уақыты", value: kindergarten.hours, href: null, external: false, tone: "bg-sun-soft text-[#8a5b00]" },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-sky-mist py-[clamp(3rem,8vh,4.5rem)]">
      <Cloud className="absolute left-[3%] top-10 -z-10 w-[4.5rem] text-white animate-drift" />
      <Star className="absolute right-[3%] bottom-14 -z-10 size-6 text-sun-deep animate-spin-slow" />

      <div className="mx-auto w-full max-w-[1200px] px-8">
        <Reveal>
          <SectionHeading eyebrow={contacts.eyebrow} title={contacts.title} description={contacts.subtitle} />
        </Reveal>

        <div className="mx-auto mt-[clamp(1.75rem,4vh,2.5rem)] grid max-w-[1080px] grid-cols-[0.9fr_1.1fr] gap-7 xl:gap-8">
          <Reveal x={-24} y={0} className="h-full">
            <div className="flex h-full flex-col rounded-[32px_32px_32px_12px] bg-white p-6 shadow-card xl:p-7">
              <h3 className="font-display text-[clamp(1.3rem,1.7vw,1.5rem)] font-black text-ink">{kindergarten.fullName}</h3>
              <ul className="mt-4 space-y-2.5">
                {rows.map((r) => {
                  const Icon = r.icon;
                  const content = (
                    <>
                      <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${r.tone}`}>
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink-soft">{r.label}</span>
                        <span className="mt-0.5 block text-[15px] xl:text-base font-extrabold text-ink">{r.value}</span>
                      </span>
                    </>
                  );
                  return (
                    <li key={r.label}>
                      {r.href ? (
                        <a
                          href={r.href}
                          {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="flex items-center gap-4 rounded-2xl p-1 transition hover:bg-sky-mist"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-1">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto grid grid-cols-2 gap-2.5 pt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-wa px-5 py-3 text-[15px] font-extrabold text-white shadow-[0_14px_30px_-14px_rgb(22_133_74/0.9)] transition hover:-translate-y-0.5 hover:bg-[#0f7340]"
                >
                  <WhatsAppIcon className="size-5" />
                  WhatsApp
                </a>
                <a
                  href={kindergarten.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-deep px-4 py-2.5 text-[14px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-sky-dark"
                >
                  <Phone className="size-4.5" aria-hidden="true" />
                  {contacts.call}
                </a>
                <a
                  href={map.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sky/30 bg-white px-4 py-2.5 text-[14px] font-extrabold text-sky-dark transition hover:border-sky hover:bg-sky-mist"
                >
                  <MapIcon className="size-4.5" aria-hidden="true" />
                  {contacts.map}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal x={24} y={0} className="h-full">
            <MapCard className="h-full min-h-[340px] rounded-[32px_32px_12px_32px] border-[6px] border-white shadow-card" />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
