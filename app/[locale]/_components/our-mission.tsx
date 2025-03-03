import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

export async function Mission() {
  const scopedI18N = await getScopedI18n("home-page.mission");
  return (
    <div className="w-full h-fit bg-gradient-to-r from-violet-100 to-slate-50">
      <div className="w-full container h-full mx-auto px-4 py-14">
        <h2
          className="text-4xl font-semibold text-black mb-8"
          dangerouslySetInnerHTML={{ __html: scopedI18N("title") }}
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
          <div className="w-full h-full flex flex-col justify-between">
            <p className="font-medium text-lg leading-8 w-[90%]">
              {scopedI18N("description")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-5 w-48">
                <div className="text-5xl text-primary">40+</div>
                <p> {scopedI18N("stats.doctors")}</p>
              </div>
              <div className="flex flex-col gap-5 w-48">
                <div className="text-5xl text-primary">10K+</div>
                <p>{scopedI18N("stats.appointments")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
