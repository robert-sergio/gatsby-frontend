import React from 'react'
import MeuNavbar from './Navbar'
import MeuFooter from './Footer'
import '../styles/styles.css'

export default function layout() {
  return (
    <section>
        <MeuNavbar />
        <MeuFooter />
    </section>
  )
}
