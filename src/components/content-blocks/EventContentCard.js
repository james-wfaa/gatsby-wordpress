import React from 'react'
import ContentCard from "./ContentCard"

const EventContentCard = ({ 
  className,
  startDate,
  endDate, 
  title, 
  eventCategories,
  products,
  eventDetails,
  venue, 
  excerpt, 
  url, 
  urlText, 
  img, 
  featureImg, 
  caption, 
  tags, 
  size }) => {

    const label = (products?.nodes?.[0]?.name )? products.nodes[0].name : null
    const virtualEvent = eventDetails?.virtualEvent

  return (
        <ContentCard
          className={className}
          size={size}
          category={label}
          title={title}
          url={url}
          featureImg={featureImg}
          excerpt={excerpt}
          tags={tags}
          startDate={startDate}
          virtualEvent={virtualEvent}
          venue={venue}
          img={img}
          endDate={endDate}
          caption={caption}
          urlText={urlText}
        />
    )
}

export default EventContentCard