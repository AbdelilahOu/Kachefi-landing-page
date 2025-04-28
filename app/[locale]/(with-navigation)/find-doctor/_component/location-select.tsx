"use client";

import { Button } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";

export function LocationSelector() {
  const t = useScopedI18n("find-doctor");

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h2 className="mb-2 font-medium text-sm">{t("location.title")}</h2>
      <p className="mb-4 text-gray-500 text-xs">{t("location.subtitle")}</p>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          className="border px-4 py-2 text-sm hover:bg-gray-50"
        >
          Rabat
        </Button>
        <Button
          variant="ghost"
          className="border px-4 py-2 text-sm hover:bg-gray-50"
        >
          Agadir
        </Button>
        <Button
          variant="ghost"
          className="border px-4 py-2 text-sm hover:bg-gray-50"
        >
          Tanger
        </Button>
      </div>
      <div className="mt-4 flex justify-between">
        <Button
          variant="secondary"
          className="text-primary text-sm hover:underline"
        >
          {t("location.find-location")}
        </Button>
        <Button className="bg-primary px-4 py-2 text-sm text-white hover:bg-purple-700">
          {t("location.current-location")}
        </Button>
      </div>
    </div>
  );
}
