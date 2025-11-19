"use client";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const services = [
  { title: "Search Engine Optimization", image: "/images/subservices/Search-engine-optimization.webp", link: "/services#digital_marketing" },
  { title: "Email Marketing Campaigns", image: "/images/subservices/Email-marketing-camplaigns.webp", link: "/services#digital_marketing" },
  { title: "AI-driven Marketing Automation", image: "/images/subservices/Ai-driven-marketing-automation.webp", link: "/services#digital_marketing" },
  { title: "Performance Analytics & Reporting", image: "/images/subservices/Performanace-analytics-&-reporting.webp", link: "/services#digital_marketing" },
  { title: "Social Media Strategy & Planning", image: "/images/subservices/Social-media-strategy-&-planning.webp", link: "/services#social_media" },
  { title: "Content Creation & Scheduling", image: "/images/subservices/Content-creation-&-scheduling.webp", link: "/services#social_media" },
  { title: "Trend & Sentiment Analysis with AI", image: "/images/subservices/Trend-&-sentiment-analysis-with-AI.webp", link: "/services#social_media" },
  { title: "Social Ads Management", image: "/images/subservices/Social-ads-management.webp", link: "/services#social_media" },
  { title: "Web & Mobile App Development", image: "/images/subservices/Web-&-mobile-app-development.webp", link: "/services#web_development" },
  { title: "E-commerce Solutions", image: "/images/subservices/E-commerce-solutions.webp", link: "/services#web_development" },
  { title: "AI-Powered Web & App Analytics, testing & security", image: "/images/subservices/Ai-powered-wed-&-app-analytics-testing-&-security.webp", link: "/services#web_development" },
  { title: "UI/UX for Web & Mobile & Optimisation", image: "/images/subservices/UIUX-for-web-&-mobile-&-optimization.webp", link: "/services#web_development" },
  { title: "Cloud infrastructure & management", image: "/images/subservices/cloud-infrastructure-&-management.webp", link: "/services#cloud_infrastructure" },
  { title: "IT Infrastructure Setup & Optimization", image: "/images/subservices/IT-infrastructure-setup-&-optimization.webp", link: "/services#cloud_infrastructure" },
  { title: "AI powered Network Security & Monitoring", image: "/images/subservices/AI-powered-network-security-&-monitoring.webp", link: "/services#cloud_infrastructure" },
  { title: "Automation, Disaster Recovery & Business Continuity", image: "/images/subservices/Automation-disaster-recovery-&-business-continuity.webp", link: "/services#cloud_infrastructure" },
  { title: "Brand Identity & Logo Design", image: "/images/subservices/Brand-identity-&-logo-design.webp", link: "/services#creative_design" },
  { title: "Marketing & Social Media Graphics", image: "/images/subservices/Marketing-&-social-media-graphics.webp", link: "/services#creative_design" },
  { title: "Motion Graphics & Animation", image: "/images/subservices/Motion-graphics-&-animation.webp", link: "/services#creative_design" },
  { title: "AI-Assisted Design & Prototyping", image: "/images/subservices/AI-assisted-design-&-prototyping.webp", link: "/services#creative_design" }
];

// ----------- IMAGE PRELOADER FUNCTION -----------
const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

export default function ServicesSection() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload ALL images once when component mounts
  useEffect(() => {
    services.forEach((item) => preloadImage(item.image));
  }, []);

  // Preload next + previous every time user moves carousel
  useEffect(() => {
    const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;

    preloadImage(services[prevIndex].image);
    preloadImage(services[nextIndex].image);
  }, [currentIndex]);

  const goToPrevious = () =>
    setCurrentIndex((i) => (i > 0 ? i - 1 : services.length - 1));

  const goToNext = () =>
    setCurrentIndex((i) => (i < services.length - 1 ? i + 1 : 0));

  // Memoized visible items
  const visibleItems = useMemo(() => {
    const leftIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    const rightIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;

    return {
      left: services[leftIndex],
      center: services[currentIndex],
      right: services[rightIndex],
    };
  }, [currentIndex]);

  return (
    <section id="our_services" className="py-12 md:py-7 bg-gradient-to-br from-gray-900 to-gray-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8">
          Our Services
        </h2>

        <Card className="bg-white p-4 md:p-2 rounded-2xl shadow-sm h-[320px] md:h-[420px]">
          <CardContent className="relative px-0 h-full flex flex-col justify-center">
            
            {/* Mobile */}
            <div className="block sm:hidden h-full flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute -left-9 top-1/2 -translate-y-1/2 z-50 bg-teal-500 text-white rounded-lg w-10 h-10 shadow-md"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute -right-9 top-1/2 -translate-y-1/2 z-50 bg-teal-500 text-white rounded-lg w-10 h-10 shadow-md"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <HashLink to={visibleItems.center.link} className="w-full">
                <div className="flex flex-col justify-center items-center h-full">
                  <img
                    src={visibleItems.center.image}
                    alt={visibleItems.center.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    onClick={() => navigate(visibleItems.center.link)}
                  />
                </div>
              </HashLink>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center justify-center gap-8 h-full">
              <div
                onClick={goToPrevious}
                className="cursor-pointer text-center opacity-60 w-[310px] hover:opacity-100 flex flex-col justify-center h-full"
              >
                <h1 className="text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent">
                  {visibleItems.left.title}
                </h1>
              </div>

              <HashLink to={visibleItems.center.link}>
                <div className="text-center cursor-pointer flex flex-col justify-center items-center">
                  <img
                    src={visibleItems.center.image}
                    alt={visibleItems.center.title}
                    className="w-[392px] h-[400px] object-contain rounded-lg"
                    onClick={() => navigate(visibleItems.center.link)}
                  />
                </div>
              </HashLink>

              <div
                onClick={goToNext}
                className="cursor-pointer text-center opacity-60 w-[310px] hover:opacity-100 flex flex-col justify-center h-full"
              >
                <h1 className="text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent">
                  {visibleItems.right.title}
                </h1>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
