import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

import { Star } from "lucide-react";

export async function HeroSection() {
  const scopedI18N = await getScopedI18n("about-page");
  return (
    <div className="h-fit w-full">
      <div className="mx-auto h-full w-full px-8 py-14">
        <h2
          className="mb-8 font-semibold text-4xl text-primary"
          dangerouslySetInnerHTML={{ __html: scopedI18N("hero-section.title") }}
        />
        <div className="grid w-full gap-8 md:grid-cols-2">
          <div className="h-full w-full">
            <Image
              src="/mession.jpg"
              width={500}
              height={550}
              className="h-full w-full rounded-md object-cover"
              alt="mession cover"
            />
          </div>
          <div className="flex h-full w-full flex-col justify-between space-y-4">
            <p className="w-full space-x-2 rounded-full bg-pink-200 p-2 px-4 text-pink-500 text-sm lg:text-lg">
              <Star className="inline fill-pink-500" />{" "}
              {scopedI18N("hero-section.rating")}
            </p>
            <p className="w-[90%] font-medium text-lg leading-8">
              {scopedI18N("hero-section.mission-statement")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex w-48 flex-col gap-5">
                <div className="text-5xl text-primary">40+</div>
                <p>{scopedI18N("hero-section.doctors")}</p>
              </div>
              <div className="flex w-48 flex-col gap-5">
                <div className="text-5xl text-primary">10K+</div>
                <p>{scopedI18N("hero-section.appointments")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
