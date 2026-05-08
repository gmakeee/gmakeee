"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEra, type Era } from "@/lib/era";

interface EraSwitchProps {
  variants: Record<Era, ReactNode>;
  /** Optional className for the motion wrapper. */
  className?: string;
}

/**
 * Renders one of the three era variants with a soft crossfade between them.
 * Uses `mode="wait"` so old content unmounts before the new one fades in,
 * which avoids tall layout overlap during the transition.
 */
export function EraSwitch({ variants, className }: EraSwitchProps) {
  const { era } = useEra();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={era}
        className={className}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        {variants[era]}
      </motion.div>
    </AnimatePresence>
  );
}
