import React from 'react'
import ContentCard from "./ContentCard"

const EventContentCard = ({ 
  className,
  startDate,
  endDate, 
  formattedLongDate,
  title, 
  products,
  eventDetails,
  venue, 
  excerpt, 
  url, 
  link,
  urlText, 
  img, 
  featureImg, 
  caption, 
  tags, 
  size }) => {

    //console.log(excerpt)

    const label = (products?.nodes?.[0]?.name )? products.nodes[0].name : null
    const virtualEvent = eventDetails?.virtualEvent
    const resolvedUrl = url 
      ? url 
      : link 
        ? link 
        : null

  return (
        <ContentCard
          className={className}
          size={size}
          category={label}
          title={title}
          url={resolvedUrl}
          featureImg={featureImg}
          excerpt={excerpt}
          tags={tags}
          startDate={startDate}
          virtualEvent={virtualEvent}
          venue={venue}
          img={img}
          endDate={endDate}
          formattedLongDate={formattedLongDate}
          caption={caption}
          urlText={urlText}
        />
    )
}

export default EventContentCard