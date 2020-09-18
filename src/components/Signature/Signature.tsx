// Import packages
import React from "react"
import { useSpring, animated, config } from "react-spring"

// Import classes
// @ts-ignore
import classes from "./Signature.module.scss"

interface signatureProps {
  isFooter?: boolean
}

const signature: React.FC<signatureProps> = ({ isFooter }) => {
  const signatureClasses: string[] = [classes.Signature]
  if (isFooter) {
    signatureClasses.push(classes.Signature__footer)
  }

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
    <animated.div style={props} className={signatureClasses.join(" ")}>
      JoPeCodes
    </animated.div>
  )
}

export default signature
