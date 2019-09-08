require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Haskey`,
    description: `Haskey Hasselt`,
    author: `Bart Wijnants`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Haskey Hasselt`,
        short_name: `Haskey`,
        start_url: `/`,
        background_color: `#266dd3`,
        theme_color: `#353535`,
        display: `minimal-ui`,
        icon: `src/images/haskey.svg`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
