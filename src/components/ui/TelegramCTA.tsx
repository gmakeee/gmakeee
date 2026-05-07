"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Mail, ExternalLink, Check } from "lucide-react";

interface TelegramCTAProps {
  username?: string;
  email?: string;
}

export function TelegramCTA({ 
  username = "your_tg_username", 
  email = "contact@example.com" 
}: TelegramCTAProps) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  const handleDeepLink = () => {
    window.location.href = `tg://resolve?domain=${username.replace("@", "")}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`@${username.replace("@", "")}`);
      setCopied(true);
      setCopyFailed(false);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyFailed(true);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 pt-8 border-t border-black/5">
      <button
        onClick={handleDeepLink}
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors shadow-sm w-full sm:w-auto"
      >
        <span>Написать в Telegram</span>
        <ExternalLink className="w-4 h-4 ml-2" />
      </button>

      <div className="flex items-center gap-4 w-full sm:w-auto">
        {!copyFailed ? (
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors group px-4 py-3 rounded-full border border-black/5 hover:border-black/10 bg-white/50 w-full sm:w-auto justify-center"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
            )}
            {copied ? "Скопировано!" : `Скопировать @${username}`}
          </button>
        ) : (
          <div className="flex items-center w-full sm:w-auto">
            <input
              type="text"
              readOnly
              value={`@${username}`}
              className="px-4 py-3 rounded-full border border-black/10 bg-white text-sm outline-none focus:border-accent/50 w-full"
              onFocus={(e) => e.target.select()}
            />
          </div>
        )}

        <a
          href={`mailto:${email}`}
          className="flex items-center justify-center p-3 rounded-full border border-black/5 hover:border-black/10 bg-white/50 text-secondary hover:text-foreground transition-colors"
          title="Написать на email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[80] bg-[#1D1D1F] text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 font-medium"
          >
            <Check className="w-4 h-4 text-green-400" />
            Скопировано в буфер обмена
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
