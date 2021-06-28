import React from 'react'
import { Link } from 'gatsby'
import { colors, mixins, sizes } from '../css-variables'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import TagList from "../parts/TagList"
import styled from 'styled-components'
import { shortDate } from "../../utils/tools"


const ContentCard = ({ 
    className, 
    startDate, 
    endDate, 
    formattedLongDate,
    title, 
    category, 
    linkFormat, 
    venue, 
    virtualEvent, 
    excerpt, 
    url, 
    urlText, 
    img, 
    featureImg, 
    tags, 
    size="S", 
    promo=false, 
    acfAlternatePostType, 
    videoFormat,
    filterChange 
}) => {

    const resolvedVenue = (virtualEvent)
    ? "Online Event"
    : (venue?.title)
        ? venue.title
        : null

    const fmtStartDate = shortDate(startDate)
    let fmtEndDate = null
    if (endDate && shortDate(endDate) !== fmtStartDate) {
        fmtEndDate = shortDate(endDate)
    }
    const dateLinkText = formattedLongDate
        ? formattedLongDate
        : (fmtEndDate)
            ? `<nobr>${fmtStartDate}</nobr> &ndash; <nobr>${fmtEndDate}</nobr>` 
            : fmtStartDate

    console.log(formattedLongDate)


    const sizes = ['S', 'M', 'L', 'XL', 'XXL','Wide'];
    const maxLength = (img && typeof img !== 'undefined') ? 150 : 250;
    const shortenedExcerpt = (excerpt && excerpt.length > maxLength) ? excerpt.substring(0,maxLength) + '...' : excerpt
    const promoClass = promo ? 'promo' : ''
    const notSmall = (size !== 'S') ? "notsmall" : ""

    let altPostType = acfAlternatePostType?.alternateposttype 
        ? acfAlternatePostType.alternateposttype 
        : videoFormat?.vimeoId
            ? "Video"
            : null
    
    const displayCategory = category 
        ? category
        : altPostType 
            ? altPostType 
            : null

    const finalUrl = linkFormat?.linkUrl 
        ? linkFormat.linkUrl
        : url

    const linkTitle = linkFormat?.linkUrl
        ? 'Link will open in a new tab/window'
        : ''

    const target = linkFormat?.linkUrl
        ? '_blank'
        : '_self'
    
    if(!sizes.includes(size) || promo ){
        size = "S";
    }
    
    const imgSourceNew = (featureImg?.childImageSharp)
            ? featureImg
            : img?.childImageSharp
                ? img
                : null

    //console.log(title)
    //console.log(imgSourceNew)

    const image = imgSourceNew ? getImage(imgSourceNew) : null

    
    

    return (

        <div className={`${className} ${className}--${size} ${className}--${notSmall} ${promoClass}`}>
            { linkFormat && (
                <div className={`headersection headersection--${size}`}>
                    { startDate && (
                        <div className={`date date--${size}`}>
                            <a href={finalUrl} dangerouslySetInnerHTML={{ __html: dateLinkText }} className="gtm-event-date"/>
                        </div>
                    )}
                    { !startDate && (
                        <>
                            { displayCategory && (
                                <div className={`category category--${size} `}>{displayCategory}</div>
                            )}
                            <h3 className={`title title--${size}`}>
                                <a href={finalUrl} target={target} dangerouslySetInnerHTML={{ __html: title }} className="gtm-card-title"/>
                            </h3>
                        </>
                    )}
                    {image && (
                        <a href={finalUrl}  target={target} className={`imgzoomlink headerImg`} >
                            <GatsbyImage image={image} />
                        </a>
                    )}
                </div>
             )}
            { !linkFormat && (
                <div className={`headersection headersection--${size}`}>
                    { startDate && (
                        <div className={`date date--${size}`}>
                            <Link to={finalUrl} dangerouslySetInnerHTML={{ __html: dateLinkText }} className="gtm-event-date"/>
                        </div>
                    )}
                    { !startDate && (
                        <>
                            { displayCategory && (
                                <div className={`category category--${size} `}>{displayCategory}</div>
                            )}
                            <h3 className={`title title--${size}`}>
                                <Link to={finalUrl} dangerouslySetInnerHTML={{ __html: title }} className="gtm-card-title"/>
                            </h3>
                        </>
                    )}
                    {image && (
                        <Link to={finalUrl} className={`imgzoomlink headerImg`} >
                            <GatsbyImage image={image} />
                        </Link>
                    )}
                </div>  
            )}
            { linkFormat && (
                <div className={`contentwrap contentwrap--${size}`}>
                    {image && (
                        <a href={finalUrl}  target={target} className={`imgzoomlink bodyImg `} >
                           
                           <GatsbyImage image={image} />
                        </a>
                    )}
                    <div className={`contentsection contentsection--${size}`}>
                        <div className={`columnwrap columnwrap--${size}`}>
                            { startDate && (
                                <>
                                    <h3 className={`title title--${size}`}>
                                        <a href={finalUrl} target={target} dangerouslySetInnerHTML={{ __html: title }} className="gtm-card-title"/>
                                    </h3>
                                    { displayCategory && (
                                        <div className={`category category--${size}`}>{displayCategory}</div>
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
                            { resolvedVenue && (
                                <div className={`venuewrap venuewrap--${size}`}>
                                    <div className={`${className}__venue`}>{resolvedVenue}</div> 
                                    { venue?.city && venue?.state && (
                                        <div className={`venue venueCity venue--${size} `}>{venue.city}, {venue.state}</div>
                                    )}
                                </div>
                            )}
                            { (urlText && !startDate && linkFormat) && (
                                <a href={finalUrl} title={linkTitle} target="_blank" className={`excerpt excerpt--${size} readmore`}>{urlText}</a>
                            )}
                            { tags && (
                                <TagList
                                    className={`tag  tag--${size}`}
                                    items={tags}
                                    filterChange={filterChange}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
            { !linkFormat && (
                <div className={`contentwrap contentwrap--${size}`}>
                    {image && (
                        <Link to={finalUrl} className={`imgzoomlink bodyImg`}>
                        <GatsbyImage image={image} /></Link>
                    )}
                    <div className={`contentsection contentsection--${size}`}>
                        <div className={`columnwrap columnwrap--${size}`}>
                            { startDate && (
                                <>
                                    <h3 className={`title title--${size}`}>
                                        <Link to={finalUrl} dangerouslySetInnerHTML={{ __html: title }} className="gtm-card-title"/>
                                    </h3>
                                    { displayCategory && (
                                        <div className={`category category--${size}`}>{displayCategory}</div>
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
                            { resolvedVenue && (
                                <div className={`venuewrap venuewrap--${size}`}>
                                    <div className={`${className}__venue`}>{resolvedVenue}</div> 
                                    { venue?.city && venue?.state && (
                                        <div className={`venue venueCity venue--${size}`}>{venue.city}, {venue.state}</div>
                                    )}
                                </div>
                                
                            )}
                            { shortenedExcerpt && size === "Wide" && (
                                <div className={`excerpt excerpt--${size}`}>
                                    <span  dangerouslySetInnerHTML={{ __html: shortenedExcerpt }} />
                                </div>

                            )}
                            { urlText && !startDate && (
                                <Link to={finalUrl} className={`excerpt excerpt--${size} readmore`}>{urlText}</Link>
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
            )}
        </div>
    )
}

const StyledContentCard = styled(ContentCard)`

    ${mixins.contentCardBase}
    ${mixins.contentCardSizes}
    .title {
        ${mixins.cardTitle}
    }
    .arrow {
        ${mixins.arrow}
    }
    .venueCity{
        font-weight: bold;
    }    
    &.promo{
        background-color: ${colors.bgRed};
        border: 1px solid ${colors.bgRed};
        .headersection {
            background-color: ${colors.bgRed};
            border-bottom: none;
        }
        .title {
            margin-top: ${sizes.s32};
            font-size: ${sizes.s36};
            line-height: ${sizes.s42};
            color: ${colors.titleWhite};
            & a:link {
                text-decoration: none;
                color: ${colors.titleWhite};
            }
            /* visited link */
            & a:visited {
                color: ${colors.titleWhite};
            }
            /* mouse over link */
            & a:hover {
                color: ${colors.titleWhite};
            }
            /* selected link */
            & a:active {
                color: ${colors.titleWhite};
            }
        }
        .category {
            display: none;
        }
        
        .contentwrap {
            &:before {
                border-left: 1.5px solid ${colors.bgWhite};
                border-right: 1.5px solid ${colors.bgWhite};
            }
        }
        .excerpt{
            font-size: ${sizes.s26};
            line-height: ${sizes.s36};
            color: ${colors.titleWhite};

            &.readmore{
                display: none;
            }
        }

    }

`
  export default StyledContentCard