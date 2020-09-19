//Import libraries
import React from "react"

//Import components
import Year from "./Year/Year"

//Import scoped class modules
//@ts-ignore
import classes from "./ChronologicalLife.module.scss"

//Props interface
interface Props {
  years: string[]
  click: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    year: string
  ) => void
}

//Stateless component
const chronologicalLife: React.FC<Props> = ({ years, click }) => (
  <div className={classes.ChronologicalLife}>
    {years.map(year => (
      <Year key={year} year={year} yearClick={click} />
    ))}
  </div>
)

export default chronologicalLife
