import { Link } from "react-router-dom"

function HeroSection() {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        <img
          src="/media/hero_bg_gif.gif"
          alt="Hero Background"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Original Hero Content */}
        <div className="relative w-full z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-4 flex justify-center items-center min-h-screen">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 items-center w-full">
            <div className="flex flex-col justify-center p-4 md:pl-27 h-full">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-4 text-left">
                Igniting Ideas into Iconic Brands with
              </h1>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#009BB1] mb-4 text-left">e-MediaBiz</h1>
              <div className="flex flex-row gap-2 mt-6 items-center">
                <Link to="/services">
                  <button onClick={(handleClick) => {
                          window.scrollTo(0, 0);
                          handleClick();
                        }} className="bg-[#009BB1] hover:bg-[#B2519A] text-white rounded-md text-sm md:text-lg font-medium h-12 md:h-14 px-6 align-items-vertical-center justify-evenly">
                    Services
                  </button>
                </Link>
                <Link to="/contact">
                  <button onClick={(handleClick) => {
                          window.scrollTo(0, 0);
                          handleClick();
                        }} className="border-2 border-[#009BB1] text-[#009BB1] hover:border-[#B2519A] hover:text-[#B2519A] rounded-md text-sm md:text-lg font-medium h-12 md:h-14 px-6 transition-colors duration-200 align-items-vertical-center justify-evenly">
                    Let's Build
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center p-4 relative mt-4 md:mt-0">
              <div className="relative">
                <img
                  src="/media/gifLaptop-overlay.webp"
                  alt="Overlay GIF"
                  className="absolute top-[4%] left-[13%] w-[73.5%] h-[82%] object-cover z-0"
                />
                <img src="/images/hero_pc.webp" alt="Hero PC" className="relative z-10 w-[1000px] max-w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img src="/images/whatAreWe.webp" alt="Professional Team" loading="lazy" className="relative z-10 w-full rounded-2xl" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are an AI-powered creative agency built for the digital age.
                <br />
                From marketing and social media to web, app, and cloud solutions,
                <br />
                we fuse human creativity with artificial intelligence to help brands
                <br />
                scale smarter, faster, and stronger.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
