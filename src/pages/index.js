import * as React from "react"
import Layout from "../components/Layout"
import '../styles/styles.css'
import Developing from "../components/Developing"

const IndexPage = () => {
  return (
    <Layout props = {{'pagetitle':'Portal Robertnik'}}>
      <Developing />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
