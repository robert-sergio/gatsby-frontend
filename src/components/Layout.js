import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function layout() {
  return (
    <section>
        <Navbar />
        <Sidebar />
        <Footer />
    </section>
  )
}
