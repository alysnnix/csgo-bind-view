"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { usePathname } from "next/navigation";

import EditSVG from "@/assets/svg/edit";

const ignoreRoutes = ["/", "/login", "/signup"];

export default function NickLink() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isIgnored = ignoreRoutes.includes(pathname);
  const nick = isHome || isIgnored ? "/public" : pathname;

  return (
    <Popover
      showArrow
      backdrop="opaque"
      className="max-w-[280px]"
      placement="bottom"
    >
      <PopoverTrigger>
        <span className="text-primary font-bold text-md sm:text-xl cursor-pointer flex items-end gap-1">
          {isHome ? "/public" : nick}
          <EditSVG className="w-4 hidden sm:block" />
        </span>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 flex flex-col gap-2">
          <div className="text-small font-bold">
            Este é o seu nick de bind personalizado 😍
          </div>
          <div className="text-tiny">
            Faça login ou crie uma conta para alterar e criar o seu próprio nick
            de bind
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
