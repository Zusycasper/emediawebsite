"use client";
import { useGoToContact } from "@/hooks/useGoToContact";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import {
  X,
  Smartphone,
  ShoppingCart,
  Shield,
  Palette,
  Clock,
  Users,
  Zap,
  Target,
  Code,
  Monitor,
} from "lucide-react";

function WebDevelopmentSection() {
  const goToContactWithService = useGoToContact();
  const serviceValue = "Web & App Development (Future-Ready)";
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/media/WebDevSub.png "
                alt="Web Development"
                className="w-full rounded-2xl "
              />
              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button
                    className="absolute 
  top-[347%] left-[0%]   // default (mobile)
  sm:top-[170%] sm:left-[8%]   // small screens
  md:top-[173%] md:left-[8%]   // medium screens
  lg:top-[79%] lg:left-[113%]   // large screens
  shadow-none w-20 h-20 sm:w-24 sm:h-24 "
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
                          Web & Mobile App Development (iOS & Android)
                        </DrawerTitle>
                      </div>
                      <DrawerDescription className="text-white/90 text-lg">
                        Cross-platform solutions for web and mobile experiences
                      </DrawerDescription>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto rounded-br-2xl scrollbar-left">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Build powerful web applications and native mobile apps
                          for iOS and Android. Our development team creates
                          scalable, user-friendly solutions that work seamlessly
                          across all platforms.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Code className="h-4 w-4 text-[#009BB1]" />
                            <span>Custom Development</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Smartphone className="h-4 w-4 text-[#009BB1]" />
                            <span>Cross-Platform Apps</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Monitor className="h-4 w-4 text-[#009BB1]" />
                            <span>Responsive Design</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Zap className="h-4 w-4 text-[#009BB1]" />
                            <span>Performance Optimization</span>
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
                            "Next.js",
                            "React",
                            "Swift",
                            "Kotlin",
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
                          <span>8-16 weeks depending on complexity</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => goToContactWithService(serviceValue)}
                        className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#007A8C] hover:to-[#8E4178] text-white font-semibold py-3 rounded-lg transition-all duration-300"
                      >
                        Start Your App Project
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>

              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button
                    className="absolute 
  top-[350%] left-[23%]   // default (mobile)
  sm:top-[185%] sm:left-[28%]   // small screens
  md:top-[175%] md:left-[30%]   // medium screens
  lg:top-[79%] lg:left-[134%]   // large screens
  shadow-none w-20 h-20 sm:w-24 sm:h-24"
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
                        <ShoppingCart className="h-8 w-8" />
                        <DrawerTitle className="text-2xl font-bold text-white">
                          E-commerce Solutions
                        </DrawerTitle>
                      </div>
                      <DrawerDescription className="text-white/90 text-lg">
                        Complete online store development and optimization
                      </DrawerDescription>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto rounded-br-2xl">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Launch and scale your online business with our
                          comprehensive e-commerce solutions. From custom
                          storefronts to payment integration, we build
                          everything you need to sell online.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <ShoppingCart className="h-4 w-4 text-[#B2519A]" />
                            <span>Custom Storefronts</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Target className="h-4 w-4 text-[#B2519A]" />
                            <span>Payment Integration</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="h-4 w-4 text-[#B2519A]" />
                            <span>User Management</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Zap className="h-4 w-4 text-[#B2519A]" />
                            <span>Inventory Management</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Platforms
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Shopify",
                            "WooCommerce",
                            "Custom Solutions",
                            "Magento",
                            "BigCommerce",
                          ].map((platform) => (
                            <span
                              key={platform}
                              className="px-3 py-1 bg-gradient-to-r from-[#B2519A]/10 to-[#009BB1]/10 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {platform}
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
                          <span>6-12 weeks for full store setup</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => goToContactWithService(serviceValue)}
                        className="w-full bg-gradient-to-r from-[#B2519A] to-[#009BB1] hover:from-[#8E4178] hover:to-[#007A8C] text-white font-semibold py-3 rounded-lg transition-all duration-300"
                      >
                        Launch Your Store
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>

              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button
                    className="absolute 
  top-[360%] left-[46%]   // default (mobile)
  sm:top-[200%] sm:left-[48%]   // small screens
  md:top-[175%] md:left-[52%]   // medium screens
  lg:top-[85%] lg:left-[158%]   // large screens
  shadow-none w-20 h-20 sm:w-24 sm:h-24 "
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
                          AI-Powered Web & App Analytics, Testing & Security
                        </DrawerTitle>
                      </div>
                      <DrawerDescription className="text-white/90 text-lg">
                        Intelligent monitoring, testing, and security solutions
                      </DrawerDescription>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto rounded-br-2xl">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Ensure your applications perform optimally and stay
                          secure with our AI-powered analytics, automated
                          testing, and advanced security monitoring solutions.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Shield className="h-4 w-4 text-[#7A5FA0]" />
                            <span>Security Monitoring</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Target className="h-4 w-4 text-[#7A5FA0]" />
                            <span>Performance Analytics</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Zap className="h-4 w-4 text-[#7A5FA0]" />
                            <span>Automated Testing</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="h-4 w-4 text-[#7A5FA0]" />
                            <span>User Behavior Analysis</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Services
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Vulnerability Scanning",
                            "Load Testing",
                            "User Analytics",
                            "Performance Monitoring",
                            "Security Audits",
                          ].map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-gradient-to-r from-[#7A5FA0]/10 to-[#009BB1]/10 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Timeline
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4 text-[#7A5FA0]" />
                          <span>2-4 weeks setup, ongoing monitoring</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => goToContactWithService(serviceValue)}
                        className="w-full bg-gradient-to-r from-[#7A5FA0] to-[#B2519A] hover:from-[#5A4580] hover:to-[#8E4178] text-white font-semibold py-3 rounded-lg transition-all duration-300"
                      >
                        Secure Your Applications
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>

              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button
                    className="absolute 
  top-[350%] left-[70%]   // default (mobile)
  sm:top-[175%] sm:left-[68%]   // small screens
  md:top-[170%] md:left-[80%]   // medium screens
  lg:top-[87%] lg:left-[183%]   // large screens
  shadow-none w-20 h-20 sm:w-24 sm:h-24 "
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
                        <Palette className="h-8 w-8" />
                        <DrawerTitle className="text-2xl font-bold text-white">
                          UI/UX for Web & Mobile & Optimization
                        </DrawerTitle>
                      </div>
                      <DrawerDescription className="text-white/90 text-lg">
                        User-centered design and experience optimization
                      </DrawerDescription>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto rounded-br-2xl">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Create intuitive, engaging user experiences that
                          convert visitors into customers. Our design team
                          focuses on usability, accessibility, and conversion
                          optimization across all platforms.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Palette className="h-4 w-4 text-[#009BB1]" />
                            <span>User Interface Design</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="h-4 w-4 text-[#009BB1]" />
                            <span>User Experience Research</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Target className="h-4 w-4 text-[#009BB1]" />
                            <span>Conversion Optimization</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Zap className="h-4 w-4 text-[#009BB1]" />
                            <span>Accessibility Compliance</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Design Services
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Wireframing",
                            "Prototyping",
                            "Visual Design",
                            "Usability Testing",
                            "A/B Testing",
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
                          Timeline
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4 text-[#009BB1]" />
                          <span>4-8 weeks for complete design system</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => goToContactWithService(serviceValue)}
                        className="w-full bg-gradient-to-r from-[#009BB1] via-[#7A5FA0] to-[#B2519A] hover:from-[#007A8C] hover:via-[#5A4580] hover:to-[#8E4178] text-white font-semibold py-3 rounded-lg transition-all duration-300"
                      >
                        Design Better Experiences
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h1 className="text-5xl font-bold text-gray-900">
                Web Development Services
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700">
                (Modern & Scalable)
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                From responsive websites to mobile apps, we build digital
                solutions that drive your business forward with cutting-edge
                technology and user-centered design.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <img
                  src="/media/services/web.png"
                  alt="Web Development Services"
                  className="w-full h-full pr-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopmentSection;
