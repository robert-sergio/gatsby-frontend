import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Card, CardBody, CardHeader, CardText, CardTitle, Row, Col} from 'reactstrap'
import Carrossel from '../components/Carrosel'
import Destaque from '../components/destaques'

const HomePage = ({data}) => {
  return (
    <Layout >
      <div style={{width: "100%", overflow: "hidden", margin:'auto', textAlign:'center'}}>
          <Carrossel />
      </div>
      <hr></hr>
      <div style={{width: "100%", overflow: "hidden", margin:'auto', textAlign:'center'}}>
          <Destaque />
      </div>

      <hr></hr>
      
      <div style={{width: "100%", margin:'auto', textAlign:'center'}}>
        <h2>Projetos</h2>
        <h6>Adicionar um filtro aqui.</h6>

        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div style={{}}>
            { data.allMarkdownRemark.nodes.map (({ frontmatter }) => (
              frontmatter.branch==='sobre'
              ? <p></p>
              : (
                <Card className='mx-2' style={{ width:'100%'}}>
                  <a href={frontmatter.slug} style={{textDecoration:'None', color:'black'}}>
                  <CardHeader className='fw-bold'>
                    {frontmatter.header}
                  </CardHeader>
                  <CardBody >
                    <Row>
                      <Col>
                        <img src={frontmatter.url} style={{width:'100%'}}/>
                      </Col>
                      <Col>
                        <CardTitle className='fw-bold mb-2'>
                          {frontmatter.title}
                        </CardTitle >
                        <CardText>
                          {frontmatter.text}
                        </CardText>
                      </Col>
                    </Row>
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