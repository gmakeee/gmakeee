"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

const EMAIL = "d.bolvachev@yandex.ru";
const TG = "gmakee";

export function Footer2026() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`@${TG}`).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer style={{ borderTop: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)" }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p style={{ fontSize: "0.85rem", color: "#86868B" }}>
          © 2026 gmakeee development
        </p>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${EMAIL}`}
            style={{ fontSize: "0.85rem", color: "#86868B", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}
            className="hover:text-[#1D1D1F]"
          >
            <Mail size={15} strokeWidth={1.5} />
            {EMAIL}
          </a>

          <button
            onClick={handleCopy}
            style={{ fontSize: "0.85rem", color: "#86868B", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.2s", padding: 0 }}
            className="hover:text-[#1D1D1F]"
          >
            <Send size={15} strokeWidth={1.5} />
            {copied ? "Скопировано!" : `@${TG}`}
          </button>
        </div>
      </div>
    </footer>
  );
}
