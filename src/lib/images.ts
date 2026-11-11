/**
 * Серверлік модуль: build кезінде public/images папкасын оқып,
 * тек шын бар файлдарды қайтарады (404 болмауы үшін).
 *
 * Атаулар:
 *   logo.*            — логотип (navbar, footer, favicon)
 *   main-page.*       — басты бөлім (Hero)
 *   main-page2.*      — «Біз туралы» бөлімі
 *   group1.* / group2.*        — топ карточкалары (міндетті емес)
 *   robotics.* / logoped.*     — үйірме карточкалары (міндетті емес)
 *   food*.* / nutrition*.*     — тамақтану бөлімі (міндетті емес)
 *   қалған барлық файлдар      — галерея (image1.jpg, image2.jpg ...)
 */
import fs from "node:fs";
import path from "node:path";

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  name: string;
};

export type SiteImages = {
  logo: SiteImage | null;
  hero: SiteImage | null;
  about: SiteImage | null;
  groups: Record<1 | 2, SiteImage | null>;
  robotics: SiteImage | null;
  speech: SiteImage | null;
  nutrition: SiteImage[];
  gallery: SiteImage[];
};

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const EXT_RE = /\.(png|jpe?g|webp|avif|gif)$/i;

function readSize(buf: Buffer): { width: number; height: number } | null {
  // PNG
  if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  // GIF
  if (buf.length > 10 && buf.toString("ascii", 0, 3) === "GIF") {
    return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
  }
  // WEBP
  if (buf.length > 30 && buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const chunk = buf.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
      return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
    }
    if (chunk === "VP8 ") {
      return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    }
    if (chunk === "VP8L") {
      const b = buf.readUInt32LE(21);
      return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 };
    }
  }
  // JPEG
  if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let offset = 2;
    let orientation = 1;
    let size: { width: number; height: number } | null = null;
    while (offset + 9 < buf.length) {
      if (buf[offset] !== 0xff) {
        offset++;
        continue;
      }
      const marker = buf[offset + 1];
      if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd7)) {
        offset += 2;
        continue;
      }
      const len = buf.readUInt16BE(offset + 2);
      // EXIF orientation
      if (marker === 0xe1 && buf.toString("ascii", offset + 4, offset + 8) === "Exif") {
        orientation = readExifOrientation(buf, offset + 10) ?? orientation;
      }
      if (
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc
      ) {
        size = { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
        break;
      }
      offset += 2 + len;
    }
    if (size && orientation >= 5 && orientation <= 8) {
      return { width: size.height, height: size.width };
    }
    return size;
  }
  return null;
}

function readExifOrientation(buf: Buffer, tiffStart: number): number | null {
  try {
    const little = buf.toString("ascii", tiffStart, tiffStart + 2) === "II";
    const u16 = (o: number) => (little ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
    const u32 = (o: number) => (little ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
    const ifd = tiffStart + u32(tiffStart + 4);
    const entries = u16(ifd);
    for (let i = 0; i < entries; i++) {
      const e = ifd + 2 + i * 12;
      if (u16(e) === 0x0112) return u16(e + 8);
    }
  } catch {
    /* ignore malformed EXIF */
  }
  return null;
}

function toImage(file: string): SiteImage | null {
  try {
    const size = readSize(fs.readFileSync(path.join(IMAGES_DIR, file)));
    const name = file.replace(EXT_RE, "");
    return {
      src: `/images/${encodeURIComponent(file)}`,
      width: size?.width || 1200,
      height: size?.height || 900,
      name,
    };
  } catch {
    return null;
  }
}

let cache: SiteImages | null = null;

export function getSiteImages(): SiteImages {
  if (cache && process.env.NODE_ENV === "production") return cache;

  let files: string[] = [];
  try {
    files = fs
      .readdirSync(IMAGES_DIR)
      .filter((f) => EXT_RE.test(f) && !f.startsWith("."))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  } catch {
    files = [];
  }

  const byName = new Map<string, string>();
  for (const f of files) {
    const key = f.replace(EXT_RE, "").toLowerCase();
    if (!byName.has(key)) byName.set(key, f);
  }

  const used = new Set<string>();
  const pick = (...names: string[]): SiteImage | null => {
    for (const n of names) {
      const f = byName.get(n);
      if (f) {
        used.add(f);
        return toImage(f);
      }
    }
    return null;
  };

  const logo = pick("logo");
  const hero = pick("main-page");
  const about = pick("main-page2");
  const group1 = pick("group1", "group-1");
  const group2 = pick("group2", "group-2");
  const robotics = pick("robotics", "robototechnika", "robototehnika");
  const speech = pick("logoped", "speech");

  const nutrition: SiteImage[] = [];
  const gallery: SiteImage[] = [];
  for (const f of files) {
    if (used.has(f)) continue;
    const img = toImage(f);
    if (!img) continue;
    if (/^(food|nutrition)/i.test(img.name)) nutrition.push(img);
    else gallery.push(img);
  }

  cache = {
    logo,
    hero,
    about,
    groups: { 1: group1, 2: group2 },
    robotics,
    speech,
    nutrition,
    gallery,
  };
  return cache;
}
