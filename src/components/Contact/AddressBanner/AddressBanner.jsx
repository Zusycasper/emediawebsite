import React from 'react'

function AddressBanner() {
  return (
    <div>
      <section className="py-10 bg-gradient-to-r from-teal-500 to-pink-500 overflow-hidden w-full">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center space-x-6 md:space-x-10 text-white text-lg md:text-2xl font-bold">
              <span>
                <h3>UK</h3>
                <h6 className='font-medium'>
                  London
                  </h6>
                <p className='font-light'>10 Baker Street, London, NW1 6XE</p>
              </span>
              <span className="text-2xl md:text-4xl">|</span>
              <span>
                <h3>Sri Lanka (SL)</h3>
                <h6 className='font-medium'>
                  Colombo
                  </h6>
                <p className='font-light'>45 Marine Drive, Colombo 03</p>
              </span>
              <span className="text-2xl md:text-4xl">|</span>
              <span>
                <h3>Dubai</h3>
                <h6 className='font-medium'>
                  Downtown Dubai
                  </h6>
                <p className='font-light'>Tower 3, Sheikh Zayed Road, Dubai</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddressBanner