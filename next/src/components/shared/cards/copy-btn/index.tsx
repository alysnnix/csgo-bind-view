"use client";

interface Props {
  text: string;
}

export default function CopyBtn({ text }: Props) {
  const handleClick = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <button
      className="bg-ui-foreground-500 p-2 rounded-xl bg-opacity-80 text-ui-background font-bold"
      onClick={handleClick}
    >
      Copiar
    </button>
  );
}
