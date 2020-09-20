//Import libraries
import React from "react"
import { graphql, useStaticQuery, withPrefix } from "gatsby"

//Import components
import Title from "../../components/UI/Typography/Title/Title"
import Button from "../../components/UI/Button/Button"

//Import scoped class modules
//@ts-ignore
import classes from "./About.module.scss"

// Query
type query = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            title: string
            resume: string
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
              resume
            }
            html
          }
        }
      }
    }
  `)

  // const resumePath = `https://www.jopecodes.com/${data.allMarkdownRemark.edges[0].node.frontmatter.resume}`

  return (
    <div className={classes.About}>
      <Title text={data.allMarkdownRemark.edges[0].node.frontmatter.title} />
      <div
        className={classes.About__content}
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[0].node.html,
        }}
      ></div>
      <a
        href={withPrefix(
          data.allMarkdownRemark.edges[0].node.frontmatter.resume
        )}
        // href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button text="Resume" />
      </a>
    </div>
  )
}

export default About
