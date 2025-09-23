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
import { X, Mail, TrendingUp, Target, BarChart3, Calendar, Zap, Bot, Activity, Settings, PieChart } from "lucide-react"

function DigitalMarketingSection() {
  return (
    <div className="relative DigitalMerketingSection">
      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">Digital Marketing </h1>
              <h2 className="text-2xl font-semibold text-gray-700">(AI-Enhanced)</h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                We use AI-powered insights to optimize campaigns, target the right audience, and deliver measurable
                growth.{" "}
              </p>

              <div className="flex flex-wrap gap-4 items-center relative">
                <img
                  src="/media/services/digital.png"
                  alt="Digital Marketing Services"
                  className="w-full h-full pr-6"
                />

                {/* SEO Drawer */}
                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[12%] left-[7%] shadow-none w-23 h-23 sm:w-30 sm:h-30 bg-[#009BB1]"></Button>
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
                            <TrendingUp className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">
                              Search Engine Optimization (SEO)
                            </DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Boost your visibility and rank higher on search engines
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
                            Our comprehensive SEO services help your website rank higher in search results, drive
                            organic traffic, and increase visibility. We use proven strategies and AI-powered tools to
                            optimize your content and technical performance.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: TrendingUp,
                                text: "Keyword Research & Strategy",
                              },
                              { icon: Target, text: "On-Page Optimization" },
                              {
                                icon: BarChart3,
                                text: "Technical SEO Audits",
                              },
                              { icon: Activity, text: "Link Building & Authority" },
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
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">SEO Tools & Platforms</h3>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Google Analytics",
                              "SEMrush",
                              "Ahrefs",
                              "Screaming Frog",
                              "Google Search Console",
                              "Moz",
                            ].map((tech) => (
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
                            <span>Initial optimization within 2 weeks, results in 3-6 months</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Start SEO Optimization
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>

                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[15%] left-[35%] shadow-none w-23 h-23 sm:w-30 sm:h-30 bg-orange-500"></Button>
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
                            <DrawerTitle className="text-2xl font-bold text-white">
                              Email Marketing Campaigns
                            </DrawerTitle>
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
                            Our email marketing campaigns help you build lasting relationships with your audience
                            through personalized, targeted messages that drive engagement, nurture leads, and boost
                            conversions with measurable ROI.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: Mail,
                                text: "Campaign Design & Development",
                              },
                              { icon: Target, text: "Audience Segmentation" },
                              {
                                icon: TrendingUp,
                                text: "A/B Testing & Optimization",
                              },
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

                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[18%] left-[63%] shadow-none w-23 h-23 sm:w-30 sm:h-30 bg-purple-500"></Button>
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
                            <Bot className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">
                              AI-driven Marketing Automation
                            </DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Automate your marketing workflows with intelligent AI systems
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
                            Our AI-driven marketing automation streamlines your marketing processes, personalizes
                            customer journeys, and optimizes campaigns in real-time. Let artificial intelligence handle
                            repetitive tasks while you focus on strategy.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: Bot,
                                text: "Intelligent Lead Scoring",
                              },
                              { icon: Settings, text: "Automated Workflows" },
                              {
                                icon: Target,
                                text: "Personalized Customer Journeys",
                              },
                              { icon: TrendingUp, text: "Predictive Analytics" },
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
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">AI Tools & Platforms</h3>
                          <div className="flex flex-wrap gap-2">
                            {["HubSpot", "Marketo", "Pardot", "ActiveCampaign", "Zapier", "ChatGPT API"].map((tech) => (
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
                            <span>Setup within 2-3 weeks, continuous optimization</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Automate Marketing
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>

                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[21%] left-[85%] shadow-none w-23 h-23 sm:w-30 sm:h-30 bg-green-500"></Button>
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
                            <BarChart3 className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">
                              Performance Analytics & Reporting
                            </DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Track, measure, and optimize your marketing performance
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
                            Our comprehensive analytics and reporting services provide deep insights into your marketing
                            performance, helping you make data-driven decisions and maximize ROI across all channels and
                            campaigns.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Key Features</h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: BarChart3,
                                text: "Custom Dashboard Creation",
                              },
                              { icon: PieChart, text: "Multi-Channel Attribution" },
                              {
                                icon: Activity,
                                text: "Real-time Performance Monitoring",
                              },
                              { icon: TrendingUp, text: "ROI & Conversion Tracking" },
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
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">Analytics Tools</h3>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Google Analytics",
                              "Google Data Studio",
                              "Tableau",
                              "Power BI",
                              "Mixpanel",
                              "Hotjar",
                            ].map((tech) => (
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
                            <span>Dashboard setup within 1 week, monthly reports</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Get Analytics Setup
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
