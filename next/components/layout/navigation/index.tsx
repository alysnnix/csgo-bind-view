"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import EditSVG from "@/assets/svg/edit";

export default function Navigation() {
  return (
    <Navbar className="fixed top-0 left-0">
      <NavbarBrand className="flex flex-row gap-1">
        <p className="font-bold text-inherit text-md sm:text-xl">
          CS BIND VIEW
        </p>
        <Popover showArrow className="max-w-[280px]" placement="bottom">
          <PopoverTrigger>
            <span className="text-primary font-bold text-md sm:text-xl cursor-pointer flex items-end gap-1">
              /public
              <EditSVG className="w-4 hidden sm:block" />
            </span>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2 flex flex-col gap-2">
              <div className="text-small font-bold">
                Este é o seu nick de bind personalizado 😍
              </div>
              <div className="text-tiny">
                Faça login ou crie uma conta para alterar e criar o seu próprio
                nick de bind
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" size="md" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
