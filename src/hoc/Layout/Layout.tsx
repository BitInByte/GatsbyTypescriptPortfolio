import React from "react"

// Import components
import SEO from "../../hoc/Seo/Seo"
import NavBar from "../../containers/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"

// Import classes
//@ts-ignore
import classes from "./Layout.module.scss"

interface layoutProps {}

const Layout: React.FC = ({ children }) => {
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
      <footer className={classes.Layout__footer}>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
