//Import libraries
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//Import components
import Title from "../../components/UI/Typography/Title/Title"

//Import scoped class modules
//@ts-ignore
import classes from "./Contacts.module.scss"

// Types
type query = {
  site: {
    siteMetadata: {
      social: {
        email: string
        twitter: string
        instagram: string
        website: string
        github0: string
        github1: string
      }
    }
  }
}

//Props interface
interface Props {}

//Stateless component
const Contacts: React.FC<Props> = props => {
  const { site }: query = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              email
              twitter
              instagram
              website
              github0
              github1
            }
          }
        }
      }
    `
  )

  return (
    <div className={classes.Contacts}>
      <Title text="Contacts & Socials" />
      <div className={classes.Contacts__content}>
        <p>
          Now that you know a bit more about me, if you wanna get in touch with
          me, you can either use my social networks or drop me an email:
        </p>
        <p>
          <strong>
            <a href={`mailto:${site.siteMetadata.social.email}`}>
              {site.siteMetadata.social.email}
            </a>
          </strong>
        </p>
      </div>
    </div>
  )
}

export default Contacts
