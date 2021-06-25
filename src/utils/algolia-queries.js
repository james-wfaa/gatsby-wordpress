
const eventQuery = `{
  events: allWpEvent {
    edges {
      node {
        id
        blocks {
          dynamicContent
          originalContent
        }
        modified
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
          timeZoneInfoFreeText
        }
        eventsCategories {
          nodes {
            name
            url: uri
            slug
          }
        }
        products {
          nodes {
            name
            slug
            id
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
                gatsbyImageData(layout: CONSTRAINED, width: 712)
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
        modified
        slug
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
                gatsbyImageData(layout: CONSTRAINED, width: 712)
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
        modified
        slug
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
                gatsbyImageData(layout: CONSTRAINED, width: 712)
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
      blocks {
        saveContent
      }
      date
      link
      excerpt
      modified
      slug
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
        modified
        slug
      }
    }
  }
}`

function eventToAlgoliaRecord({ node: { id, blocks, date, endDate, startDate, eventDetails, products, eventsCategories, ...rest } }) {
  let blockOriginalContent = [];
  let blockDynamicContent = [];
  let categories = eventsCategories.nodes;
  let convertedproducts = products.nodes;
  let dateTimestamp = new Date(date).getTime() / 1000
  let startDateTimestamp = new Date(startDate).getTime() / 1000
  let endDateTimestamp = new Date(endDate).getTime() / 1000
  let isTrip = eventDetails.trip
  let formattedLongDate = null

  const startDateDate = startDate 
    ? (typeof startDate !== 'string')
      ? new Date(startDate)
      : new Date(startDate.replace(/\s/, 'T'))
    : null

  const endDateDate = endDate 
    ? (typeof endDate !== 'string')
      ? new Date(endDate)
      : new Date(endDate.replace(/\s/, 'T'))
    : null

  const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
  "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
];
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let parsedStartDate = startDate ? new Date(startDate).toLocaleDateString('en-US', options) : null
let parsedEndDate = endDate ? new Date(endDate).toLocaleDateString('en-US', options) : null


/*
  let parsedStartDate = startDateDate 
    ? monthNames[startDateDate.getMonth()] + ' ' + startDateDate.getDate()
    : null
  let parsedEndDate = endDateDate 
    ? monthNames[endDateDate.getMonth()] + ' ' + endDateDate.getDate()
    : null
    */

 
  let parsedTime = null

  const { timeZoneInfoFreeText } = eventDetails

  const startDS = startTime ? new Date(startTime.replace(/\s/, 'T')) : null;
  const endDS = endTime ? new Date(endTime.replace(/\s/, 'T')) : null;
  

  if(isTrip){
    if(endDate){
      formattedLongDate = parsedStartDate + " - " + parsedEndDate
    }
    else{
      formattedLongDate = parsedStartDate
    }
  }
  else{
    if(startDS && endDS && startDS.getDate() === endDS.getDate()){

      function formatAMPM ({date}) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
      
        let strTime = hours
        if(minutes && minutes !== '00'){
          strTime += ':' + minutes;
        }
        const timeObj = [{
          time: strTime,
          ampm: ampm,
        }]
        return timeObj;
      }
  
      const fmtStartTime = formatAMPM(startDS);
      const fmtEndTime = formatAMPM(endDS);
      parsedTime = (fmtStartTime[0].ampm === fmtEndTime[0].ampm)
        ? fmtStartTime[0].time  + '&ndash;' + fmtEndTime[0].time + ' ' + fmtEndTime[0].ampm
        : fmtStartTime[0].time + ' ' + fmtStartTime[0].ampm + '&ndash;' + fmtEndTime[0].time + ' ' + fmtEndTime[0].ampm
      
      formattedLongDate = `${parsedStartDate}, ${parsedTime} ${timeZoneInfoFreeText}`
    }
    
    else{
      formattedLongDate = parsedStartDate
    }
  }
  if (blocks) {
    blockOriginalContent = blocks.map(block => {
      return block.originalContent
    })
    blockDynamicContent = blocks.map(block => {
      return block.dynamicContent
    })
  }


  const type = isTrip ? 'Trips' : 'Events'
  const typeIndex = isTrip ? 2 : 1

  return {
    objectID: id,
    blocksOriginal: blockOriginalContent,
    blocksDynamic: blockDynamicContent,
    categories: categories,
    products: convertedproducts,
    date: dateTimestamp,
    startDate: startDateTimestamp,
    endDate: endDateTimestamp,
    formattedStartDate: parsedStartDate,
    formattedEndDate: parsedEndDate,
    formattedLongDate: formattedLongDate,
    eventDetails: eventDetails,
    type: type,
    typeIndex: typeIndex,
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
    type: 'News & Stories',
    typeIndex: 5,
    ...rest,
  }
}

function classNoteToAlgoliaRecord({ node: { id, date, link, classnoteNotes, ...rest } }) {
  let dateTimestamp = new Date(date).getTime() / 1000
  return {
    objectID: id,
    type: "Alumni Notes",
    typeIndex: 6,
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
    type: "Pages",
    typeIndex: 3,
    url: link,
    date: dateTimestamp,
    ...rest,
  }
}

function chapterToAlgoliaRecord({node: { id, date, link, chapterDetails, ...rest}}) {
  const { csUrl } = chapterDetails
  let dateTimestamp = new Date(date).getTime() / 1000
  return {
    objectID: id,
    type: "Chapters",
    typeIndex: 4,
    url: csUrl,
    date: dateTimestamp,
    ...rest,
  }
}

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.edges.map(postToAlgoliaRecord),
    indexName: `All`,
  },
  {
      query: eventQuery,
      transformer: ({ data }) => data.events.edges.map(eventToAlgoliaRecord),
      indexName: `All`,
  },
  {
      query: classNoteQuery,
      transformer: ({ data }) =>
          data.classnotes.edges.map(classNoteToAlgoliaRecord),
      indexName: `All`,
  },
  {
      query: pageQuery,
      transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
      indexName: `All`,
  },
  {
    query: chapterQuery,
    transformer: ({ data }) => data.chapters.edges.map(chapterToAlgoliaRecord),
    indexName: `All`,
  },
]

module.exports = queries