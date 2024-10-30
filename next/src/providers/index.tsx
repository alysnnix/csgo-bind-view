"use client";

import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ ...rest }) {
  return <NextUIProvider>{rest.children}</NextUIProvider>;
}
