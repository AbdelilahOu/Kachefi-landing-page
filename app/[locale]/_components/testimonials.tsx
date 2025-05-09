"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScopedI18n } from "@/locales/client";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Testimonials() {
  const scopedI18N = useScopedI18n("home-page.testimonials");

  const testimonials = [
    {
      image: "/user-1.png",
      name: scopedI18N("content.0.name"),
      job: scopedI18N("content.0.job"),
      quote1: scopedI18N("content.0.quote1"),
      quote2: scopedI18N("content.0.quote2"),
    },
    {
      image: "/user-1.png",
      name: scopedI18N("content.0.name"),
      job: scopedI18N("content.0.job"),
      quote1: scopedI18N("content.0.quote1"),
      quote2: scopedI18N("content.0.quote2"),
    },
    {
      image: "/user-1.png",
      name: scopedI18N("content.0.name"),
      job: scopedI18N("content.0.job"),
      quote1: scopedI18N("content.0.quote1"),
      quote2: scopedI18N("content.0.quote2"),
    },
    {
      image: "/user-1.png",
      name: scopedI18N("content.0.name"),
      job: scopedI18N("content.0.job"),
      quote1: scopedI18N("content.0.quote1"),
      quote2: scopedI18N("content.0.quote2"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-fit w-full bg-white">
      <div className="container mx-auto h-full w-full px-4 py-14">
        <h2
          className="mb-8 font-semibold text-4xl text-primary text-zinc-950"
          dangerouslySetInnerHTML={{ __html: scopedI18N("title") }}
        />
        <div className="relative">
          <div
            className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth"
            ref={containerRef}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative border-none bg-gray-200 shadow-none"
                style={{ maxWidth: cardWidth }}
              >
                <CardContent className="p-6 pt-2">
                  <div className="absolute inset-0 h-14 w-full bg-gradient-to-b from-white to-gray-200" />
                  <div className="flex flex-col items-start gap-4">
                    <div className="z-30 grid w-full grid-cols-2">
                      <Image
                        alt="Profile picture"
                        className="rounded-full"
                        height="48"
                        src={testimonial.image}
                        style={{
                          aspectRatio: "48/48",
                          objectFit: "cover",
                        }}
                        width="48"
                      />
                      <div className="flex w-full justify-end">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500">
                          <svg
                            className="h-4 w-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="w-full space-y-1.5">
                      <div className="ml-auto flex w-full items-center justify-between">
                        <h3 className="font-semibold text-[#1a237e] text-lg">
                          {testimonial.name}
                        </h3>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-pink-400 text-sm">{testimonial.job}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="mb-4">
                      <p className="font-medium text-blue-900">
                        {testimonial.quote1}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {testimonial.quote2}
                    </p>
                  </div>
                </CardContent>
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
            {testimonials.map((_, index) => (
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
