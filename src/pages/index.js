import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Card } from 'reactstrap'

const HomePage = ({data}) => {
  return (
    <Layout >
      <h4>Algum conteudo</h4>

     {data.allMarkdownRemark.nodes.map (({ frontmatter }) => (
      <Card>
        <p>{frontmatter.slug}</p>
      </Card>
     ))}

    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark{
      nodes{
        frontmatter{
          slug
        }
      }
    }
  }
`

export default HomePage