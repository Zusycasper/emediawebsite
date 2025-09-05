import React from 'react'

function WeAreSection() {
  return (
    <div>
         <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="/media/about/weAre.jpg" alt="Business meeting" className="w-full rounded-2xl" />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">We're specialists, not "do-it-all" generalists</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Some agencies try to offer everything under the sun, but that often means sacrificing the depth and
                quality your brand deserves. We knew from day one that wouldn't be us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WeAreSection