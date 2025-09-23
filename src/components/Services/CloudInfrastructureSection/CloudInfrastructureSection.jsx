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
import {
  X,
  Cloud,
  Server,
  Shield,
  Clock,
  Users,
  Zap,
  Database,
  Monitor,
} from "lucide-react";

function CloudInfrastructureSection() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/media/CloudInfrastructureSub.png"
                alt="Cloud Infrastructure"
                className="rounded-2xl h-[396px] w-full object-cover"
              />
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
                        <Cloud className="h-8 w-8" />
                        <DrawerTitle className="text-2xl font-bold text-white">
                          Cloud Migration & Management
                        </DrawerTitle>
                      </div>
                      <DrawerDescription className="text-white/90 text-lg">
                        Seamless cloud migration and management across AWS,
                        Azure, and GCP
                      </DrawerDescription>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto rounded-br-2xl scrollbar-left">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Transform your business with expert cloud migration
                          and management services. We help you leverage the
                          power of AWS, Azure, and Google Cloud Platform to
                          achieve scalability, cost-efficiency, and enhanced
                          performance.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Zap className="h-4 w-4 text-[#009BB1]" />
                            <span>Zero-Downtime Migration</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Shield className="h-4 w-4 text-[#009BB1]" />
                            <span>Enterprise Security</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Monitor className="h-4 w-4 text-[#009BB1]" />
                            <span>24/7 Monitoring</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="h-4 w-4 text-[#009BB1]" />
                            <span>Expert Support Team</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Cloud Platforms
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "AWS",
                            "Microsoft Azure",
                            "Google Cloud",
                            "Multi-Cloud",
                            "Hybrid Cloud",
                          ].map((platform) => (
                            <span
                              key={platform}
                              className="px-3 py-1 bg-gradient-to-r from-[#009BB1]/10 to-[#B2519A]/10 text-gray-700 rounded-full text-sm font-medium"
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
                          <Clock className="h-4 w-4 text-[#009BB1]" />
                          <span>2-6 weeks migration</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#007A8C] hover:to-[#8E4178] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                        Start Cloud Migration
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>

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
                        <Server className="h-8 w-8" />
                        <DrawerTitle className="text-2xl font-bold text-white">
                          IT Infrastructure Setup & Optimization
                        </DrawerTitle>
                      </div>
                      <DrawerDescription className="text-white/90 text-lg">
                        Robust IT infrastructure designed for performance and
                        scalability
                      </DrawerDescription>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto rounded-br-2xl">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Build a solid foundation for your business with
                          optimized IT infrastructure. From server setup to
                          network configuration, we ensure your systems are
                          reliable, secure, and ready to scale with your
                          business needs.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Server className="h-4 w-4 text-[#B2519A]" />
                            <span>High-Performance Servers</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Zap className="h-4 w-4 text-[#B2519A]" />
                            <span>Optimized Performance</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Database className="h-4 w-4 text-[#B2519A]" />
                            <span>Scalable Architecture</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Shield className="h-4 w-4 text-[#B2519A]" />
                            <span>Enterprise Security</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Services
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Server Setup",
                            "Network Config",
                            "Load Balancing",
                            "Database Optimization",
                            "Performance Tuning",
                          ].map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-gradient-to-r from-[#B2519A]/10 to-[#009BB1]/10 text-gray-700 rounded-full text-sm font-medium"
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
                          <Clock className="h-4 w-4 text-[#B2519A]" />
                          <span>1-3 weeks setup</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-[#B2519A] to-[#009BB1] hover:from-[#8E4178] hover:to-[#007A8C] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                        Optimize Infrastructure
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>

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
                          AI-powered Network Security & Monitoring
                        </DrawerTitle>
                      </div>
                      <DrawerDescription className="text-white/90 text-lg">
                        Advanced AI-driven security solutions that protect and
                        monitor your network
                      </DrawerDescription>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 space-y-6 overflow-y-auto rounded-br-2xl">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Protect your digital assets with cutting-edge
                          AI-powered security solutions. Our intelligent
                          monitoring systems detect threats in real-time and
                          provide proactive protection against cyber attacks and
                          security breaches.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Shield className="h-4 w-4 text-[#009BB1]" />
                            <span>AI Threat Detection</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Monitor className="h-4 w-4 text-[#009BB1]" />
                            <span>Real-time Monitoring</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Zap className="h-4 w-4 text-[#009BB1]" />
                            <span>Automated Response</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="h-4 w-4 text-[#009BB1]" />
                            <span>Expert Security Team</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-900">
                          Security Solutions
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Firewall Management",
                            "Intrusion Detection",
                            "Vulnerability Scanning",
                            "Threat Intelligence",
                            "Incident Response",
                          ].map((solution) => (
                            <span
                              key={solution}
                              className="px-3 py-1 bg-gradient-to-r from-[#009BB1]/10 via-[#7A5FA0]/10 to-[#B2519A]/10 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {solution}
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
                          <span>Instant threat response</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-[#009BB1] via-[#7A5FA0] to-[#B2519A] hover:from-[#007A8C] hover:via-[#5A4580] hover:to-[#8E4178] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                        Secure Your Network
                      </Button>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">
                Cloud & IT Infrastructure Support
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700">
                (Intelligent & Secure)
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Reliable cloud solutions, IT infrastructure, and AI-powered
                monitoring that ensure performance, security, and scalability.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <img
                  src="/media/services/cloud-infrastructure.png"
                  alt="Cloud Infrastructure Services"
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

export default CloudInfrastructureSection;
