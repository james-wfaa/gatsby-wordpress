const indexName = 'Second'

const eventQuery = `{
  events: allWpEvent {
    edges {
      node {
        id
        content
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

function eventToAlgoliaRecord({ node: { id, content, endDate, startDate, eventDetails, products, eventsCategories, ...rest } }) {
  
  let isTrip = eventDetails.trip
 
  let options = { year: 'numeric', month: 'long', day: 'numeric' }

  function formatAMPM(date) {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'p.m.' : 'a.m.'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes
  
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
  function convertTime (startTime, endTime) {
    const startDS = new Date(startTime.replace(/\s/, 'T'))
    const endDS = new Date(endTime.replace(/\s/, 'T'))
    if(startDS.getDate() === endDS.getDate()){
      const startTime = formatAMPM(startDS)
      const endTime = formatAMPM(endDS)

      return (startTime[0].ampm === endTime[0].ampm)
        ? startTime[0].time  + '&ndash;' + endTime[0].time + ' ' + endTime[0].ampm
        : startTime[0].time + ' ' + startTime[0].ampm + '&ndash;' + endTime[0].time + ' ' + endTime[0].ampm
    }
    return null
  }

  const startDateDate = (startDate) ? new Date(startDate) : null
  const endDateDate   = (endDate) ? new Date(endDate) : null
  const startDateTimestamp = startDateDate ? startDateDate.getTime() / 1000 : null
  const endDateTimestamp = endDateDate ? endDateDate.getTime() / 1000 : null
  const parsedStartDate = startDateDate ? startDateDate.toLocaleDateString('en-US', options) : null
  const parsedEndDate = endDateDate ? endDateDate.toLocaleDateString('en-US', options) : null
  const parsedTime = (!isTrip && (startDateDate.getDate() && endDateDate.getDate())) 
    ? convertTime(startDate, endDate) 
    : null

  const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
    "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
  ];
  

  let formattedStartDate = startDateDate 
    ?  `${monthNames[startDateDate.getMonth()]} ${startDateDate.getDate()}`
    : null
  let formattedEndDate = endDateDate 
    ? `${monthNames[endDateDate.getMonth()]} ${endDateDate.getDate()}`
    : null


  const formattedLongDate = (isTrip)
    ? (endDateDate)
      ? (endDateDate.getFullYear() === startDateDate.getFullYear())
        ? `<nobr>${formattedStartDate}</nobr> &ndash; <nobr>${formattedEndDate}</nobr>`
        : `<nobr>${formattedStartDate}</nobr>, ${startDateDate.getFullYear()} &ndash; <nobr>${formattedEndDate}</nobr>, ${endDateDate.getFullYear()}`
      : formattedStartDate
    : (formattedStartDate !== formattedEndDate)
      ? `<nobr>${parsedStartDate}</nobr> &ndash; <nobr>${parsedEndDate}</nobr>`
      : parsedStartDate

  const type = isTrip ? 'Trips' : 'Events'
  const typeIndex = isTrip ? 2 : 1

  return {
    objectID: id,
    content: content,
    categories: eventsCategories.nodes,
    products: products.nodes,
    startDate: startDateTimestamp,
    endDate: endDateTimestamp,
    parsedStartDate: parsedStartDate,
    parsedEndDate: parsedEndDate,
    formattedStartDate: formattedStartDate,
    formattedEndDate: formattedEndDate,
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

function convertTime ({startTime, endTime}) {
  const startDS = startTime ? new Date(startTime.replace(/\s/, 'T')) : null;
  const endDS = endTime ? new Date(endTime.replace(/\s/, 'T')) : null;
  if(startDS && endDS && startDS.getDate() === endDS.getDate()){
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

function shortDate ({date}) {
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
    indexName: indexName,
  },
  {
      query: eventQuery,
      transformer: ({ data }) => data.events.edges.map(eventToAlgoliaRecord),
      indexName: indexName,
  },
  {
      query: classNoteQuery,
      transformer: ({ data }) =>
          data.classnotes.edges.map(classNoteToAlgoliaRecord),
      indexName: indexName,
  },
  {
      query: pageQuery,
      transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
      indexName: indexName,
  },
  {
    query: chapterQuery,
    transformer: ({ data }) => data.chapters.edges.map(chapterToAlgoliaRecord),
    indexName: indexName,
  },
]

module.exports = queries