"use client";

import { useEffect } from "react";

/**
 * Sticky header-дің нақты биіктігін `--nav-h` CSS айнымалысына жазады.
 * `section[id] { scroll-margin-top: var(--nav-h) }` арқылы мәзірден өткенде
 * бөлімнің тақырыбы navbar астында қалмайды (desktop/mobile, кез келген биіктік).
 */
export function NavHeightSync() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("header[data-site-header]");
    if (!header) return;
    const root = document.documentElement;
    const update = () => {
      const h = Math.round(header.getBoundingClientRect().height);
      if (h > 0) root.style.setProperty("--nav-h", `${h}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(header);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);
  return null;
}
