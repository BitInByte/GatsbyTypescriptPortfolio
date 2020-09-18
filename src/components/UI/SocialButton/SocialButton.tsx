//Import libraries
import React from "react"

//Import components

//Import scoped class modules
//@ts-ignore
import classes from "./SocialButton.module.scss"

//Props interface
interface Props {}

//Stateless component
const socialButton: React.FC<Props> = ({ children }) => (
  <div className={classes.SocialButton}>{children}</div>
)

export default socialButton
