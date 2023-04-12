import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Card, CardBody, CardHeader, CardText, CardTitle, CardImg, Row} from 'reactstrap'
import Carrossel from '../components/Carrosel'
import Destaque from '../components/destaques'

const HomePage = ({data}) => {
  return (
    <Layout >
      <div style={{width: "100%", overflow: "hidden", margin:'auto', border:'3px solid green', textAlign:'center'}}>
          <Carrossel />
      </div>
      <hr></hr>
      <div style={{width: "100%", overflow: "hidden", margin:'auto', border:'3px solid green', textAlign:'center'}}>
          <Destaque />
      </div>

      <hr></hr>
      
      <div style={{width: "100%", margin:'auto', border:'3px solid green', textAlign:'center'}}>
        <h2>Projetos</h2>

        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div style={{overflow: "hidden",}}>
            { data.allMarkdownRemark.nodes.map (({ frontmatter }) => (
              frontmatter.branch==='sobre'
              ? <p></p>
              : (
                <Card className='mx-2' style={{width:'16rem', minWidth:'16rem', minHeight:'25rem', float: "center"}}>
                  <a href={frontmatter.slug} style={{textDecoration:'None', color:'black'}}>
                  <CardHeader className='fw-bold'>
                    {frontmatter.header}
                  </CardHeader>
                  <CardBody >
                      <CardImg src={frontmatter.url} style={{height:'10rem'}}/>
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
                    </a>
                </Card>
                )))}
          </div>
        </div>
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