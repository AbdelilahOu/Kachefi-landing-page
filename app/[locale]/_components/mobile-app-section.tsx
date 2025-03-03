"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import Image from "next/image";
import Link from "next/link";

export function MobileAppSection() {
  const scopedI18N = useScopedI18n("home-page.mobile-app");
  const locale = useCurrentLocale();
  return (
    <div className=" bg-[#EFECF7] px-4 pt-12">
      <div className="container mx-auto grid items-center gap-16 lg:grid-cols-2">
        <div className="relative order-2 h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/mobile-app.png"
            alt="Kachefi App Screenshot"
            fill
            className="self-end object-contain"
            priority
          />
        </div>
        <div className="space-y-8 lg:order-2">
          <div className="relative">
            <svg
              className={cn(
                "absolute top-10",
                locale !== "ar" ? "-left-16" : "-right-16 scale-x-[-1]",
              )}
              width="49"
              height="111"
              viewBox="0 0 49 111"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M35.0792 83.5227C38.4391 91.4377 42.2341 97.0022 47.9265 105.349C49.824 108.131 47.0564 110.05 44.7238 109.618C40.0586 108.755 37.2909 110.673 32.6258 109.81C27.9606 108.946 25.1929 110.865 20.5278 110.001C18.1952 109.569 18.6303 107.219 21.3979 105.3C24.1656 103.382 28.8308 104.245 33.496 105.109L35.8285 105.541C33.4959 105.109 31.1634 104.677 29.2659 101.895C25.0358 98.6807 18.4731 95.0348 14.2431 91.8208C6.21803 83.0423 0.960655 72.345 0.80354 60.1609C0.646428 47.9768 7.92216 34.7375 14.3277 26.1992C17.5305 21.9301 23.5009 15.7422 29.0363 11.9049C31.8039 9.98618 34.5716 8.06749 37.3393 6.14881C40.107 4.23011 42.8747 2.31143 45.6423 0.392743C47.9749 0.824526 50.3075 1.25631 47.5398 3.175C44.7721 5.09369 42.0045 7.01238 41.5694 9.36284C38.8017 11.2815 36.034 13.2002 33.2663 15.1189C27.731 18.9563 24.5282 23.2254 21.3254 27.4946C13.0224 33.2506 8.51438 44.5712 6.33891 56.3236C6.49602 68.5077 9.42081 78.7731 17.8809 85.2012C22.111 88.4152 26.3411 91.6293 30.5711 94.8433C32.9037 95.2751 35.2363 95.7069 34.8012 98.0573C32.9037 95.2751 29.1088 89.7106 27.2113 86.9283C28.0815 82.2274 33.1817 80.7405 35.0792 83.5227Z"
                fill="#7864BB"
              />
            </svg>

            <svg
              className={cn(
                "-inset-11 absolute",
                locale !== "ar" ? "" : "scale-x-[-1]",
              )}
              width="47"
              height="47"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.8984 2.35938L44.9932 34.6992"
                stroke="#7864BB"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M13.1797 16.3086L37.45 37.4545"
                stroke="#7864BB"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M2.20312 38.7344L35.7576 45.2959"
                stroke="#7864BB"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <h1
              className="mb-4 font-bold text-4xl leading-10 lg:text-5xl"
              dangerouslySetInnerHTML={{ __html: scopedI18N("title") }}
            />
          </div>
          <div className="space-y-2">
            <p className="text-lg">{scopedI18N("description")}</p>
            <div className="flex gap-2">
              <div className="flex flex-1">
                <div className="mr-[1px] h-full rounded-l-md bg-white px-2 py-2 text-center font-semibold text-sm">
                  {scopedI18N("phone-input.country-code")}
                </div>
                <Input
                  type="tel"
                  placeholder={scopedI18N("phone-input.placeholder")}
                  className="rounded-l-none border-white/20 bg-white"
                />
              </div>
              <Button className="bg-primary hover:bg-[#8B6AFF]">
                {scopedI18N("send-button")}
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 pt-8">
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/google-play.png"
                  alt={scopedI18N("stores.google-play")}
                  width={180}
                  height={53}
                  className="h-[53px] w-auto"
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/app-store.png"
                  alt={scopedI18N("stores.app-store")}
                  width={180}
                  height={53}
                  className="h-[53px] w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
