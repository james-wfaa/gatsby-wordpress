import React from 'react'
import ContentCard from "./ContentCard"

const StoryContentCard = ({ className, title, category, postFormats, linkFormat, excerpt, url, urlText, img, featureImg, caption, tags, size, promo, acfAlternatePostType, videoFormat }) => {

    url = `/news${url}`

    const altPostType = acfAlternatePostType?.alternateposttype ? acfAlternatePostType.alternateposttype : null

    const moreLinkText = linkFormat?.linkAuthor
    ? <nobr>Via {linkFormat.linkAuthor} <span class="arrow"></span></nobr>
    : altPostType === "Podcast"
        ? <nobr>Listen <span class="arrow"></span></nobr>
        : urlText
            ? <nobr>{urlText} &gt;</nobr>
            : <nobr>Read More &gt;</nobr>

    return (
        <ContentCard
          className={className}
          size={size}
          category={category}
          postFormats={postFormats}
          linkFormat={linkFormat}
          title={title}
          url={url}
          excerpt={excerpt}
          tags={tags}
          caption={caption}
          featureImg={featureImg}
          urlText={moreLinkText}
          img={img}
          promo={promo}
          acfAlternatePostType={acfAlternatePostType}
          videoFormat={videoFormat}
        />
    )
}

export default StoryContentCard