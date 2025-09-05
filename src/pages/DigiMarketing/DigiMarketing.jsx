import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LetsTalk from '../../components/Home/LetsTalk/LetsTalk'
import DigitalMarketingHero from '../../components/DigiMarketing/DigitalMarketingHero/DigitalMarketingHero'
import InfiniteScrollingBanner from '../../components/DigiMarketing/InfiniteScrollingBanner/InfiniteScrollingBanner'
import PortfolioSection from '../../components/DigiMarketing/PortfolioSection/PortfolioSection'

function DigiMarketing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <DigitalMarketingHero />
      <InfiniteScrollingBanner />
      <PortfolioSection />
      <LetsTalk />
    </div>
  )
}

export default DigiMarketing