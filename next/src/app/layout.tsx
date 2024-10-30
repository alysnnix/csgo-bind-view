import type { Metadata, Viewport } from "next";

import localFont from "next/font/local";

import "../styles/globals.css";
import clsx from "clsx";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
    <html lang="pt-br">
      <body
        className={clsx(
          "antialiased font-sans",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        {auth}
        <div className="relative w-full overflow-hidden pt-[4rem]">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
