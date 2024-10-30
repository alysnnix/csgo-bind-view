"use client";

import * as React from "react";
import { Button, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import LoginForm from "../layout/auth/login-form";

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

export function LoginModalForm() {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  React.useEffect(() => {
    if (!open) {
      handleClose();
    }
  }, [open]);

  if (isDesktop) {
    return (
      <Dialog defaultOpen open onOpenChange={setOpen}>
        <DialogContent
          className={cn(
            !open && "opacity-0 animate-fade animate-duration-500",
            "sm:max-w-[425px] border-foreground-200",
          )}
        >
          <DialogHeader className="flex flex-col gap-2">
            <DialogTitle>Faça seu cadastro</DialogTitle>

            <DialogDescription className="text-sm opacity-90">
              Faça seu cadastro para salvar suas próprias configurações de binds
              e personalizar sua experiência de jogo ao máximo. Com uma conta,
              você poderá acessar suas configurações de qualquer lugar e nunca
              perder suas preferências!
            </DialogDescription>
          </DialogHeader>

          <Divider />

          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Faça seu cadastro</DrawerTitle>
          <DrawerDescription>
            Faça seu cadastro para salvar suas próprias configurações de binds e
            personalizar sua experiência de jogo ao máximo. Com uma conta, você
            poderá acessar suas configurações de qualquer lugar e nunca perder
            suas preferências!
          </DrawerDescription>
        </DrawerHeader>
        <LoginForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
