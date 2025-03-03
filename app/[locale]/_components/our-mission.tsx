import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

export async function Mission() {
  const scopedI18N = await getScopedI18n("home-page.mission");
  return (
    <div className="h-fit w-full bg-gradient-to-r from-violet-100 to-slate-50">
      <div className="container mx-auto h-full w-full px-4 py-14">
        <h2
          className="mb-8 font-semibold text-4xl text-black"
          dangerouslySetInnerHTML={{ __html: scopedI18N("title") }}
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
          <div className="flex h-full w-full flex-col justify-between">
            <p className="w-[90%] font-medium text-lg leading-8">
              {scopedI18N("description")}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex w-48 flex-col gap-5">
                <div className="text-5xl text-primary">40+</div>
                <p> {scopedI18N("stats.doctors")}</p>
              </div>
              <div className="flex w-48 flex-col gap-5">
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
