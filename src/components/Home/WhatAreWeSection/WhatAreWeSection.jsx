import React from 'react'

function WhatAreWeSection() {
  return (
    <div><section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-pink-500 rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-teal-500 rounded-2xl transform -rotate-3"></div> */}
            <img
              src="/media/whatAreWe.png"
              alt="Professional Team"
              className="relative z-10 w-full rounded-2xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">What Are We</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              a creative digital solutions agency helping brands grow in the online world. We specialize in digital
              marketing, social media management, and web/app development, blending strategy with design to deliver
              results that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default WhatAreWeSection