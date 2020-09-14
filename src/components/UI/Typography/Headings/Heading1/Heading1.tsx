//Import libraries
import React from "react"

//Import components

//Import scoped class modules
import classes from "./Heading1.module.scss"

//Props interface
interface Props {}

//Stateless component
const Heading: React.FC<Props> = ({ children }) => (
  <h1 className={classes.h1}>{children}</h1>
)

export default Heading
