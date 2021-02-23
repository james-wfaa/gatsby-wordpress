import React from "react"
import ContentCardD from './ContentCardD'
import { shortDate } from "../../utils/tools"

const EventCardD = ({ startDate, endDate, title, eventsCategories, venue, excerpt, url, urlText })=> {

    const moreLinkText = urlText ? urlText+" >" : <nobr>Read More &gt;</nobr>

    /* let's make this a helper available anywhere we need to nicely shorten an excerpt */
    const maxLength = (title.length <= 28) ? 200 : 160
    const endIdx = (excerpt) ? excerpt.indexOf(' ', maxLength) : null
    const shortenedExcerpt = (excerpt && excerpt.length > maxLength && endIdx > 0) ? excerpt.substring(0,excerpt.indexOf(' ', maxLength)) + ' ...' : excerpt


    const categories = (eventsCategories && eventsCategories.nodes && eventsCategories.nodes.length > 0) ? eventsCategories.nodes : null
    const label = categories && categories[0].name ? categories[0].name : null

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
          startDate={startDate}
          dateLinkText={dateLinkText}
        />
    )
}

export default EventCardD