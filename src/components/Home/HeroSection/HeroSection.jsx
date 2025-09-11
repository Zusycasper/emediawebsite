import { Link } from "react-router-dom"

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
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-4 text-left">Leading Digital</h1>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#009BB1] mb-4 text-left">Agency</h1>
              <div className="flex flex-row gap-2 mt-6 items-center">
                <Link to="/services">
                  <button className="bg-[#009BB1] hover:bg-[#B2519A] text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-lg font-medium">
                    Services
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="h-[52px] border-2 border-[#009BB1] text-[#009BB1] hover:border-[#B2519A] hover:text-[#B2519A] px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-lg font-medium transition-colors duration-200">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center p-4 h-auto md:h-[665px] relative mt-4 md:mt-0">
  {/* GIF behind */}
  <img
    src="/media/gif-ovelay.gif"
    alt="Overlay GIF"
    className="absolute top-[24px] md:top-[145px] left-1/2 transform -translate-x-1/2 md:left-[363px] md:transform-none w-[222px] md:w-[512px] h-[140px] md:h-[330px] z-0"
  />

  {/* Hero image on top */}
  <img
    src="/media/hero_pc.png"
    alt="Hero_pc"
    className="w-[300px] md:w-auto max-w-full h-auto relative z-10"
  />
</div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
