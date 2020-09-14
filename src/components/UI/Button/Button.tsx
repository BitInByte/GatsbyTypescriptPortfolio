//Import libraries
import React from "react"

//Import components

//Import scoped class modules
import classes from "./Button.module.scss"

//Props interface
interface Props {
  text: string
}

//Stateless component
const Button: React.FC<Props> = ({ text }) => (
  <button className={classes.Button}>{text}</button>
)

export default Button
