//Import libraries
import React from "react"

//Import scoped class modules
//@ts-ignore
import classes from "./Title.module.scss"

//Props interface
interface Props {
  text: string
}

//Stateless component
const title: React.FC<Props> = ({ text }) => (
  <h3 className={classes.Title}>{text}</h3>
)

export default title
