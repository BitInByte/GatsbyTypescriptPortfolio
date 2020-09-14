// Import packages
import React from "react"
import { useSpring, animated, config } from "react-spring"
// import { Link } from "gatsby"

// Import components
import NavItem from "./NavItem/NavItem"

// Import classes
import classes from "./NavItems.module.scss"

const Links = [
  {
    text: "About Me",
    link: "about",
  },
  {
    text: "My Life",
    link: "life",
  },
  {
    text: "My Stack",
    link: "stack",
  },
  {
    text: "My Projects",
    link: "projects",
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

  // TODO Change this to useTrail to animate it one by one https://codesandbox.io/embed/zn2q57vn13

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

  // const trail = useTrail(Links.length, {
  //   config: {
  //     ...config.wobbly,
  //     duration: 300,
  //   },
  //   from: { transform: "translateY(-30px)", opacity: 0 },
  //   to: { transform: "translateY(0)", opacity: 1 },
  // })

  return (
    // <nav className={classes.NavBar}>
    <animated.nav style={props} className={navClasses.join(" ")}>
      {/* <animated.nav className={navClasses.join(" ")}> */}
      <ul>
        {Links.map(item => (
          <NavItem
            key={item.link}
            text={item.text}
            link={item.link}
            clickHandler={clickHandler && clickHandler}
          />
        ))}
        {/* <li>About Me</li>
        <li>My Life</li>
        <li>My Stack</li>
        <li>My Projects</li>
        <li>Contacts</li> */}
      </ul>
    </animated.nav>
  )
}

export default navItems
