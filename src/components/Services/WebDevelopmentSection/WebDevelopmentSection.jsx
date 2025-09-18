"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawerWeb";
import { X, Code, Smartphone, Shield, Clock, Users, Zap } from "lucide-react";

function WebDevelopmentSection() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/media/WebDevSub.png "
                alt="Web Development"
                className="w-full rounded-2xl"
              />
              {/* Web Development Drawer */}
              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button
                    className="absolute 
  top-[300%] left-[5%]   // default (mobile)
  sm:top-[187%] sm:left-[10%]   // small screens
  md:top-[163%] md:left-[10%]   // medium screens (new)
  lg:top-[55%] lg:left-[115%]   // large screens
  shadow-none w-23 h-23 sm:w-30 sm:h-30  "
                  ></Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="h-full flex flex-col rounded-br-2xl">
                    {/* Gradient Header */}
                    <div className="bg-gradient-to-r from-[#009BB1] via-[#7A5FA0] to-[#B2519A] p-6 text-white relative rounded-tr-2xl">
                      <DrawerClose asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-white/20 text-white"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </Button>
                      </DrawerClose>
                      <div className="flex items-center gap-3 mb-2">
                        <Code className="h-8 w-8" />
                        <DrawerTitle className="text-2xl font-bold text-white">
                          Web Development
                        </DrawerTitle>
                      </div>
                      <DrawerDescription className="text-white/90 text-lg">
                        Custom websites that drive results and engage your
                        audience
                      </DrawerDescription>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto rounded-br-2xl scrollbar-left">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          We create modern, responsive websites that not only
                          look stunning but also perform exceptionally. Our
                          development approach focuses on user experience,
                          performance optimization, and scalable architecture.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Zap className="h-4 w-4 text-[#009BB1]" />
                            <span>Lightning Fast Performance</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Smartphone className="h-4 w-4 text-[#009BB1]" />
                            <span>Mobile Responsive Design</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Shield className="h-4 w-4 text-[#009BB1]" />
                            <span>Security Optimized</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="h-4 w-4 text-[#009BB1]" />
                            <span>User-Centric Design</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "React",
                            "Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "Node.js",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-[#009BB1]/10 to-[#B2519A]/10 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Timeline
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4 text-[#009BB1]" />
                          <span>2-4 weeks delivery</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#007A8C] hover:to-[#8E4178] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                        Get Started Today
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>

              {/* Application Development Drawer */}
              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button
                    className="absolute 
  top-[300%] left-[35%]   // default (mobile)
  sm:top-[193%] sm:left-[36%]   // small screens
  md:top-[173%] md:left-[40%]   // medium screens (new)
  lg:top-[55%] lg:left-[145%]   // large screens
  shadow-none w-23 h-23 sm:w-30 sm:h-30  "
                  ></Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="h-full flex flex-col rounded-br-2xl">
                    {/* Gradient Header */}
                    <div className="bg-gradient-to-r from-[#009BB1] via-[#7A5FA0] to-[#B2519A] p-6 text-white relative rounded-tr-2xl">
                      <DrawerClose asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-white/20 text-white"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </Button>
                      </DrawerClose>
                      <div className="flex items-center gap-3 mb-2">
                        <Smartphone className="h-8 w-8" />
                        <DrawerTitle className="text-2xl font-bold text-white">
                          Application Development
                        </DrawerTitle>
                      </div>
                      <DrawerDescription className="text-white/90 text-lg">
                        Native and cross-platform apps that deliver exceptional
                        user experiences
                      </DrawerDescription>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto rounded-br-2xl">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Transform your ideas into powerful mobile and desktop
                          applications. We specialize in creating intuitive,
                          feature-rich apps that engage users and drive business
                          growth across all platforms.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Smartphone className="h-4 w-4 text-[#B2519A]" />
                            <span>Cross-Platform Compatible</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Zap className="h-4 w-4 text-[#B2519A]" />
                            <span>High Performance</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="h-4 w-4 text-[#B2519A]" />
                            <span>Intuitive User Interface</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Shield className="h-4 w-4 text-[#B2519A]" />
                            <span>Secure & Reliable</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "React Native",
                            "Flutter",
                            "Swift",
                            "Kotlin",
                            "Firebase",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-[#B2519A]/10 to-[#009BB1]/10 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Timeline
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4 text-[#B2519A]" />
                          <span>4-8 weeks delivery</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-[#B2519A] to-[#009BB1] hover:from-[#8E4178] hover:to-[#007A8C] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                        Start Your App Project
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>

              {/* Maintenance & Security Drawer */}
              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button
                    className="absolute 
  top-[300%] left-[65%]   // default (mobile)
  sm:top-[197%] sm:left-[68%]   // small screens
  md:top-[169%] md:left-[70%]   // medium screens (new)
  lg:top-[55%] lg:left-[175%]   // large screens
  shadow-none w-23 h-23 sm:w-30 sm:h-30  "
                  ></Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="h-full flex flex-col rounded-br-2xl">
                    {/* Gradient Header */}
                    <div className="bg-gradient-to-r from-[#009BB1] via-[#7A5FA0] to-[#B2519A] p-6 text-white relative rounded-tr-2xl">
                      <DrawerClose asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-white/20 text-white"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </Button>
                      </DrawerClose>
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="h-8 w-8" />
                        <DrawerTitle className="text-2xl font-bold text-white">
                          Maintenance & Security
                        </DrawerTitle>
                      </div>
                      <DrawerDescription className="text-white/90 text-lg">
                        Keep your digital assets secure, updated, and performing
                        at their best
                      </DrawerDescription>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto rounded-br-2xl">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Protect your investment with comprehensive maintenance
                          and security services. We ensure your websites and
                          applications remain secure, up-to-date, and performing
                          optimally around the clock.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Shield className="h-4 w-4 text-[#009BB1]" />
                            <span>24/7 Security Monitoring</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Zap className="h-4 w-4 text-[#009BB1]" />
                            <span>Performance Optimization</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Code className="h-4 w-4 text-[#009BB1]" />
                            <span>Regular Updates</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="h-4 w-4 text-[#009BB1]" />
                            <span>Expert Support Team</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Services Included
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Security Audits",
                            "Backup Management",
                            "Performance Monitoring",
                            "Bug Fixes",
                            "Updates",
                          ].map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-gradient-to-r from-[#009BB1]/10 via-[#7A5FA0]/10 to-[#B2519A]/10 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Response Time
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4 text-[#009BB1]" />
                          <span>24-hour response guarantee</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-[#009BB1] via-[#7A5FA0] to-[#B2519A] hover:from-[#007A8C] hover:via-[#5A4580] hover:to-[#8E4178] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                        Secure Your Assets
                      </Button>
                    </div>
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
                <img
                  src="/media/services/subweb.png"
                  alt="Digital Marketing Services"
                  className="w-full h-full pr-4"
                />
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
