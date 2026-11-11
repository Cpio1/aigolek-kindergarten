import type { ReactNode } from "react";
import { getSiteImages } from "@/lib/images";
import { kindergarten, navItems, type SectionId } from "@/data/kindergarten";
import { MotionProvider } from "@/components/shared/MotionProvider";
import { WhatsAppButton } from "@/components/shared/FloatingWhatsApp";

import { DesktopNavbar } from "@/components/desktop/DesktopNavbar";
import { DesktopHero } from "@/components/desktop/DesktopHero";
import { DesktopAbout } from "@/components/desktop/DesktopAbout";
import { DesktopGroups } from "@/components/desktop/DesktopGroups";
import { DesktopNutrition } from "@/components/desktop/DesktopNutrition";
import { DesktopActivities } from "@/components/desktop/DesktopActivities";
import { DesktopGallery } from "@/components/desktop/DesktopGallery";
import { DesktopContacts } from "@/components/desktop/DesktopContacts";
import { DesktopFooter } from "@/components/desktop/DesktopFooter";

import { MobileNavbar } from "@/components/mobile/MobileNavbar";
import { MobileHero } from "@/components/mobile/MobileHero";
import { MobileAbout } from "@/components/mobile/MobileAbout";
import { MobileGroups } from "@/components/mobile/MobileGroups";
import { MobileNutrition } from "@/components/mobile/MobileNutrition";
import { MobileActivities } from "@/components/mobile/MobileActivities";
import { MobileGallery } from "@/components/mobile/MobileGallery";
import { MobileContacts } from "@/components/mobile/MobileContacts";
import { MobileFooter } from "@/components/mobile/MobileFooter";

/**
 * Әр бөлімнің бір ғана id-і бар. Ішінде Desktop (≥1024px) және Mobile (<1024px)
 * нұсқалары CSS арқылы ауысады — гидратация қатесі мен layout shift болмайды.
 */
function Section({ id, desktop, mobile }: { id: SectionId; desktop: ReactNode; mobile: ReactNode }) {
  const label = navItems.find((n) => n.id === id)?.label;
  return (
    <section id={id} aria-label={label} className="relative">
      <div className="hidden lg:block">{desktop}</div>
      <div className="lg:hidden">{mobile}</div>
    </section>
  );
}

export default function Home() {
  const images = getSiteImages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    name: kindergarten.fullName,
    telephone: "+77089347692",
    address: { "@type": "PostalAddress", streetAddress: kindergarten.address, addressCountry: "KZ" },
  };

  return (
    <MotionProvider>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Негізгі мазмұнға өту
      </a>

      <header className="sticky top-0 z-50">
        <div className="hidden lg:block">
          <DesktopNavbar logo={images.logo} />
        </div>
        <div className="lg:hidden">
          <MobileNavbar logo={images.logo} />
        </div>
      </header>

      <main>
        <Section id="home" desktop={<DesktopHero image={images.hero} />} mobile={<MobileHero image={images.hero} />} />
        <Section id="about" desktop={<DesktopAbout image={images.about} />} mobile={<MobileAbout image={images.about} />} />
        <Section id="groups" desktop={<DesktopGroups images={images.groups} />} mobile={<MobileGroups images={images.groups} />} />
        <Section
          id="nutrition"
          desktop={<DesktopNutrition images={images.nutrition} />}
          mobile={<MobileNutrition images={images.nutrition} />}
        />
        <Section
          id="activities"
          desktop={<DesktopActivities robotics={images.robotics} speech={images.speech} />}
          mobile={<MobileActivities robotics={images.robotics} speech={images.speech} />}
        />
        <Section id="gallery" desktop={<DesktopGallery images={images.gallery} />} mobile={<MobileGallery images={images.gallery} />} />
        <Section id="contacts" desktop={<DesktopContacts />} mobile={<MobileContacts />} />
      </main>

      <footer>
        <div className="hidden lg:block">
          <DesktopFooter logo={images.logo} />
        </div>
        <div className="lg:hidden">
          <MobileFooter logo={images.logo} />
        </div>
      </footer>

      <WhatsAppButton />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </MotionProvider>
  );
}
