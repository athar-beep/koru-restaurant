import type { Config } from "tailwindcss";

/**
 * KORU Lahore — cosmopolitan editorial system.
 * Ink green · porcelain · leaf green · sage. CSS vars so identity retunes in one place.
 * Distinct from Àmú cream/charcoal/brass per master prompt §3.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2.5rem", xl: "3rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        porcelain: "rgb(var(--porcelain) / <alpha-value>)",
        stone: "rgb(var(--stone) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--ink-soft) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        pine: "rgb(var(--pine) / <alpha-value>)",
        leaf: "rgb(var(--leaf) / <alpha-value>)",
        "leaf-deep": "rgb(var(--leaf-deep) / <alpha-value>)",
        sage: "rgb(var(--sage) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        cream: "rgb(var(--cream) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { editorial: "72ch", narrow: "58ch" },
    },
  },
  plugins: [],
};

export default config;
