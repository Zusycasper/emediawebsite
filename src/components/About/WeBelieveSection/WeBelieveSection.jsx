"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

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
        <h2 className="text-4xl font-extraextrabold text-white text-center mb-16">
          What we believe in
        </h2>

        <div className="relative">
          <Card className="bg-white p-12 rounded-2xl shadow-sm">
            <CardContent className="relative flex items-center justify-center gap-8">
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
                {/* <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent">
                  {visibleItems.center.title}
                </h1> */}
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
