import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/Home/HeroSection/HeroSection'
import WhatAreWeSection from '../../components/Home/WhatAreWeSection/WhatAreWeSection'
import WhyMediaBiz from '../../components/Home/WhyMediaBiz/WhyMediaBiz'
import LetsTalk from '../../components/Home/LetsTalk/LetsTalk'
import ServicesSection from '../../components/Home/ServicesSection/ServicesSection'
import Footer from '../../components/Footer/Footer'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import CookiePopup from '../../components/CookiePopup/CookiePopup'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <Navigationbar />
      <HeroSection />
      {/* <WhatAreWeSection /> */}
      <ServicesSection />
      <WhyMediaBiz />
      <LetsTalk />
      <Footer/>
      <CookiePopup/>
    </div>
  )
}

export default Home