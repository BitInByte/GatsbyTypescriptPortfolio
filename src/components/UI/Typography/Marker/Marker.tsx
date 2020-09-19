//Import libraries
import React from "react"

//Import scoped class modules
// @ts-ignore
import classes from "./Marker.module.scss"

//Props interface
interface Props {
  children: string
}

//Stateless component
const marker: React.FC<Props> = ({ children }) => (
  <span className={classes.Marker}>{children}</span>
)

export default marker
