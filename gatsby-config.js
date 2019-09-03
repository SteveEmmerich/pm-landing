module.exports = {
  siteMetadata: {
    title: `Widdle Tech Inc.`,
    description: `Pool masters application landing page. Discover a better way to manage your pool service clients.`,
    author: `WiddleTechInc.`,
    siteUrl: `https://poolmasters.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-M5C59B1S1L",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://devdad.us17.list-manage.com/subscribe/post?u=a48777f048fb57a420e7edad6&amp;id=78e36f77df`,
      },
    },
  ],
}
