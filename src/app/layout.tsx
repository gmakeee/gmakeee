import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Коммерческая разработка PWA, TMA и ИИ-автоматизация",
  description: "Коммерческая разработка PWA, TMA и ИИ-автоматизация",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} antialiased`} style={{ scrollBehavior: "smooth" }}>
      <body className="min-h-screen flex flex-col" style={{ background: "#FDFDFD" }}>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
