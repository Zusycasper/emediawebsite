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
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -87;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <Navigationbar />
      <Card id="digital_marketing">
      <DigitalMarketingSection /></Card>
      <Card id="web_development">
      <WebDevelopmentSection /></Card>
      <Card id="social_media">
      <SocialMediaSection/></Card>
      <Card id="cloud_infrastructure">
      <CloudInfrastructureSection/></Card>
      <Card id="creative_design">
      <CreativeDesign/></Card>
      <LetsTalk />
      <Footer/>
    </div>
  )
}

export default Services