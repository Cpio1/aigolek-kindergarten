"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Пайда болу бағыты */
  y?: number;
  x?: number;
  scale?: number;
  amount?: number;
};

/** Тек opacity/transform анимациясы — layout shift болмайды. */
export function Reveal({ children, className, delay = 0, y = 24, x = 0, scale = 1, amount = 0.2 }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
