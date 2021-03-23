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
                  tracedSVG
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
        postFormats {
          nodes {
            id
            name
          }
        }
        date
        blocks {
          saveContent
        }
        categories {
          nodes {
            name
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
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
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
}`

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

function postToAlgoliaRecord({ node: { id, url, blocks, date, categories, ...rest } }) {
  let blockContent = [];
  let convertedcategories = categories.nodes;
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
                `categories.name`,
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
]

module.exports = queries