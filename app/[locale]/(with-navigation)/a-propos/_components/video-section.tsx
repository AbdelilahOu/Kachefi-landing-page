import Image from "next/image";
import { Play } from "lucide-react";
import { getScopedI18n } from "@/locales/server";

export async function VideoSection() {
  const scopedI18N = await getScopedI18n("about-page");
  return (
    <section className="p-8">
      <div className="relative rounded-lg overflow-hidden w-full aspect-video">
        <Image
          src="/hero-image.png"
          alt="Medical team video"
          className="rounded-lg object-cover"
          fill
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <Play className="w-16 h-16 text-white" />
        </button>
        <div className="absolute bottom-0 justify-between px-8 py-2 bg-gradient-to-t from-primary via-primary to-transparent h-40 flex items-end text-white">
          <div className="grid grid-cols-2 gap-2 h-fit">
            <p className="text-2xl font-semibold">
              {scopedI18N("video-section.title")}
            </p>
            <p>{scopedI18N("video-section.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
