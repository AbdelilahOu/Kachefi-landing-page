"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScopedI18n } from "@/locales/client";

interface DateOption {
  label: string;
  sublabel: string;
  selected?: boolean;
}

export function DateNavigation() {
  const t = useScopedI18n("find-doctor");

  const dates: DateOption[] = [
    {
      label: t("date-navigation.today"),
      sublabel: `11 ${t("time-slots.available-slots")}`,
      selected: true,
    },
    {
      label: t("date-navigation.tomorrow"),
      sublabel: `14 ${t("time-slots.available-slots")}`,
    },
    {
      label: "Ven. 3 Mai",
      sublabel: "17 Rendez-vous Disponibles",
    },
  ];

  return (
    <div className="flex w-full items-center gap-4">
      <Button variant="ghost" className="rounded-full p-1 hover:bg-gray-100">
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </Button>
      <div className="flex w-full gap-4">
        {dates.map((date, index) => (
          <Button
            variant="ghost"
            key={index}
            className={`h-fit rounded-none border-b-4 px-4 text-sm ${
              date.selected
                ? "border-b-primary text-primary"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <div className="py-1 text-left">
              <div className="text-center font-semibold text-black">
                {date.label}
              </div>
              <div className="text-pink-600 text-xs">{date.sublabel}</div>
            </div>
          </Button>
        ))}
      </div>
      <Button variant="ghost" className="rounded-full p-1 hover:bg-gray-100">
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </Button>
    </div>
  );
}
