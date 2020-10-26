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
    ...rest,
  }
}

const queries = [
  {
    query: eventQuery,
    transformer: ({ data }) => data.events.edges.map(eventToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`blocksOriginal:20`, `excerpt`], attributesForFaceting: [`categories.name`, `venue.address`, `filterOnly(startDate)`, `filterOnly(endDate)`] },
  },
]

module.exports = queries