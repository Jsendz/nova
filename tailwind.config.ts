// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // keep this exactly
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: "#ffffff",
        bgDark: "#0a0a0a",
        cardLight: "rgba(255,255,255,0.6)",
        cardDark: "rgba(15,15,15,0.6)",
      },
      boxShadow: {
        card: "0 24px 60px -10px rgb(0 0 0 / 0.6)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
