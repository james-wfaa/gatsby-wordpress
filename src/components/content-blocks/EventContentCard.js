import React from 'react'
import ContentCard from "./ContentCard"

const EventContentCard = ({ 
  className,
  startDate,
  endDate, 
  title, 
  eventCategories,
  products,
  venue, 
  excerpt, 
  url, 
  urlText, 
  img, 
  featureImg, 
  caption, 
  tags, 
  size }) => {

    const label = (products?.nodes && Array.isArray(products.nodes) && products.nodes[0]?.name )? products.nodes[0].name : null
   

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
          venue={venue}
          img={img}
          endDate={endDate}
          caption={caption}
          urlText={urlText}
        />
    )
}

export default EventContentCard