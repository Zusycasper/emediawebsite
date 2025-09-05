import React from 'react'

function InfiniteScrollingBanner() {
  return (
    <div>
         <section className="py-8 bg-gradient-to-r from-teal-500 to-pink-500 overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex items-center space-x-32 text-white text-2xl font-bold">
              <span>Search Engine Optimization</span>
              <span className="text-4xl">•</span>
              <span>Social Media Marketing</span>
              <span className="text-4xl">•</span>
              <span>Email Marketing</span>
              <span className="text-4xl">•</span>
              <span>Search Engine Optimization</span>
              <span className="text-4xl">•</span>
              <span>Social Media Marketing</span>
              <span className="text-4xl">•</span>
              <span>Email Marketing</span>
              <span className="text-4xl">•</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default InfiniteScrollingBanner