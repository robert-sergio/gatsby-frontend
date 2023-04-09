import * as React from "react"
import { graphql } from "gatsby"
import '../styles/styles.css'
import Layout from "../components/Layout"

const AboutPage = ({data}) => {
  return (
    <Layout>
    <div
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>Home Page</title>

export const AboutPageQuery = graphql`
query HomePageQuery {
  markdownRemark{
    html
    }
  }
`