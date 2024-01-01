import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        hover: "var(--hover)",
      },
      keyframes: {
        "rubber-band": {
          "0%": { transform: "scaleX(1)" },
          "30%": { transform: "scale3d(1.25, .75, 1)" },
          "40%": { transform: "scale3d(.75,1.25,1)" },
          "50%": { transform: "scale3d(1.15,.85,1)" },
          "65%": { transform: "scale3d(.95,1.05,1)" },
          "75%": { transform: "scale3d(1.05,.95,1)" },
          "100%": { transform: "scaleX(1)" },
        },
        "slide-in-down": {
          "0%": { transform: "translate3d(0,-100%,0)", visibility: "visible" },
          "100%": { transform: "translateZ(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "rubber-band": "rubber-band 1s",
        "slide-in-down": "0.7s slide-in-down 0.8s",
        "fade-in": "1s fade-in 0.2s",
      },
    },
  },
  plugins: [],
};
export default config;
