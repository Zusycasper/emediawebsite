import React from 'react'

function InfiniteScrollingClientBanner() {
  return (
    <div>
        <section className="py-8 bg-gradient-to-r from-teal-500 to-pink-500 overflow-hidden">
  <div className="flex animate-marquee whitespace-nowrap w-[1700px] md:w-[2000px] lg:w-[2500px] space-x-8">
    {/** First copy */}
    <div className="flex items-center space-x-12">
      <img src="/media/clients/pk.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/SHI.png" alt="Client Logo" className="w-auto h-16" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/solit.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/themes.jpg" alt="Client Logo" className="w-auto h-14" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/botwisth.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/ColvinandCoPartner.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/devlish.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/fairway.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/loomerose.png" alt="Client Logo" className="w-auto h-12" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/pinidiya.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
    </div>

    {/** Second copy (same logos for seamless looping) */}
    {/* <div className="flex items-center space-x-16">
      <img src="/media/clients/pk.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/SHI.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/solit.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/themes.jpg" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/botwisth.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/ColvinandCoPartner.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/devlish.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/fairway.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/loomerose.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
      <img src="/media/clients/pinidiya.png" alt="Client Logo" className="w-auto h-25" />
      <span className="text-4xl">•</span>
    </div> */}
  </div>
</section>


    </div>
  )
}

export default InfiniteScrollingClientBanner