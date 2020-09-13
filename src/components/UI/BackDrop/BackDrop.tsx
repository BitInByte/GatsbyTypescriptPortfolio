//Import libraries
import React from "react"

//Import components

//Import scoped class modules
import classes from "./BackDrop.module.scss"

//Props interface
interface backDropProps {
  // clickHandler: (value: boolean) => void
  clickHandler: () => void
  //   clickHandler: React.Dispatch<React.SetStateAction<boolean>>
}

//Stateless component
const backDrop: React.FC<backDropProps> = ({ clickHandler }) => (
  <div className={classes.BackDrop} onClick={clickHandler}></div>
)

export default backDrop
