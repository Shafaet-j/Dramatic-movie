"use client";
import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
  Avatar,
} from "@nextui-org/react";
import { FaBell, FaGift, FaSearch } from "react-icons/fa";
import Image from "next/image";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Movies", "Tv Shows", "Log Out"];
  return (
    <Navbar
      maxWidth="2xl"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image
            src="https://res.cloudinary.com/dboyxw8mg/image/upload/v1694847851/DRAMATIC_w4hnx7.png"
            width={90}
            height={50}
            alt=""
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-9 w-1/2" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dboyxw8mg/image/upload/v1694847851/DRAMATIC_w4hnx7.png"
              width={90}
              height={50}
              alt=""
            />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/movies">
            Movies
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/tvShows" aria-current="page">
            Tv Series
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        justify="center"
        as="div"
        className="items-center justify-center flex gap-5"
      >
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<FaSearch size={18} />}
          type="search"
        />
        <FaGift size={25} />
        <FaBell size={25} />
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://res.cloudinary.com/dboyxw8mg/image/upload/v1694847221/samples/people/smiling-man.jpg"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              // size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
