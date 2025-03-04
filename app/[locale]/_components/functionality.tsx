"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScopedI18n } from "@/locales/client";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  Bell,
  Settings,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Functionality() {
  const scopedI18N = useScopedI18n("home-page.functionality");

  const features = [
    {
      icon: <ClipboardList className="h-6 w-6 text-primary" />,
      title: scopedI18N("content.0.title"),
      description: scopedI18N("content.0.description"),
      link: "#",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: scopedI18N("content.1.title"),
      description: scopedI18N("content.1.description"),
      link: "#",
    },
    {
      icon: <Bell className="h-6 w-6 text-primary" />,
      title: scopedI18N("content.2.title"),
      description: scopedI18N("content.2.description"),
      link: "#",
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-primary" />,
      title: scopedI18N("content.0.title"),
      description: scopedI18N("content.0.description"),
      link: "#",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: scopedI18N("content.1.title"),
      description: scopedI18N("content.1.description"),
      link: "#",
    },
    {
      icon: <Bell className="h-6 w-6 text-primary" />,
      title: scopedI18N("content.2.title"),
      description: scopedI18N("content.2.description"),
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const visibleCards = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? features.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === features.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const calculatedCardWidth = containerWidth / visibleCards;
      setCardWidth(calculatedCardWidth);

      containerRef.current.scrollTo({
        left: currentIndex * calculatedCardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, visibleCards]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-fit w-full bg-gradient-to-r from-violet-100 to-slate-50">
      <div className="container mx-auto h-full w-full px-4 py-14">
        <h2 className="mb-8 font-medium text-4xl text-primary">
          {scopedI18N("title")}
        </h2>

        <div className="relative">
          <div
            className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth"
            ref={containerRef}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className={
                  "scroll-snap-align: start flex w-full flex-none transform flex-col justify-between border-none bg-white p-6 transition-transform duration-300"
                }
                style={{ width: cardWidth }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-medium text-2xl">{feature.title}</h3>
                  <p className="mb-4 text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <Button
                  variant="link"
                  className="w-fit p-0 text-start text-primary"
                >
                  {scopedI18N("button")}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-between pt-14">
          <Button
            size="icon"
            className="rounded-full bg-gray-500"
            onClick={handlePrev}
          >
            <ArrowLeft />
          </Button>
          <div className="flex h-12 items-center justify-center gap-6">
            {features.map((_, index) => (
              <div
                key={index}
                className={`size-2 rounded-full ${
                  index === currentIndex ? "bg-primary" : "bg-primary/60"
                } cursor-pointer`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          <Button
            size="icon"
            className="rounded-full bg-gray-500"
            onClick={handleNext}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
