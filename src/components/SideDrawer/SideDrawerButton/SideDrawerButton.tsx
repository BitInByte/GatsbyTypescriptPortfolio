//Import libraries
import React from "react"

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
}

//Stateless component
const sideDrawerButton: React.FC<sideDrawerButtonProps> = ({
  clickHandler,
}: sideDrawerButtonProps) => (
  <button
    className={classes.SideDrawerButton}
    onClick={clickHandler.bind(null)}
  >
    <div className={classes.SideDrawerButton__line}></div>
    <div className={classes.SideDrawerButton__line}></div>
    <div className={classes.SideDrawerButton__line}></div>
  </button>
)

export default sideDrawerButton
