
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

function eventToAlgoliaRecord({ node: { id, blocks, date, endDate, startDate, eventDetails, eventsCategories, ...rest } }) {
  let blockOriginalContent = [];
  let blockDynamicContent = [];
  let categories = eventsCategories.nodes;
  let dateTimestamp = new Date(date).getTime() / 1000
  let startDateTimestamp = new Date(startDate).getTime() / 1000
  let endDateTimestamp = new Date(endDate).getTime() / 1000
  let isTrip = eventDetails.trip
  let formattedStartDate = startDate ? shortDate(startDate) : null
  let formattedEndDate = endDate ? shortDate(endDate) : null
  let formattedLongDate = null
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let parsedStartDate = startDate ? new Date(startDate).toLocaleDateString('en-US', options) : null
  let parsedEndDate = endDate ? new Date(endDate).toLocaleDateString('en-US', options) : null
  let parsedTime = startDate ? convertTime(startDate, endDate) : null


  if (blocks) {
    blockOriginalContent = blocks.map(block => {
      return block.originalContent
    })
    blockDynamicContent = blocks.map(block => {
      return block.dynamicContent
    })
  }

  if(isTrip){
    if(endDate){
      formattedLongDate = parsedStartDate + " - " + parsedEndDate
    }
    else{
      formattedLongDate = parsedStartDate
    }
  }
  else{
    if(parsedTime){
      formattedLongDate = parsedDate + ', ' + parsedTime
    }
    else{
      formattedLongDate = parsedDate
    }
  }

  return (isTrip)
    ? {
        objectID: id,
        blocksOriginal: blockOriginalContent,
        blocksDynamic: blockDynamicContent,
        categories: categories,
        date: dateTimestamp,
        startDate: startDateTimestamp,
        endDate: endDateTimestamp,
        formattedStartDate: formattedStartDate,
        formattedEndDate: formattedEndDate,
        formattedLongDate: formattedLongDate,
        eventDetails: eventDetails,
        type: 'Trips',
        typeIndex: 2,
        ...rest,
      }
    : {
      objectID: id,
      blocksOriginal: blockOriginalContent,
      blocksDynamic: blockDynamicContent,
      categories: categories,
      date: dateTimestamp,
      startDate: startDateTimestamp,
      endDate: endDateTimestamp,
      formattedStartDate: formattedStartDate,
      formattedEndDate: formattedEndDate,
      formattedLongDate: formattedLongDate,
      eventDetails: eventDetails,
      type: 'Events',
      typeIndex: 1,
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

function convertTime ({node: { istartTime, endTime}}) {
  const startDS = new Date(startTime.replace(/\s/, 'T'));
  const endDS = new Date(endTime.replace(/\s/, 'T'));
  if(startDS.getDate() === endDS.getDate()){
    const startTime = formatAMPM(startDS);
    const endTime = formatAMPM(endDS);
    let strTime = '';
    if(startTime[0].ampm === endTime[0].ampm){
      strTime = startTime[0].time  + '&ndash;' + endTime[0].time + ' ' + endTime[0].ampm;
    }
    else {
      strTime = startTime[0].time + ' ' + startTime[0].ampm + '&ndash;' + endTime[0].time + ' ' + endTime[0].ampm;
    }
    return strTime;

  }
  else{

  }
}
function formatAMPM ({node: {date}}) {
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

function shortDate ({node: {date}}) {
  if (!date) {
    return null
  }
  let tmpDate
  if (typeof date !== 'string') {
    tmpDate = new Date(date)
  } else {
    tmpDate = new Date(date.replace(/\s/, 'T'))
  }

  const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
  "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
];
  const month = monthNames[tmpDate.getMonth()]
  const dd = tmpDate.getDate()
  return `${month} ${dd}`
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