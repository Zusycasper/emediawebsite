import React from 'react'

function AddressBanner() {
  return (
    <div className="w-full">
      <section className="py-10 bg-gradient-to-r from-teal-500 to-pink-500 overflow-hidden w-full">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-40 text-white text-lg md:text-2xl font-bold space-y-6 md:space-y-0">
              
              {/* UK */}
              <span className="md:w-1/2 lg:w-1/3 xl:w-1/4">
                <h3>United Kingdom (UK)</h3>
                <h6 className='font-medium'>
                  Watford
                </h6>
                {/* <p className='font-light'>Hertsfordshire </p> */}
              </span>

              {/* Separator */}
              <span className="hidden md:inline text-2xl md:text-4xl">|</span>

              {/* Sri Lanka */}
              <span className="md:w-1/2 lg:w-1/3 xl:w-1/4">
                <h3>Sri Lanka (SL)</h3>
                <h6 className='font-medium'>
                  Biyagama
                </h6>
                {/* <p className='font-light'>Gampaha</p> */}
              </span>

              {/* Separator */}
              <span className="hidden md:inline text-2xl md:text-4xl">|</span>

              {/* Dubai */}
              <span className="md:w-1/2 lg:w-1/3 xl:w-1/4">
                <h3>UAE</h3>
                <h6 className='font-medium text-tr/ansparent'>
                  Dubai
                </h6>
                {/* // <p className='font-light'>Tower 3, Sheikh Zayed road, Dubai</p> */}
              </span>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddressBanner

