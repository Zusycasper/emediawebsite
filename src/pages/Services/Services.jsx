import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LetsTalk from '../../components/Home/LetsTalk/LetsTalk'
import DigitalMarketingSection from '../../components/Services/DigitalMarketingSection/DigitalMarketingSection'
import WebDevelopmentSection from '../../components/Services/WebDevelopmentSection/WebDevelopmentSection'

function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <DigitalMarketingSection />
      <WebDevelopmentSection />
      <LetsTalk />
    </div>
  )
}

export default Services