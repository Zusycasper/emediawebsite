import React from 'react'

function InfiniteScrollingBanner() {
  return (
    <div>
         <section className="py-8 bg-gradient-to-r from-teal-500 to-pink-500 overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex items-center space-x-32 text-white text-2xl font-bold">
              <span>Web Design</span>
              <span className="text-4xl">•</span>
              <span>Application Development</span>
              <span className="text-4xl">•</span>
              <span>Maintanance & Security</span>
              <span className="text-4xl">•</span>
              <span>Web Design</span>
              <span className="text-4xl">•</span>
              <span>Application Development</span>
              <span className="text-4xl">•</span>
              <span>Maintanance & Security</span>
              <span className="text-4xl">•</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default InfiniteScrollingBanner