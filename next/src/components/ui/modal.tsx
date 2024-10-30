"use client";

import * as React from "react";
import { Button, Divider, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

export function DrawerDialogDemo() {
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

          <ProfileForm />
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
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="grid h-full gap-1">
            <label htmlFor="email">Email</label>
            <Input id="email" name="email" type="email" />
          </div>
          <div className="grid h-full gap-1">
            <label htmlFor="name">Usuário</label>
            <Input id="name" name="name" type="normal" />
          </div>
          <div className="grid h-full gap-1">
            <label htmlFor="password">Senha</label>
            <Input id="password" name="password" type="password" />
          </div>
        </div>
        <Button
          disabled
          className="text-md disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:opacity-20"
          type="submit"
        >
          Finalizar cadastro
        </Button>
      </div>

      <p>
        Já tenho uma conta ?{" "}
        <Link
          className="text-sm text-accent-500 text-primary font-bold"
          href="/login"
        >
          Faça login
        </Link>
      </p>
    </form>
  );
}
