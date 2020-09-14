//Import libraries
import React from "react"
import { Link } from "react-scroll"

//Import components

//Import scoped class modules
//import classes from './NavItem.module.css';

//Props interface
interface Props {
  text: string
  link: string
  clickHandler?: () => void
}

//Stateless component
const NavItem: React.FC<Props> = ({ text, link, clickHandler }) => (
  <li>
    <Link
      to={link}
      spy={true}
      smooth={true}
      onClick={clickHandler && clickHandler}
    >
      {text}
    </Link>
  </li>
)

export default NavItem
