import React from 'react'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import Footer from '../../components/Footer/Footer'
import FaqContent from './FaqContent'

function Faq() {
  return (
    <div className="min-h-screen bg-white">
      <Navigationbar/>
      <FaqContent/>
      <Footer/>
      </div>
  )
}

export default Faq