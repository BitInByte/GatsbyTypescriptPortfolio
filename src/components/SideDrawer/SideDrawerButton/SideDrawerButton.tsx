//Import libraries
import React from "react"
import { PageProps } from "gatsby"

//Import components

//Import scoped class modules
// @ts-ignore
import classes from "./SideDrawerButton.module.scss"

//Props interface
interface sideDrawerButtonProps {
  clickHandler: (
    value:
      | boolean
      | ((
          event: React.ChangeEvent<HTMLInputElement>,
          prevState: boolean
        ) => boolean)
  ) => void
  // clickHandler: React.Dispatch<React.SetStateAction<boolean>>
}

//Stateless component
// const sideDrawerButton: React.FC<sideDrawerButtonProps> = ({
const sideDrawerButton: React.FC<sideDrawerButtonProps> = ({
  clickHandler,
}: sideDrawerButtonProps) => (
  //   <button className={classes.SideDrawerButton} onClick={clickHandler}>
  <button
    className={classes.SideDrawerButton}
    onClick={clickHandler.bind(null)}
    // onClick={clickHandler}
    // onClick={() => console.log("Im here")}
  >
    <div className={classes.SideDrawerButton__line}></div>
    <div className={classes.SideDrawerButton__line}></div>
    <div className={classes.SideDrawerButton__line}></div>
  </button>
)

export default sideDrawerButton
