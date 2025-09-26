"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    title: "Search Engine Optimization",
    image: "/media/subservices/Search-engine-optimization.png",
    link: "/services#digital_marketing",
  },
  {
    title: "Email Marketing Campaigns",
    image: "/media/subservices/Email-marketing-camplaigns.png",
    link: "/services#digital_marketing",
  },
  {
    title: "AI-driven Marketing Automation",
    image: "/media/subservices/Ai-driven-marketing-automation.png",
    link: "/services#digital_marketing",
  },
  {
    title: "Performance Analytics & Reporting",
    image: "/media/subservices/Performanace-analytics-&-reporting.png",
    link: "/services#digital_marketing",
  },
  {
    title: "Social Media Strategy & Planning",
    image: "/media/subservices/Social-media-strategy-&-planning.png",
    link: "/services#social_media",
  },
  {
    title: "Content Creation & Scheduling",
    image: "/media/subservices/Content-creation-&-scheduling.png",
    link: "/services#social_media",
  },
    {
    title: "Trend & Sentiment Analysis with AI",
    image: "/media/subservices/Trend-&-sentiment-analysis-with-AI.png",
    link: "/services#social_media",
  },
    {
    title: "Social Ads Management",
    image: "/media/subservices/Social-ads-management.png",
    link: "/services#social_media",
  },
    {
    title: "Web & Mobile App Development",
    image: "/media/subservices/Web-&-mobile-app-development.png",
    link: "/services#web_development",
  },  {
    title: "E-commerce Solutions",
    image: "/media/subservices/E-commerce-solutions.png",
    link: "/services#web_development",
  },
    {
    title: "AI-Powered Web & App Analytics, testing & security",
    image: "/media/subservices/Ai-powered-wed-&-app-analytics-testing-&-security.png",
    link: "/services#web_development",
  },
    {
    title: "UI/UX for Web & Mobile & Optimisation",
    image: "/media/subservices/UIUX-for-web-&-mobile-&-optimization.png",
    link: "/services#web_development",
  },
    {
    title: "Cloud infra. & mngt. ",
    image: "/media/subservices/cloud-infrastructure-&-management.png",
    link: "/services#cloud_infrastructure",
  },
    {
    title: "IT Infrastructure Setup & Optimization",
    image: "/media/subservices/IT-infrastructure-setup-&-optimization.png",
    link: "/services#cloud_infrastructure",
  },
    {
    title: "AI powered Network Security & Monitoring",
    image: "/media/subservices/AI-powered-network-security-&-monitoring.png",
    link: "/services#cloud_infrastructure",
  },
    {
    title: "Automation, Disaster Recovery & Business Continuity",
    image: "/media/subservices/Automation-disaster-recovery-&-business-continuity.png",
    link: "/services#cloud_infrastructure",
  },
    {
    title: "Brand Identity & Logo Design",
    image: "/media/subservices/Brand-identity-&-logo-design.png",
    link: "/services#creative_design",
  },
    {
    title: "Marketing & Social Media Graphics",
    image: "/media/subservices/Marketing-&-social-media-graphics.png",
    link: "/services#creative_design",
  },
    {
    title: "Motion Graphics & Animation",
    image: "/media/subservices/Motion-graphics-&-animation.png",
    link: "/services#creative_design",
  },
    {
    title: "AI-Assisted Design & Prototyping",
    image: "/media/subservices/AI-assisted-design-&-prototyping.png",
    link: "/services#creative_design",
  },
]

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(1) // Start with second item as center

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0))
  }

  const getVisibleItems = () => {
    const leftIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1
    const centerIndex = currentIndex
    const rightIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1

    return {
      left: services[leftIndex],
      center: services[centerIndex],
      right: services[rightIndex],
    }
  }

  const visibleItems = getVisibleItems()

  return (
    <section className="py-12 md:py-7 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-8 md:mb-8">Our Services</h2>

        <div className="relative">
          <Card className="bg-white p-4 md:p-2 rounded-2xl shadow-sm h-[320px] md:h-[420px]">
            <CardContent className="relative px-8 h-full flex flex-col justify-center">
              {/* Mobile Layout */}
              <div className="block md:hidden h-full flex-col justify-center">
                <div className="relative h-full flex items-center">
                  {/* Navigation Buttons - Outside of Link */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToPrevious}
                    aria-label="Previous service"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-teal-500 hover:bg-[#B2519A] text-white rounded-lg w-10 h-10 shadow-md"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-teal-500 hover:bg-[#B2519A] text-white rounded-lg w-10 h-10 shadow-md"
                    aria-label="Next service"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  {/* Center Content - Now properly clickable */}
                  <Link to={visibleItems.center.link} className="w-full">
                    <div
                      className="text-center space-y-4 px-12 flex flex-col justify-center items-center h-full"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="relative mx-auto w-full max-w-sm h-[180px] flex items-center justify-center">
                        <img
                          src={visibleItems.center.image || "/placeholder.svg"}
                          alt={`${visibleItems.center.title} illustration`}
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{visibleItems.center.title}</h3>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center justify-center gap-8 h-full">
                {/* Left Card - Clickable */}
                <div
                  onClick={goToPrevious}
                  className="pr-10 cursor-pointer text-center space-y-4 opacity-60 w-[310px] hover:opacity-100 transition flex flex-col justify-center h-full"
                >
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent flex items-center justify-center">
                    {visibleItems.left.title}
                  </h1>
                </div>

                {/* Center Card */}
                <Link to={visibleItems.center.link}>
                  <div
                    className="text-center space-y-4 w-[392px] cursor-pointer flex flex-col justify-center items-center h-full"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div className="relative mx-auto w-[392px] h-[300px] flex items-center justify-center">
                      <img
                        src={visibleItems.center.image || "/placeholder.svg"}
                        alt={`${visibleItems.center.title} illustration`}
                        className="max-w-full max-h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </Link>

                {/* Right Card - Clickable */}
                <div
                  onClick={goToNext}
                  className="pl-10 cursor-pointer text-center space-y-4 opacity-60 w-[310px] hover:opacity-100 transition flex flex-col justify-center h-full"
                >
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent flex items-center justify-center">
                    {visibleItems.right.title}
                  </h1>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
