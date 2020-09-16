//Import libraries
import React from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

//Import components

//Import scoped class modules
///@ts-ignore
import classes from "./Image.module.scss"

//Props interface
interface Props {
  imagePath: string
}

//Stateless component
const Image: React.FC<Props> = ({ imagePath }) => {
  //   let img: JSX.Element | null = null

  // const data = useStaticQuery(
  //     graphql`
  //   query($imagePath: ${imagePath}) {
  //     placeholderImage: file(relativePath: { eq: $imagePath }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, quality: 80) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <div className={classes.Image}>
      <div className={classes.Image__wrapper}>
        {
          <StaticQuery
            query={graphql`
              query {
                images: allFile(
                  filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
                ) {
                  edges {
                    node {
                      extension
                      relativePath
                      childImageSharp {
                        fluid(maxWidth: 1000, quality: 80) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={({ images }) => {
              const image = images.edges.find(
                image => image.node.relativePath === imagePath
              )
              //   console.log(image)

              if (!image) {
                return null
              } else {
                return (
                  <Img
                    className={classes.Image__img}
                    fluid={image.node.childImageSharp.fluid}
                  />
                )
              }
            }}
          />
        }
        {/* <Img
          className={classes.Image__img}
          fluid={data.placeholderImage.childImageSharp.fluid}
        /> */}
      </div>
    </div>
  )
}

export default Image
