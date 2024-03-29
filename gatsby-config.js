/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Archipielago`,
    description: `Find Alex Santafé's, award-winning artist and creative director, recent illustration portfolio.`,
    author: `Alex Santafe`,
    siteUrl: `https://alexsantafe.com`,
    social: {
      twitter: `alex_santafe`,
      linkedin: `alex_santafe`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Hanken Grotesk"],
          urls: ["../fonts/font.css"],
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/gallery`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    /*{
      resolve: `gatsby-transformer-sharp`,
      options: {
        formats: [`auto`, `webp`],
        placeholder: `dominantColor`,
      },
    },*/
    //`gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 75,
          breakpoints: [250, 600, 1920],
          //backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/Aflag.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
