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
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        resolvePages: ({
          allSitePage,
          allWpContentNode,
          
        }) => {
          const allPages =  allSitePage.nodes
          const allWpNodes = allWpContentNode.nodes
          //const allWpEvents = allWpEvent.nodes
          //const allWpClassnotes = allWpClassnote.nodes
          //const allWpPosts = allWpPost.nodes
          //const allWpPages = allWpPage.nodes

          /*
          const posts = allWpPosts.map((p) => p.uri.replace(/\//g,''))
          const pages = allWpPages.map((p) => p.uri)
          const events = allWpEvents.map((e) => e.slug.replace(/\//g,''))
          const classnotes = allWpClassnotes.map((c) => c.slug.replace(/\//g,''))
          */

          const wpNodeMap = allWpNodes.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          /*
          const wpEventMap = allWpEvents.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          const wpClassnoteMap = allWpClassnotes.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          const wpPostMap = allWpPosts.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          const wpPageMap = allWpPages.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})
          */

          return allPages.map(page => { 
            /*
            const slug = page.path.split(`/`)[2]
            const prefix = page.path.split(`/`)[1]
            const postIndex = (prefix === "news")
              ? posts.indexOf(slug)
              : -1
            const eventIndex = (prefix === "events")
              ? events.indexOf(slug)
              : -1
            const classnoteIndex = (prefix === "alumni-notes")
              ? classnotes.indexOf(slug)
              : -1
            const pageIndex = pages.indexOf(node.path)

            if (postIndex >= 0) {
              //change = allWpPost.nodes[postIndex].modified.substring(0,10)  
              return { ...page, ...wpPostMap[page.path] }
            } else if (pageIndex >= 0) {
              //change = allWpPage.nodes[pageIndex].modified.substring(0,10)
              return { ...page, ...wpPageMap[page.path] }
            } else if (eventIndex >= 0) {
              //change = allWpEvent.nodes[eventIndex].modified.substring(0,10)
              return { ...page, ...wpEventMap[page.path] }
            } else if (classnoteIndex >= 0) {    
              //change = allWpClassnote.nodes[classnoteIndex].modified.substring(0,10)
              return { ...page, ...wpClassnoteMap[page.path] }
            }
            */

            return { ...page, ...wpNodeMap[page.path] }
          })
        },
        serialize: ({
          path, 
          modifiedGmt
        }) => {
          /*
          // https://www.gatsbyjs.com/blog/fs-route-api/ FAQs about pageContext
          // turn fetch feature post and pages data to arrays of their slugs
          const posts = allWpPost.nodes.map((p) => p.uri.replace(/\//g,''))
          const pages = allWpPage.nodes.map((p) => p.uri)
          const events = allWpEvent.nodes.map((e) => e.slug.replace(/\//g,''))
          const classnotes = allWpClassnote.nodes.map((c) => c.slug.replace(/\//g,''))
          
          return allSitePage.nodes.map((node) => {
            let change = new Date()
            const slug = node.path.split(`/`)[2]
            const prefix = node.path.split(`/`)[1]
            const postIndex = (prefix === "news")
            ? posts.indexOf(slug)
            : -1
            const eventIndex = (prefix === "events")
                ? events.indexOf(slug)
                : -1
            const classnoteIndex = (prefix === "alumni-notes")
                ? classnotes.indexOf(slug)
                : -1
            const pageIndex = pages.indexOf(node.path)
            if (postIndex >= 0) {
              change = allWpPost.nodes[postIndex].modified.substring(0,10)  
            } else if (pageIndex >= 0) {
              change = allWpPage.nodes[pageIndex].modified.substring(0,10)
            } else if (eventIndex >= 0) {
              change = allWpEvent.nodes[eventIndex].modified.substring(0,10)
            } else if (classnoteIndex >= 0) {    
              change = allWpClassnote.nodes[classnoteIndex].modified.substring(0,10)
            }
            // if nothing found then the default of build time date is used.
            //console.log(node)
            return ({
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              lastmod: `${change}`,
            })
          })
          */
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
          enablePartialUpdates: false,
          //matchFields: ['slug', 'modified'],
          skipIndexing: false, //(process.env.GATSBY_ALGOLIA_SKIP_INDEX === "true"), // default: false, useful for e.g. preview deploys or local development
          continueOnFailure: false, //(process.env.GATSBY_ALGOLIA_CONTINUE_ON_FAILURE === "true") // default: false, don't fail the build if algolia indexing fails
       },
     },
     
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
