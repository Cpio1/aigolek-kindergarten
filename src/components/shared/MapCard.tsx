import { ExternalLink, MapPin } from "lucide-react";
import { contacts, kindergarten, map } from "@/data/kindergarten";

/**
 * 2GIS карта блогы. Ұйымның тексерілген ID-і жоқ болғандықтан,
 * әдепкі түрде безендірілген карта мен мекенжай бойынша іздеу батырмасы көрсетіледі.
 * `map.embedUrl` толтырылса — iframe көрсетіледі.
 */
export function MapCard({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  if (map.embedUrl) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <iframe
          src={map.embedUrl}
          title={`${kindergarten.fullName} — 2GIS картасы`}
          loading="lazy"
          className="absolute inset-0 h-full w-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className={`relative isolate overflow-hidden bg-[#eaf4ec] ${className}`}>
      <svg
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 -z-10 h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="600" height="400" fill="#EAF4EC" />
        <path d="M-20 300C120 250 220 330 360 280s200-90 280-70" stroke="#BFE0F5" strokeWidth="34" fill="none" />
        <g fill="#D9F4E1">
          <rect x="30" y="30" width="120" height="80" rx="18" />
          <rect x="420" y="40" width="150" height="90" rx="18" />
          <rect x="60" y="330" width="140" height="60" rx="18" />
          <rect x="440" y="300" width="130" height="80" rx="18" />
        </g>
        <g stroke="#fff" strokeLinecap="round" fill="none">
          <path d="M0 160h600M0 230h600" strokeWidth="18" />
          <path d="M200 0v400M380 0v400" strokeWidth="18" />
          <path d="M60 0l120 400M520 0 420 400" strokeWidth="8" />
        </g>
        <g fill="#fff" stroke="#d6e6dd" strokeWidth="2">
          <rect x="230" y="60" width="50" height="70" rx="8" />
          <rect x="300" y="70" width="60" height="60" rx="8" />
          <rect x="230" y="250" width="60" height="50" rx="8" />
          <rect x="410" y="170" width="60" height="44" rx="8" />
          <rect x="100" y="170" width="70" height="44" rx="8" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-full" aria-hidden="true">
        <span className="absolute left-1/2 top-full size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/25 motion-safe:animate-ping" />
        <span className="relative grid size-14 place-items-center rounded-full rounded-br-none rotate-45 bg-sky shadow-float">
          <MapPin className="size-7 -rotate-45 text-white" />
        </span>
      </div>

      <div className={`absolute inset-x-0 bottom-0 ${compact ? "p-3" : "p-5"}`}>
        <div className={`flex items-center gap-3 rounded-2xl bg-white/95 shadow-card backdrop-blur ${compact ? "flex-col items-stretch p-3" : "p-4"}`}>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-black text-ink">{kindergarten.address}</p>
            <p className="mt-0.5 text-xs font-semibold text-ink-soft">{contacts.mapNote}</p>
          </div>
          <a
            href={map.searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-extrabold text-white transition hover:bg-sky-dark"
          >
            {contacts.map}
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
