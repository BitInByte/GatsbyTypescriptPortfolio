//Import libraries
import React from "react"
import { useSpring, animated, config } from "react-spring"

//Import components

//Import scoped class modules
//@ts-ignore
import classes from "./LifeContent.module.scss"

// Import Types
import { auxObjType } from "../../../types"

//Props interface
interface Props {
  yearData: auxObjType
}

// Types
// type auxObjType = {
//   date: string
//   html: string
// } | null

//Stateless component
const LifeContent: React.FC<Props> = ({ yearData }) => {
  console.log("render")

  //   const transitions = useTransition(yearData, null, {
  //     from: { opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 },
  //     config: {
  //       duration: 1000,
  //     },
  //     reset: true,
  //   })

  const Props = useSpring({
    from: { opacity: 0, transform: "translateY(-30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      ...config.wobbly,
      duration: 600,
    },
    reset: true,
  })

  return (
    <div className={classes.LifeContent}>
      {/* {yearData &&
        transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <h3>{yearData.date}</h3>
                <div dangerouslySetInnerHTML={{ __html: yearData.html }}></div>
              </animated.div>
            )
        )} */}
      {yearData ? (
        <animated.div style={Props}>
          <h3>{yearData.date}</h3>
          <div dangerouslySetInnerHTML={{ __html: yearData.html }}></div>
        </animated.div>
      ) : null}
    </div>
  )
}

export default LifeContent
