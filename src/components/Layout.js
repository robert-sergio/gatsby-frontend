import React from 'react'
import MeuNavbar from './Navbar'
import '../styles/styles.css'
import {
  Container,
  CardGroup,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function layout({ children, props }) {
  return (
    <section>
        <MeuNavbar />
          <Container className='mt-2'>
          <h2 className='mx-2'>{props.pagetitle}</h2>
            { children }
          </Container>
    </section>
  )
}
