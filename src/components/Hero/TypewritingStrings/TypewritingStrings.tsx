//Import libraries
import React from "react"

// @ts-ignore
import Typewriter from "typewriter-effect"

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
