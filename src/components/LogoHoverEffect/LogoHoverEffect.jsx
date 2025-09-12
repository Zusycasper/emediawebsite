function LogoHoverEffect({ className }) {
  return (
    <div className={`group flex items-center gap-4 ${className || ""}`}>
      {/* Flowers container */}
      <div className="relative w-20 h-20">
        {/* First flower SVG - rotates on hover (slow) */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="absolute top-0 left-0 w-full h-full group-hover:animate-spin"
          style={{ animationDuration: "8s", transformOrigin: "40px 40px" }}
        >
          <image
            href="/media/logo_header_only2.svg"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
            opacity={"40%"}
          />
        </svg>

        {/* Second flower SVG - rotates on hover (medium speed) */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="absolute top-0 left-0 w-full h-full group-hover:animate-spin"
          style={{ animationDuration: "4s", transformOrigin: "40px 40px" }}
        >
          <image
            href="/media/logo_header_only1.svg"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
            opacity={"50%"}
          />
        </svg>

        {/* Third flower SVG - no rotation */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="absolute top-0 left-0 w-full h-full"
        >
          <image
            href="/media/logo_full_svg.svg"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div>

      {/* Logo text - right side, vertically centered */}
      <span className="text-2xl font-bold text-gray-800 " style={{ fontFamily:"Quicksand", fontSize:"40px", fontWeight :"normal" }}>MediaBiz</span>
    </div>
  )
}

export default LogoHoverEffect
