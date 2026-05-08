import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EraProvider } from "@/lib/era";
import { EraFooter } from "@/components/layout/EraFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Коммерческая разработка PWA, TMA и ИИ-автоматизация",
  description: "Коммерческая разработка PWA, TMA и ИИ-автоматизация",
};

// Read persisted era and set data-era before hydration so themed CSS variables
// apply on first paint without a flash of the default 2026 theme.
const eraFoucScript = `(()=>{try{var v=localStorage.getItem('era');if(v==='2000'||v==='2010'||v==='2026'){document.documentElement.setAttribute('data-era',v);}else{document.documentElement.setAttribute('data-era','2026');}}catch(e){document.documentElement.setAttribute('data-era','2026');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-era="2026"
      className={`${inter.variable} antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: eraFoucScript }} />
      </head>
      <body className="min-h-screen flex flex-col era-body">
        <EraProvider>
          <main className="flex-grow">{children}</main>
          <EraFooter />
        </EraProvider>
      </body>
    </html>
  );
}
