import React from 'react'
import ContentCard from "./ContentCard"

const EventContentCard = ({ className, startDate, endDate, title, category, venue, excerpt, url, urlText, img, featureImg, featuredImage, caption, tags, size="S", promo }) => {

    return (
        <ContentCard
          className={className}
          size={size}
          category={category}
          title={title}
          url={url}
          featureImg={featureImg}
          excerpt={excerpt}
          tags={tags}
          startDate={startDate}
          venue={venue}
          img={img}
          endDate={endDate}
        />
    )
}

export default EventContentCard