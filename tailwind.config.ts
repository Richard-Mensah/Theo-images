import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#dbe4ff",
          300: "#8ea5ff",
          500: "#3547c8",
          700: "#2636a2",
          900: "#17236f",
        },
        ink: "#101946",
        paper: "#f7f8ff",
        surface: "#ffffff",
        clay: "#9f1239",
        coral: "#e11d2e",
        skydeep: "#3547c8",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(16, 25, 70, 0.16)",
        glow: "0 8px 32px rgba(53, 71, 200, 0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}

export default config
