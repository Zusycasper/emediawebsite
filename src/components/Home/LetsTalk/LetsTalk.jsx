import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function LetsTalk() {
  return (
    <section
      className="relative h-[318px]"
      style={{
        backgroundImage: `url(/media/cardBackground.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Let's Talk</h2>
            <Link to="/contact">
              <Button className="bg-teal-500 hover:bg-[#B2519A] text-white w-[120px] px-8 py-3 flex items-center gap-2">
                <ChevronRight className="w-[120px]" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <img
              src="/media/letsTalk.png"
              alt="Team photo of Emediabiz"
              className="w-full h-[320px] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;
