import React from "react"

import H2 from "../components/UI/Typography/Headings/Heading2/Heading2"
import SEO from "../hoc/Seo/Seo"

// @ts-ignore
import classes from "./404.module.scss"

const NotFoundPage = () => (
  <>
    <SEO title="Page not found" />
    <div className={classes.Page404}>
      <H2>Nothing to show!</H2>
    </div>
  </>
)

export default NotFoundPage
