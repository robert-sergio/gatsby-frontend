import * as React from "react"
import Layout from "../components/Layout"
import {
  Row,
  Col,
  Container,
  Card
} from 'reactstrap';
import '../styles/styles.css'
import Developing from "../components/Developing"

const AboutPage = () => {
  return (
      <Layout props = {{'pagetitle':'Sobre Mim'}}>
        <Developing></Developing>        
        {/* <Row>
          <Col className="col-4 mt-2">
            <img className="mt-2 mb-5 img-thumbnail rounded w-100" src='https://avatars.githubusercontent.com/u/35043102?v=4'></img>
          </Col>
          <Col className="col-8 mt-2">
            <Container className="mt-2 mb-5 align-center">
              <div>
                <h3>Oi, Eu sou o Robert!</h3>
                <p>Minhas Paixões!</p>
                <p>Python, IA, Arduino, Automação, Resolver problemas!</p>
                <p>Meu primeiro contato com a Tecnologia foi através do meu avô que trabalhava com eletronica</p>


              </div>
            </Container>
          </Col>
        </Row>
        <hr></hr>
        <Row className="mb-5">
          <Col >
            <div className="contato">
              <p>Contatos e Freelas</p>
              <p>Assunto</p>
              <select>
                <option>Freela</option>
                <option>Projeto Social</option>
                <option>Opinião</option>
              </select>
              <p>Mensagem</p>
              <input type='text'></input>
              <hr></hr>
              <button>Deixar Mensagem!</button>
            </div>
          </Col>
          <Col>
            <div className="newsletter">
              <p>Assine minha Newsletter Gratuita</p>
              <input></input>
              <hr></hr>
              <button>Assinar!</button>
            </div>
          </Col>
        </Row> */}
      </Layout>
  )
}

export default AboutPage

export const Head = () => <title>Home Page</title>
