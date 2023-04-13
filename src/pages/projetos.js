import * as React from "react"
import Layout from "../components/Layout"
import {
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import { graphql } from 'gatsby'

const ProjectPage = ({data}) => {
  return (
    <section>
      <Layout props = {{'pagetitle':'Projetos'}}>
      <div style={{width: "100%", margin:'auto', textAlign:'center'}}>
        <h2>Meus Projetos</h2>

        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <div >
            { data.allMarkdownRemark.nodes.map (({ frontmatter }) => (
              frontmatter.branch==='projetos'
              ? (
                <Card className='mb-4' style={{ width:'100%'}}>
                  <a href={frontmatter.slug} style={{textDecoration:'None', color:'black'}}>
                  <CardHeader className=' fw-bold'>
                    {frontmatter.header}
                  </CardHeader>
                  <CardBody >
                    <div style={{margin:'auto', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
                      <div style={{flex:'1', minWidth:'16rem', maxWidth:'30%'}}>
                        <img src={frontmatter.url} style={{borderStyle:'solid', width:'100%'}}/>
                      </div>

                      <div style={{flex:'1', minWidth:'16rem', maxWidth:'40%'}}>
                        <h4 className='fw-bold mb-5'>
                          {frontmatter.title}
                        </h4 >
                        <p className="fw-bold">{frontmatter.stack}</p>
                        <p className="">
                          {frontmatter.text}
                        </p>
                        <p className="fw-bold">Atualizado : {frontmatter.date}</p>
                      </div>
                    </div>
                  </CardBody>
                    </a>
                </Card>
                )
              : <p></p>
              ))}
          </div>
        </div>
      </div>
      </Layout>
    </section>
  )
}

export default ProjectPage

export const query = graphql`
  query ProjectPageQuery {
    allMarkdownRemark{
      nodes{
        frontmatter{
          slug,
          stack,
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