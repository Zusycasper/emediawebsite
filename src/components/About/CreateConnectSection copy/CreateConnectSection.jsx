import React from "react";
import {
  X,
  Search,
  Users,
  Mail,
  MessageSquareReply,
  ImagePlus,
  HeartHandshake,
  Expand,
  Blocks,
  Zap,
} from "lucide-react";

function CreateConnectSection() {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Create. Connect. Convert
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                <b>
                  At e-MediaBiz, our mission is simple: help brands thrive
                  online and deliver real, measurable results. Not just vanity
                  numbers, we mean growth that matters.
                </b>
                <br /><br />
                For over 14 years, we’ve been helping small businesses across
                the <b>UK</b> and
                <b> Sri Lanka</b> with their IT needs providing smart,
                reliable, and scalable tech support that fuels growth. But we’re
                more than that. We’re a global collective of designers,
                developers, strategists, and tech innovators based in the <b>UK</b> and
                <b> Sri Lanka</b>. 
                <br/> <br/> We live and breathe digital crafting bold ideas,
                striking visuals, and intelligent, seamless solutions that bring
                brands to life. We push boundaries, fight for great concepts,
                and deliver work that not only looks amazing but performs
                flawlessly and drives real results.
                <div className="grid gap-2 pt-2">
                  {[
                    {
                      icon: ImagePlus,
                      text: "Create engaging content and campaigns",
                    },
                    {
                      icon: HeartHandshake,
                      text: "Connect with the right audience across platforms",
                    },
                    {
                      icon: MessageSquareReply,
                      text: "Convert them into loyal customers",
                    },
                    {
                      icon: Expand,
                      text: "Scale with reliable cloud solutions and IT infrastructure support",
                    },
                    {
                      icon: Blocks,
                      text: "With us, your digital presence isn't just visible it's strategic, intelligent, and built to perform.",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <feature.icon className="h-5 w-5 text-[#009BB1]" />
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </p>
            </div>

            <div className="relative">
              <img
                src="/media/about/connect.png"
                alt="Create Connect Convert"
                loading="lazy"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateConnectSection;
