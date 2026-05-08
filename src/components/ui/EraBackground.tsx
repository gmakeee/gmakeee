"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEra } from "@/lib/era";
import { AuraBackground } from "@/components/ui/AuraBackground";

function Bg2010() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        background: "#f4f4f0",
        backgroundImage:
          "linear-gradient(180deg, #efefe8 0%, #f4f4f0 60%, #ececdf 100%)",
      }}
    />
  );
}

function Bg2000() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        background: "#ffffee",
      }}
    />
  );
}

export function EraBackground() {
  const { era } = useEra();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={era}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {era === "2026" && <AuraBackground />}
        {era === "2010" && <Bg2010 />}
        {era === "2000" && <Bg2000 />}
      </motion.div>
    </AnimatePresence>
  );
}
