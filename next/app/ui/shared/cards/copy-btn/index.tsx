"use client";

import { Button } from "@nextui-org/button";

interface Props {
  text: string;
}

export default function CopyBtn({ text }: Props) {
  const handleClick = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Button
      className="bg-foreground-600 bg-opacity-80 text-background font-bold"
      onClick={handleClick}
    >
      Copiar
    </Button>
  );
}
