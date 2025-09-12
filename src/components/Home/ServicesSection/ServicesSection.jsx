"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Email Marketing",
    image: "/media/services/Email.png",
    link: "/digital_marketing",
  },
  {
    title: "Website Design",
    image: "/media/services/WebDesign.png",
    link: "/web_development",
  },
  {
    title: "SEO",
    image: "/media/services/SEO.png",
    link: "/digital_marketing",
  },
  {
    title: "Social Media Marketing",
    image: "/media/services/SMM.png",
    link: "/digital_marketing",
  },
  {
    title: "Application Development",
    image: "/media/services/AppDev.png",
    link: "/web_development",
  },
  {
    title: "Maintenance & Security",
    image: "/media/services/M&S.png",
    link: "/web_development",
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with second item as center

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  const getVisibleItems = () => {
    const leftIndex =
      currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    const centerIndex = currentIndex;
    const rightIndex =
      currentIndex === services.length - 1 ? 0 : currentIndex + 1;

    return {
      left: services[leftIndex],
      center: services[centerIndex],
      right: services[rightIndex],
    };
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="py-12 md:py-7 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8 md:mb-8
        ">
          Our Services
        </h2>

        <div className="relative">
          <Card className="bg-white p-4 md:p-2 rounded-2xl shadow-sm">
            <CardContent className="relative px-8">
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <Link to={visibleItems.center.link}>
                <div className="text-center space-y-4">
                  <div className="relative mx-auto w-full max-w-sm">
                    <img
                      src={visibleItems.center.image || "/placeholder.svg"}
                      alt={`${visibleItems.center.title} illustration`}
                      className="w-full h-auto object-contain rounded-lg"
                      onClick={(handleClick) => {
                          window.scrollTo(0, 0);
                          handleClick();
                        }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mt-4">
                    {visibleItems.center.title}
                  </h3>

                  {/* Mobile Navigation Buttons */}
                  <div className="flex justify-center gap-4 mt-6">
                    <button
                      variant="ghost"
                      size="icon"
                      onClick={goToPrevious}
                      aria-label="Previous service"
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-500 hover:bg-[#B2519A] text-white"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                    variant="ghost"
                      size="icon"
                      onClick={goToNext}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-500 hover:bg-[#B2519A] text-white"
                      aria-label="Next service"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                </Link>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-center gap-8">
                {/* Left Card - Clickable */}
                <div
                  onClick={goToPrevious}
                  className="pr-10 cursor-pointer text-center space-y-4 opacity-60 w-[310px] hover:opacity-100 transition"
                >
                  <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent h-[80px]">
                    {visibleItems.left.title}
                  </h1>
                </div>

                {/* Center Card */}
                <Link to={visibleItems.center.link}>
                  <div className="text-center space-y-4 w-[392px] cursor-pointer">
                    <div className="relative mx-auto w-[392px] h-auto">
                      <img
                        src={visibleItems.center.image || "/placeholder.svg"}
                        alt={`${visibleItems.center.title} illustration`}
                        className="w-full h-full object-contain rounded-lg"
                        onClick={(handleClick) => {
                          window.scrollTo(0, 0);
                          handleClick();
                        }}
                      />
                    </div>
                  </div>
                </Link>

                {/* Right Card - Clickable */}
                <div
                  onClick={goToNext}
                  className="pl-10 cursor-pointer text-center space-y-4 opacity-60 w-[310px] hover:opacity-100 transition"
                >
                  <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent h-[80px]">
                    {visibleItems.right.title}
                  </h1>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
