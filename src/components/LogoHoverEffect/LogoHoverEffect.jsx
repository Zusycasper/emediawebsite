"use client"

function LogoHoverEffect({ className }) {
  return (
    <div className={`group flex items-center gap-4 ${className || ""}`}>
      <div className="relative w-20 h-20">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="absolute top-0 left-0 w-full h-full group-hover:animate-[flower1Pop_2s_ease-in-out_infinite]"
          style={{
            transformOrigin: "40px 40px",
          }}
        >
          <image
            href="/media/logo_header_only2.svg"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
            opacity={"40%"}
          />
        </svg>

        {/* Second flower SVG - continuous pop animation with delay */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="absolute top-0 left-0 w-full h-full group-hover:animate-[flower2Pop_2s_ease-in-out_infinite]"
          style={{
            transformOrigin: "40px 40px",
          }}
        >
          <image
            href="/media/logo_header_only1.svg"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
            opacity={"50%"}
          />
        </svg>

        {/* Third flower SVG - stays still */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="absolute top-0 left-0 w-full h-full">
          <image href="/media/logo_full_svg.svg" width="80" height="80" preserveAspectRatio="xMidYMid meet" />
        </svg>
      </div>

      {/* Logo text - right side, vertically centered */}
      <span
        className="text-2xl font-bold text-gray-800 "
        style={{ fontFamily: "Quicksand", fontSize: "40px", fontWeight: "normal" }}
      >
        MediaBiz
      </span>

      <style jsx>{`
        @keyframes flower1Pop {
          0%, 50%, 100% { transform: scale(1); }
          25% { transform: scale(1.15); }
        }
        
        @keyframes flower2Pop {
          0%, 25%, 75%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  )
}

export default LogoHoverEffect
