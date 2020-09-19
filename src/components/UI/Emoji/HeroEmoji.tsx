//Import libraries
import React from "react"
import { useSpring, animated } from "react-spring"

//Import scoped class modules
//@ts-ignore
import classes from "./HeroEmoji.module.scss"

//Props interface
interface Props {
  label?: string
  children: string
}

//Stateless component
const heroEmoji: React.FC<Props> = ({ children, label }) => {
  const { x }: any = useSpring({
    from: { x: 0 },
    to: { x: 1 },
    config: {
      duration: 2500,
      delay: 300,
    },
    reset: true,
  })

  return (
    <animated.span
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
      className={classes.HeroEmoji}
      style={{
        transform: x
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [20, -20, 20, -20, 20, -20, 20, 0],
          })
          .interpolate(x => `rotate(${x}deg)`),
      }}
    >
      {children}
    </animated.span>
  )
}

export default heroEmoji
