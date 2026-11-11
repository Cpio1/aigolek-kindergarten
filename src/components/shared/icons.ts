import { Apple, Baby, Carrot, Cherry, Clock, Languages, Milk, Soup, UtensilsCrossed, type LucideIcon } from "lucide-react";
import type { HighlightKey } from "@/data/kindergarten";

export const highlightIcons: Record<HighlightKey, LucideIcon> = {
  lang: Languages,
  hours: Clock,
  ages: Baby,
  meals: UtensilsCrossed,
};

/** Тамақтану бөліміндегі безендіру белгішелері (нақты мәзірді білдірмейді). */
export const mealIcons: LucideIcon[] = [Milk, Apple, Soup, Cherry, Carrot];
