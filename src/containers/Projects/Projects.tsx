//Import libraries
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Import components
import Title from "../../components/UI/Typography/Title/Title"
import Project from "../../components/Project/Project"

//Import scoped class modules
//@ts-ignore
import classes from "./Projects.module.scss"

// Types
type query = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string
          sourceLink: string
          liveLink: string
          image: string
          projectNr: number
        }
        html: string
      }
    }[]
  }
}

type projects =
  | {
      title: string
      sourceLink: string
      liveLink: string
      image: string
      html: string
      projectNr: number
    }[]
  | null

//Props interface
interface Props {}

//Stateless component
const Projects: React.FC<Props> = props => {
  const data: query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { keyword: { eq: "projects" } } }
        sort: { fields: frontmatter___projectNr, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              image
              sourceLink
              liveLink
              projectNr
            }
            html
          }
        }
      }
    }
  `)

  const projectsData: projects = []

  data.allMarkdownRemark.edges.map(item => {
    projectsData.push({
      title: item.node.frontmatter.title,
      sourceLink: item.node.frontmatter.sourceLink,
      liveLink: item.node.frontmatter.liveLink,
      image: item.node.frontmatter.image,
      html: item.node.html,
      projectNr: item.node.frontmatter.projectNr,
    })
  })

  console.log(data)
  console.log(projectsData)

  return (
    <div className={classes.Projects}>
      <Title text="Projects" />
      <div className={classes.Projects__content}>
        {projectsData.map((item, index) => {
          if (index % 2 === 0) {
            console.log(index)

            console.log(true)
            return (
              <Project
                key={item.projectNr}
                projectData={item}
                changePosition={true}
              />
            )
          } else {
            return (
              <Project
                key={item.projectNr}
                projectData={item}
                changePosition={false}
              />
            )
          }
        })}
        {/* <Project/> */}
      </div>
    </div>
  )
}

export default Projects
