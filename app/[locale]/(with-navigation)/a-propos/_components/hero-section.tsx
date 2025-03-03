import { getScopedI18n } from "@/locales/server";
import { Star } from "lucide-react";
import Image from "next/image";

export async function HeroSection() {
  const scopedI18N = await getScopedI18n("about-page");
  return (
    <div className="w-full h-fit">
      <div className="w-full h-full mx-auto px-8 py-14">
        <h2
          className="text-4xl font-semibold text-primary mb-8"
          dangerouslySetInnerHTML={{ __html: scopedI18N("hero-section.title") }}
        ></h2>
        <div className="grid md:grid-cols-2 gap-8 w-full">
          <div className="w-full h-full">
            <Image
              src="/mession.jpg"
              width={500}
              height={550}
              className="w-full h-full object-cover rounded-md"
              alt="mession cover"
            />
          </div>
          <div className="w-full h-full space-y-4 flex flex-col justify-between">
            <p className="p-2 space-x-2 px-4 rounded-full w-full bg-pink-200 text-pink-500 text-sm lg:text-lg">
              <Star className="fill-pink-500 inline" />{" "}
              {scopedI18N("hero-section.rating")}
            </p>
            <p className="font-medium text-lg leading-8 w-[90%]">
              {scopedI18N("hero-section.mission-statement")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-5 w-48">
                <div className="text-5xl text-primary">40+</div>
                <p>{scopedI18N("hero-section.doctors")}</p>
              </div>
              <div className="flex flex-col gap-5 w-48">
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
