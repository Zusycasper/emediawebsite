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
        <div className="relative w-full z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-4 justify-center items-center h-[680px]">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 items-center h-[680px]">
            <div className="flex flex-col justify-center p-4 md:pl-27 h-full md:h-full">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-4 text-left">
                Leading Digital
              </h1>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#009BB1] mb-4 text-left">
                Agency
              </h1>
              <div className="flex flex-row gap-2 mt-6 items-center">
                <Link to="/services">
                  <button className="bg-[#009BB1] hover:bg-[#B2519A] text-white rounded-md text-sm md:text-lg font-medium h-12 md:h-14 px-6 align-items-vertical-center justify-evenly">
                    Services
                  </button>
                </Link>
                <Link to="/contact"><button className="border-2 border-[#009BB1] text-[#009BB1] hover:border-[#B2519A] hover:text-[#B2519A] rounded-md text-sm md:text-lg font-medium h-12 md:h-14 px-6 transition-colors duration-200 align-items-vertical-center justify-evenly">
                    Get in Touch
                  </button>
                  
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center p-4 h-auto md:h-[665px] relative mt-4 md:mt-0">
              <div className="relative">
                <img
                  src="/media/gifLaptop-overlay.webp"
                  alt="Overlay GIF"
                  className="absolute top-[4%] left-[13%] w-[73.5%] h-[82%] object-cover z-0"
                />

                <img
                  src="/media/hero_pc.png"
                  alt="Hero PC"
                  className="relative z-10 w-[1000px] max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
