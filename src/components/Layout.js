import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import Sidebar from './sidebar'

export default function layout() {
  return (
    <section>
        <Navbar />
        <Sidebar />
        <Footer />
    </section>
  )
}
