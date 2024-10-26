"use client";

import { Button } from "@nextui-org/button";

interface Props {
  text: string;
}

export default function CopyBtn({ text }: Props) {
  const handleClick = () => {
    navigator.clipboard.writeText(text);
  };

  return <Button onClick={handleClick}>Copiar</Button>;
}
