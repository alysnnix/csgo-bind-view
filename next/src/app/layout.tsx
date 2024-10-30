import "../styles/globals.css";

import type { Metadata, Viewport } from "next";

import clsx from "clsx";

import BlurBackground from "@/components/shared/blur-background";
import Providers from "@/providers";
import { AutoThemeSwitcher } from "@/components/shared/auto-theme-switch";

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
      <body className={clsx("antialiased font-sans")}>
        <Providers>
          <AutoThemeSwitcher />
          {auth}
          <div className="relative w-full min-h-screen overflow-hidden pt-[4rem]">
            <BlurBackground />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
