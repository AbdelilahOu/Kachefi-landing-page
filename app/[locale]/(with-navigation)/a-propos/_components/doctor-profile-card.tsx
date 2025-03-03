import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";

export async function ProfileCard() {
  const scopedI18N = await getScopedI18n("about-page");
  return (
    <div className="mx-auto max-w-xs">
      <div className="relative">
        <Image
          src="/partners/partner-1.png"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-sm"
        />
        <div className="-bottom-8 -left-8 absolute rounded-lg bg-white p-4 text-center shadow-lg">
          <h2 className="font-bold text-lg">
            {scopedI18N("doctor-profile-card.name")}
          </h2>
          <p className="text-blue-600 text-sm">
            {scopedI18N("doctor-profile-card.specialty")}
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link
              href="#"
              className={cn(buttonVariants({ size: "icon" }), "rounded-full")}
              aria-label={scopedI18N("doctor-profile-card.facebook-aria-label")}
            >
              <Facebook className="h-5 w-5 text-white" />
            </Link>
            <Link
              href="#"
              className={cn(buttonVariants({ size: "icon" }), "rounded-full")}
              aria-label={scopedI18N(
                "doctor-profile-card.instagram-aria-label",
              )}
            >
              <Instagram className="h-5 w-5 text-white" />
            </Link>
            <Link
              href="#"
              className={cn(buttonVariants({ size: "icon" }), "rounded-full")}
              aria-label={scopedI18N("doctor-profile-card.linkedin-aria-label")}
            >
              <Linkedin className="h-5 w-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
