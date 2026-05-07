"use client";

import { motion } from "framer-motion";

// Intentionally soft — pure CSS handles entry animation so text is always visible
export function AuraBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0, background: "#FDFDFD" }}
    >
      {/* Blue */}
      <motion.div
        animate={{ x: [0, 120, -80, 0], y: [0, -100, 80, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background: "#3B82F6",
          filter: "blur(110px)",
          opacity: 0.35,
          willChange: "transform",
        }}
      />
      {/* Violet */}
      <motion.div
        animate={{ x: [0, -120, 100, 0], y: [0, 120, -60, 0], scale: [1, 0.85, 1.2, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "#8B5CF6",
          filter: "blur(120px)",
          opacity: 0.28,
          willChange: "transform",
        }}
      />
      {/* Pink */}
      <motion.div
        animate={{ x: [0, 80, -160, 0], y: [0, -80, 140, 0], scale: [1, 1.3, 0.85, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "25%",
          left: "35%",
          width: "42vw",
          height: "42vw",
          borderRadius: "50%",
          background: "#EC4899",
          filter: "blur(110px)",
          opacity: 0.22,
          willChange: "transform",
        }}
      />
    </div>
  );
}
