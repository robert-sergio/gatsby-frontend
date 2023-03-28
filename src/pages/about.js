import * as React from "react"
import Layout from "../components/Layout"
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
} from 'reactstrap';

const AboutPage = () => {
  return (
      <Layout props = {{'pagetitle':'Sobre Mim'}}>
        <Row>
          <p>Minha Foto</p>
          <p>Contato</p>
          <p>Newsletter Gratuita</p>
          <p>Texto sobre mim</p>
          <p>Minha trajetoria de vida</p>
          <p>Minha trajetoria Profissional</p>
        </Row>
      </Layout>
  )
}

export default AboutPage

export const Head = () => <title>Home Page</title>
