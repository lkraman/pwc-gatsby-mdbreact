module.exports = {
  siteMetadata: {
    title: "Cafe Americana",
    description:
      "Home-style cooking located in Kennett Square, PA and Pike Creek, DE",
    siteUrl: "https://www.cafeamericana.net",
    author: "laura kraman"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cafe Americana`,
        short_name: `Cafe Americana`,
        start_url: `/`,
        background_color: `#0c457d`,
        theme_color: `#8bc34a`,
        display: `standalone`,
        icon: `${__dirname}/src/images/cafeAmericana_logo_PAN_black.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
