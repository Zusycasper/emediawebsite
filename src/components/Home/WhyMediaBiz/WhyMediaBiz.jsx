import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/media/about/creativity.png",
  "/media/about/stratergy.png",
  "/media/about/consistancy.png",
];

function WhyMediaBiz() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Why E-mediabiz</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              In today's crowded digital space, visibility alone isn't enough —
              you need strategy, creativity, and consistency to stand out.
              E-Media Biz brings all three. We help you attract the right
              audience, engage them with compelling content, and convert them
              into loyal customers. With our expertise in digital marketing,
              social media, and development, we take the guesswork out of online
              growth so you can focus on running your business.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="relative">
            <div className="flex justify-center">
              {/* Add opts={{ loop: true }} here */}
              <Carousel opts={{ loop: true }} className="w-full max-w-xs">
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="shadow-sm">
                          <CardContent className="flex aspect-square items-center justify-center">
                            <img
                              src={src}
                              alt={`Why E-Mediabiz ${index + 1}`}
                              className="object-contain w-full h-full rounded-lg"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyMediaBiz;
