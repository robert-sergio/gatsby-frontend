import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, CardImg } from 'reactstrap'

const HomePage = ({data}) => {
  return (
    <Layout >
      <p> Adicionar um Carrossel aqui</p>
      <p>Eletronica, Robotica, Musicas, Impressao 3D, Automações, Consertos e Reparos, Ideias, e muito mais.</p>
      <hr></hr>

      <p>Ultimas Postagens!</p>

      <div style={{width: "100%", overflow: "hidden"}}>
        { data.allMarkdownRemark.nodes.map (({ frontmatter }) => (
          frontmatter.branch==='sobre'
          ? <p></p>
          : (
            <Card className='mx-1 mt-2 mb-2' style={{width:'15rem', height:'30rem', float: "left"}}>
              <CardHeader >
                {frontmatter.header}
              </CardHeader>
              <CardBody >
                <CardTitle >
                  {frontmatter.title}
                </CardTitle >
                <a href={frontmatter.slug}>
                  <CardImg src={frontmatter.url}/>
                </a>
                <CardSubtitle>
                  {frontmatter.subtitle}
                </CardSubtitle>
                <CardText>
                  {frontmatter.text}
                </CardText>
              </CardBody>
            </Card>)
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark{
      nodes{
        frontmatter{
          slug,
          branch,
          sub_branch,
          date,
          title,
          subtitle,
          header,
          text,
          url
        }
      }
    }
  }
`

export default HomePage