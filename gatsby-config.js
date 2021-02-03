require("dotenv").config()

require("dotenv").config({
  path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/ // See below to configure properly
        }
      }
    },
    // Uncomment to index to Algolia on gatsby build command
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries: require("./src/utils/algolia-queries")
    //   },
    // },
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        schema: {
          requestConcurrency: 2, // currently set to undefined
          previewRequestConcurrency: 2, // currently set to undefined
          perPage: 50,
        },
        url:
          process.env.WPGRAPHQL_URL ||
          `https://uwalumni.wpengine.com/graphql`,
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        production: {
          allow404Images: true
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
          Classnote: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  20
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-gravityforms',
      options: {
          // Base URL needs to include protocol (http/https)
          baseUrl: 'https://uwalumni.wpengine.com',
          include: [1,2,3,4,5,6,7,8,9,10], // Array of form IDs. Will only import these forms.
          //exclude: [], // Array of form IDs. Will exclude these forms.
          // Gravity Forms API
          allowSelfSigned: true,
          api: {
              key: 'ck_2df05b5d127aa2a3cf4b7163e2190c4e5a80b0f8', //'ck_05467ba5c64789fa4fc2aca5cb13e28baae38617',
              secret: 'cs_9bbe6e5dcb8bed64daeb0657543f9894acb500ce', //'cs_b24f465d257bf548d78b5bd6723621babf4e3dfc',
          },
      },
  },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cache`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
