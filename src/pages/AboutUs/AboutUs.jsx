import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CreateConnectSection from '../../components/About/CreateConnectSection copy/CreateConnectSection'
import WeAreSection from '../../components/About/WeAreSection/WeAreSection'
import DrivenbyResultsSection from '../../components/About/DrivenbyResultsSection/DrivenbyResultsSection'
import WeBelieveSection from '../../components/About/WeBelieveSection/WeBelieveSection'
import LetsTalk from '../../components/Home/LetsTalk/LetsTalk'
import Footer from '../../components/Footer/Footer'

function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CreateConnectSection />
      <WeAreSection />
      <DrivenbyResultsSection />
      <WeBelieveSection />
      <LetsTalk />
      <Footer/>
    </div>
  )
}

export default AboutUs