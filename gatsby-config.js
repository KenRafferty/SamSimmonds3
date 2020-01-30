module.exports = {
  siteMetadata: {
    title: `Sam Simmonds Annual Meeting`,
    description: `Welcome to the Annual Sam Simonds meeting hosted by Kingston hospital NHS trust at the Kia Oval.`,
    author: `K Rafferty`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-sass',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#005EB8`,
        theme_color: `#005EB8`,
        display: `minimal-ui`,
        icon: `src/images/simmonds.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
