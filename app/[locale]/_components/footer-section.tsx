import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getScopedI18n } from "@/locales/server";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function Footer() {
  const t = await getScopedI18n("footer");
  return (
    <footer className="bg-[#25145D] mt-auto py-12 pt-14">
      <div className="container mx-auto px-4 grid gap-4 lg:gap-12 lg:grid-cols-4">
        {/*  */}
        <div className="space-y-4">
          <Image
            src="/white-logo.svg"
            alt="Kachefi Logo"
            width={120}
            height={40}
            className="size-28 w-auto"
          />
          <p className="text-sm text-gray-300">{t("description")}</p>
        </div>

        {/*  */}
        <div className="lg:pt-12">
          <h3 className="font-semibold mb-4 text-white">{t("links.title")}</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {Array(7)
              .fill(0)
              .map((_, item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">
                    {
                      //@ts-ignore
                      t("links.items." + item)
                    }
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/*  */}
        <div className="lg:pt-12">
          <h3 className="font-semibold mb-4 text-white">
            {t("contact.title")}
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>{t("contact.address")}</li>
            <li>{t("contact.email")}</li>
            <li>{t("contact.phone")}</li>
          </ul>
        </div>

        {/*  */}
        <div className="lg:pt-12">
          <h3 className="font-semibold mb-4 text-white">
            {t("newsletter.title")}
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            {t("newsletter.description")}
          </p>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="bg-white/10 border-white bg-white rounded-sm"
            />
            <Button className="w-full bg-[#9D7EFF] rounded-sm hover:bg-[#8B6AFF]">
              {t("newsletter.button")}
            </Button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-4">
            <Link href="#" className="text-gray-300 hover:text-white">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">{t("social.facebook")}</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">{t("social.instagram")}</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">{t("social.linkedin")}</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">{t("social.youtube")}</span>
            </Link>
          </div>
          <div className="text-sm text-gray-300">{t("copyright")}</div>
        </div>
      </div>
    </footer>
  );
}
