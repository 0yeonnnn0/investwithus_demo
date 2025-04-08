// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rethink-sans)", "sans-serif"],
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-0.5px)' },
          '75%': { transform: 'translateY(0.5px)' },
        },
      },
      animation: {
        bounce: 'bounce 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
