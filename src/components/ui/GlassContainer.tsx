"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassContainer({ children, className = "", delay = 0 }: GlassContainerProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return a non-animated fallback to prevent hydration mismatch
    return (
      <div className={`liquid-glass rounded-2xl p-6 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`liquid-glass rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
