//Import libraries
import React from "react"

//Import components

//Import scoped class modules
// @ts-ignore
import classes from "./Heading2.module.scss"

//Props interface
interface Props {}

//Stateless component
const Heading2: React.FC<Props> = ({ children }) => (
  <h2 className={classes.h2}>{children}</h2>
)

export default Heading2
