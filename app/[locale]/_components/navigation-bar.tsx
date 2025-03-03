"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import { useChangeLocale, useScopedI18n } from "@/locales/client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function Navigation() {
  const changeLocale = useChangeLocale();
  const scopedI18N = useScopedI18n("navigation");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-fit m-auto items-center justify-between">
        <div className="flex items-center gap-6">
          <Link className="flex items-center gap-2" href="/">
            <Image
              src="/logo.svg"
              alt="Kachefi Logo"
              width={32}
              height={32}
              className="size-20"
            />
          </Link>
        </div>
        <nav className="hidden m-auto md:flex items-center gap-4 lg:gap-8">
          <Link
            className="text-sm font-semibold text-primary hover:text-primary"
            href="/"
          >
            {scopedI18N("home")}
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="#">
            {scopedI18N("services")}
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary"
            href="/a-propos"
          >
            {scopedI18N("about")}
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="#">
            {scopedI18N("testimonials")}
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="#">
            {scopedI18N("faq")}
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="/blog">
            {scopedI18N("blog")}
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary"
            href="/contact"
          >
            {scopedI18N("contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden rounded-full w-fit px-8 lg:px-4 lg:w-40 md:inline-flex bg-[#7864BB] hover:bg-[#6D28D9]">
            {scopedI18N("login")}
          </Button>
          <Menubar className="border-none shadow-none">
            <MenubarMenu>
              <MenubarTrigger className="p-0">
                <Button className="inline-flex" size="icon" variant="ghost">
                  <Globe className="size-10 text-[#7864BB]" />
                </Button>
              </MenubarTrigger>
              <MenubarContent>
                {[
                  { label: "Francais", code: "fr" },
                  { label: "English", code: "en" },
                  { label: "العربية", code: "ar" },
                ].map((language) => (
                  <MenubarItem
                    key={language.label}
                    onClick={() => {
                      // @ts-ignore
                      changeLocale(language.code);
                    }}
                  >
                    {language.label}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Button
            className="md:hidden"
            size="sm"
            variant="ghost"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="size-8" />
            ) : (
              <Menu className="size-8" />
            )}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-transform duration-300 ease-in-out bg-white",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col px-6 gap-4">
          <div className="flex items-center justify-between border-b border-gray-200">
            <Link
              className="flex items-center gap-2"
              href="/"
              onClick={handleCloseMenu}
            >
              <Image
                src="/logo.svg"
                alt="Kachefi Logo"
                width={32}
                height={32}
                className="size-20"
              />
            </Link>
            <Button size="sm" variant="ghost" onClick={toggleMobileMenu}>
              <X className="size-8" />
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              onClick={handleCloseMenu}
              className="text-sm font-semibold text-primary hover:text-primary"
              href="/"
            >
              {scopedI18N("home")}
            </Link>
            <Link
              onClick={handleCloseMenu}
              className="text-sm font-medium hover:text-primary"
              href="#"
            >
              {scopedI18N("services")}
            </Link>
            <Link
              onClick={handleCloseMenu}
              className="text-sm font-medium hover:text-primary"
              href="/a-propos"
            >
              {scopedI18N("about")}
            </Link>
            <Link
              onClick={handleCloseMenu}
              className="text-sm font-medium hover:text-primary"
              href="#"
            >
              {scopedI18N("testimonials")}
            </Link>
            <Link
              onClick={handleCloseMenu}
              className="text-sm font-medium hover:text-primary"
              href="#"
            >
              {scopedI18N("faq")}
            </Link>
            <Link
              onClick={handleCloseMenu}
              className="text-sm font-medium hover:text-primary"
              href="/blog"
            >
              {scopedI18N("blog")}
            </Link>
            <Link
              onClick={handleCloseMenu}
              className="text-sm font-medium hover:text-primary"
              href="/contact"
            >
              {scopedI18N("contact")}
            </Link>
            <Button className="rounded-full w-fit px-8 lg:px-4 lg:w-40  bg-[#7864BB] hover:bg-[#6D28D9]">
              {scopedI18N("login")}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
