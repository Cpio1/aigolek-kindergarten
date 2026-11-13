import {
  Apple,
  Baby,
  Carrot,
  Cherry,
  ClipboardList,
  Clock,
  FileCheck2,
  Languages,
  Milk,
  ScrollText,
  Soup,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { DocumentKey, HighlightKey } from "@/data/kindergarten";

export const highlightIcons: Record<HighlightKey, LucideIcon> = {
  lang: Languages,
  hours: Clock,
  ages: Baby,
  meals: UtensilsCrossed,
};

/** Тамақтану бөліміндегі безендіру белгішелері (нақты мәзірді білдірмейді). */
export const mealIcons: LucideIcon[] = [Milk, Apple, Soup, Cherry, Carrot];

/** Құжаттар бөліміндегі санат белгішелері */
export const documentIcons: Record<DocumentKey, LucideIcon> = {
  rules: ScrollText,
  orders: FileCheck2,
  parents: ClipboardList,
};
