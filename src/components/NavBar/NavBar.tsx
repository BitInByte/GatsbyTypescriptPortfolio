import React from "react"
import { PageProps } from "gatsby"

// Import components
import Signature from "../Signature/Signature"
import NavItems from "../NavItems/NavItems"

import classes from "./NavBar.module.scss"

interface navbarProps {}

// const navBar: React.FC<PageProps<navbarProps>> = () => {
// const navBar: React.FC<PageProps> = () => {
const navBar: React.FC<navbarProps> = () => {
  return (
    <div className={classes.NavBar}>
      {/* Signature */}
      <Signature />
      {/* Menu */}
      <NavItems />
    </div>
  )
}

export default navBar
