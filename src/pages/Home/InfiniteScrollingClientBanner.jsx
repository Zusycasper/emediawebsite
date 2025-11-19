import React from "react";

const clientImages = [
  { src: "/images/clients/pk.png", className: "h-25" },
  { src: "/images/clients/colvin.png", className: "h-25" },
  { src: "/images/clients/SHI.png", className: "h-14" },
  { src: "/images/clients/solit.png", className: "h-18" },
  { src: "/images/clients/themes.jpg", className: "h-14" },
  { src: "/images/clients/bb.png", className: "h-25" },
  { src: "/images/clients/fairway.png", className: "h-25" },
  { src: "/images/clients/loomerose.png", className: "h-12" },
  { src: "/images/clients/pinidiya.png", className: "h-25" },
  { src: "/images/clients/devil.jpg", className: "h-16" },
  { src: "/images/clients/vinny.png", className: "h-24" },
  { src: "/images/clients/raindbow.png", className: "h-22" },


];

function InfiniteScrollingClientBanner({ speedSeconds = 160 }) {
  const trackStyle = { animationDuration: `${speedSeconds}s` };
  return (
    <div>
      <section className="py-8 bg-gradient-to-r from-teal-500 to-pink-500 overflow-hidden">
        <div
          className="flex animate-marquee whitespace-nowrap w-max space-x-8"
          style={trackStyle}
        >
          {/* Duplicate images for seamless loop */}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center space-x-12">
              {clientImages.map((img, idx) => (
                <React.Fragment key={idx}>
                  <img
                    src={img.src}
                    alt="Client Logo"
                    className={`w-auto ${img.className}`}
                  />
                  <span className="text-4xl">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default InfiniteScrollingClientBanner;
