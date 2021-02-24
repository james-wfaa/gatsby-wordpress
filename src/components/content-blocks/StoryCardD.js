import React from "react"
import ContentCardD from './ContentCardD'

const StoryCardD = ({ title, excerpt, url, urlText, terms, linkFormat })=> {
    url = `news${url}`

    let moreLinkText = urlText ? urlText+" >" : <nobr>Read More &gt;</nobr>

    /* let's make this a helper available anywhere we need to nicely shorten an excerpt */
    const maxLength = (title.length <= 28) ? 200 : 160
    const endIdx = (excerpt) ? excerpt.indexOf(' ', maxLength) : null
    const shortenedExcerpt = (excerpt && excerpt.length > maxLength && endIdx > 0) ? excerpt.substring(0,excerpt.indexOf(' ', maxLength)) + ' ...' : excerpt
    
    const postTypes = (terms && terms.nodes && terms.nodes.length > 0) ? terms.nodes : null;
    let label = null;
    if (postTypes && postTypes.length > 0){
        terms.nodes.map((node)=>{
            if (node.name){
                return label = node.name
            }
        })
        //if post but doesnt have category, set as Story
        if (postTypes && label === null){
            label = 'Story'
        }
    }
    
    //update display based on post type
    if(label && postTypes){
        switch(label){
            case 'Video':
                break
            case 'Link':
                moreLinkText = <nobr>Via {linkFormat.linkAuthor} <span class="arrow"></span></nobr>
                label = 'Story'
                url = linkFormat.linkUrl
                break
            case 'Podcast': 
                moreLinkText = <nobr>Listen <span class="arrow"></span></nobr>
                break
            default: 
                break
        }   
    }
    
    return (
        <ContentCardD
          title={title}
          label={label}
          excerpt={excerpt}
          shortenedExcerpt={shortenedExcerpt}
          moreLinkText={moreLinkText}
          url={url}
        />
    )
}
export default StoryCardD