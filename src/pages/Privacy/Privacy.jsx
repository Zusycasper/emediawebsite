import React from 'react'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import Footer from '../../components/Footer/Footer'
import PrivacyContent from './PrivacyContent'

function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigationbar/>
      <PrivacyContent/>
      <Footer/>
      </div>
  )
}

export default Privacy