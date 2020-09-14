// Import packages
import React from "react"
import { useSpring, animated, config } from "react-spring"

// Import classes
import classes from "./Signature.module.scss"

interface signatureProps {}

const signature: React.FC<signatureProps> = () => {
  const props = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
    config: {
      ...config.wobbly,
      duration: 300,
    },
    delay: 300,
  })

  return (
    <animated.div style={props} className={classes.Signature}>
      JoPeCodes
    </animated.div>
  )
}

export default signature
