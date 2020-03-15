module.exports = {
  siteMetadata: {
    title: `Gatsby.io`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    keyword: [],
  },
  plugins: [
    `gatsby-plugin-typegen`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icons: [
          {
            src: '/logos/gatsby-icon.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/logos/gatsby-icon.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
        ],
      },
    },
  ],
}
