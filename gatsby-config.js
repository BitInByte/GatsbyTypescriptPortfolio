require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    // title: `Gatsby Default Starter`,
    title: `JoPeCodes | Personal Portfolio`,
    description: `My personal porfolio talking a bit about me and all of my projects`,
    author: `João Pedro`,
    social: {
      website: "www.jopecodes.com",
      email: "contact@jopecodes.com",
      twitter: "https://twitter.com/BitInByte2",
      instagram: "https://instagram.com/bitinbyte",
      linkedin: "https://www.linkedin.com/in/jopecodes",
      github0: "https://github.com/BitInByte",
      github1: "https://github.com/JayFoxFoxy",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: `${__dirname}/src/assets/Images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JoPeCodes | Personal Portfolio`,
        short_name: `JoPeCodes`,
        start_url: `/`,
        background_color: `#181f23`,
        theme_color: `#181f23`,
        display: `minimal-ui`,
        icon: `src/assets/Images/logo.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    `gatsby-transformer-remark`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
