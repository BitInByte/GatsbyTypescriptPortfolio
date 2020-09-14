//Import libraries
import React from "react"
import { useSpring, animated, config } from "react-spring"

//Import components
import Button from "../UI/Button/Button"
import H1 from "../UI/Typography/Headings/Heading1/Heading1"
import H2 from "../UI/Typography/Headings/Heading2/Heading2"
import Marker from "../UI/Typography/Marker/Marker"
import HeroEmoji from "../UI/Emoji/HeroEmoji"
import TypewritingStrings from "./TypewritingStrings/TypewritingStrings"

//Import scoped class modules
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

  //   const { x } = useSpring({
  //     from: { x: [0] },
  //     x: on ? 1 : 0,
  //   })

  //   const { x }: any = useSpring({
  //     from: { x: 0 },
  //     to: { x: 1 },
  //     config: {
  //       duration: 3000,
  //     },
  //     reset: true,
  //   })

  return (
    <animated.div style={Props} className={classes.Hero}>
      <H1>
        Hello, <HeroEmoji label="Hand">🖐🏼</HeroEmoji>
        {/* Hello,{" "} */}
        {/* <animated.Emoji
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [20, -20, 20, -20, 20, -20, 20, 0],
              })
              .interpolate(x => `rotate(${x}deg)`),
          }}
        >
          Hello
        </animated.Emoji> */}
        {/* <animated.Emoji
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1.1, 0.9, 1.1, 0.9, 1.1, 0.9, 1.1, 0.9],
              })
              .interpolate(x => `scale(${x}px)`),
          }}
          label="Hand"
        >
          🖐🏼
        </animated.Emoji> */}
        {/* Hello,{" "} */}
        {/* <animated.Emoji
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.5, 0.75, 1],
                output: [0, 50, -50, 0, 0],
              })
              .interpolate(x => `rotate(${x}px)`),
          }}
          label="Hand"
        >
          🖐🏼
        </animated.Emoji> */}
      </H1>
      <H2>
        My name is <Marker>João Pedro</Marker>
      </H2>
      <p>
        And I am a{" "}
        <span className={classes.Hero__typewriter}>
          <TypewritingStrings text={strings} />
        </span>
      </p>
      <Button text="Do you wanna discover more about me?" />
      {/* Button => Do you wanna know more about me? */}
    </animated.div>
  )
}

export default hero
