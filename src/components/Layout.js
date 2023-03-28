import React from 'react'
import MeuNavbar from './Navbar'
import {
  Container,
  
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/styles.css'
import Body from './Body';
import MeuFooter from './Footer';

export default function layout({ children, props }) {
  return (
    <section className='mb-5'>
        <MeuNavbar />
          <Container>
            <h1>
              { props.pagetitle }
            </h1>
          <Container className='mt-2 border rounded border-warning '>
            <Body >
              { children }
            </Body>
          </Container>
        </Container>
        <MeuFooter />
    </section>
  )
}
