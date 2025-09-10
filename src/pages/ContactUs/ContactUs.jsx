import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ContactForm from '../../components/Contact/ContactFrom/ContactForm'
import AddressBanner from '../../components/Contact/AddressBanner/AddressBanner'
import Footer from '../../components/Footer/Footer'

function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactForm />
      <AddressBanner />
      <Footer/>
    </div>
  )
}

export default ContactUs