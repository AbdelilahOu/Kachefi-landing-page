"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/locales/client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { usePathname } from "next/navigation";

export function Navigation() {
  const changeLocale = useChangeLocale();
  const scopedI18N = useScopedI18n("navigation");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useCurrentLocale();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: `/${locale}`, label: scopedI18N("home") },
    { href: `/${locale}#`, label: scopedI18N("services") },
    { href: `/${locale}/a-propos`, label: scopedI18N("about") },
    { href: `/${locale}#`, label: scopedI18N("testimonials") },
    { href: `/${locale}#`, label: scopedI18N("faq") },
    { href: `/${locale}/blog`, label: scopedI18N("blog") },
    { href: `/${locale}/contact`, label: scopedI18N("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container m-auto flex h-fit items-center justify-between">
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
        <nav className="m-auto hidden items-center gap-4 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "font-medium text-sm hover:text-primary",
                pathname === link.href
                  ? "font-semibold text-primary"
                  : "text-gray-600",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button className="hidden w-fit rounded-full bg-[#7864BB] px-8 hover:bg-[#6D28D9] md:inline-flex lg:w-40 lg:px-4">
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
          "fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col gap-4 px-6">
          <div className="flex items-center justify-between border-gray-200 border-b">
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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                onClick={handleCloseMenu}
                href={link.href}
                className={cn(
                  "font-medium text-sm hover:text-primary",
                  pathname === link.href
                    ? "font-semibold text-primary"
                    : "text-gray-600", // Or any other default text color
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-fit rounded-full bg-[#7864BB] px-8 hover:bg-[#6D28D9] lg:w-40 lg:px-4">
              {scopedI18N("login")}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
