import { getScopedI18n } from "@/locales/server";
import { Play } from "lucide-react";
import Image from "next/image";

export async function VideoSection() {
  const scopedI18N = await getScopedI18n("about-page");
  return (
    <section className="p-8">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src="/hero-image.png"
          alt="Medical team video"
          className="rounded-lg object-cover"
          fill
        />
        <button className="absolute inset-0 flex items-center justify-center">
          <Play className="h-16 w-16 text-white" />
        </button>
        <div className="absolute bottom-0 flex h-40 items-end justify-between bg-gradient-to-t from-primary via-primary to-transparent px-8 py-2 text-white">
          <div className="grid h-fit grid-cols-2 gap-2">
            <p className="font-semibold text-2xl">
              {scopedI18N("video-section.title")}
            </p>
            <p>{scopedI18N("video-section.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
