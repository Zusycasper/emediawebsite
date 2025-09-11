import React from "react";
import { Button } from "@/components/ui/button";
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
              <Link to="/web_development">
              <Button className="bg-teal-500 hover:bg-[#B2519A] text-white px-8 py-3" 
              onClick={(handleClick) => {
                window.scrollTo(0, 0);
                handleClick();
                }}  >
                More Details
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopmentSection;
