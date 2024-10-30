/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmerAnimation 2s ease infinite",
      },
    },
  },
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
    ,
    require("tailwindcss-animated"),
  ],
};

export default config;
