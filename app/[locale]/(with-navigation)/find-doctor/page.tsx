"use client";

// import { Services } from "@/app/_components/Services";
import { DateNavigation } from "./_component/date-navigation";
import { TimeSlotsSection } from "./_component/time-slot";
import { DoctorCard } from "./_component/doctor-card";
import { LocationSelector } from "./_component/location-select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MobileAppSection } from "@/app/[locale]/_components/mobile-app-section";
import { Button } from "@/components/ui/button";
import FAQSection from "./_component/faq-section";
import { useScopedI18n } from "@/locales/client";

export default function Page() {
  const t = useScopedI18n("find-doctor");

  const morningSlots = [{ time: "11:30 AM", available: true }];

  const afternoonSlots = [
    { time: "1:00 PM", available: true },
    { time: "1:30 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "2:30 PM", available: true },
  ];

  const eveningSlots = [
    { time: "6:00 PM", available: true },
    { time: "6:30 PM", available: true },
    { time: "7:00 PM", available: true },
    { time: "7:30 PM", available: true },
  ];

  return (
    <div className="w-full h-full bg-purple-50">
      <div className="w-full h-20 block rounded-b-[1rem] bg-primary"></div>
      {/* <Services /> */}
      <div className="mx-auto container">
        <div className="my-8">
          <h1 className="text-xl font-semibold">55 {t("available-doctors")}</h1>
          <p className="text-sm text-gray-600">{t("booking-description")}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr,400px]">
          <div className="space-y-6">
            <div className="rounded-lg border bg-white p-6">
              <DoctorCard
                name="Dr. Tejasswi Prakash"
                specialty="Spécialiste"
                experience="14 ans d&aposexpérience au total"
                location="Rabat Maroc XXXXXXX Centre de soins médicaux avancés + 1 autre"
                rating="99%"
                testimonials={23}
                consultationFee="Frais de consultation à la clinique"
                available={true}
              />

              <DateNavigation />
              <TimeSlotsSection
                title={t("time-slots.morning")}
                slots={morningSlots}
              />
              <TimeSlotsSection
                title={t("time-slots.afternoon")}
                slots={afternoonSlots}
              />
              <TimeSlotsSection
                title={t("time-slots.evening")}
                slots={eveningSlots}
              />
            </div>

            <DoctorCard
              name="Dr. Tejasswi Prakash"
              specialty="Spécialiste"
              experience="14 ans d&aposexpérience au total"
              location="Rabat Maroc XXXXXXX Centre de soins médicaux avancés + 1 autre"
              rating="99%"
              testimonials={23}
              consultationFee="Frais de consultation à la clinique"
              available={true}
            />

            <div className="w-full rounded-lg bg-white py-2">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      <Button size={"sm"}>1</Button>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      <Button variant="ghost" size={"sm"}>
                        2
                      </Button>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      <Button variant="ghost" size={"sm"}>
                        3
                      </Button>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      <Button variant="ghost" size={"sm"}>
                        10
                      </Button>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>

          <div>
            <LocationSelector />
          </div>
        </div>
      </div>
      <div className="block mt-6">
        <FAQSection />
      </div>
      <MobileAppSection />
    </div>
  );
}
