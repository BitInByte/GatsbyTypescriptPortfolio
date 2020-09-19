//Import libraries
import React from "react"

//Import components
import Image from "../Image/Image"
import About from "./About/About"

//Import scoped class modules
//@ts-ignore
import classes from "./Project.module.scss"

// Types
type imageClassArray = [string, string] | [string]

//Props interface
interface Props {
  projectData: {
    title: string
    sourceLink: string
    liveLink: string
    image: string
    html: string
  }
  changePosition: boolean
}

//Stateless component
const Project: React.FC<Props> = ({ projectData, changePosition }) => {
  const imageClass: imageClassArray = [classes.Project__image]

  if (changePosition) {
    imageClass.push(classes.Project__image_order)
  }

  return (
    <div className={classes.Project}>
      <div className={imageClass.join(" ")}>
        <a
          href={projectData.liveLink}
          aria-label="Project Image"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image imagePath={projectData.image} />
        </a>
      </div>
      <div className={classes.Project__about}>
        <About
          title={projectData.title}
          html={projectData.html}
          sourceLink={projectData.sourceLink}
        />
      </div>
    </div>
  )
}

export default Project
