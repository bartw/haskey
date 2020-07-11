const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Haskey Hasselt`,
    description: `Haskey Hasselt`,
    author: `Bart Wijnants`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-fontawesome-css`,
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
        background_color: fullConfig.theme.colors.royal["100"],
        theme_color: fullConfig.theme.colors.royal["500"],
        display: `minimal-ui`,
        icon: `src/images/haskey.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
