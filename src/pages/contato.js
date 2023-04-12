import * as React from "react"
import Layout from "../components/Layout"
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
} from 'reactstrap';
import Developing from "../components/Developing";

const ContatoPage = () => {
  return (
    <section>
      <Layout props = {{'pagetitle':'Mundo Nerd!'}}>
        <Developing />

        {/* <Card className="mt-2 mb-2">
          <CardHeader>
            Séries e animes
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Star Trek', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Star Wars', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Code Geass', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Boku no Hero', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1'}}></MeuCard>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Card className="mt-2 mb-2">
          <CardHeader>
            Jogos Retrozeira
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Desbloqueando o Nintendo Wii', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Resuscitando PS2 com OPL', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Top 10 jogos Meguinha', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Phantasy Star 3', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1'}}></MeuCard>
              </Col>
            </Row>
          </CardBody>
        </Card> */}

      </Layout>
    </section>
  )
}

export default ContatoPage

export const Head = () => <title>Home Page</title>
