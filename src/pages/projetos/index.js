import * as React from "react"
import Layout from "../../components/Layout"
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
} from 'reactstrap';
import MeuCard from "../../components/Card"

const ProjectPage = () => {
  return (
    <section>
      <Layout props = {{'pagetitle':'Projetos'}}>

        <Card className="mt-2 mb-2">
          <CardHeader>
            Internet das Coisas
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Incubadora de Feijões', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Outro...', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Outro...', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Outro...', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1'}}></MeuCard>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Card className="mt-2 mb-2">
          <CardHeader>
            Programação
          </CardHeader>
          <CardBody>
            <Row>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Crawler Olx Selenium', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Django com AWS EC2', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Frontend Gatsby AWS S3', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1', 'link_desc2':'link 2', 'link2':'link 2'}}></MeuCard>
              </Col>
              <Col>
              <MeuCard className = 'px-2' props = {{'title':'Github Actions', 'subtitle':'Subtitulo', 'cardtext':'Lorem Ipsum', 'link_desc1':'link', 'link1':'link 1'}}></MeuCard>
              </Col>
            </Row>
          </CardBody>
        </Card>

      </Layout>
    </section>
  )
}

export default ProjectPage

export const Head = () => <title>Home Page</title>
