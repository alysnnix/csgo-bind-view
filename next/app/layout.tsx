import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import React from "react";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { AutoThemeSwitcher } from "@/components/shared/auto-theme-switch";
import BlurBackground from "@/components/shared/blur-background";
import Navigation from "@/components/layout/navigation";
import NavigationShimmer from "@/components/layout/navigation/navigation-shimmer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
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
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <head />
      <body
        className={clsx(
          "bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {auth}

          <AutoThemeSwitcher />
          <div className="relative min-h-screen w-full overflow-hidden pt-[4rem]">
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
