//Import libraries
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faInstagramSquare,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

//Import components
import Title from "../../components/UI/Typography/Title/Title"
import SocialButton from "../../components/UI/SocialButton/SocialButton"

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
      <div className={classes.Contacts__social}>
        <a
          href={site.siteMetadata.social.twitter}
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialButton>
            <FontAwesomeIcon
              icon={faTwitterSquare}
              className={[
                classes.Contacts__icon,
                classes.Contacts__icon_twitter,
              ].join(" ")}
            />
          </SocialButton>
        </a>
        <a
          href={site.siteMetadata.social.instagram}
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialButton>
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className={[
                classes.Contacts__icon,
                classes.Contacts__icon_instagram,
              ].join(" ")}
            />
          </SocialButton>
        </a>
        <a
          href={site.siteMetadata.social.instagram}
          aria-label="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialButton>
            <FontAwesomeIcon
              icon={faLinkedin}
              className={[
                classes.Contacts__icon,
                classes.Contacts__icon_linkedin,
              ].join(" ")}
            />
          </SocialButton>
        </a>
        <a
          href={site.siteMetadata.social.github0}
          aria-label="Github WebDev account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialButton>
            <FontAwesomeIcon
              icon={faGithubSquare}
              className={[
                classes.Contacts__icon,
                classes.Contacts__icon_github,
              ].join(" ")}
            />
          </SocialButton>
        </a>
        <a
          href={site.siteMetadata.social.github1}
          aria-label="Github School account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialButton>
            <FontAwesomeIcon
              icon={faGithubSquare}
              className={[
                classes.Contacts__icon,
                classes.Contacts__icon_github,
              ].join(" ")}
            />
          </SocialButton>
        </a>
      </div>
    </div>
  )
}

export default Contacts
