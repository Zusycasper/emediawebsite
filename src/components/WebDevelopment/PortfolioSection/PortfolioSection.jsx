"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const portfolioItems = [
  {
    image: "/media/portfolio/web/a.jpg",
    title: "Analytics Dashboard Project",
  },
  {
    image: "/media/portfolio/web/b.jpg",
    title: "Social Media Campaign",
  },
  {
    image: "/media/portfolio/web/c.jpg",
    title: "SEO Optimization",
  },
  {
    image: "/media/portfolio/web/d.jpg",
    title: "Email Marketing Design",
  },
  {
    image: "/media/portfolio/web/e.jpg",
    title: "Website Redesign",
  },
];

function PortfolioSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length
    );
  };

  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Portfolio
          </h2>

          <div className="relative">
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-500 hover:bg-[#B2519A] text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="max-w-4xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    key={currentSlide}
                    src={
                      portfolioItems[currentSlide].image || "/placeholder.svg"
                    }
                    alt={portfolioItems[currentSlide].title}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-500 hover:bg-[#B2519A] text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Carousel Dots */}
            {/* <div className="hidden md:flex justify-center space-x-2 mt-8">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-teal-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        // .animate-marquee {
        //   animation: marquee 20s linear infinite;
        // }
      `}</style> */}
    </div>
  );
}

export default PortfolioSection;
