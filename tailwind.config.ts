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
        bg: "#1a0f2e",
        fg: "#ede4f7",
        surface: "#261a3d",
        surface2: "#2f2049",
        muted: "#a99bc4",
        accent: "#c4a7f5",
        "accent-light": "#d8b4fe",
        border: "rgba(196, 167, 245, 0.18)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
