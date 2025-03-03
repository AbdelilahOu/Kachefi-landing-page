import { getScopedI18n } from "@/locales/server";
import Image from "next/image";

export async function PartnersSection() {
  const scopedI18N = await getScopedI18n("about-page");
  return (
    <section className="bg-gray-100 p-8">
      <div className="container m-auto mt-4 flex flex-col gap-4 md:flex-row">
        <Image
          src="/partners/partner-1.png"
          alt="Doctor smiling"
          width={300}
          height={300}
          className="rounded-lg"
        />
        <div className="grid flex-1 grid-rows-5">
          <div className="row-span-2">
            <h3
              className="font-bold text-4xl"
              dangerouslySetInnerHTML={{
                __html: scopedI18N("partners-section.title"),
              }}
            />
            <p>{scopedI18N("partners-section.description")}</p>
          </div>
          <div className="relative row-span-3 h-full w-full">
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
