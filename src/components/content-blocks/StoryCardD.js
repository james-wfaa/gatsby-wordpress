import React from "react"
import ContentCardD from './ContentCardD'

const StoryCardD = ({ title, excerpt, url, urlText, terms, linkFormat, acfAlternatePostType })=> {

    url = `/news${url}`

    const external = linkFormat?.linkUrl


   

    /* let's make this a helper available anywhere we need to nicely shorten an excerpt */
    const maxLength = (title.length <= 28) ? 200 : 160
    const endIdx = (excerpt) ? excerpt.indexOf(' ', maxLength) : null
    const shortenedExcerpt = (excerpt && excerpt.length > maxLength && endIdx > 0) ? excerpt.substring(0,excerpt.indexOf(' ', maxLength)) + ' ...' : excerpt
    
    const postTypes = (terms && terms.nodes && terms.nodes.length > 0) ? terms.nodes : null;
    const altPostType = acfAlternatePostType?.alternateposttype ? acfAlternatePostType.alternateposttype : null

    //let label = null;
    const label = altPostType != "story"
        ? altPostType
        : "Story"


    const moreLinkText = linkFormat?.linkAuthor
    ? <nobr>Via {linkFormat.linkAuthor} <span class="arrow"></span></nobr>
    : altPostType === "Podcast"
        ? <nobr>Listen <span class="arrow"></span></nobr>
        : urlText
            ? <nobr>{urlText} &gt;</nobr>
            : <nobr>Read More &gt;</nobr>

    //console.log(title, moreLinkText)
    
    //update display based on post type
    if(label && postTypes){
        switch(label){
            case 'Video':
                break
            case 'Link':
                moreLinkText = <nobr>Via {linkFormat.linkAuthor} <span class="arrow"></span></nobr>
                break
            case 'Podcast': 
                moreLinkText = <nobr>Listen <span class="arrow"></span></nobr>
                break
            default: 
                break
        }   
    }

    const resolvedUrl = linkFormat?.linkUrl 
        ? linkFormat.linkUrl
        : url

    
    
    return (
        <ContentCardD
          title={title}
          label={label}
          excerpt={excerpt}
          shortenedExcerpt={shortenedExcerpt}
          moreLinkText={moreLinkText}
          url={resolvedUrl}
          external={external}
          linkFormat={linkFormat}
        />
    )
}
export default StoryCardD