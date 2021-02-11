import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import Img from 'gatsby-image'
import TagList from "../parts/TagList"
import { shortDate } from "../../utils/tools"
import ContentCard from "./ContentCard"


const EventContentCard = ({ className, startDate, endDate, title, category, venue, excerpt, url, urlText, img, featureImg, featuredImage, caption, tags, size="S", promo = false }) => {
    const moreLinkText = urlText ? urlText+" >" : <nobr>Read More &gt;</nobr>
    const fmtStartDate = shortDate(startDate)
    let fmtEndDate = null
    if (endDate && shortDate(endDate) !== fmtStartDate) {
        fmtEndDate = shortDate(endDate)
    }
    const dateLinkText = fmtEndDate ? `<nobr>${fmtStartDate}</nobr> &ndash; <nobr>${fmtEndDate}</nobr>` : fmtStartDate;
    const sizes = ['S', 'M', 'L', 'XL', 'XXL','Wide'];
    const maxLength = (img && typeof img !== 'undefined') ? 150 : 250;
    const shortenedExcerpt = (excerpt && excerpt.length > maxLength) ? excerpt.substring(0,maxLength) + '...' : excerpt
    const promoClass = promo ? 'promo' : ''
    const notSmall = (size !== 'S') ? "notsmall" : ""

    if(!sizes.includes(size) || promo ){
        size = "S";
    }


    const imgSources = (!img || typeof img === 'undefined' || !img.childImageSharp)
        ? null
        : (featureImg && typeof featureImg !== 'undefined' && featureImg.childImageSharp) ?
            [
                img.childImageSharp.fluid,
                {
                    ...featureImg.childImageSharp.fluid,
                    media: `(min-width: 1200px)`
                }
            ]
            :  img.childImageSharp.fluid
    //console.log(title)
    //console.log(imgSources)
    return (
        <ContentCard
          className={className}
          size={size}
          category={category}
          title={title}
          url={url}
          imgSources={imgSources}
          featureImg={featureImg}
          shortenedExcerpt={shortenedExcerpt}
          excerpt={excerpt}
          moreLinkText={moreLinkText}
          tags={tags}
          promoClass={promoClass}
          notSmall={notSmall}
          dateLinkText={dateLinkText}
          startDate={startDate}
          venue={venue}
          img={img}
        />
        /*<div className={`${className} ${className}--${size} ${className}--${notSmall} ${promoClass}`}>
                <div className={`headersection headersection--${size}`}>
                    { startDate && (
                        <div className={`date date--${size}`}>
                            <a href={url} dangerouslySetInnerHTML={{ __html: dateLinkText }}/>
                        </div>
                    )}
                    { !startDate && (
                        <>
                            { category && (
                                <div className={`category category--${size} `}>{category}</div>
                            )}
                            <h3 className={`title title--${size}`}>
                                <a href={url} dangerouslySetInnerHTML={{ __html: title }}/>
                            </h3>
                        </>
                    )}
                    {imgSources && (
                        <a href={url} className={`imgzoomlink headerImg`} >
                            <Img
                                className={`img`}
                                fluid={imgSources}
                            />
                        </a>
                    )}
                </div>
                <div className={`contentwrap contentwrap--${size}`}>
                    {imgSources && (
                        <a href={url} className={`imgzoomlink bodyImg`} >
                            <Img
                                className={`img`}
                                fluid={imgSources}
                            />
                        </a>
                    )}
                    <div className={`contentsection contentsection--${size}`}>
                        <div className={`columnwrap columnwrap--${size}`}>
                            { startDate && (
                                <>
                                    <h3 className={`title title--${size}`}>
                                        <a href={url} dangerouslySetInnerHTML={{ __html: title }}/>
                                    </h3>
                                    { category && (
                                        <div className={`category category--${size}`}>{category}</div>
                                    )}
                                </>
                            )}
                            { (shortenedExcerpt && !startDate) && (
                                <div className={`excerpt excerpt--${size}`}>
                                    <span  dangerouslySetInnerHTML={{ __html: shortenedExcerpt }} />
                                </div>
                            )}
                        </div>
                        <div className={`columnwrap columnwrap--${size}`}>
                        { venue && venue.title && (
                            <div className={`venuewrap venuewrap--${size}`}>
                                { venue && venue.title && (
                                    <div className={`${className}__venue`}>{venue.title}</div>
                                )}
                                { venue && venue.city && venue.state && (
                                    <div className={`venue venue--${size}`}>{venue.city},{venue.state}</div>
                                )}
                            </div>
                        )}
                            { (shortenedExcerpt && !startDate) && (
                                <a href={url} className={`excerpt excerpt--${size} readmore`}>{moreLinkText}</a>
                            )}
                            { tags && (
                                <TagList
                                    className={`tag  tag--${size}`}
                                    items={tags}
                                />
                            )}
                        </div>
                    </div>
                </div>
        </div>*/
    )
}

export default EventContentCard