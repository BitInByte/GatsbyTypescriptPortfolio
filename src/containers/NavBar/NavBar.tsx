import React, { useState } from "react"

// Import components
import Signature from "../../components/Signature/Signature"
import NavItems from "../../components/NavItems/NavItems"
import SideDrawerButton from "../../components/SideDrawer/SideDrawerButton/SideDrawerButton"
import BackDrop from "../../components/UI/BackDrop/BackDrop"
import SideDrawer from "../../components/SideDrawer/SideDrawer"

//@ts-ignore
import classes from "./NavBar.module.scss"

interface navbarProps {}

const navBar: React.FC<navbarProps> = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)

  console.log(sideBarOpen)

  const backDropHandler = () => {
    setSideBarOpen(false)
  }

  // Only components are allowerd
  let backDrop: JSX.Element = null
  if (sideBarOpen) {
    backDrop = <BackDrop clickHandler={backDropHandler} />
  }

  return (
    <div className={classes.NavBar}>
      {backDrop}
      <SideDrawer show={sideBarOpen} clickHandler={backDropHandler} />
      {/* Signature */}
      <Signature />
      {/* Menu */}
      <div className={classes.NavBar__desktop}>
        <NavItems isSideDrawerOpen={false} />
      </div>
      {/* SideDrawerButton */}
      <div className={classes.NavBar__mobile}>
        <SideDrawerButton
          clickHandler={() => setSideBarOpen(prevState => !prevState)}
        />
      </div>
    </div>
  )
}

export default navBar
