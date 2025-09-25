"use client"
import { useGoToContact } from "@/hooks/useGoToContact";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"
import {
  X,
  Calendar,
  TrendingUp,
  Target,
  BarChart3,
  MessageSquare,
  Zap,
  Brain,
  PenTool,
  Eye,
  Palette,
  Layers,
  Play,
  Sparkles,
} from "lucide-react"

function CreativeDesign() {
  const goToContactWithService = useGoToContact();
  const serviceValue = "Creative Design (Human + AI)";
  return (
    <div className="relative SocialMediaSection">
      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">Creative Design</h1>
              <h2 className="text-2xl font-semibold text-gray-700">(Human + AI)</h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Branding, UI/UX, and visuals crafted with human creativity and AI-assisted tools for impact and
                efficiency.
              </p>

              <div className="flex flex-wrap gap-4 items-center relative">
                <img src="/media/services/creative.png" alt="Creative Design Services" className="w-full h-full pr-6" />

                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[15%] left-[3%] shadow-none w-20 h-20 sm:w-30 sm:h-30 "></Button>
                  </DrawerTrigger>
                  <DrawerContent className="h-full w-full sm:w-[540px]">
                    <div className="h-full flex flex-col">
                      {/* Gradient Header */}
                      <div className="bg-gradient-to-r from-[#009BB1] to-[#B2519A] p-6 text-white rounded-tl-2xl">
                        <DrawerClose asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 h-8 w-8 rounded-full hover:bg-white/20 text-white "
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                          </Button>
                        </DrawerClose>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <Palette className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">
                              Brand Identity & Logo Design
                            </DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Comprehensive brand identity systems and memorable logo designs
                            </DrawerDescription>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Overview */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Service Overview</h3>
                          <p className="text-gray-600 leading-relaxed">
                            We create distinctive brand identities that capture your company's essence and resonate with
                            your target audience. From logo design to complete brand guidelines, we ensure consistency
                            across all touchpoints while leveraging AI tools for rapid iteration and refinement.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: Palette,
                                text: "Logo Design & Variations",
                              },
                              {
                                icon: Eye,
                                text: "Brand Guidelines & Style Guide",
                              },
                              { icon: Layers, text: "Color Palette & Typography" },
                              {
                                icon: Target,
                                text: "Brand Positioning Strategy",
                              },
                            ].map((feature, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <feature.icon className="h-5 w-5 text-[#009BB1]" />
                                <span className="text-gray-700">{feature.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Design Tools</h3>
                          <div className="flex flex-wrap gap-2">
                            {["Adobe Illustrator", "Figma", "Sketch", "Canva", "Midjourney"].map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-[#009BB1]/10 to-[#B2519A]/10 text-gray-700 rounded-full text-sm border border-gray-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Timeline */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Timeline</h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>Brand identity delivered within 2-3 weeks</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button
                          onClick={() => goToContactWithService(serviceValue)}
                           className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Start Brand Design
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>

                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[13%] left-[25%] shadow-none w-20 h-20 sm:w-30 sm:h-30  "></Button>
                  </DrawerTrigger>
                  <DrawerContent className="h-full w-full sm:w-[540px]">
                    <div className="h-full flex flex-col">
                      {/* Gradient Header */}
                      <div className="bg-gradient-to-r from-[#009BB1] to-[#B2519A] p-6 text-white rounded-tl-2xl">
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
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <MessageSquare className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">
                              Marketing & Social Media Graphics
                            </DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Eye-catching graphics and visuals for all marketing channels
                            </DrawerDescription>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Overview */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Service Overview</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Our marketing graphics service creates compelling visual content that drives engagement
                            across all digital platforms. From social media posts to email headers and web banners, we
                            combine creative design with AI-powered optimization to maximize visual impact.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: MessageSquare,
                                text: "Social Media Post Graphics",
                              },
                              { icon: PenTool, text: "Email & Newsletter Design" },
                              {
                                icon: BarChart3,
                                text: "Infographics & Data Visualization",
                              },
                              {
                                icon: Eye,
                                text: "Web Banners & Ad Creatives",
                              },
                            ].map((feature, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <feature.icon className="h-5 w-5 text-[#009BB1]" />
                                <span className="text-gray-700">{feature.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Design Tools</h3>
                          <div className="flex flex-wrap gap-2">
                            {["Adobe Photoshop", "Canva Pro", "Figma", "Adobe InDesign", "DALL-E", "Midjourney"].map(
                              (tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-gradient-to-r from-[#009BB1]/10 to-[#B2519A]/10 text-gray-700 rounded-full text-sm border border-gray-200"
                                >
                                  {tech}
                                </span>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Timeline */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Timeline</h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>Graphics delivered within 2-4 days, ongoing support</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          
                          <Button onClick={() => goToContactWithService(serviceValue)}
  className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Start Graphics Design
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>

                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[16%] left-[47%]  w-20 h-20 sm:w-30 sm:h-30 shadow-none "></Button>
                  </DrawerTrigger>
                  <DrawerContent className="h-full w-full sm:w-[540px]">
                    <div className="h-full flex flex-col">
                      {/* Gradient Header */}
                      <div className="bg-gradient-to-r from-[#009BB1] to-[#B2519A] p-6 text-white rounded-tl-2xl">
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
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <Play className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">
                              Motion Graphics & Animation
                            </DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Dynamic animations and motion graphics that bring your brand to life
                            </DrawerDescription>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Overview */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Service Overview</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Our motion graphics and animation services create engaging visual stories that capture
                            attention and communicate complex ideas effectively. From explainer videos to social media
                            animations, we blend traditional animation techniques with AI-powered tools for efficient
                            production.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: Play,
                                text: "Explainer Video Animation",
                              },
                              { icon: Layers, text: "Logo Animation & Branding" },
                              {
                                icon: MessageSquare,
                                text: "Social Media Animations",
                              },
                              {
                                icon: TrendingUp,
                                text: "Interactive UI Animations",
                              },
                            ].map((feature, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <feature.icon className="h-5 w-5 text-[#009BB1]" />
                                <span className="text-gray-700">{feature.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Animation Tools</h3>
                          <div className="flex flex-wrap gap-2">
                            {["After Effects", "Lottie", "Figma", "Blender", "Runway ML"].map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-[#009BB1]/10 to-[#B2519A]/10 text-gray-700 rounded-full text-sm border border-gray-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Timeline */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Timeline</h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>Animations delivered within 1-2 weeks</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          
                          <Button onClick={() => goToContactWithService(serviceValue)}
   className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Start Animation Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>

                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[15%] left-[73%]  w-23 h-23 sm:w-30 sm:h-30 shadow-none "></Button>
                  </DrawerTrigger>
                  <DrawerContent className="h-full w-full sm:w-[540px]">
                    <div className="h-full flex flex-col">
                      {/* Gradient Header */}
                      <div className="bg-gradient-to-r from-[#009BB1] to-[#B2519A] p-6 text-white rounded-tl-2xl">
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
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <Sparkles className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">
                              AI-Assisted Design & Prototyping
                            </DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Cutting-edge AI tools for rapid design iteration and prototyping
                            </DrawerDescription>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Overview */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Service Overview</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Our AI-assisted design and prototyping service leverages the latest artificial intelligence
                            tools to accelerate the design process while maintaining high quality. From concept
                            generation to interactive prototypes, we combine human creativity with AI efficiency.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: Sparkles,
                                text: "AI-Generated Design Concepts",
                              },
                              {
                                icon: Layers,
                                text: "Rapid Prototype Development",
                              },
                              {
                                icon: Brain,
                                text: "Smart Design Optimization",
                              },
                              {
                                icon: Target,
                                text: "User Experience Testing",
                              },
                            ].map((feature, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <feature.icon className="h-5 w-5 text-[#009BB1]" />
                                <span className="text-gray-700">{feature.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">AI Design Tools</h3>
                          <div className="flex flex-wrap gap-2">
                            {["Figma AI", "Midjourney", "DALL-E 3", "Framer", "v0.dev", "Adobe Firefly"].map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-[#009BB1]/10 to-[#B2519A]/10 text-gray-700 rounded-full text-sm border border-gray-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Timeline */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Timeline</h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>Prototypes ready within 3-5 days</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          
                          <Button onClick={() => goToContactWithService(serviceValue)}
                          className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Start AI Design Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>

            <div className="relative">
              <img
                src="/media/creativeDesignSub.png"
                alt="Creative Design Service"
                className="rounded-2xl h-[396px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CreativeDesign
