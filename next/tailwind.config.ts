/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmerAnimation 2s ease infinite",
      },
      colors: {
        "ui-background": "var(--background)",
        "ui-card": "var(--card)",
        "ui-divider": "var(--divider)",

        "ui-foreground": "var(--foreground)",
        "ui-foreground-100": "var(--foreground-100)",
        "ui-foreground-200": "var(--foreground-200)",
        "ui-foreground-300": "var(--foreground-300)",
        "ui-foreground-400": "var(--foreground-400)",
        "ui-foreground-500": "var(--foreground-500)",
        "ui-foreground-600": "var(--foreground-600)",
        "ui-foreground-700": "var(--foreground-700)",
        "ui-foreground-800": "var(--foreground-800)",

        "ui-border": "var(--border)",
        "ui-border-100": "var(--border-100)",
        "ui-border-200": "var(--border-200)",
        "ui-border-300": "var(--border-300)",
        "ui-border-400": "var(--border-400)",
        "ui-border-500": "var(--border-500)",
        "ui-border-600": "var(--border-600)",
        "ui-border-700": "var(--border-700)",
        "ui-border-800": "var(--border-800)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};

export default config;
