import type { Config } from "tailwindcss";

// Design tokens for art.elier by Alina.
// Change the hex values here to retune the whole site's palette in one place.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E7", // warm off-white background (not pure white)
        paper: "#FBF8F2", // slightly lighter surface, for cards on cream
        ink: "#2A241E", // near-black warm text color
        clay: "#A0623F", // primary accent — terracotta clay
        "clay-dark": "#844F32",
        sage: "#6B7256", // secondary accent, used sparingly (available/tags)
        stone: "#CDC2AE", // hairlines, borders, dividers
        sold: "#8C8072", // muted tone for sold-out states
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
