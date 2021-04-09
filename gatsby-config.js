require("dotenv").config()

require("dotenv").config({
  path: `.env.GATSBY_CONCURRENT_DOWNLOAD`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
//process.env.WP_DISABLE_POLLING = 1

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteURL: 'https://gatsbyuwalumni.gtsb.io',
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
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "render-blocking",
        web: [
          {
            name: ["Verlag A", "Verlag B"],
            file: "https://cloud.typography.com/7708974/664088/css/fonts.css",
          },
          {
            name: ["mrs-eaves-xl-serif", "mrs-eaves-xl-serif-narrow"],
            file: "https://use.typekit.net/suj0sae.css",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-zendesk-configurable-chat",
      options: {
        appId: "2c7fd0b6-01bb-485c-8353-3e64943b764f",
        enableDuringDevelop: true, // Optional. Disables Zendesk chat widget when running Gatsby dev server. Defaults to true.
        zESettings: {
          webWidget: {
            contactForm: {
              title: {
                '*': 'Ask WAA'
              },
              ticketForms: [ { id: 1260806265410 } ],
              fields: [ { id: 'subject', prefill: { '*': 'WAA Support' } } ]
            },
            chat: {
              departments: {
                enabled: ["WAA Customer Service"],
                select: "WAA Customer Service",
              },
              title: {
                '*': 'Ask WAA'
              },
              prechatForm: {
                greeting: { '*': 'Looking for answers? Check out our FAQ page (uwalumni.com/go/faq) or fill out the form below and we’ll get you connected with a live customer service team member to help you.' },
              },
            },
            launcher: {
              chatLabel: { '*': 'Ask WAA' },
              label: { '*': 'Ask WAA' },
            },
            helpCenter: { suppress: true },
            answerBot: { suppress: true },
          },
        },
      },
    },
    //Uncomment to index to Algolia on gatsby build command
    
     {
       resolve: `gatsby-plugin-algolia`,
       options: {
         appId: process.env.GATSBY_ALGOLIA_APP_ID,
         apiKey: process.env.ALGOLIA_ADMIN_KEY,
         queries: require("./src/utils/algolia-queries")
       },
     },
     
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        schema: {
          requestConcurrency: 5, 
          previewRequestConcurrency: 2, 
          perPage: 50,
          typePrefix: `Wp`,
          timeout: 120 * 1000,
        },
        url:
          process.env.WPGRAPHQL_URL,
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
          allow404Images: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  100
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
          ClassnoteDegree: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  20
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
          Tag: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  20
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
          MediaItem: {
            localFile: {
              requestConcurrency: 50
            }
          },
        },
      },
    },
    {
      resolve: "gatsby-source-gravityforms",
      options: {
        // Base URL needs to include protocol (http/https)
        baseUrl: "https://uwalumni.wpengine.com",
        //include: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], // Array of form IDs. Will only import these forms.
        exclude: [16], // Array of form IDs. Will exclude these forms.
        // Gravity Forms API
        allowSelfSigned: true,
        api: {
          key: "ck_2df05b5d127aa2a3cf4b7163e2190c4e5a80b0f8", //'ck_05467ba5c64789fa4fc2aca5cb13e28baae38617',
          secret: "cs_9bbe6e5dcb8bed64daeb0657543f9894acb500ce", //'cs_b24f465d257bf548d78b5bd6723621babf4e3dfc',
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
