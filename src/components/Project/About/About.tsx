//Import libraries
import React from "react"

//Import components
import Button from "../../UI/Button/Button"

//Import scoped class modules
//@ts-ignore
import classes from "./About.module.scss"

//Props interface
interface Props {
  title: string
  html: string
  sourceLink: string
}

//Stateless component
const About: React.FC<Props> = ({ title, html, sourceLink }) => (
  <div className={classes.About}>
    <h3>{title}</h3>
    <div
      className={classes.About__content}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
    <a
      href={sourceLink}
      aria-label="Source code"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button text="Source" />
    </a>
  </div>
)

export default About
