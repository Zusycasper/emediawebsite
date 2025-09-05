import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ContactForm from '../../components/Contact/ContactFrom/ContactForm'
import AddressBanner from '../../components/Contact/AddressBanner/AddressBanner'

function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ContactForm />
      <AddressBanner />
    </div>
  )
}

export default ContactUs