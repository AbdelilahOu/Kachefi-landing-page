"use client";

import { Button } from "@/components/ui/button";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface TimeSlotsSectionProps {
  title: string;
  slots: TimeSlot[];
}

export function TimeSlotsSection({ title, slots }: TimeSlotsSectionProps) {
  return (
    <div className="mt-4 flex h-20 items-center">
      <h3 className="mb-2 text-sm w-32 font-medium text-gray-900">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {slots.map((slot, index) => (
          <Button
            variant="ghost"
            key={index}
            disabled={!slot.available}
            className={`rounded-md border px-3 py-1 text-sm
              ${
                slot.available
                  ? "border-primary text-primary hover:border-primary"
                  : "border-gray-200 text-gray-400"
              }`}
          >
            {slot.time}
          </Button>
        ))}
      </div>
    </div>
  );
}
