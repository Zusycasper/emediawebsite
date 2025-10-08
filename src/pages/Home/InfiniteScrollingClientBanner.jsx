import React from "react";

const clientImages = [
  { src: "/media/clients/pk.png", className: "h-25" },
  { src: "/media/clients/colvin.png", className: "h-25" },
  { src: "/media/clients/SHI.png", className: "h-14" },
  { src: "/media/clients/solit.png", className: "h-18" },
  { src: "/media/clients/themes.jpg", className: "h-14" },
  { src: "/media/clients/bb.png", className: "h-25" },
  { src: "/media/clients/fairway.png", className: "h-25" },
  { src: "/media/clients/loomerose.png", className: "h-12" },
  { src: "/media/clients/pinidiya.png", className: "h-25" },
  { src: "/media/clients/devil.jpg", className: "h-16" },
  { src: "/media/clients/vinny.png", className: "h-22" },

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
