"use client";
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
  Calendar,
  TrendingUp,
  Target,
  BarChart3,
  MessageSquare,
  Zap,
  Brain,
  PenTool,
  Eye,
} from "lucide-react";

function SocialMediaSection() {
  return (
    <div className="relative SocialMediaSection">
      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">
                Social Media Management
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700">
                (AI-Powered)
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                AI helps us track trends, analyze engagement, and create
                strategies that keep your brand relevant across all social
                platforms.
              </p>

              <div className="flex flex-wrap gap-4 items-center relative">
                <img
                  src="/media/services/social.png"
                  alt="Social Media Management Services"
                  className="w-full h-full pr-6"
                />

                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[15%] left-[7%] shadow-none w-23 h-23 sm:w-30 sm:h-30 bg-amber-200"></Button>
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
                            <Target className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">
                              Social Media Strategy & Planning
                            </DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Comprehensive social media strategies tailored to
                              your brand goals
                            </DrawerDescription>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Overview */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Service Overview
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Our strategic approach to social media planning
                            ensures your brand message resonates with your
                            target audience across all platforms. We develop
                            comprehensive strategies that align with your
                            business objectives and drive meaningful engagement.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Key Features
                          </h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: Target,
                                text: "Audience Research & Targeting",
                              },
                              {
                                icon: Calendar,
                                text: "Content Calendar Development",
                              },
                              { icon: BarChart3, text: "Competitive Analysis" },
                              {
                                icon: TrendingUp,
                                text: "Growth Strategy Planning",
                              },
                            ].map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                              >
                                <feature.icon className="h-5 w-5 text-[#009BB1]" />
                                <span className="text-gray-700">
                                  {feature.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Tools & Platforms
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Hootsuite",
                              "Buffer",
                              "Sprout Social",
                              "Later",
                              "Facebook Business",
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
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Timeline
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>Strategy development within 1-2 weeks</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Start Strategy Planning
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>

                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[17%] left-[35%] shadow-none w-23 h-23 sm:w-30 sm:h-30 bg-teal-300 "></Button>
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
                            <PenTool className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">
                              Content Creation & Scheduling
                            </DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Engaging content creation and automated scheduling
                              across platforms
                            </DrawerDescription>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Overview */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Service Overview
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Our content creation and scheduling services ensure
                            your social media presence is consistent, engaging,
                            and optimized for each platform. We create
                            compelling visuals, copy, and videos while managing
                            your posting schedule for maximum impact.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Key Features
                          </h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: PenTool,
                                text: "Visual & Video Content Creation",
                              },
                              { icon: Calendar, text: "Automated Scheduling" },
                              {
                                icon: MessageSquare,
                                text: "Copywriting & Captions",
                              },
                              {
                                icon: Eye,
                                text: "Brand Consistency Management",
                              },
                            ].map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                              >
                                <feature.icon className="h-5 w-5 text-[#009BB1]" />
                                <span className="text-gray-700">
                                  {feature.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Creation Tools
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Canva",
                              "Adobe Creative Suite",
                              "Figma",
                              "Buffer",
                              "Later",
                              "Hootsuite",
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
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Timeline
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>
                              Content ready within 3-5 days, ongoing scheduling
                            </span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Start Content Creation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>

                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[20%] left-[67%] bg-amber-100 w-23 h-23 sm:w-30 sm:h-30 shadow-none "></Button>
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
                            <Brain className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">
                              Trend & Sentiment Analysis with AI
                            </DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              AI-powered insights to track trends and analyze
                              audience sentiment
                            </DrawerDescription>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Overview */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Service Overview
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Our AI-powered trend and sentiment analysis helps
                            you stay ahead of the curve by identifying emerging
                            trends, monitoring brand sentiment, and providing
                            actionable insights to optimize your social media
                            strategy in real-time.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Key Features
                          </h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: TrendingUp,
                                text: "Real-time Trend Detection",
                              },
                              { icon: Brain, text: "AI Sentiment Analysis" },
                              {
                                icon: BarChart3,
                                text: "Competitor Monitoring",
                              },
                              {
                                icon: Target,
                                text: "Audience Behavior Insights",
                              },
                            ].map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                              >
                                <feature.icon className="h-5 w-5 text-[#009BB1]" />
                                <span className="text-gray-700">
                                  {feature.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            AI Tools & Analytics
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Brandwatch",
                              "Mention",
                              "Sprout Social",
                              "Google Trends",
                              "Sentiment AI",
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
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Timeline
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>
                              Real-time monitoring with weekly insights reports
                            </span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Start AI Analysis
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>

                <Drawer direction="right">
                  <DrawerTrigger asChild>
                    <Button className="absolute top-[45%] left-[25%] bg-red-500 w-23 h-23 sm:w-30 sm:h-30 shadow-none "></Button>
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
                            <Target className="h-6 w-6" />
                          </div>
                          <div>
                            <DrawerTitle className="text-2xl font-bold text-white">
                              Social Ads Management
                            </DrawerTitle>
                            <DrawerDescription className="text-white/90 text-base">
                              Strategic paid social campaigns that drive
                              conversions and ROI
                            </DrawerDescription>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {/* Overview */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Service Overview
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Our social ads management service maximizes your
                            advertising ROI through strategic campaign planning,
                            precise targeting, creative optimization, and
                            continuous performance monitoring across all major
                            social platforms.
                          </p>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Key Features
                          </h3>
                          <div className="grid gap-3">
                            {[
                              {
                                icon: Target,
                                text: "Advanced Audience Targeting",
                              },
                              {
                                icon: PenTool,
                                text: "Ad Creative Development",
                              },
                              {
                                icon: BarChart3,
                                text: "Performance Optimization",
                              },
                              {
                                icon: TrendingUp,
                                text: "ROI Tracking & Reporting",
                              },
                            ].map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                              >
                                <feature.icon className="h-5 w-5 text-[#009BB1]" />
                                <span className="text-gray-700">
                                  {feature.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Ad Platforms
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Facebook Ads",
                              "Instagram Ads",
                              "LinkedIn Ads",
                              "Twitter Ads",
                              "TikTok Ads",
                              "Google Ads",
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
                          <h3 className="text-lg font-semibold mb-3 text-gray-900">
                            Timeline
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>
                              Campaign launch within 1 week, ongoing
                              optimization
                            </span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button className="w-full bg-gradient-to-r from-[#009BB1] to-[#B2519A] hover:from-[#008A9B] hover:to-[#A1478A] text-white font-semibold py-3 rounded-lg transition-all duration-300">
                            <Zap className="h-4 w-4 mr-2" />
                            Launch Ad Campaign
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
                src="/media/SocialMediaMarketingSub.png"
                alt="Social Media Management Service"
                className="rounded-2xl h-[396px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialMediaSection;
