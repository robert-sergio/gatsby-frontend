/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: `gatsby_template`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: "your-website-bucket",
      },
    },
  ]
};