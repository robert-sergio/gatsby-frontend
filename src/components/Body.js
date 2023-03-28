import React from 'react'
import {
    Container,
    
  } from 'reactstrap';
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap-icons/font/bootstrap-icons.css'
  import '../styles/styles.css'
  

export default function Body({children, props}) {
  return (
    <Container >
        { children }
    </Container>
  )
}
