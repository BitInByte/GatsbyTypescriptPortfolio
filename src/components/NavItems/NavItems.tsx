// Import packages
import React from "react"
import { useSpring, animated, config } from "react-spring"

// Import components
import NavItem from "./NavItem/NavItem"

// Import classes
//@ts-ignore
import classes from "./NavItems.module.scss"

const Links = [
  {
    text: "About Me",
    link: "about",
  },
  {
    text: "My Life",
    link: "mylife",
  },
  {
    text: "My Projects",
    link: "projects",
  },
  {
    text: "My Stack",
    link: "stack",
  },
  {
    text: "Contacts",
    link: "contacts",
  },
]

type navBarClasses = [string] | [string, string]

interface navItemsProps {
  isSideDrawerOpen: boolean
  clickHandler?: () => void
}

const navItems: React.FC<navItemsProps> = ({
  isSideDrawerOpen,
  clickHandler,
}) => {
  const navClasses: navBarClasses = [classes.NavBar]
  if (isSideDrawerOpen) navClasses.push(classes.NavBar__sideDrawer)

  const props = useSpring({
    from: {
      transform: "translateY(-30px)",
      opacity: 0,
    },
    to: {
      transform: "translateY(0)",
      opacity: 1,
    },
    config: {
      ...config.wobbly,
      duration: 300,
    },
  })

  return (
    <animated.nav style={props} className={navClasses.join(" ")}>
      <ul>
        {Links.map(item => (
          <NavItem
            key={item.link}
            text={item.text}
            link={item.link}
            clickHandler={clickHandler && clickHandler}
          />
        ))}
      </ul>
    </animated.nav>
  )
}

export default navItems
