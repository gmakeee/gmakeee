import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F7",
        foreground: "#1D1D1F",
        secondary: "#86868B",
        accent: "#0071e3",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.apple-glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
          '@supports (backdrop-filter: blur(20px))': {
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
          }
        }
      })
    }
  ],
};

export default config;
