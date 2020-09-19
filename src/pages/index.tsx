import React from "react"

import Layout from "../hoc/Layout/Layout"
import Hero from "../components/Hero/Hero"
import About from "../containers/About/About"
import MyLife from "../containers/MyLife/MyLife"
import Projects from "../containers/Projects/Projects"
import Stack from "../containers/Stack/Stack"
import Contacts from "../containers/Contacts/Contacts"

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
    {/* MyProjects */}
    <section id="projects">
      <Projects />
    </section>
    {/* MyStack */}
    <section id="stack">
      <Stack />
    </section>
    {/* Contacts&Socials */}
    <section id="contacts">
      <Contacts />
    </section>
  </Layout>
)

export default IndexPage
