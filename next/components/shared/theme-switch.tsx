"use client";

import { FC, useEffect } from "react";
import { SwitchProps } from "@nextui-org/switch";
import { useTheme } from "next-themes";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => {
      setTheme(matchMedia.matches ? "dark" : "light");
    };

    updateTheme();
    matchMedia.addEventListener("change", updateTheme);

    return () => {
      matchMedia.removeEventListener("change", updateTheme);
    };
  }, []);

  return null;
};
