// lib/utils.ts
import type { Variants } from "motion/react";

export const fadeUp = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut", // <- TS will accept this
    },
  },
});
