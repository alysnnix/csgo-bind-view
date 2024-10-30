import { cn } from "@/lib/utils";
import { IDiv } from "@/types/jsx";

export default function Divider({ ...rest }: IDiv) {
  return <div className={cn("w-full h-[1px] bg-ui-border", rest.className)} />;
}
