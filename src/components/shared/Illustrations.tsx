/**
 * Фотосуреттер әлі жүктелмеген кезде көрсетілетін уақытша иллюстрациялар.
 * Тек тегіс түстер (gradient id жоқ) — бір бетте бірнеше рет қолдануға қауіпсіз.
 */
import { ImagePlus } from "lucide-react";

export type IllustrationName = "house" | "playground" | "blocks" | "paint" | "robot" | "speech";

type Props = { name: IllustrationName; className?: string };

export function Illustration({ name, className }: Props) {
  const common = {
    className,
    role: "img" as const,
    preserveAspectRatio: "xMidYMid slice",
    xmlns: "http://www.w3.org/2000/svg",
  };
  switch (name) {
    case "house":
      return (
        <svg viewBox="0 0 400 440" aria-label="Балабақша ғимаратының суреті" {...common}>
          <rect width="400" height="440" fill="#DDEFFA" />
          <circle cx="318" cy="92" r="38" fill="#FFD76A" />
          <circle cx="318" cy="92" r="54" fill="#FFD76A" opacity=".25" />
          <g fill="#fff">
            <ellipse cx="90" cy="96" rx="44" ry="18" />
            <ellipse cx="118" cy="84" rx="28" ry="20" />
            <ellipse cx="236" cy="150" rx="34" ry="13" />
            <ellipse cx="254" cy="142" rx="20" ry="14" />
          </g>
          <path d="M0 300c70-40 150-50 220-30s130 10 180-20v190H0z" fill="#B9E6C8" />
          <path d="M0 340c90-30 180-28 260-8s110 0 140-12v120H0z" fill="#D9F4E1" />
          <rect x="300" y="250" width="10" height="60" rx="5" fill="#8A6A4F" />
          <circle cx="305" cy="238" r="30" fill="#5BBF86" />
          <circle cx="290" cy="226" r="9" fill="#fff" opacity=".25" />
          <rect x="70" y="268" width="8" height="46" rx="4" fill="#8A6A4F" />
          <circle cx="74" cy="258" r="22" fill="#5BBF86" />
          <rect x="125" y="214" width="150" height="128" rx="14" fill="#fff" />
          <path d="M110 222 200 150l90 72z" fill="#398BCB" strokeLinejoin="round" stroke="#398BCB" strokeWidth="10" />
          <circle cx="200" cy="196" r="14" fill="#FFD76A" />
          <rect x="182" y="276" width="36" height="66" rx="18" fill="#FFD76A" />
          <circle cx="210" cy="310" r="3" fill="#26374A" />
          <rect x="140" y="240" width="32" height="30" rx="8" fill="#DDEFFA" stroke="#398BCB" strokeWidth="4" />
          <rect x="228" y="240" width="32" height="30" rx="8" fill="#DDEFFA" stroke="#398BCB" strokeWidth="4" />
          <path d="M200 150v-34" stroke="#26374A" strokeWidth="4" strokeLinecap="round" />
          <path d="M200 116h30l-8 9 8 9h-30z" fill="#FF9B85" />
          <g fill="#FFD76A">
            <circle cx="40" cy="380" r="6" />
            <circle cx="120" cy="396" r="5" />
            <circle cx="340" cy="372" r="6" />
          </g>
          <g fill="#FF9B85">
            <circle cx="80" cy="370" r="5" />
            <circle cx="370" cy="398" r="5" />
          </g>
        </svg>
      );
    case "playground":
      return (
        <svg viewBox="0 0 400 400" aria-label="Балалар алаңының суреті" {...common}>
          <rect width="400" height="400" fill="#D9F4E1" />
          <circle cx="80" cy="80" r="30" fill="#FFD76A" />
          <g fill="#fff">
            <ellipse cx="280" cy="70" rx="40" ry="16" />
            <ellipse cx="300" cy="60" rx="24" ry="16" />
          </g>
          <path d="M0 290c80-24 160-26 240-10s120 6 160-6v126H0z" fill="#B9E6C8" />
          <path d="M120 290V150M200 290V150" stroke="#398BCB" strokeWidth="10" strokeLinecap="round" />
          <path d="M110 150h100" stroke="#398BCB" strokeWidth="12" strokeLinecap="round" />
          <path d="M145 150v80M175 150v80" stroke="#26374A" strokeWidth="3" />
          <rect x="136" y="228" width="48" height="12" rx="6" fill="#FFD76A" />
          <path d="M240 290l20-120h16l-4 24c30 30 60 60 90 96" stroke="#FF9B85" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M262 290l14-90" stroke="#26374A" strokeWidth="4" strokeLinecap="round" opacity=".5" />
          <circle cx="90" cy="300" r="22" fill="#FFD76A" />
          <path d="M70 296q20-12 40 0M90 278v44" stroke="#fff" strokeWidth="4" fill="none" />
          <g fill="#398BCB">
            <circle cx="330" cy="340" r="5" />
            <circle cx="40" cy="350" r="4" />
          </g>
        </svg>
      );
    case "blocks":
      return (
        <svg viewBox="0 0 400 300" aria-label="Әріпті кубиктер суреті" {...common}>
          <rect width="400" height="300" fill="#FFF4D1" />
          <circle cx="330" cy="60" r="26" fill="#FFD76A" />
          <path d="M0 240c100-20 200-20 400 0v60H0z" fill="#D9F4E1" />
          <g fontFamily="Nunito, sans-serif" fontWeight="900" fontSize="44" textAnchor="middle">
            <rect x="110" y="168" width="76" height="76" rx="14" fill="#398BCB" />
            <text x="148" y="222" fill="#fff">А</text>
            <rect x="196" y="168" width="76" height="76" rx="14" fill="#FF9B85" />
            <text x="234" y="222" fill="#fff">Ә</text>
            <rect x="150" y="84" width="76" height="76" rx="14" fill="#5BBF86" transform="rotate(-6 188 122)" />
            <text x="188" y="138" fill="#fff" transform="rotate(-6 188 122)">Б</text>
          </g>
          <circle cx="70" cy="226" r="20" fill="#FFD76A" />
          <path d="M310 244l18-34 18 34z" fill="#398BCB" />
        </svg>
      );
    case "paint":
      return (
        <svg viewBox="0 0 400 300" aria-label="Кемпірқосақ пен бояулар суреті" {...common}>
          <rect width="400" height="300" fill="#DDEFFA" />
          <g fill="none" strokeWidth="18" strokeLinecap="round">
            <path d="M80 230a120 120 0 0 1 240 0" stroke="#FF9B85" />
            <path d="M104 230a96 96 0 0 1 192 0" stroke="#FFD76A" />
            <path d="M128 230a72 72 0 0 1 144 0" stroke="#5BBF86" />
            <path d="M152 230a48 48 0 0 1 96 0" stroke="#398BCB" />
          </g>
          <g fill="#fff">
            <ellipse cx="86" cy="234" rx="40" ry="18" />
            <ellipse cx="314" cy="234" rx="40" ry="18" />
          </g>
          <path d="M0 262c120-14 260-14 400 0v38H0z" fill="#D9F4E1" />
          <g transform="translate(300 60) rotate(30)">
            <rect x="-6" y="-30" width="12" height="60" rx="6" fill="#FFD76A" />
            <path d="M-8 30h16l-8 22z" fill="#398BCB" />
          </g>
          <g fill="#FFD76A">
            <circle cx="60" cy="70" r="6" />
            <circle cx="350" cy="140" r="5" />
          </g>
        </svg>
      );
    case "robot":
      return (
        <svg viewBox="0 0 400 300" aria-label="Робот суреті" {...common}>
          <rect width="400" height="300" fill="#DDEFFA" />
          <circle cx="70" cy="70" r="40" fill="#fff" opacity=".7" />
          <circle cx="340" cy="230" r="54" fill="#D9F4E1" />
          <path d="M200 64v-20" stroke="#26374A" strokeWidth="5" strokeLinecap="round" />
          <circle cx="200" cy="40" r="9" fill="#FF9B85" />
          <rect x="140" y="64" width="120" height="86" rx="26" fill="#398BCB" />
          <rect x="156" y="82" width="88" height="50" rx="18" fill="#fff" />
          <circle cx="182" cy="106" r="8" fill="#26374A" />
          <circle cx="218" cy="106" r="8" fill="#26374A" />
          <path d="M190 120q10 8 20 0" stroke="#26374A" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="130" y="100" width="12" height="22" rx="6" fill="#FFD76A" />
          <rect x="258" y="100" width="12" height="22" rx="6" fill="#FFD76A" />
          <rect x="150" y="158" width="100" height="78" rx="22" fill="#FFD76A" />
          <circle cx="200" cy="196" r="16" fill="#fff" />
          <circle cx="200" cy="196" r="7" fill="#5BBF86" />
          <path d="M150 180l-30 26M250 180l30 26" stroke="#398BCB" strokeWidth="12" strokeLinecap="round" />
          <rect x="164" y="236" width="20" height="30" rx="8" fill="#398BCB" />
          <rect x="216" y="236" width="20" height="30" rx="8" fill="#398BCB" />
          <path d="M0 266h400v34H0z" fill="#D9F4E1" />
        </svg>
      );
    case "speech":
      return (
        <svg viewBox="0 0 400 300" aria-label="Сөйлеу көпіршіктері суреті" {...common}>
          <rect width="400" height="300" fill="#D9F4E1" />
          <circle cx="330" cy="70" r="44" fill="#fff" opacity=".7" />
          <path d="M70 70h150a30 30 0 0 1 30 30v50a30 30 0 0 1-30 30h-90l-36 28 6-28H70a30 30 0 0 1-30-30v-50a30 30 0 0 1 30-30z" fill="#398BCB" />
          <g fontFamily="Nunito, sans-serif" fontWeight="900" fontSize="40" fill="#fff" textAnchor="middle">
            <text x="100" y="140">Ә</text>
            <text x="145" y="140">Ғ</text>
            <text x="190" y="140">Қ</text>
          </g>
          <path d="M200 160h120a26 26 0 0 1 26 26v36a26 26 0 0 1-26 26h-10l4 24-30-24h-84a26 26 0 0 1-26-26v-36a26 26 0 0 1 26-26z" fill="#FFD76A" />
          <g fontFamily="Nunito, sans-serif" fontWeight="900" fontSize="34" fill="#26374A" textAnchor="middle">
            <text x="238" y="218">Ң</text>
            <text x="275" y="218">Ө</text>
            <text x="312" y="218">Ү</text>
          </g>
          <g fill="#FF9B85">
            <circle cx="60" cy="240" r="8" />
            <circle cx="90" cy="262" r="5" />
          </g>
        </svg>
      );
  }
}

/** Галерея үшін уақытша плитка */
export function PhotoPlaceholder({ index, text, className = "" }: { index: number; text: string; className?: string }) {
  const tones = [
    "bg-sky-soft text-sky-deep",
    "bg-sun-soft text-[#9a6a00]",
    "bg-mint text-mint-dark",
    "bg-[#ffe9e3] text-[#b5513c]",
  ];
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center ${tones[index % tones.length]} ${className}`}
    >
      <ImagePlus className="size-8 opacity-80" aria-hidden="true" />
      <span className="text-sm font-bold opacity-90">{text}</span>
    </div>
  );
}
