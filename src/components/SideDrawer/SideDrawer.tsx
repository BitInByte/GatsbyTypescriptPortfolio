//Import libraries
import React from "react"

//Import components
import NavItems from "../NavItems/NavItems"

//Import scoped class modules
import classes from "./SideDrawer.module.scss"

//Props interface
interface sideDrawerProps {
  show: boolean
}

//Stateless component
const sideDrawer: React.FC<sideDrawerProps> = ({ show }) => {
  let drawerClasses = [classes.SideDrawer]

  if (show) drawerClasses = [classes.SideDrawer, classes.SideDrawerOpen]

  return (
    <div className={drawerClasses.join(" ")}>
      <NavItems isSideDrawerOpen />
    </div>
  )
}

export default sideDrawer
