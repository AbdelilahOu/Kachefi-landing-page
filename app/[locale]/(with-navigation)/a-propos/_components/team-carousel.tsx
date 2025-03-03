import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProfileCard } from "./doctor-profile-card";
import { getScopedI18n } from "@/locales/server";

export async function TeamCarousel() {
  const scopedI18N = await getScopedI18n("about-page");
  return (
    <section className="p-8 bg-gray-100">
      <h3
        className="text-3xl mb-2 font-semibold"
        dangerouslySetInnerHTML={{ __html: scopedI18N("team-carousel.title") }}
      ></h3>
      <p>{scopedI18N("team-carousel.description")}</p>
      <div className="flex items-center px-8 w-full mt-12">
        <Carousel className="w-full m-auto">
          <CarouselContent className="-ml-1 px-8 py-8 gap-16">
            {Array.from({ length: 9 }).map((_, index) => (
              <CarouselItem key={index} className="basis-52">
                <ProfileCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
