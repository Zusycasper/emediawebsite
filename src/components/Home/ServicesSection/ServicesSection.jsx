"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  { title: "Email Marketing", image: "/media/services/Email.png" },
  { title: "Website Design", image: "/media/services/WebDesign.png" },
  { title: "SEO", image: "/media/services/SEO.png" },
  { title: "Social Media Marketing", image: "/media/services/SMM.png" },
  { title: "Application Development", image: "/media/services/AppDev.png" },
  { title: "Maintenance & Security", image: "/media/services/M&S.png" },
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
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extraextrabold text-white text-center mb-16">Our Services</h2>

        <div className="relative">
          <Card className="bg-white p-12 rounded-2xl shadow-sm">
            <CardContent className="relative flex items-center justify-center gap-8">
              {/* Left Card - Clickable */}
              <div
                onClick={goToPrevious}
                className="pr-10 cursor-pointer text-center space-y-4 opacity-60 w-[310px] hover:opacity-100 transition"
              >
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent h-[80px] text-outline ">{visibleItems.left.title}</h1>
              </div>

              {/* Center Card */}
              <div className="text-center space-y-4 w-[392px]">
                <div className="relative mx-auto w-[392px] h-auto">
                  <img
                    src={visibleItems.center.image || "/placeholder.svg"}
                    alt={`${visibleItems.center.title} illustration`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                {/* <h2 className="text-2xl font-extrabold text-teal-600">{visibleItems.center.title}</h2> */}
              </div>

              {/* Right Card - Clickable */}
              <div
                onClick={goToNext}
                className="pl-10 cursor-pointer text-center space-y-4 opacity-60 w-[310px] hover:opacity-100 transition"
              >
                <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent h-[80px]">{visibleItems.right.title}</h1>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
