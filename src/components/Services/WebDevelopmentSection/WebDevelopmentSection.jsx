import React from "react";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"
import { Link } from "react-router-dom";

function WebDevelopmentSection() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/media/WebDevSub.png "
                alt="Web development"
                className="w-full rounded-2xl"
              />
               {/* Web Developmen Drawer */}
                              <Drawer direction="right">
                                <DrawerTrigger asChild>
                                  <Button className="absolute top-[300%] left-[5%] sm:top-[57%] sm:left-[114%] shadow-none w-23 h-23 sm:w-30 sm:h-30 ">
                                  </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                  <div className="p-6">
                                    <DrawerHeader>
                                      <DrawerTitle>Web Developmen</DrawerTitle>
                                      <DrawerDescription>
                                        Optimize your website for search engines and improve visibility.
                                      </DrawerDescription>
                                    </DrawerHeader>
                                  </div>
                                </DrawerContent>
                              </Drawer>
              
                              {/* Appdev Drawer */}
                              <Drawer direction="right">
                                <DrawerTrigger asChild>
                                  <Button className="absolute top-[305%] left-[35%] sm:top-[61%] sm:left-[145%] shadow-none w-23 h-23 sm:w-30 sm:h-30 ">
                                    
                                  </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                  <div className="p-6">
                                    <DrawerHeader>
                                      <DrawerTitle>Application Development</DrawerTitle>
                                      <DrawerDescription>
                                        Grow your brand presence across social media platforms.
                                      </DrawerDescription>
                                    </DrawerHeader>
                                  </div>
                                </DrawerContent>
                              </Drawer>
              
                              {/* M&S Drawer */}
                              <Drawer direction="right">
                                <DrawerTrigger asChild>
                                  <Button className="absolute top-[305%] left-[65%] sm:top-[57%] sm:left-[177%] bg-transparent w-23 h-23 sm:w-30 sm:h-30 shadow-none ">
                                    
                                  </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                  <div className="p-6">
                                    <DrawerHeader>
                                      <DrawerTitle>Maintanance & Security</DrawerTitle>
                                      <DrawerDescription>
                                        Engage your audience with personalized email campaigns.
                                      </DrawerDescription>
                                    </DrawerHeader>
                                  </div>
                                </DrawerContent>
                              </Drawer>
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">
                Web Development
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                We help your brand cut through the noise with targeted,
                data-driven digital marketing strategies. From boosting your
                online presence to driving real conversions, our team crafts
                campaigns.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <img src="/media/services/subweb.png" alt="Digital Marketing Services" className="w-full h-full pr-4"/>
              </div>
              {/* <Link to="/web_development">
              <Button className="bg-teal-500 hover:bg-[#B2519A] text-white px-8 py-3" 
              onClick={(handleClick) => {
                window.scrollTo(0, 0);
                handleClick();
                }}  >
                More Details
              </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopmentSection;
