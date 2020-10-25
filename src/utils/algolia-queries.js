const indexName = `Events`

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
      }
    }
  }
}`

function eventToAlgoliaRecord({ node: { id, blocks, eventsCategories, ...rest } }) {
  let blockOriginalContent = [];
  let blockDynamicContent = [];
  let categories = eventsCategories.nodes;
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
    ...rest,
  }
}

const queries = [
  {
    query: eventQuery,
    transformer: ({ data }) => data.events.edges.map(eventToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`blocksOriginal:20`, `excerpt`] },
  },
]

module.exports = queries