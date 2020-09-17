//Import libraries
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

//Import components
import Title from "../../components/UI/Typography/Title/Title"
import StackContent from "../../components/StackContent/StackContent"

//Import scoped class modules
//@ts-ignore
import classes from "./Stack.module.scss"

// Types
type query = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          html: any
        }
      }
    ]
  }
}

//Props interface
interface Props {}

//Stateless component
const Stack: React.FC<Props> = props => {
  const data: query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { title: { eq: "Stack" } } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `)

  console.log("STACK")

  console.log(data)

  return (
    <div className={classes.Stack}>
      <Title text="Stack & Teachnologies" />
      <StackContent html={data.allMarkdownRemark.edges[0].node.html} />
    </div>
  )
}

export default Stack
