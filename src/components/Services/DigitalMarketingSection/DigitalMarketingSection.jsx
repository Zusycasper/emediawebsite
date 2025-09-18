"use client"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"
import { X, Search, Users, Mail, TrendingUp, Target, BarChart3, MessageSquare, Calendar, Zap } from "lucide-react"

function DigitalMarketingSection() {
  return (
    <div className="relative DigitalMerketingSection">
      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">Digital Marketing</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                We build websites that not only look stunning but also perform flawlessly. Whether you need a sleek
                portfolio, a dynamic e-commerce store, or a robust web application, our team crafts solutions tailored
                to your goals.
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
                    <Button className="absolute top-[15%] left-[7%] shadow-none w-23 h-23 sm:w-30 sm:h-30 "></Button>
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
                            <Search className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">SEO Optimization</DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Boost your search engine rankings and drive organic traffic
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
                            Our comprehensive SEO services help your website rank higher in search results, driving more
                            qualified traffic and increasing your online visibility. We use proven strategies and the
                            latest SEO techniques to deliver measurable results.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                          <div className="grid gap-3">
                            {[
                              { icon: Target, text: "Keyword Research & Strategy" },
                              { icon: BarChart3, text: "Technical SEO Audit" },
                              { icon: TrendingUp, text: "On-Page Optimization" },
                              { icon: MessageSquare, text: "Content Strategy" },
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
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Tools & Platforms</h3>
                          <div className="flex flex-wrap gap-2">
                            {["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "Screaming Frog"].map(
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
                            <span>Results typically visible within 3-6 months</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Start SEO Campaign
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>

                {/* SM Drawer */}
                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[17%] left-[35%] shadow-none w-23 h-23 sm:w-30 sm:h-30 "></Button>
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
                            <Users className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">Social Media Marketing</DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Build your brand presence and engage with your audience
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
                            Our social media marketing services help you build a strong online presence, engage with
                            your target audience, and drive meaningful interactions that convert followers into
                            customers across all major social platforms.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                          <div className="grid gap-3">
                            {[
                              { icon: MessageSquare, text: "Content Creation & Curation" },
                              { icon: Calendar, text: "Social Media Strategy" },
                              { icon: Users, text: "Community Management" },
                              { icon: BarChart3, text: "Performance Analytics" },
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
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Platforms & Tools</h3>
                          <div className="flex flex-wrap gap-2">
                            {["Facebook", "Instagram", "LinkedIn", "Twitter", "TikTok", "Hootsuite"].map((tech) => (
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
                            <span>Campaign setup within 1-2 weeks, ongoing management</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Launch Social Campaign
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>

                {/* Email Drawer */}
                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[20%] left-[67%] bg-transparent w-23 h-23 sm:w-30 sm:h-30 shadow-none "></Button>
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
                            <Mail className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">Email Marketing</DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Nurture leads and drive conversions with targeted email campaigns
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
                            Our email marketing services help you build lasting relationships with your audience through
                            personalized, targeted campaigns that drive engagement, nurture leads, and boost conversions
                            with measurable ROI.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                          <div className="grid gap-3">
                            {[
                              { icon: Mail, text: "Campaign Design & Development" },
                              { icon: Target, text: "Audience Segmentation" },
                              { icon: TrendingUp, text: "A/B Testing & Optimization" },
                              { icon: BarChart3, text: "Performance Tracking" },
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
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Platforms & Tools</h3>
                          <div className="flex flex-wrap gap-2">
                            {["Mailchimp", "Klaviyo", "ConvertKit", "Constant Contact", "Campaign Monitor"].map(
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
                            <span>First campaign ready within 1 week, ongoing optimization</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Start Email Campaign
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>

            <div className="relative">
              <img src="/media/DigiMarkSub.png" alt="Digital Marketing Service" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DigitalMarketingSection
