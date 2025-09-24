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
      <div id="digital_marketing">
      <DigitalMarketingSection /></div>
      <div id="web_development">
      <WebDevelopmentSection /></div>
      <div id="social_media">
      <SocialMediaSection/></div>
      <div id="cloud_infrastructure">
      <CloudInfrastructureSection/></div>
      <div id="creative_design">
      <CreativeDesign/></div>
      <LetsTalk />
      <Footer/>
    </div>
  )
}

export default Services