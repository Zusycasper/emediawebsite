import React from 'react'

function PreloaderBg() {
  return (
    <div>
        <section className="h-screen w-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('/media/preloader_bg.png')" }}>
          <img
        src="/media/output_fixed.webp" 
        alt="Loading..."
        className="relative z-10 w-180 h-auto"
      />
      </section>
    </div>
  )
}

export default PreloaderBg