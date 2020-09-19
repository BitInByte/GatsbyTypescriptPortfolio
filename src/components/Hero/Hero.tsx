//Import libraries
import React from "react"
import { useSpring, animated, config } from "react-spring"
import { Link } from "react-scroll"

//Import components
import Button from "../UI/Button/Button"
import H1 from "../UI/Typography/Headings/Heading1/Heading1"
import H2 from "../UI/Typography/Headings/Heading2/Heading2"
import Marker from "../UI/Typography/Marker/Marker"
import HeroEmoji from "../UI/Emoji/HeroEmoji"
import TypewritingStrings from "./TypewritingStrings/TypewritingStrings"

//Import scoped class modules
//@ts-ignore
import classes from "./Hero.module.scss"

const strings = [
  "software engineer student",
  "front-end self-taught",
  "electronic enthusiastic",
  "eSports lover",
]

//Props interface
interface Props {}

//Stateless component
const hero: React.FC<Props> = props => {
  const Props = useSpring({
    from: { opacity: 0, transform: "translateY(-30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      ...config.wobbly,
      duration: 600,
    },
  })
  return (
    <animated.div style={Props} className={classes.Hero}>
      <H1>
        Hello, <HeroEmoji label="Hand">🖐🏼</HeroEmoji>
      </H1>
      <H2>
        My name is <Marker>João Pedro</Marker>
      </H2>
      <div>
        And I am a{" "}
        <span className={classes.Hero__typewriter}>
          <TypewritingStrings text={strings} />
        </span>
      </div>
      <Link to="about" spy={true} smooth={true}>
        <Button text="Do you wanna discover more about me?" />
      </Link>
    </animated.div>
  )
}

export default hero
