"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/media/about/creativity.png",
  "/media/about/stratergy.png",
  "/media/about/consistancy.png",
];

export default function WhyMediaBiz() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const getVisibleItems = () => {
    const leftIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const centerIndex = currentIndex;
    const rightIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    return {
      left: images[leftIndex],
      center: images[centerIndex],
      right: images[rightIndex],
    };
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Why E-mediabiz</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              In today's crowded digital space, visibility alone isn't enough — you need strategy, creativity, and
              consistency to stand out. E-Media Biz brings all three. We help you attract the right audience, engage
              them with compelling content, and convert them into loyal customers. With our expertise in digital
              marketing, social media, and development, we take the guesswork out of online growth so you can focus on
              running your business.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="relative">
            {/* Mobile */}
            <div className="block md:hidden text-center space-y-4">
              <div className="relative mx-auto w-full max-w-sm">
                <img
                  src={visibleItems.center}
                  alt={`Why E-Mediabiz ${currentIndex + 1}`}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-500 hover:bg-[#B2519A] text-white"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-500 hover:bg-[#B2519A] text-white"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center justify-center gap-8">
              {/* Left Image */}
              <div
                onClick={goToPrevious}
                className="cursor-pointer text-center opacity-60 hover:opacity-100 w-[200px]"
              >
                <img
                  src={visibleItems.left}
                  alt={`Why E-Mediabiz ${currentIndex === 0 ? images.length : currentIndex}`}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              {/* Center Image */}
              <div className="text-center w-[300px]">
                <img
                  src={visibleItems.center}
                  alt={`Why E-Mediabiz ${currentIndex + 1}`}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              {/* Right Image */}
              <div
                onClick={goToNext}
                className="cursor-pointer text-center opacity-60 hover:opacity-100 w-[200px]"
              >
                <img
                  src={visibleItems.right}
                  alt={`Why E-Mediabiz ${(currentIndex + 2) % images.length}`}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
