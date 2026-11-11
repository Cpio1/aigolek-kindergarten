"use client";

import { useEffect, useState } from "react";
import { navItems, whatsappUrl } from "@/data/kindergarten";
import type { SiteImage } from "@/lib/images";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppIcon } from "@/components/shared/WhatsAppButton";

export function DesktopNavbar({ logo }: { logo: SiteImage | null }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-sky-soft bg-white/90 shadow-[0_8px_30px_-18px_rgb(38_55_74/0.35)] backdrop-blur-md"
          : "border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Негізгі мәзір"
        className={`mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-6 transition-[height] duration-300 xl:px-8 ${
          scrolled ? "h-[68px]" : "h-[80px]"
        }`}
      >
        <a href="#home" className="shrink-0 text-[15px] xl:text-base" aria-label="Айгөлек — басты бет">
          <Logo image={logo} size={scrolled ? 40 : 46} />
        </a>

        <ul className="flex items-center gap-0.5 xl:gap-1">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block rounded-full px-2.5 py-2 text-[14px] font-bold whitespace-nowrap transition-colors xl:px-3.5 xl:text-[15px] ${
                    isActive ? "bg-sky-soft text-sky-dark" : "text-ink hover:bg-sky-mist hover:text-sky-deep"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sky-deep px-4 py-2.5 text-[14px] font-extrabold text-white shadow-[0_10px_24px_-12px_rgb(43_116_176/0.9)] transition hover:-translate-y-0.5 hover:bg-sky-dark xl:px-5 xl:text-[15px]"
        >
          <WhatsAppIcon className="size-4.5" />
          Бізге жазылыңыз
        </a>
      </nav>
    </div>
  );
}
