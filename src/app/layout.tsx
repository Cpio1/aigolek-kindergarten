import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { getSiteImages } from "@/lib/images";

const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
  variable: "--font-nunito",
});

const TITLE = "«Айгөлек» балабақшасы | Балаларға арналған жайлы орта";
const DESCRIPTION =
  "«Айгөлек» балабақшасы — Өжет ықшамауданы, Жиенбаев көшесі, 14 үй. 1,6–6 жас аралығындағы балаларға арналған балабақша. Қазақ тілінде тәрбие, 5 мезгіл тамақтану, робототехника және логопед сабақтары.";

function siteUrl() {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "");
  return fromEnv || "http://localhost:3000";
}

export function generateMetadata(): Metadata {
  const { logo, hero } = getSiteImages();
  const ogImage = hero ?? logo;
  return {
    metadataBase: new URL(siteUrl()),
    title: TITLE,
    description: DESCRIPTION,
    applicationName: "«Айгөлек» балабақшасы",
    keywords: ["Айгөлек", "балабақша", "Өжет", "балабақша Өжет", "қазақ тілді балабақша", "робототехника", "логопед"],
    alternates: { canonical: "/" },
    icons: logo
      ? { icon: [{ url: logo.src }], apple: [{ url: logo.src }] }
      : { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
    openGraph: {
      type: "website",
      locale: "kk_KZ",
      siteName: "«Айгөлек» балабақшасы",
      title: TITLE,
      description: DESCRIPTION,
      url: "/",
      images: ogImage ? [{ url: ogImage.src, width: ogImage.width, height: ogImage.height, alt: "«Айгөлек» балабақшасы" }] : undefined,
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: TITLE,
      description: DESCRIPTION,
    },
    formatDetection: { telephone: true, address: false, email: false },
    other: { "color-scheme": "light only" },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kk" className={nunito.variable} style={{ colorScheme: "light" }}>
      <body className="min-h-dvh bg-white font-sans text-ink">{children}</body>
    </html>
  );
}
