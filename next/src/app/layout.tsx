import "../styles/globals.css";

import type { Metadata, Viewport } from "next";

import clsx from "clsx";
import React from "react";

import BlurBackground from "@/components/shared/blur-background";
import { AutoThemeSwitcher } from "@/components/shared/auto-theme-switch";
import { Providers } from "@/providers";
import Navigation from "@/components/layout/navigation";
import NavigationShimmer from "@/components/layout/navigation/navigation-shimmer";

export const metadata: Metadata = {
  title: "CS Binds View - Home",
  description: "CS Binds View - Home",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  auth: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <body className={clsx(" font-sans")}>
        <Providers>
          <AutoThemeSwitcher />
          <div className="relative w-full min-h-screen overflow-hidden pt-[4rem]">
            {auth}

            <BlurBackground />

            <React.Suspense fallback={<NavigationShimmer />}>
              <Navigation />
            </React.Suspense>

            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
