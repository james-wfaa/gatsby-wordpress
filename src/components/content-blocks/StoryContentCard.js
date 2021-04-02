import React from 'react'
import ContentCard from "./ContentCard"

const StoryContentCard = ({ className, title, category, postFormats, linkFormat, excerpt, url, urlText, img, featureImg, caption, tags, size, promo, acfAlternatePostType, videoFormat }) => {
    
    url = `/news${url}`
    console.log(postFormats)

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
          urlText={urlText}
          img={img}
          promo={promo}
          acfAlternatePostType={acfAlternatePostType}
          videoFormat={videoFormat}
        />
    )
}

export default StoryContentCard