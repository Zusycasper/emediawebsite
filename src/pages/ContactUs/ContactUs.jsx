import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ContactForm from '../../components/Contact/ContactFrom/ContactForm'
import AddressBanner from '../../components/Contact/AddressBanner/AddressBanner'
import Footer from '../../components/Footer/Footer'
import Navigationbar from '../../components/Navigationbar/Navigationbar'

function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <Navigationbar />
      <ContactForm />
      <AddressBanner />
      <Footer/>
    </div>
  )
}

export default ContactUs