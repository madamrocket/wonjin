module.exports = {
  siteMetadata: {
    title: `원진물류`,
    description: `세상은 점점 물류에 더 많은 것을 기대하고, 그 기대는 시시각각 변하고 있습니다. 그 기대를 만족시킬 물류의 새로운 길, 지금 원진물류를 만나보세요.`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typegen`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
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
      },
    },
  ],
}
