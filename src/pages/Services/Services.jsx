import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LetsTalk from '../../components/Home/LetsTalk/LetsTalk'
import DigitalMarketingSection from '../../components/Services/DigitalMarketingSection/DigitalMarketingSection'
import WebDevelopmentSection from '../../components/Services/WebDevelopmentSection/WebDevelopmentSection'
import Footer from '../../components/Footer/Footer'
import CloudInfrastructureSection from '../../components/Services/CloudInfrastructureSection/CloudInfrastructureSection'
import CreativeDesign from '../../components/Services/CreativeDesign/CreativeDesign'
import SocialMediaSection from '../../components/Services/SocialMediaManagement/SocialMediaManagement'

function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <DigitalMarketingSection />
      <WebDevelopmentSection />
      <SocialMediaSection/>
      <CloudInfrastructureSection/>
      <CreativeDesign/>
      <LetsTalk />
      <Footer/>
    </div>
  )
}

export default Services