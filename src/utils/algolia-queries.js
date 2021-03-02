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

function postToAlgoliaRecord({ node: { id, blocks, date, categories, ...rest } }) {
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
    blocks: blockContent,
    categories: convertedcategories,
    date: dateTimestamp,
    type: 'Post',
    ...rest,
  }
}

const queries = [
  {
    query: eventQuery,
    transformer: ({ data }) => data.events.edges.map(eventToAlgoliaRecord),
    indexName: `All`,
    settings: { attributesToSnippet: [`blocksOriginal:20`, `excerpt`], attributesForFaceting: [`categories.name`, `venue.address`, `type`, `filterOnly(startDate)`, `filterOnly(endDate)`] },
  },
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.edges.map(postToAlgoliaRecord),
    indexName: `All`,
    settings: { attributesToSnippet: [`blocks:40`], attributesForFaceting: [`categories.name`, `type`, `filterOnly(date)`] },
  },
]

module.exports = queries