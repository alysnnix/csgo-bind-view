"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Suspense } from "react";

import NickLink from "./nick-link";

export default function Navigation() {
  return (
    <Navbar className="fixed top-0 left-0">
      <NavbarBrand className="flex flex-row gap-1">
        <Link className="font-bold text-inherit text-md sm:text-xl" href="/">
          CS BIND VIEW
        </Link>
        <Suspense fallback={<h1>...</h1>}>
          <NickLink />
        </Suspense>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/signup"
            size="sm"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
