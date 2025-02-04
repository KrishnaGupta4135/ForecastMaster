import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Navbarr() {
  return (
    <Navbar
      maxWidth="full"
      className="bg-gradient-to-r from-blue-800 to-purple-700 text-white shadow-lg"
      position="sticky"
    >
      <NavbarContent justify="start">
        <NavbarBrand className="font-bold text-white text-2xl">
          ForecastMaster
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login" className="text-white hover:text-purple-200">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            href="/signup"
            variant="solid"
            className="bg-purple-600 text-white hover:bg-purple-700"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
