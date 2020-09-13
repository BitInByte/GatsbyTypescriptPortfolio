import React from "react"
import { PageProps } from "gatsby"

// Import components
import SEO from "../../hoc/Seo/Seo"
import NavBar from "../../components/NavBar/NavBar"

// Import classes
import classes from "./Layout.module.scss"

interface layoutProps {}

const Layout: React.FC<PageProps<layoutProps>> = ({ children }) => {
  return (
    <>
      <SEO />
      {/* NAVBAR */}
      <header className={classes.Layout__header}>
        <NavBar />
      </header>
      {/* NORMAL CONTENT */}
      <main>{children}</main>
      {/* FOOTER */}
      <footer></footer>
    </>
  )
}

export default Layout
