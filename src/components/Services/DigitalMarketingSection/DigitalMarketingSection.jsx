"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"

function DigitalMarketingSection() {
  return (
    <div className="relative DigitalMerketingSection">
      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">
                Digital Marketing
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                We build websites that not only look stunning but also perform
                flawlessly. Whether you need a sleek portfolio, a dynamic
                e-commerce store, or a robust web application, our team crafts
                solutions tailored to your goals.
              </p>

              <div className="flex flex-wrap gap-4 items-center relative">
                <img
                  src="/media/services/subdigi.png"
                  alt="Digital Marketing Services"
                  className="w-full h-full pr-6"
                />

                {/* SEO Drawer */}
                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[15%] left-[7%] shadow-none w-23 h-23 sm:w-30 sm:h-30 ">
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="p-6">
                      <DrawerHeader>
                        <DrawerTitle>SEO</DrawerTitle>
                        <DrawerDescription>
                          Optimize your website for search engines and improve visibility.
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer>

                {/* SM Drawer */}
                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[17%] left-[35%] shadow-none w-23 h-23 sm:w-30 sm:h-30 ">
                      
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="p-6">
                      <DrawerHeader>
                        <DrawerTitle>Social Media Marketing</DrawerTitle>
                        <DrawerDescription>
                          Grow your brand presence across social media platforms.
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer>

                {/* Email Drawer */}
                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[20%] left-[67%] bg-transparent w-23 h-23 sm:w-30 sm:h-30 shadow-none ">
                      
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="p-6">
                      <DrawerHeader>
                        <DrawerTitle>Email Marketing</DrawerTitle>
                        <DrawerDescription>
                          Engage your audience with personalized email campaigns.
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>

            <div className="relative">
              <img
                src="/media/DigiMarkSub.png"
                alt="Digital marketing service"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DigitalMarketingSection
