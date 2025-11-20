import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          focus: "#6D28D9",
          content: "#ffffff",
        },
        secondary: {
          DEFAULT: "#10B981",
          focus: "#059669",
          content: "#ffffff",
        },
        accent: {
          DEFAULT: "#9F7AEA",
          focus: "#7C3AED",
          content: "#ffffff",
        },
        neutral: {
          DEFAULT: "#374151",
          focus: "#1F2937",
          content: "#ffffff",
        },
        base: {
          100: "#f8fafc",
          200: "#f1f5f9",
          300: "#e2e8f0",
          content: "#111827",
        },
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    styled: true,
    themes: [
      {
        lemon: {
          primary: "#7C3AED",
          primaryFocus: "#6D28D9",
          primaryContent: "#ffffff",

          secondary: "#10B981",
          secondaryFocus: "#059669",
          secondaryContent: "#ffffff",

          accent: "#9F7AEA",
          accentFocus: "#7C3AED",
          accentContent: "#ffffff",

          neutral: "#374151",
          neutralFocus: "#1F2937",
          neutralContent: "#ffffff",

          base100: "#f8fafc",
          base200: "#f1f5f9",
          base300: "#e2e8f0",
          baseContent: "#111827",
        },
      },

      {
        lemon_dark: {
          primary: "#7C3AED",
          primaryFocus: "#6D28D9",
          primaryContent: "#ffffff",

          secondary: "#10B981",
          secondaryFocus: "#059669",
          secondaryContent: "#ffffff",

          accent: "#9F7AEA",
          accentFocus: "#7C3AED",
          accentContent: "#ffffff",

          neutral: "#111827",
          neutralFocus: "#0b1220",
          neutralContent: "#ffffff",

          base100: "#0f172a",
          base200: "#020617",
          base300: "#030421",
          baseContent: "#e6eef8",
        },
      },
    ],

    base: true,
    utils: true,
    logs: true,
    darkTheme: "lemon_dark",
  },
};

export default config;
