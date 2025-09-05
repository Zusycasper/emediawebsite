import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function DigitalMarketingHero() {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900">
                Digital Marketing
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                EMediaBiz is your partner in driving online growth. From SEO and
                content creation to targeted PPC campaigns, social media
                strategies, and beyond, we craft marketing solutions designed
                around your business goals. Let us find the right mix to get you
                noticed and keep you ahead.
              </p>
              <Link to="/contact">
                <Button
                  className="bg-teal-500 hover:bg-[#B2519A] text-white px-8 py-3"
                  onClick={(handleClick) => {
                    window.scrollTo(0, 0);
                    handleClick();
                  }}
                >
                  Get in touch
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="/media/digiMarketing.png"
                alt="Digital Mrketing Service"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalMarketingHero;
