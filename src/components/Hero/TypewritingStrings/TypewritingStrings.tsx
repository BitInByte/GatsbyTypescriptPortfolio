//Import libraries
import React from "react"
import Typewriter from "typewriter-effect"

//Import components

//Import scoped class modules
//import classes from './TypewritingStrings.module.css';

//Props interface
interface Props {
  text: string[]
}

//Stateless component
const typewritingStrings: React.FC<Props> = ({ text }) => (
  <Typewriter
    options={{
      strings: [...text],
      autoStart: true,
      loop: true,
      delay: 50,
    }}
  />
)

export default typewritingStrings
