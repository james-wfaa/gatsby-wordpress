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
    title: `Wisconsin Alumni Association`,
    description: `Wisconsin Alumni Association`,
    author: `WFAA`,
    siteUrl: 'https://www.uwalumni.com',
  },
  flags: { 
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
   },
  plugins: [
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/*": [
            "Referrer-Policy: strict-origin-when-cross-origin",
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 80,
          breakpoints: [414, 656, 936, 1200, 1440, 1920, 2880],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      }
    },
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
        mode: "async",
        enableListener: true,
        preconnect: ["https://use.typekit.net", "https://cloud.typography.com"],
        web: [
          {
            name: ["Verlag A", "Verlag B"],
            file: "https://cloud.typography.com/7708974/7253032/css/fonts.css",
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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        schema: {
          requestConcurrency: 5, 
          previewRequestConcurrency: 3, 
          perPage: 50,
          typePrefix: `Wp`,
          timeout: 960 * 1000,
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
          Page: { 
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  1000
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
          Event: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  100
                : // and we don't actually need more than 5000 in production for this particular site
                  1000,
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
                  200
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
        baseUrl: process.env.GRAVITYFORMS_SOURCE || "https://uwalumni.wpengine.com",
        exclude: [16], // Array of form IDs. Will exclude these forms.
        // Gravity Forms API
        allowSelfSigned: true,
        api: {
          key: process.env.GRAVITYFORMS_API_KEY,
          secret: process.env.GRAVITYFORMS_API_SECRET,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N733JCS",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        gtmAuth: "23M1DvbFZez0FRrm1LV4wQ",
        gtmPreview: "env-1",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        //routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allWpPage {
            nodes {
              slug
              uri
              modified
            }
          }
          allWpPost {
            nodes {
              slug
              uri
              modified
            }
          }
          allWpEvent {
            nodes {
              slug
              uri
              modified
            }
          }
          allWpClassnote {
            nodes {
              slug
              uri
              modified
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          allWpContentNode(filter: {nodeType: {in: ["Post", "Page", "Event", "Classnote"]}}) {
            nodes {
              ... on WpPost {
                uri
                modifiedGmt
              }
              ... on WpPage {
                uri
                modifiedGmt
              }
              ... on WpEvent {
                uri
                modifiedGmt
              }
              ... on WpClassnote {
                uri
                modifiedGmt
              }
            }
          }
        }
        `,
        resolveSiteUrl: ({ site }) => {
          return site.siteMetadata.siteUrl
        },
        resolvePages: ({
          allSitePage,
          allWpContentNode,
          
        }) => {
          const allPages =  allSitePage.nodes
          const allWpNodes = allWpContentNode.nodes
          
          const wpNodeMap = allWpNodes.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          return allPages.map(page => { 
            return { ...page, ...wpNodeMap[page.path] }
          })
        },
        serialize: ({
          path, 
          modifiedGmt
        }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        }
        
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.uwalumni.com',
        sitemap: 'https://www.uwalumni.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    
     {
       resolve: `gatsby-plugin-algolia`,
       options: {
          appId: process.env.GATSBY_ALGOLIA_APP_ID,
          apiKey: process.env.ALGOLIA_ADMIN_KEY,
          queries: require("./src/utils/algolia-queries"),
          //chunkSize: 10000,
          //settings: {
          //  replicaUpdateMode: 'replace',
          //},
          
          
          enablePartialUpdates: true,
          matchFields: ['slug', 'modified'],
          skipIndexing: (process.env.GATSBY_ALGOLIA_SKIP_INDEX === "true"), // default: false, useful for e.g. preview deploys or local development
          continueOnFailure: (process.env.GATSBY_ALGOLIA_CONTINUE_ON_FAILURE === "true") // default: false, don't fail the build if algolia indexing fails
          
          
          //enablePartialUpdates: false,
          //skipIndexing: false, //(process.env.GATSBY_ALGOLIA_SKIP_INDEX === "true"), // default: false, useful for e.g. preview deploys or local development
          //continueOnFailure: (process.env.GATSBY_ALGOLIA_CONTINUE_ON_FAILURE === "true") // default: false, don't fail the build if algolia indexing fails
          

       },
     },
     
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
