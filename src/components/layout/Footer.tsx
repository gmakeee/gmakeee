"use client";

import { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const tgUsername = "@your_tg_username";

  const handleCopy = () => {
    navigator.clipboard.writeText(tgUsername);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-auto border-t border-black/5 bg-white/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-secondary text-sm">
          © {new Date().getFullYear()} B2B Portfolio. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="mailto:contact@example.com" 
            className="flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            contact@example.com
          </a>
          
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors group"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />}
            {copied ? "Copied!" : "Copy TG Username"}
          </button>
        </div>
      </div>
    </footer>
  );
}
