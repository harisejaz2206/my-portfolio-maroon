/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        canvas: "hsl(var(--color-canvas) / <alpha-value>)",
        surface: {
          1: "hsl(var(--color-surface-1) / <alpha-value>)",
          2: "hsl(var(--color-surface-2) / <alpha-value>)",
          3: "hsl(var(--color-surface-3) / <alpha-value>)",
        },
        text: {
          strong: "hsl(var(--color-text-strong) / <alpha-value>)",
          body: "hsl(var(--color-text-body) / <alpha-value>)",
          muted: "hsl(var(--color-text-muted) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "hsl(var(--color-brand) / <alpha-value>)",
          soft: "hsl(var(--color-brand-soft) / <alpha-value>)",
          accent: "hsl(var(--color-accent) / <alpha-value>)",
        },
        line: "hsl(var(--color-line) / <alpha-value>)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        surface: "var(--shadow-surface)",
        "surface-lg": "var(--shadow-surface-lg)",
        "surface-xl": "var(--shadow-surface-xl)",
      },
      spacing: {
        section: "var(--space-section)",
      },
      animation: {
        "ambient-float": "ambient-float 16s ease-in-out infinite",
      },
      keyframes: {
        "ambient-float": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)", opacity: "0.32" },
          "50%": { transform: "translate3d(0, -16px, 0)", opacity: "0.52" },
        },
      },
    },
  },
  plugins: [],
};
