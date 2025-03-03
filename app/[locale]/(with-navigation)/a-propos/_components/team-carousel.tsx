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
    <section className="bg-gray-100 p-8">
      <h3
        className="mb-2 font-semibold text-3xl"
        dangerouslySetInnerHTML={{ __html: scopedI18N("team-carousel.title") }}
      />
      <p>{scopedI18N("team-carousel.description")}</p>
      <div className="mt-12 flex w-full items-center px-8">
        <Carousel className="m-auto w-full">
          <CarouselContent className="-ml-1 gap-16 px-8 py-8">
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
