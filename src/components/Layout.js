import React from 'react'
import MeuNavbar from './Navbar'
import {
  Container,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/styles.css'
import MeuFooter from './Footer';

export default function layout({ children, props }) {
  return (
    <section className='mb-5'>
        <MeuNavbar />
          <Container>
          <Container className='mt-2'>
              { children }
          </Container>
        </Container>
        <MeuFooter />
    </section>
  )
}
