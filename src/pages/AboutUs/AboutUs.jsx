import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CreateConnectSection from '../../components/About/CreateConnectSection copy/CreateConnectSection'
import WeAreSection from '../../components/About/WeAreSection/WeAreSection'
import DrivenbyResultsSection from '../../components/About/DrivenbyResultsSection/DrivenbyResultsSection'
import WeBelieveSection from '../../components/About/WeBelieveSection/WeBelieveSection'
import LetsTalk from '../../components/Home/LetsTalk/LetsTalk'

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CreateConnectSection />
      <WeAreSection />
      <DrivenbyResultsSection />
      <WeBelieveSection />
      <LetsTalk />
    </div>
  )
}

export default AboutUs