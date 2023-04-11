import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Card, CardBody, CardHeader, CardText, CardTitle, CardImg, Row} from 'reactstrap'
import Carrossel from '../components/Carrosel'
import Destaque from '../components/destaques'

const HomePage = ({data}) => {
  return (
    <Layout >
      <Row style={{marginTop:"1rem", width: "100%", overflow: "hidden"}}>
        <div style={{width: "50%"}}>
          <Carrossel />
        </div>
        <div style={{width: "50%"}}>
          <Destaque />
        </div>
      </Row>

      <hr></hr>
      <div style={{width: "100%", overflow: "hidden"}}>
        { data.allMarkdownRemark.nodes.map (({ frontmatter }) => (
          frontmatter.branch==='sobre'
          ? <p></p>
          : (
            <Card className='mx-1 mb-2' style={{width:'15rem', height:'30rem', float: "left"}}>
              <CardHeader className='fw-bold'>
                {frontmatter.header}
              </CardHeader>
              <CardBody >
                <a href={frontmatter.slug}>
                  <CardImg src={frontmatter.url} style={{height:'10rem'}}/>
                </a>
                <CardTitle className='fw-bold mb-2'>
                  {frontmatter.title}
                </CardTitle >
                {/* <CardSubtitle className='fw-bold'>
                  {frontmatter.subtitle}
                </CardSubtitle> */}
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
          header,
          text,
          url
        }
      }
    }
  }
`

export default HomePage