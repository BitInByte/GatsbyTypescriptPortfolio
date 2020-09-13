// Import packages
import React from "react"
// import { PageProps } from "gatsby"

// Import components

// Import classes
// import classes from "./NavItems.module.scss"
import * as classes from "./NavItems.module.scss"

interface navItemsProps {}

const navItems: React.FC<navItemsProps> = () => (
  <nav className={classes.NavBar}>
    <ul>
      <li>About Me</li>
      <li>My Life</li>
      <li>My Stack</li>
      <li>My Projects</li>
      <li>Contacts</li>
    </ul>
  </nav>
)

export default navItems
