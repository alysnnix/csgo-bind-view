"use client";

import * as React from "react";
import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { isDesktop } from "@/utils/window";
import { IDiv } from "@/types/jsx";

interface Props extends IDiv {
  title: string;
  description: string;
}

export function AuthModal({ title, description, ...rest }: Props) {
  const router = useRouter();

  const [open, setOpen] = React.useState(true);

  const handleChange = (open: boolean) => {
    setOpen(open);

    if (!open) {
      router.back();
    }
  };

  const Children = React.useMemo(
    () =>
      React.cloneElement(rest.children as React.ReactElement, {
        closeModal: () => handleChange(false),
        ...(!isDesktop && { className: "px-4" }),
      }),
    [rest.children, isDesktop],
  );

  if (isDesktop) {
    return (
      <Dialog defaultOpen open={open} onOpenChange={handleChange}>
        <DialogContent
          className={cn(
            !open && "opacity-0 animate-fade animate-duration-500",
            "sm:max-w-[425px] border-foreground-200",
          )}
        >
          <DialogHeader className="flex flex-col gap-2">
            <DialogTitle>{title}</DialogTitle>

            <DialogDescription className="text-sm opacity-90">
              {description}
            </DialogDescription>
          </DialogHeader>

          <Divider />

          {Children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>

        {Children}

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
