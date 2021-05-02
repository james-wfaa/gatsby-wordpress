import React from 'react'
import ContentCard from "./ContentCard"

const StoryContentCard = ({ className, title, category, postFormats, categories, products, linkFormat, excerpt, blocks, url, urlText, img, featureImg, caption, size, promo, acfAlternatePostType, videoFormat }) => {

    url = `/news${url}`

    const renderedExcerpt = excerpt
        ? excerpt
        : blocks?.[0].name === "core/paragraph"
            ? blocks[0].originalContent
            : null

    const altPostType = acfAlternatePostType?.alternateposttype ? acfAlternatePostType.alternateposttype : null

    const moreLinkText = linkFormat?.linkAuthor
    ? <span>Via {linkFormat.linkAuthor} <span className="arrow"></span></span>
    : altPostType === "Podcast"
        ? <nobr>Listen <span className="arrow"></span></nobr>
        : urlText
            ? <nobr>{urlText} &gt;</nobr>
            : <nobr>Read More &gt;</nobr>


    /* pass products and catgories into the tag list */
    const productTerms = products?.nodes
      ?  products.nodes.map((term) =>  ({
              key: term.slug,
              slug: term.slug,
              name: term.name,
              type: 'product'
        })
      )
      : null
    const categoryTerms = categories?.nodes
      ? categories.nodes.map((term) => ({
            key: term.slug,
            slug: term.slug,
            name: term.name,
            type: 'category'
      })
      )
      : null

    const resolvedTags = productTerms
        ? categoryTerms
            ? productTerms.concat(categoryTerms)
            : productTerms
        : categoryTerms

    //console.log(resolvedTags)


    return (
        <ContentCard
          className={className}
          size={size}
          category={category}
          postFormats={postFormats}
          linkFormat={linkFormat}
          title={title}
          url={url}
          excerpt={renderedExcerpt}
          tags={resolvedTags}
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