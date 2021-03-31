import React from "react"
import ContentCardD from './ContentCardD'
import { shortDate } from "../../utils/tools"

const EventCardD = ({ startDate, endDate, title, eventsCategories, products, eventDetails, venue, excerpt, url, urlText })=> {


    //console.log(url)
    const moreLinkText = urlText ? urlText+" >" : <nobr>Read More &gt;</nobr>
    const { virtualEvent } = eventDetails

    /* let's make this a helper available anywhere we need to nicely shorten an excerpt */
    const maxLength = (title.length <= 28) ? 200 : 160
    const endIdx = (excerpt) ? excerpt.indexOf(' ', maxLength) : null
    const shortenedExcerpt = (excerpt && excerpt.length > maxLength && endIdx > 0) ? excerpt.substring(0,excerpt.indexOf(' ', maxLength)) + ' ...' : excerpt
    const label = (products?.nodes && Array.isArray(products.nodes) && products.nodes[0]?.name )? products.nodes[0].name : null
    //console.log(label)

    const fmtStartDate = shortDate(startDate)
    let fmtEndDate = null
    if (endDate && shortDate(endDate) !== fmtStartDate) {
        fmtEndDate = shortDate(endDate)
    }
    const dateLinkText = (fmtEndDate) ? `<nobr>${fmtStartDate}</nobr> &ndash; <nobr>${fmtEndDate}</nobr>` : fmtStartDate;
   
    return (
        <ContentCardD
          title={title}
          label={label}
          excerpt={excerpt}
          shortenedExcerpt={shortenedExcerpt}
          moreLinkText={moreLinkText}
          url={url}
          venue={venue}
          virtualEvent={virtualEvent}
          startDate={startDate}
          dateLinkText={dateLinkText}
        />
    )
}

export default EventCardD