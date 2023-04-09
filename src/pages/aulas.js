import * as React from "react"
import Layout from "../components/Layout"
import {
  Card,
  CardBody,
  CardHeader,
  NavLink,
} from 'reactstrap';
import Developing from "../components/Developing";

const LessonsPage = () => {
  return (
    <section>
      <Layout props = {{'pagetitle':'Aprenda de Graça'}}>
        <Developing />
        {/* <p>Minhas Aulas no Youtube</p>
        <p>Aprenda a fazer cursos no Coursera Gratuitamente</p>
        <p>Aprenda a consertar suas coisas</p>
        <p>Aprenda VBA no Excel</p>
        <p>Aprenda a Fazer bots com Selenium e Python</p> */}
      </Layout>
    </section>
  )
}

export default LessonsPage

export const Head = () => <title>Home Page</title>
