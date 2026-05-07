import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header 
      className="fixed top-0 inset-x-0 z-50 shadow-sm border-b border-white/40"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        maskImage: 'linear-gradient(to bottom, black 70%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent)',
        transform: 'translateZ(0)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between pb-2">
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles strokeWidth={1.5} className="w-5 h-5 text-accent transition-transform group-hover:scale-110" />
          <span className="font-semibold text-lg tracking-tight text-foreground/90">Portfolio</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-foreground/90">
          <Link href="/#services" className="hover:text-accent transition-colors">
            Services
          </Link>
          <a href="mailto:contact@example.com" className="hover:text-accent transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
