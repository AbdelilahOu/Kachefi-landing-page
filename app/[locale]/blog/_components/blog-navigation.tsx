"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Menu } from "lucide-react"; // Menu icon for mobile
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const categories = [
  {
    title: "Prévention du cancer",
    href: "/categories/prevention-cancer",
  },
  {
    title: "Innovations médicales",
    href: "/categories/innovations-medicales",
  },
  {
    title: "Témoignages de patients",
    href: "/categories/temoignages-patients",
  },
  {
    title: "Conseils de santé générale",
    href: "/categories/conseils-sante",
  },
  {
    title: "Nutrition et cancer",
    href: "/categories/nutrition-cancer",
  },
];

export function BlogNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="relative flex justify-center items-center h-[550px] w-full bg-white">
      <Image
        src="/blog-header-bg.png"
        alt="blog bg image"
        fill
        className="object-cover object-top"
      />
      <div className="container z-40 rounded-md flex justify-between m-auto h-fit px-4 bg-white items-center">
        <Link className="flex items-center gap-2" href="/">
          <Image
            src="/logo.svg"
            alt="Kachefi Logo"
            width={32}
            height={32}
            className="size-16"
          />
        </Link>
        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {/* Navigation Menu (Desktop) */}
        <NavigationMenu
          className={cn("hidden z-50 md:flex ml-4", {
            "absolute top-[75px] flex flex-col bg-white w-full left-0 z-[100] border-b-2 border-gray-200":
              isMenuOpen,
          })}
        >
          <NavigationMenuList className={cn({ "flex flex-col": isMenuOpen })}>
            <NavigationMenuItem
              className={cn({ "border-b-2 border-gray-200": isMenuOpen })}
            >
              <NavigationMenuTrigger
                className={cn({
                  "pl-0": !isMenuOpen,
                  "px-4 py-2": isMenuOpen,
                })}
              >
                Catégories
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-2">
                  {categories.map((category) => (
                    <li key={category.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={category.href}
                          onClick={closeMenu}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            {category.title}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/conseils"
                onClick={closeMenu}
                legacyBehavior
                passHref
              >
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Conseils & astuces
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/idees" onClick={closeMenu} legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Idées quotidiennes
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher..."
              className="w-[150px] md:w-[200px]" //Adjust search input width
            />
          </div>
        </div>
      </div>
    </header>
  );
}
