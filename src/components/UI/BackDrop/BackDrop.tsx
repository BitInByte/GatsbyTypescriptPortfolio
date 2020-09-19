//Import libraries
import React from "react"

//Import scoped class modules
// @ts-ignore
import classes from "./BackDrop.module.scss"

//Props interface
interface backDropProps {
  clickHandler: () => void
}

//Stateless component
const backDrop: React.FC<backDropProps> = ({ clickHandler }) => (
  <div className={classes.BackDrop} onClick={clickHandler}></div>
)

export default backDrop
