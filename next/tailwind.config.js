import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmerAnimation 2s ease infinite",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(
      nextui({
        themes: {
          light: {
            colors: {
              primary: "#FFFFFF",
            },
          },
          dark: {
            colors: {
              primary: "#000000",
            },
          },
        },
      }),
    ),
    require("tailwindcss-animated"),
  ],
};
