"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const beliefItems = [
  { title: "Transparency", image: "/media/whatwebelive/transparency.png" },
  { title: "Passion", image: "/media/whatwebelive/passion.png" },
  { title: "Innovation", image: "/media/whatwebelive/innovation.png" },
  { title: "Integrity", image: "/media/whatwebelive/integrity.png" },
  { title: "Excellence", image: "/media/whatwebelive/collaboration.png" },
]

export default function WeBelieveSection() {
  const [currentIndex, setCurrentIndex] = useState(1) // Start with second item as center

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : beliefItems.length - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < beliefItems.length - 1 ? prev + 1 : 0))
  }

  const getVisibleItems = () => {
    const leftIndex = currentIndex === 0 ? beliefItems.length - 1 : currentIndex - 1
    const centerIndex = currentIndex
    const rightIndex = currentIndex === beliefItems.length - 1 ? 0 : currentIndex + 1

    return {
      left: beliefItems[leftIndex],
      center: beliefItems[centerIndex],
      right: beliefItems[rightIndex],
    }
  }

  const visibleItems = getVisibleItems()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extraextrabold text-white text-center mb-16">What we believe in</h2>

        <div className="relative">
          <Card className="bg-white p-4 md:p-12 rounded-2xl shadow-sm">
            <CardContent className="relative flex flex-col md:flex-row items-center justify-center">
              <div className="hidden md:flex items-center justify-center gap-8 w-full">
                {/* Left Card - Clickable */}
                <div
                  onClick={goToPrevious}
                  className="pr-10 cursor-pointer text-center space-y-4 opacity-60 w-[310px] hover:opacity-100 transition"
                >
                  <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent h-[80px] text-outline">
                    {visibleItems.left.title}
                  </h1>
                </div>

                {/* Center Card */}
                <div className="text-center space-y-4 w-[300px]">
                  <div className="relative mx-auto w-[300px] h-auto">
                    <img
                      src={visibleItems.center.image || "/placeholder.svg"}
                      alt={`${visibleItems.center.title} illustration`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>

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

              <div className="md:hidden flex flex-col items-center justify-center w-full space-y-6">
                {/* Center Card for Mobile */}
                <div className="text-center space-y-4 w-full max-w-[280px]">
                  <div className="relative mx-auto w-full h-auto">
                    <img
                      src={visibleItems.center.image || "/placeholder.svg"}
                      alt={`${visibleItems.center.title} illustration`}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  <h1 className="text-2xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent">
                    {visibleItems.center.title}
                  </h1>
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={goToPrevious}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-500 shadow-lg hover:bg-[#B2519A]"
                    aria-label="Previous belief"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-teal-500 shadow-lg hover:bg-[#B2519A]"
                    aria-label="Next belief"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
