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
        background_color: `#f5efe1`,
        theme_color: `#7f9c52`,
        display: `standalone`,
        icon: `${__dirname}/src/images/CafeAmericana_logo_PAN_black1.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
