import * as React from "react"
import Layout from "../components/Layout"
import MeuCarrossel from "../components/Carrosel"

const IndexPage = () => {
  return (
    <section>
      <Layout  props = {{'pagetitle':'Portal Robertnick'}}>
        <p>Meu portal de Tecnologia, Programação e mundo Nerd!</p>
        <p>Projetos Sociais mais recentes</p>
        <p>Video do Youtube Mais recente</p>
        <p>Novos Posts aparecerão aqui</p>
        <p>Opiniões</p>
      </Layout>
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
