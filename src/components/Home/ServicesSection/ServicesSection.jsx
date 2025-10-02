"use client";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const services = [
  {
    title: "Search Engine Optimization",
    image: "/media/subservices/Search-engine-optimization.png",
    loading: "eager",
    link: "/services#digital_marketing",
  },
  {
    title: "Email Marketing Campaigns",
    image: "/media/subservices/Email-marketing-camplaigns.png",
    loading: "lazy",
    link: "/services#digital_marketing",
  },
  {
    title: "AI-driven Marketing Automation",
    image: "/media/subservices/Ai-driven-marketing-automation.png",
    loading: "lazy",
    link: "/services#digital_marketing",
  },
  {
    title: "Performance Analytics & Reporting",
    image: "/media/subservices/Performanace-analytics-&-reporting.png",
    loading: "lazy",
    link: "/services#digital_marketing",
  },
  {
    title: "Social Media Strategy & Planning",
    image: "/media/subservices/Social-media-strategy-&-planning.png",
    loading: "lazy",
    link: "/services#social_media",
  },
  {
    title: "Content Creation & Scheduling",
    image: "/media/subservices/Content-creation-&-scheduling.png",
    loading: "lazy",
    link: "/services#social_media",
  },
  {
    title: "Trend & Sentiment Analysis with AI",
    image: "/media/subservices/Trend-&-sentiment-analysis-with-AI.png",
    loading: "lazy",
    link: "/services#social_media",
  },
  {
    title: "Social Ads Management",
    image: "/media/subservices/Social-ads-management.png",
    loading: "lazy",
    link: "/services#social_media",
  },
  {
    title: "Web & Mobile App Development",
    image: "/media/subservices/Web-&-mobile-app-development.png",
    loading: "lazy",
    link: "/services#web_development",
  },
  {
    title: "E-commerce Solutions",
    image: "/media/subservices/E-commerce-solutions.png",
    loading: "lazy",
    link: "/services#web_development",
  },
  {
    title: "AI-Powered Web & App Analytics, testing & security",
    image:
      "/media/subservices/Ai-powered-wed-&-app-analytics-testing-&-security.png",
    loading: "lazy",
    link: "/services#web_development",
  },
  {
    title: "UI/UX for Web & Mobile & Optimisation",
    image: "/media/subservices/UIUX-for-web-&-mobile-&-optimization.png",
    loading: "lazy",
    link: "/services#web_development",
  },
  {
    title: "Cloud infrastructure & management",
    image: "/media/subservices/cloud-infrastructure-&-management.png",
    loading: "lazy",
    link: "/services#cloud_infrastructure",
  },
  {
    title: "IT Infrastructure Setup & Optimization",
    image: "/media/subservices/IT-infrastructure-setup-&-optimization.png",
    loading: "lazy",
    link: "/services#cloud_infrastructure",
  },
  {
    title: "AI powered Network Security & Monitoring",
    image: "/media/subservices/AI-powered-network-security-&-monitoring.png",
    loading: "lazy",
    link: "/services#cloud_infrastructure",
  },
  {
    title: "Automation, Disaster Recovery & Business Continuity",
    image:
      "/media/subservices/Automation-disaster-recovery-&-business-continuity.png",
    loading: "lazy",
    link: "/services#cloud_infrastructure",
  },
  {
    title: "Brand Identity & Logo Design",
    image: "/media/subservices/Brand-identity-&-logo-design.png",
    loading: "lazy",
    link: "/services#creative_design",
  },
  {
    title: "Marketing & Social Media Graphics",
    image: "/media/subservices/Marketing-&-social-media-graphics.png",
    loading: "lazy",
    link: "/services#creative_design",
  },
  {
    title: "Motion Graphics & Animation",
    image: "/media/subservices/Motion-graphics-&-animation.png",
    loading: "lazy",
    link: "/services#creative_design",
  },
  {
    title: "AI-Assisted Design & Prototyping",
    image: "/media/subservices/AI-assisted-design-&-prototyping.png",
    loading: "lazy",
    link: "/services#creative_design",
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
  const handleCenterClick = (link) => {
    navigate(link); // navigate to /services#creative_design
  };

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

  useEffect(() => {
    const preloadLeft = new Image();
    preloadLeft.src = visibleItems.left.image;
    const preloadRight = new Image();
    preloadRight.src = visibleItems.right.image;
  }, [currentIndex]);

  return (
    <section
      id="our_services"
      className="py-12 md:py-7 bg-gradient-to-br from-gray-900 to-gray-800 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8 md:mb-8">
          Our Services
        </h2>

        <div className="relative">
          <Card className="bg-white p-4 md:p-2 rounded-2xl shadow-sm h-[320px] md:h-[420px]">
            <CardContent className="relative px-0 h-full flex flex-col justify-center">
              {/* Mobile */}
              <div className="block sm:hidden h-full flex-col justify-center">
                <div className="relative h-full flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToPrevious}
                    className="absolute -left-9 top-1/2 transform -translate-y-1/2 z-50 bg-teal-500 hover:bg-[#B2519A] text-white rounded-lg w-10 h-10 shadow-md"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToNext}
                    className="absolute -right-9 top-1/2 transform -translate-y-1/2 z-50 bg-teal-500 hover:bg-[#B2519A] text-white rounded-lg w-10 h-10 shadow-md"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  <HashLink to={visibleItems.center.link} className="w-full">
                    <div className="flex flex-col justify-center items-center h-full">
                      <div className="relative w-full max-w-sm h-[200px] flex items-center justify-center">
                        <img
                          src={visibleItems.center.image || "/placeholder.svg"}
                          alt={visibleItems.center.title}
                          onClick={() => handleCenterClick(visibleItems.center.link)}

                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </HashLink>
                </div>
              </div>

              {/* Tablet */}
              <div className="hidden sm:flex md:hidden items-center justify-center gap-6 h-[320px] overflow-hidden">
                {/* Left Card */}
                <div
                  onClick={goToPrevious}
                  className="cursor-pointer text-center opacity-60 w-[240px] h-full hover:opacity-100 flex flex-col justify-center"
                >
                  <h1 className="text-base font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent px-2 line-clamp-2">
                    {visibleItems.left.title}
                  </h1>
                </div>

                {/* Center Card */}
                <HashLink to={visibleItems.center.link}>
                  <div className="text-center w-[300px] h-full cursor-pointer flex flex-col justify-center items-center">
                    <div className="relative w-[300px] h-[280px] flex items-center justify-center">
                      <img
                        src={visibleItems.center.image || "/placeholder.svg"}
                        alt={visibleItems.center.title}
                        onClick={() => handleCenterClick(visibleItems.center.link)}

                        className="max-w-full max-h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </HashLink>

                {/* Right Card */}
                <div
                  onClick={goToNext}
                  className="cursor-pointer text-center opacity-60 w-[240px] h-full hover:opacity-100 flex flex-col justify-center"
                >
                  <h1 className="text-base font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent px-2 line-clamp-2">
                    {visibleItems.right.title}
                  </h1>
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden md:flex items-center justify-center gap-8 h-full">
                <div
                  onClick={goToPrevious}
                  className="pr-10 cursor-pointer text-center opacity-60 w-[310px] hover:opacity-100 flex flex-col justify-center h-full"
                >
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent flex items-center justify-center h-full">
                    {visibleItems.left.title}
                  </h1>
                </div>

                <HashLink to={visibleItems.center.link}>
                  <div className="text-center w-[392px] cursor-pointer flex flex-col justify-center items-center h-full">
                    <div className="relative w-[392px] h-[320px] md:h-[400px] flex items-center justify-center">
                      <img
                        src={visibleItems.center.image || "/placeholder.svg"}
                        alt={visibleItems.center.title}
                                    onClick={() => handleCenterClick(visibleItems.center.link)}

                        className="max-w-full max-h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </HashLink>

                <div
                  onClick={goToNext}
                  className="pl-10 cursor-pointer text-center opacity-60 w-[310px] hover:opacity-100 flex flex-col justify-center h-full"
                >
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent flex items-center justify-center h-full">
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
