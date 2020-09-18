//Import libraries
import React from "react"

//Import components
import NavBar from "../../components/NavItems/NavItems"
import Signature from "../Signature/Signature"

//Import scoped class modules
//@ts-ignore
import classes from "./Footer.module.scss"

//Props interface
interface Props {}

//Stateless component
const Footer: React.FC<Props> = props => (
  <div className={classes.Footer}>
    <NavBar isSideDrawerOpen={false} />
    <Signature isFooter />
    <p>Developed by &copy; João Pedro</p>
  </div>
)

export default Footer
