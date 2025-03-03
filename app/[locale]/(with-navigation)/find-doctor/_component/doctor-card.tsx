"use client";

import { Button } from "@/components/ui/button";
import { Star, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useScopedI18n } from "@/locales/client";

interface DoctorCardProps {
  name: string;
  specialty: string;
  experience: string;
  location: string;
  rating: string;
  testimonials: number;
  consultationFee: string;
  available: boolean;
}

export function DoctorCard({
  name,
  specialty,
  experience,
  location,
  rating,
  testimonials,
  consultationFee,
}: DoctorCardProps) {
  const t = useScopedI18n("find-doctor");

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex gap-6">
        <div className="aspect-square h-26 w-26 flex-shrink-0">
          <Image
            src="/partners/partner-1.png"
            alt={name}
            width={96}
            height={96}
            className="aspect-square rounded-full border-2 border-primary"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg text-primary">{name}</h3>
              <p className="text-gray-600 text-sm">{specialty}</p>
              <p className="mt-1 text-gray-500 text-sm">{experience}</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-sm">{rating}</span>
            </div>
          </div>

          <div className="mt-2">
            <p className="font-semibold text-black text-sm">{location}</p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-sm">
                <span className="text-pink-600">{t("doctor-card.free")}</span>
                <span className="text-gray-600"> {consultationFee}</span>
              </p>
              <div className="flex items-center gap-2 space-x-2 py-2">
                <div className="rounded-sm bg-pink-500 px-3 py-1 text-white">
                  <ThumbsUp
                    size={16}
                    className="mr-2 inline-block fill-white"
                  />
                  99%
                </div>
                <span className="font-semibold text-sm">
                  <span className="underline underline-offset-2">
                    {testimonials}
                  </span>{" "}
                  {t("doctor-card.testimonials")}
                </span>
              </div>
            </div>
            <Button className="bg-primary px-6 py-2 text-sm text-white hover:bg-purple-700">
              {t("doctor-card.book-button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
