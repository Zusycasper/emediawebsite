import React from 'react'

function CreateConnectSection() {
  return (
    <div>
         <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Create. Connect. Convert</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                We started E-Media Biz with one simple mission — to help brands thrive online and actually see results
                from their digital efforts. By results, we mean growth you can measure, not just vanity numbers. We skip
                the jargon and get straight to strategies that work.
              </p>
            </div>

            <div className="relative">
                <img
                    src="/media/about/connect.png"
                    alt="Create Connect Convert"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CreateConnectSection