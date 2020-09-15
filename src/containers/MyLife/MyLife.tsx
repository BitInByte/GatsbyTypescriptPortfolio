//Import libraries
import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

//Import components
import Title from "../../components/UI/Typography/Title/Title"
import ChronologicalLife from "../../components/ChronologicalLife/ChronologicalLife"
import LifeContent from "../../components/ChronologicalLife/LifeContent/LifeContent"

//Import scoped class modules
//@ts-ignore
import classes from "./MyLife.module.scss"

// const Years = ["1998", "2000", "2003", "2006", "2011", "2015"]
// const Years = ["1998", "2000", "2003", "2006", "2011", "2015"]

// Types
type yearState = null | string
type auxObjType = {
  date: string
  html: string
} | null

type dataBlockType = {
  node: { frontmatter: { date: number }; html: string }
}[]

type query = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            date: number
          }
          html: string
        }
      }
    ]
  }
}

//Props interface
interface Props {}

//Stateless component
const MyLife: React.FC<Props> = props => {
  const data: query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { keyword: { eq: "mylife" } } }
        sort: { fields: frontmatter___date, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              date
            }
            html
          }
        }
      }
    }
  `)

  console.log(data)

  const [selectedYear, setSelectedYear] = useState<yearState>(null)
  //   const [yearData, setYearData] = useState(null)

  const Years: string[] = []

  data.allMarkdownRemark.edges.map(item => {
    Years.push(item.node.frontmatter.date.toString())
  })

  console.log(Years)

  console.log(selectedYear)
  //   console.log(yearData)

  const yearClickHandler = (
    _: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    year: string
  ) => {
    console.log(year)
    setSelectedYear(year)
  }

  let auxObj: auxObjType = null

  if (selectedYear) {
    const result = data.allMarkdownRemark.edges.filter(
      item => item.node.frontmatter.date.toString() === selectedYear
    )

    console.log("@@@@@Result")

    console.log(result)

    const dataBlock: dataBlockType = data.allMarkdownRemark.edges.filter(
      item => item.node.frontmatter.date.toString() === selectedYear
    )

    auxObj = {
      date: dataBlock[0].node.frontmatter.date.toString(),
      html: dataBlock[0].node.html,
    }

    console.log(auxObj)

    // setYearData(auxObj)
  }

  return (
    <div className={classes.MyLife}>
      <Title text="My Life" />
      <div className={classes.MyLife__lifeWrapper}>
        <ChronologicalLife years={Years} click={yearClickHandler} />
        <div className={classes.MyLife__content}>
          <LifeContent yearData={auxObj} />
        </div>
      </div>
    </div>
  )
}

export default MyLife
