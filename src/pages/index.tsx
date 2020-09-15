import React from "react"
import { Link } from "gatsby"

import Layout from "../hoc/Layout/Layout"
import Hero from "../components/Hero/Hero"
import About from "../containers/About/About"
import MyLife from "../containers/MyLife/MyLife"
// import Image from "../components/image"
// import SEO from "../hoc/Seo/Seo"

// Importing styles
import "./index.scss"

interface indexProps {}

const IndexPage: React.FC<indexProps> = () => (
  <Layout>
    {/* Hero */}
    <section id="hero">
      <Hero />
    </section>
    {/* ABOUT ME */}
    <section id="about">
      <About />
    </section>
    {/* MyLife */}
    <section id="mylife">
      <MyLife />
    </section>
    {/* MyStack */}
    {/* MyProjects */}
    {/* Contacts&Socials */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
