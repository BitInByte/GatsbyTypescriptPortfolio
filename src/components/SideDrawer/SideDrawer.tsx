//Import libraries
import React from "react"

//Import components
import NavItems from "../NavItems/NavItems"

//Import scoped class modules
// @ts-ignore
import classes from "./SideDrawer.module.scss"

//Props interface
interface sideDrawerProps {
  show: boolean
  clickHandler: () => void
}

//Stateless component
const sideDrawer: React.FC<sideDrawerProps> = ({ show, clickHandler }) => {
  let drawerClasses = [classes.SideDrawer]

  if (show) drawerClasses = [classes.SideDrawer, classes.SideDrawerOpen]

  return (
    <div className={drawerClasses.join(" ")}>
      <NavItems isSideDrawerOpen clickHandler={clickHandler} />
    </div>
  )
}

export default sideDrawer
