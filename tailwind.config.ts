import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        elevated: "var(--bg-elevated)",
        surface: "var(--bg-surface)",
        "accent-primary": "#6C63FF",
        "accent-secondary": "#FF6B9D",
        "accent-tertiary": "#FFD93D",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "border-color": "var(--border-color)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #6C63FF, #FF6B9D)",
      },
      boxShadow: {
        "glow-primary": "0 0 30px rgba(108,99,255,0.3)",
        "glow-secondary": "0 0 30px rgba(255,107,157,0.2)",
        "glow-primary-light": "0 0 20px rgba(108,99,255,0.15)",
        card: "0 4px 20px rgba(0,0,0,0.06)",
        "card-dark": "0 4px 20px rgba(0,0,0,0.2)",
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
