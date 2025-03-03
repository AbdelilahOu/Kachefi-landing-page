import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";

export async function ProfileCard() {
  const scopedI18N = await getScopedI18n("about-page");
  return (
    <div className="max-w-xs mx-auto">
      <div className="relative">
        <Image
          src="/partners/partner-1.png"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-sm"
        />
        <div className="absolute text-center -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold">
            {scopedI18N("doctor-profile-card.name")}
          </h2>
          <p className="text-sm text-blue-600">
            {scopedI18N("doctor-profile-card.specialty")}
          </p>
          <div className="flex justify-center mt-2 space-x-4">
            <Link
              href="#"
              className={cn(buttonVariants({ size: "icon" }), "rounded-full")}
              aria-label={scopedI18N("doctor-profile-card.facebook-aria-label")}
            >
              <Facebook className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="#"
              className={cn(buttonVariants({ size: "icon" }), "rounded-full")}
              aria-label={scopedI18N(
                "doctor-profile-card.instagram-aria-label"
              )}
            >
              <Instagram className="w-5 h-5 text-white" />
            </Link>
            <Link
              href="#"
              className={cn(buttonVariants({ size: "icon" }), "rounded-full")}
              aria-label={scopedI18N("doctor-profile-card.linkedin-aria-label")}
            >
              <Linkedin className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
