import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LetsTalk from '../../components/Home/LetsTalk/LetsTalk'
import DigitalMarketingHero from '../../components/DigiMarketing/DigitalMarketingHero/DigitalMarketingHero'
import InfiniteScrollingBanner from '../../components/DigiMarketing/InfiniteScrollingBanner/InfiniteScrollingBanner'
import PortfolioSection from '../../components/DigiMarketing/PortfolioSection/PortfolioSection'
import Footer from '../../components/Footer/Footer'

function DigiMarketing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <DigitalMarketingHero />
      <InfiniteScrollingBanner />
      <PortfolioSection />
      <LetsTalk />
      <Footer/>
    </div>
  )
}

export default DigiMarketing