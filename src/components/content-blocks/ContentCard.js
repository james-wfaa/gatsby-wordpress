import React from 'react'
import { colors, mixins, sizes } from '../css-variables'
import Img from 'gatsby-image'
import TagList from "../parts/TagList"
import styled from 'styled-components'
import { shortDate } from "../../utils/tools"


const ContentCard = ({ className, startDate, endDate, title, category, venue, excerpt, url, urlText, img, featureImg, featuredImage, caption, tags, size="S", promo = false }) => {
    const moreLinkText = urlText ? urlText+" >" : <nobr>Read More &gt;</nobr>
    const fmtStartDate = shortDate(startDate)
    let fmtEndDate = null
    if (endDate && shortDate(endDate) !== fmtStartDate) {
        fmtEndDate = shortDate(endDate)
    }
    console.log(img)
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
    console.log(title)
    console.log(imgSources)
    return (

        <div className={`${className} ${className}--${size} ${className}--${notSmall} ${promoClass}`}>
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
                                    <div className={`venue venue--${size}`}>{venue.city}, {venue.state}</div>
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
        </div>
    )
}

const StyledContentCard = styled(ContentCard)`

    ${mixins.contentCardBase}
    ${mixins.contentCardSizes}

    .title {
        ${mixins.cardTitle}
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