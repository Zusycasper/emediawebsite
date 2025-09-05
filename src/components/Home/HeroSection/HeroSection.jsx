import React from "react";
import { Link } from "react-router-dom";


function HeroSection() {
  return (
    <>
      <section className="relative w-full min-h-[680px] md:min-h-screen overflow-hidden">
        <img
          src="/media/hero_bg_gif.gif"
          alt="Hero Background"
          aria-hidden="true"
          className="absolute inset-0 w-full h-[680px] object-cover"
        />
        <div
          className="relative w-full z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4
         md:py-4 justify-center items-center h-[680px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-[680px]">
            <div className=" flex flex-col justify-center p-4 pl-27 h-full">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-4">
                Leading Digital
              </h1>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#009BB1] mb-4">
                Agency
              </h1>
              <div className="flex flex-col sm:flex-row gap-2 mt-6 items-center sm:items-center">
                <Link to="/services">
                <button className="bg-[#009BB1] hover:bg-[#B2519A] text-white px-6 py-3 rounded-md text-lg font-medium w-full sm:w-auto">
                  Services
                </button>
                </Link>
                <Link to="/contact">
                <button className="border-2 border-[#009BB1] text-[#009BB1] hover:border-[#B2519A] hover:text-[#B2519A] px-6 py-3 rounded-md text-lg font-medium w-full sm:w-auto transition-colors duration-200">
                  Get in Touch
                </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center p-4 h-[665px] relative">
              <img src="/media/hero_pc.png" alt="Hero_pc" className="heroSubImage" />
              <img
                src="/media/gif-ovelay.gif"
                alt="Overlay GIF"
                className="absolute top-[145px] left-[107px] w-[512px] h-[330px]" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
