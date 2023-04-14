import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Carrossel from '../components/Carrosel'
import Destaque from '../components/destaques'

const HomePage = ({data}) => {
  return (
    <Layout >
      {/* <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}> */}
          {/* <Carrossel /> */}
          {/* <img src='/slide-square.png' style={{width:'30%'}}></img> */}
          {/* <p>Texto</p> */}
      {/* </div> */}
      {/* <div style={{width: "100%", overflow: "hidden", margin:'auto', textAlign:'center'}}>
          <Destaque />
      </div> */}

      {/* <hr></hr> */}
      
      <div style={{width: "100%", margin:'auto', textAlign:'center'}}>
        <h2>Ultimas publicações</h2>

        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div >
            { data.allMarkdownRemark.nodes.map (({ frontmatter }) => (
              frontmatter.branch==='sobre'
              ? <p></p>
              : (
                <Card className='mb-4' style={{ width:'100%'}}>
                  <a href={frontmatter.slug} style={{textDecoration:'None', color:'black'}}>
                  <CardHeader className='fw-bold'>
                    {frontmatter.header}
                  </CardHeader>
                  <CardBody >
                    <div style={{margin:'auto', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
                      <div style={{flex:'1', minWidth:'16rem', maxWidth:'30%'}}>
                        <img src={frontmatter.url} style={{width:'100%'}}/>
                      </div>

                      <div style={{flex:'1', minWidth:'16rem', maxWidth:'40%'}}>
                        <h4 className='fw-bold mb-5'>
                          {frontmatter.title}
                        </h4 >
                        <p>
                          {frontmatter.text}
                        </p>
                        <p >{frontmatter.date}</p>
                      </div>
                    </div>
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