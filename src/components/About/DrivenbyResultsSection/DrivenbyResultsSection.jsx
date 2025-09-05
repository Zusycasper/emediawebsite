import React from 'react'

function DrivenbyResultsSection() {
  return (
    <div>
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Driven by results, not just activity</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                For us, it's never about doing work for the sake of it — it's about making an impact. Every strategy,
                campaign, and design we create is built to fuel real business growth and keep your brand ahead in an
                ever-changing digital world.
              </p>
            </div>

            <div className="relative">
              <img src="/media/about/drivenBy.jpg" alt="Data analysis" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DrivenbyResultsSection