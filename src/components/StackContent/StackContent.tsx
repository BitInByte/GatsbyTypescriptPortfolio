//Import libraries
import React from "react"

//Import components

//Import scoped class modules
//@ts-ignore
import classes from "./StackContent.module.scss"

//Props interface
interface Props {
  html: string
}

//Stateless component
const stackContent: React.FC<Props> = ({ html }) => (
  <div
    dangerouslySetInnerHTML={{ __html: html }}
    className={classes.StackContent}
  ></div>
)

export default stackContent
