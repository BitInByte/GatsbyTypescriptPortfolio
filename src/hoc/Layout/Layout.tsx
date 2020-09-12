import React from "react"
import { PageProps } from "gatsby"

// Import components
import SEO from "../../hoc/Seo/Seo"

interface layoutProps {}

const Layout: React.FC<PageProps<layoutProps>> = ({ children }) => {
  return (
    <>
      <SEO />
      {/* NAVBAR */}
      <header></header>
      {/* NORMAL CONTENT */}
      <main>{children}</main>
      {/* FOOTER */}
      <footer></footer>
    </>
  )
}

export default Layout
