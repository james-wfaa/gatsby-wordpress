const eventQuery = `{
  events: allWpEvent {
    edges {
      node {
        id
        blocks {
          dynamicContent
          originalContent
        }
        slug
        startDate
        status
        title
        url: uri
        excerpt
        featuredEvent
        date
        startDate
        endDate
        eventDetails {
          eventFullSoldOut
          eventFullText
          eventlocationDetails
          registrationUrl
          questions
          virtualEvent
          trip
        }
        eventsCategories {
          nodes {
            name
            url: uri
          }
        }
        venue {
          id
          address
          city
          country
          date
          excerpt
          featuredImageId
          phone
          slug
          state
          status
        }
        featuredImage {
          node {
            sourceUrl
            localFile {
              childImageSharp {
                fluid {
                  base64
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                  src
                  srcSet
                  aspectRatio
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
}`

const postQuery = `{
  posts: allWpPost {
    edges {
      node {
        id
        url: uri
        title
        excerpt
        postFormats {
          nodes {
            name
            link
            uri
            slug
          }
        }
        linkFormat {
          linkAuthor
          linkUrl
        }
        acfAlternatePostType{
          alternateposttype
        }
        videoFormat {
          vimeoId
        }
        date
        blocks {
          saveContent
        }
        featuredImage {
          node {
            id
            sourceUrl
            localFile {
              childImageSharp {
                fluid {
                  base64
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  originalImg
                  originalName
                  aspectRatio
                }
              }
            }
          }
        }
        categories {
          nodes {
            name
            slug
            id
          }
        }
        products {
          nodes {
            name
            slug
            id
          }
        }
      }
    }
  }
}`

const classNoteQuery = `{
  classnotes: allWpClassnote {
    edges {
      node {
        id
        title
        content
        uri
        link
        date(formatString: "MMM. DD, YYYY")
        excerpt
        author {
          node {
            firstName
            lastName
            name
          }
        }
        featuredImage {
          node {
            caption
            mediaDetails {
              height
              width
            }
            author {
              node {
                name
              }
            }
            localFile {
              id
              publicURL
              childImageSharp {
                fluid {
                  base64
                  srcWebp
                  srcSetWebp
                  originalName
                  originalImg
                  src
                  srcSet
                  sizes
                  aspectRatio
                }
              }
            }
            sourceUrl
          }
        }
        classnoteNotes {
          nodes {
            name
            slug
            description
          }
        }
        classnoteDegrees {
          nodes {
            name
            slug
          }
        }
        alumniNotesFields {
          classnotesAuthor
          classnotesOther
          classnotesSubject
          classnotesUrl
          classnotesUrlname
          fieldGroupName
        }
      }
    }
  }
}`;

const pageQuery = `{
  pages: allWpPage {
    edges {
      node {
      id
      title
      date
      link
      excerpt
      }
    }
  }
}`
const chapterQuery = `{
  chapters: allWpChapter {
    edges {
      node {
        id
        title
        content
        date
        chapterDetails {
          csUrl
        }
      }
    }
  }
}`

function eventToAlgoliaRecord({ node: { id, blocks, date, endDate, startDate, eventsCategories, ...rest } }) {
  let blockOriginalContent = [];
  let blockDynamicContent = [];
  let categories = eventsCategories.nodes;
  let dateTimestamp = new Date(date).getTime() / 1000
  let startDateTimestamp = new Date(startDate).getTime() / 1000
  let endDateTimestamp = new Date(endDate).getTime() / 1000
  if (blocks) {
    blockOriginalContent = blocks.map(block => {
      return block.originalContent
    })
    blockDynamicContent = blocks.map(block => {
      return block.dynamicContent
    })
  }
  return {
    objectID: id,
    blocksOriginal: blockOriginalContent,
    blocksDynamic: blockDynamicContent,
    categories: categories,
    date: dateTimestamp,
    startDate: startDateTimestamp,
    endDate: endDateTimestamp,
    type: 'Event',
    ...rest,
  }
}

function postToAlgoliaRecord({ node: { id, url, blocks, date, categories, products, ...rest } }) {
  let blockContent = [];
  let convertedcategories = categories.nodes;
  let convertedproducts = products.nodes;
  let dateTimestamp = new Date(date).getTime() / 1000
  if (blocks) {
    blockContent = blocks.map(block => {
      return block.saveContent
    })
  }
  return {
    objectID: id,
    url: `/news${url}`,
    blocks: blockContent,
    categories: convertedcategories,
    products: convertedproducts,
    date: dateTimestamp,
    type: 'Post',
    ...rest,
  }
}

function classNoteToAlgoliaRecord({ node: { id, date, link, ...rest } }) {
  let dateTimestamp = new Date(date).getTime() / 1000
  return {
    objectID: id,
    type: "Post",
    url: link,
    date: dateTimestamp,
    categories: [{name: "Classnote"}],
    ...rest,
  }
}

function pageToAlgoliaRecord({node: { id, date, link, ...rest}}) {
  let dateTimestamp = new Date(date).getTime() / 1000
  return {
    objectID: id,
    type: "Page",
    url: link,
    date: dateTimestamp,
    ...rest,
  }
}

function chapterToAlgoliaRecord({node: { id, date, link, chapterDetails, ...rest}}) {
  const chapterUrl = chapterDetails?.csUrl
  let dateTimestamp = new Date(date).getTime() / 1000
  return {
    objectID: id,
    type: "Chapter",
    url: chapterUrl,
    date: dateTimestamp,
    ...rest,
  }
}

const queries = [
    {
        query: eventQuery,
        transformer: ({ data }) => data.events.edges.map(eventToAlgoliaRecord),
        indexName: `All`,
        settings: {
            attributesToSnippet: [`blocksOriginal:20`, `excerpt`],
            attributesForFaceting: [
                `categories.name`,
                `venue.address`,
                `type`,
                `filterOnly(startDate)`,
                `filterOnly(endDate)`,
            ],
        },
    },
    {
        query: postQuery,
        transformer: ({ data }) => data.posts.edges.map(postToAlgoliaRecord),
        indexName: `All`,
        settings: {
            attributesToSnippet: [`blocks:40`],
            attributesForFaceting: [
                `categories.slug`,
                `products.slug`,
                `type`,
                `filterOnly(date)`,
            ],
        },
    },
    {
        query: classNoteQuery,
        transformer: ({ data }) =>
            data.classnotes.edges.map(classNoteToAlgoliaRecord),
        indexName: `All`,
        settings: {
            attributesToSnippet: [`blocks:40`],
            attributesForFaceting: [
                `categories.name`,
                `type`,
                `filterOnly(date)`,
            ],
        },
    },
    {
        query: pageQuery,
        transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
        indexName: `All`,
        settings: {
            attributesForFaceting: [`type`, `filterOnly(date)`],
        },
    },
    {
      query: chapterQuery,
      transformer: ({ data }) => data.pages.edges.map(chapterToAlgoliaRecord),
      indexName: `All`,
      settings: {
          attributesForFaceting: [`type`, `filterOnly(date)`],
      },
  },
]

module.exports = queries