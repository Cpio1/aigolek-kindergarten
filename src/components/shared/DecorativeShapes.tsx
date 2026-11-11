/** Жеңіл, тек SVG-ден тұратын безендіру элементтері. Барлығы aria-hidden. */

type ShapeProps = { className?: string; style?: React.CSSProperties };

export function Cloud({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 120 64" className={className} style={style} aria-hidden="true" focusable="false">
      <path
        d="M30 60h66c12 0 22-8.5 22-20s-10-20-22-20c-1.6 0-3.2.2-4.7.5C88 9.3 77.6 2 65.5 2 52 2 40.8 11.2 38.3 23.6A19 19 0 0 0 30 22C17.8 22 8 30.5 8 41s9.8 19 22 19z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sun({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true" focusable="false">
      <g fill="#FFD76A">
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x="47" y="2" width="6" height="16" rx="3" transform={`rotate(${i * 30} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="26" fill="#FFD76A" />
      <ellipse cx="42" cy="38" rx="11" ry="7" fill="#fff" opacity=".35" />
      <circle cx="42" cy="47" r="2.6" fill="#26374A" />
      <circle cx="58" cy="47" r="2.6" fill="#26374A" />
      <path d="M42 57q8 7 16 0" stroke="#26374A" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <circle cx="37" cy="55" r="3.5" fill="#FF9B85" opacity=".55" />
      <circle cx="63" cy="55" r="3.5" fill="#FF9B85" opacity=".55" />
    </svg>
  );
}

export function Star({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true" focusable="false">
      <path
        d="M12 1.8c.5 0 .9.3 1.1.7l2.5 5.3 5.7.8c1 .1 1.4 1.4.7 2.1l-4.2 4.1 1 5.8c.2 1-.9 1.7-1.7 1.3L12 19.2l-5.1 2.7c-.9.5-1.9-.3-1.7-1.3l1-5.8L2 10.7c-.7-.7-.3-2 .7-2.1l5.7-.8 2.5-5.3c.2-.4.6-.7 1.1-.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sparkle({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true" focusable="false">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" fill="currentColor" />
    </svg>
  );
}

export function Moon({ className, style }: ShapeProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} aria-hidden="true" focusable="false">
      <path d="M30 4a20 20 0 1 0 14 30A17 17 0 0 1 30 4z" fill="currentColor" />
    </svg>
  );
}

const blobPaths = [
  "M44.7,-58.5C57.2,-49.7,66.1,-35.4,70.4,-19.7C74.7,-4,74.4,13.1,67.6,27C60.8,40.9,47.5,51.6,32.7,58.9C17.9,66.2,1.6,70.1,-14.9,68C-31.4,65.9,-48.1,57.8,-59.3,44.6C-70.5,31.4,-76.1,13.1,-74,-4C-71.9,-21.1,-62,-37,-48.6,-45.7C-35.2,-54.4,-17.6,-55.9,-0.6,-55.1C16.4,-54.3,32.2,-67.3,44.7,-58.5Z",
  "M39.9,-50.5C51.5,-39.6,60.4,-26.6,64.3,-11.6C68.2,3.4,67.1,20.4,58.7,32.6C50.3,44.8,34.6,52.2,18.4,57.4C2.2,62.6,-14.5,65.6,-29.6,60.5C-44.7,55.4,-58.2,42.2,-64.6,26.3C-71,10.4,-70.3,-8.2,-63.2,-23.3C-56.1,-38.4,-42.6,-50,-28.4,-60.2C-14.2,-70.4,0.7,-79.2,14.6,-76.5C28.5,-73.8,28.3,-61.4,39.9,-50.5Z",
  "M51.2,-61.5C64.4,-50.1,71.6,-32,73.1,-14.2C74.6,3.6,70.4,21.1,60.8,34.4C51.2,47.7,36.2,56.8,19.6,62.8C3,68.8,-15.2,71.7,-30.4,65.7C-45.6,59.7,-57.8,44.8,-64.9,27.8C-72,10.8,-74,-8.3,-67.6,-23.6C-61.2,-38.9,-46.4,-50.4,-31.2,-61.3C-16,-72.2,-0.4,-82.5,16.4,-81.9C33.2,-81.3,38,-72.9,51.2,-61.5Z",
];

export function Blob({ className, style, variant = 0 }: ShapeProps & { variant?: 0 | 1 | 2 }) {
  return (
    <svg viewBox="-80 -80 160 160" className={className} style={style} aria-hidden="true" focusable="false">
      <path d={blobPaths[variant]} fill="currentColor" />
    </svg>
  );
}

/** Бөлімдер арасындағы толқын. `flip` — жоғарғы жиекке арналған. */
export function Wave({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 40c120-26 240-36 360-22s240 50 360 46 240-44 360-52 240 18 360 28v40H0z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 20" preserveAspectRatio="none" className={className} aria-hidden="true" focusable="false" fill="none">
      <path
        d="M2 12c10-10 18-10 28 0s18 10 28 0 18-10 28 0 18 10 28 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Dots({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true" focusable="false">
      {Array.from({ length: 16 }).map((_, i) => (
        <circle key={i} cx={7.5 + (i % 4) * 15} cy={7.5 + Math.floor(i / 4) * 15} r="3" fill="currentColor" />
      ))}
    </svg>
  );
}
