import React from "react"

// Import classes
import classes from "./Signature.module.scss"

interface signatureProps {}

const signature: React.FC<signatureProps> = () => (
  <div className={classes.Signature}>JoPeCodes</div>
)

export default signature
