//Import libraries
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Import components
import Title from "../../components/UI/Typography/Title/Title"
import Marker from "../../components/UI/Typography/Marker/Marker"

//Import scoped class modules
import classes from "./About.module.scss"

// Query
type query = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            title: string
          }
          html: any
        }
      }
    ]
  }
}

//Props interface
interface Props {}

//Stateless component
const About: React.FC<Props> = () => {
  const data: query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "About Me" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div className={classes.About}>
      <Title text={data.allMarkdownRemark.edges[0].node.frontmatter.title} />
      <div
        className={classes.About__content}
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[0].node.html,
        }}
      >
        {/* {data.allMarkdownRemark.edges[0].node.html} */}
      </div>
    </div>
  )
}

export default About
