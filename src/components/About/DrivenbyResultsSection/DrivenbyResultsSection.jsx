import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Users, Lightbulb, CheckCircle } from "lucide-react";

function DrivenbyResultsSection() {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left text section */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                The E-MediaBiz Way

              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe the best work happens when creativity meets precision and intelligence drives results. Here’s our approach:

              </p>
            </div>

            {/* Right cards section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="relative lg:top-[-20%] lg:left-[0%] p-6 border border-gray-400 rounded-xl w-full h-[250px]">
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-teal-100 rounded-lg">
                    {/* <Palette className="w-4 h-4 text-teal-600" /> */}
                    <h3>1</h3>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Design That Means Business

                  </h3>
                  <p className="text-sm text-gray-600">
                    We don’t just decorate; we craft meaning and impact, using design and AI-driven insights to guide every decision.

                  </p>
                </CardContent>
              </Card>

              <Card className="relative lg:top-[0%] lg:left-[10%] p-6 border border-gray-400 rounded-xl w-full h-[250px]">
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-[#B2519A20] rounded-lg">
                    {/* <Users className="w-4 h-4 text-[#B2519A]" /> */}
                    <h3>2</h3>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Better Together
                  </h3>
                  <p className="text-sm text-gray-600">
                    Our team of passionate designers, developers, and
                    strategists challenge, refine, and innovate together because
                    great work is never solo.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative lg:top-[0%] lg:left-[0%] p-6 border border-gray-400 rounded-xl w-full h-[250px]">
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-teal-100 rounded-lg">
                    {/* <Lightbulb className="w-4 h-4 text-teal-600" /> */}
                    <h3>3</h3>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Test. Learn. Repeat.
                  </h3>
                  <p className="text-sm text-gray-600">
                    We explore, test, and push boundaries. AI tools, automation,
                    and creative experimentation keep our solutions fresh and
                    future ready.
                  </p>
                </CardContent>
              </Card>

              <Card className="relative lg:top-[20%] lg:left-[10%] p-6 border border-gray-400 rounded-xl w-full h-[250px]">
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-[#B2519A20] rounded-lg">
                     <h3>4</h3>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    From Concept to Completion
                  </h3>
                  <p className="text-sm text-gray-600">
                    From the first sketch to the final pixel, every step is
                    deliberate. Strategy, design, and technology work
                    hand-in-hand to deliver results that matter.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DrivenbyResultsSection;
