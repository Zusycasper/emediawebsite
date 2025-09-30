import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import LetsTalk from '../../components/Home/LetsTalk/LetsTalk'
import DigitalMarketingSection from '../../components/Services/DigitalMarketingSection/DigitalMarketingSection'
import WebDevelopmentSection from '../../components/Services/WebDevelopmentSection/WebDevelopmentSection'
import Footer from '../../components/Footer/Footer'
import CloudInfrastructureSection from '../../components/Services/CloudInfrastructureSection/CloudInfrastructureSection'
import CreativeDesign from '../../components/Services/CreativeDesign/CreativeDesign'
import SocialMediaSection from '../../components/Services/SocialMediaManagement/SocialMediaManagement'
import { Card } from "@/components/ui/card";
import Navigationbar from '../../components/Navigationbar/Navigationbar';

function Services() {
    const { hash } = useLocation();

useEffect(() => {
  if (hash) {
    const id = hash.replace("#", "");

    const scrollToElement = () => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -87; // navbar height
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        // retry after a short delay if element not yet mounted
        setTimeout(scrollToElement, 50);
      }
    };

    scrollToElement();
  }
}, [hash]);

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <Navigationbar />
      <Card className="border-0" id="digital_marketing">
      <DigitalMarketingSection /></Card>
      <Card className="border-0" id="web_development">
      <WebDevelopmentSection /></Card>
      <Card className="border-0" id="social_media">
      <SocialMediaSection/></Card>
      <Card className="border-0" id="cloud_infrastructure">
      <CloudInfrastructureSection/></Card>
      <Card className="border-0" id="creative_design">
      <CreativeDesign/></Card>
      <LetsTalk />
      <Footer/>
    </div>
  )
}

export default Services