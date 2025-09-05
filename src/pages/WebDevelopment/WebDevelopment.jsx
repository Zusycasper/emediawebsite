import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import WebDevelopmentHero from '../../components/WebDevelopment/WebDevelopmentHero/WebDevelopmentHero'
import InfiniteScrollingBanner from '../../components/WebDevelopment/InfiniteScrollingBanner/InfiniteScrollingBanner'
import PortfolioSection from '../../components/WebDevelopment/PortfolioSection/PortfolioSection'
import LetsTalk from '../../components/Home/LetsTalk/LetsTalk'

function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <WebDevelopmentHero />
      <InfiniteScrollingBanner />
      <PortfolioSection />
      <LetsTalk />
    </div>
  )
}

export default WebDevelopment