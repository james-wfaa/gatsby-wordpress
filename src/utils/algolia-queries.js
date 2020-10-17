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
        uri
        url
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

function eventToAlgoliaRecord({ node: { id, blocks, ...rest } }) {
  let blockOriginalContent = [];
  let blockDynamicContent = []
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
    ...rest,
  }
}

const queries = [
  {
    query: eventQuery,
    transformer: ({ data }) => data.events.edges.map(eventToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`blocks.originalContent:20`] },
  },
]

module.exports = queries