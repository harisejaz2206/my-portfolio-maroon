/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 15s infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.1)" },
        },
      },
      transitionProperty: {
        transform: "transform",
      },
      translate: {
        1: "0.25rem",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      animation: ["hover", "focus"],
      transform: ["hover", "group-hover"],
      translate: ["hover", "group-hover"],
      scale: ["hover", "group-hover"],
    },
  },
};
