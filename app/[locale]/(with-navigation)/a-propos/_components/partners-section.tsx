import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

export async function PartnersSection() {
  const scopedI18N = await getScopedI18n("about-page");
  return (
    <section className="p-8 bg-gray-100">
      <div className="flex flex-col container m-auto md:flex-row gap-4 mt-4">
        <Image
          src="/partners/partner-1.png"
          alt="Doctor smiling"
          width={300}
          height={300}
          className="rounded-lg"
        />
        <div className="flex-1 grid grid-rows-5">
          <div className="row-span-2">
            <h3
              className="text-4xl font-bold"
              dangerouslySetInnerHTML={{
                __html: scopedI18N("partners-section.title"),
              }}
            ></h3>
            <p>{scopedI18N("partners-section.description")}</p>
          </div>
          <div className="w-full relative row-span-3 h-full">
            <Image
              src="/partners/partner-2.png"
              alt="Medical consultation"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
              }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
