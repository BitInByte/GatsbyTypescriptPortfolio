//Import libraries
import React from "react"

//Import components

//Import scoped class modules
//@ts-ignore
import classes from "./Year.module.scss"

//Props interface
interface Props {
  year: string
  yearClick: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    year: string
  ) => void
}

//Stateless component
const year: React.FC<Props> = ({ year, yearClick }) => (
  <div className={classes.Year}>
    <p>{year}</p>
    {/* <span onClick={yearClick.bind(null, year)}></span> */}
    <span onClick={e => yearClick(e, year)}></span>
  </div>
)

export default year
