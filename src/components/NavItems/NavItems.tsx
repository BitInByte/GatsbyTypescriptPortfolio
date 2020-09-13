// Import packages
import React from "react"
// import { PageProps } from "gatsby"

// Import components

// Import classes
// import classes from "./NavItems.module.scss"
import classes from "./NavItems.module.scss"

interface navItemsProps {
  isSideDrawerOpen: boolean
}

const navItems: React.FC<navItemsProps> = ({ isSideDrawerOpen }) => {
  const navClasses = [classes.NavBar]
  if (isSideDrawerOpen) navClasses.push(classes.NavBar__sideDrawer)

  return (
    // <nav className={classes.NavBar}>
    <nav className={navClasses.join(" ")}>
      <ul>
        <li>About Me</li>
        <li>My Life</li>
        <li>My Stack</li>
        <li>My Projects</li>
        <li>Contacts</li>
      </ul>
    </nav>
  )
}

export default navItems
