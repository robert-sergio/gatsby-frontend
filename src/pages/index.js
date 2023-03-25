import * as React from "react"
import Layout from "../components/Layout"
import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const IndexPage = () => {
  return (
    <section>
      <Layout />
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
