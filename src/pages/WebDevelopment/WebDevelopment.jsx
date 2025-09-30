import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import WebDevelopmentHero from '../../components/WebDevelopment/WebDevelopmentHero/WebDevelopmentHero'
import InfiniteScrollingBanner from '../../components/WebDevelopment/InfiniteScrollingBanner/InfiniteScrollingBanner'
import PortfolioSection from '../../components/WebDevelopment/PortfolioSection/PortfolioSection'
import LetsTalk from '../../components/Home/LetsTalk/LetsTalk'
import Footer from '../../components/Footer/Footer'
import Navigationbar from '../../components/Navigationbar/Navigationbar'

function WebDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <Navigationbar /> 
      <WebDevelopmentHero />
      <InfiniteScrollingBanner />
      <PortfolioSection />
      <LetsTalk />
      <Footer/>
    </div>
  )
}

export default WebDevelopment