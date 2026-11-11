"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/data/kindergarten";
import { WhatsAppIcon } from "./WhatsAppButton";

/**
 * Оң жақ төменгі бұрыштағы қалқымалы WhatsApp батырмасы (safe-area ескерілген).
 * Мобильде: бірінші экраннан кейін пайда болады және «Байланыс» бөлімінде
 * (ондағы үлкен батырмаларды жаппау үшін) жасырылады.
 */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    let contactsInView = false;
    const update = () => {
      if (mq.matches) return setVisible(true);
      setVisible(window.scrollY > window.innerHeight * 0.7 && !contactsInView);
    };
    const contacts = document.getElementById("contacts");
    const io = contacts
      ? new IntersectionObserver(
          ([entry]) => {
            contactsInView = entry.isIntersecting;
            update();
          },
          { rootMargin: "0px 0px -35% 0px" },
        )
      : null;
    if (contacts && io) io.observe(contacts);
    update();
    window.addEventListener("scroll", update, { passive: true });
    mq.addEventListener("change", update);
    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", update);
      mq.removeEventListener("change", update);
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp арқылы жазу"
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : true}
      className={`group fixed z-40 grid size-14 place-items-center rounded-full bg-wa-bright text-white shadow-[0_14px_30px_-10px_rgb(22_133_74/0.7)] transition-[transform,opacity] duration-300 hover:scale-105 active:scale-95 right-[max(16px,env(safe-area-inset-right))] bottom-[calc(16px+env(safe-area-inset-bottom))] lg:right-8 lg:bottom-8 lg:size-16 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-wa-bright/50 motion-safe:animate-ping [animation-duration:2.6s]" aria-hidden="true" />
      <WhatsAppIcon className="relative size-7 lg:size-8" />
    </a>
  );
}
