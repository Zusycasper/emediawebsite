import React from "react";
import { Button } from "@/components/ui/button"
import { Search, Users, Mail,} from "lucide-react"
import { Link } from "react-router-dom";
function DigitalMarketingSection() {
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
                We build websites that not only look stunning but also perform
                flawlessly. Whether you need a sleek portfolio, a dynamic
                e-commerce store, or a robust web application, our team crafts
                solutions tailored to your goals
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <img src="/media/services/subdigi.png" alt="Digital Marketing Services" className="w-full h-full pr-6"/>
              </div> 
              <Link to="/digital_marketing">
              <Button className="bg-teal-500 hover:bg-[#B2519A] text-white px-8 py-3"
              onClick={(handleClick) => {
                window.scrollTo(0, 0);
                handleClick();
                }}  >
                More Details
              </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="/media/DigiMarkSub.png "
                alt="Digital marketing service"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalMarketingSection;
