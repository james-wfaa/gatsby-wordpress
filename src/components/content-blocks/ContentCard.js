import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import Img from 'gatsby-image'
import TagList from "../parts/TagList"
import styled from 'styled-components'
import { shortDate } from "../../utils/tools"


const ContentCard = ({ className, startDate, endDate, title, category, venue, excerpt, url, urlText, img, featureImg, featuredImage, caption, tags, size, promo = false }) => {

    const moreLinkText = urlText ? urlText+" >" : <nobr>Read More ></nobr>
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


    console.log(img)
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
                            <div className={`category category--${size} `}>{category}</div>
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
                                    <div className={`category category--${size}`}>{category}</div>
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
        </div>
    )
}

const StyledContentCard = styled(ContentCard)`

    width: 256px;
    min-height: 502px;
    display: flex;
    flex-flow: column;
    text-align: left;
    position: relative;

    border: 1px solid ${colors.cardBorder};
    border-top: 6px solid ${colors.cardBorder};
    background-color: ${colors.bgWhite};
    opacity: 0.9; 

    & a{
        text-decoration: none;
    }

    &_wrapper {
        position: relative;

    }
    .headersection {
        position: relative;
        background-color: ${colors.cardHeaderBGGrey};
        margin: 0px;
        padding-left: ${sizes.s16};
        padding-right: ${sizes.s16};
        min-height: 80px;
        overflow: hidden;
        overflow-y: visible;
        border-bottom: 1px solid ${colors.cardHeaderBGGrey};
        .headerImg{
            display: none;
        }
        @media screen and ${breakpoints.tabletS} {
            padding-left: ${sizes.s32};
            padding-right: ${sizes.s32};
        }
        @media screen and ${breakpoints.laptopS} {
            &--L{
                &:after {
                    position: absolute;
                    top: 0;
                    right: -102px;
                    height: 100%;
                    width: 300px;
                    content: '';
                    background-color: ${colors.bgWhite} !important;
                    transform: skew(135deg);
                }
            }
            &--XL{
                &:after {
                    position: absolute;
                    top: 0;
                    right: -60px;
                    height: 100%;
                    width: 350px;
                    content: '';
                    background-color: ${colors.bgWhite} !important;
                    transform: skew(135deg);
                }
            }
            &--XXL{
                &:after {
                    position: absolute;
                    top: 0;
                    right: -60px;
                    height: 100%;
                    width: 450px;
                    content: '';
                    background-color: ${colors.bgWhite} !important;
                    transform: skew(135deg);
                }
            }
        }
    }
    .date {
        font-family: ${fonts.eaves};
        position: relative;
        padding-top: ${sizes.s16};
        padding-bottom: ${sizes.s24};
        font-weight: bold;
        font-size: ${sizes.s42};
        line-height: ${sizes.s42};
        font-style: italic;
        color: ${colors.startDateColor};
        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s52};
            line-height: ${sizes.s52};
            top: -3px;
            padding-top: ${sizes.s32};
            padding-bottom: ${sizes.s32};
        }
        & a:link {
            text-decoration: none;
            color: ${colors.startDateColor};
        }

        /* visited link */
        & a:visited {
            color: ${colors.linkVisitedGrey};
        }

        /* mouse over link */
        & a:hover {
            color: ${colors.linkDateHover};
            text-decoration: underline;
            cursor:pointer;
        }

        /* selected link */
        & a:active {
            color: ${colors.linkDateActive};
            text-decoration: underline;
            cursor:default;
        }
    }

    .title {
        ${mixins.cardTitle}
        position: relative;
        top: -3px;
        padding-bottom: ${sizes.s24};
        font-size: ${sizes.s24};
        line-height: ${sizes.s26};
        text-decoration: none;
        margin: 0px;
        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s32};
            line-height: ${sizes.s36};
            top: -3px;
            padding-bottom: ${sizes.s32};
        }
        &--L, &--XL, &--XXL {
            z-index: 1;
        }
        & a:link {
            text-decoration: none;
            color: ${colors.titleColor};
        }
        /* visited link */
        & a:visited {
            color: ${colors.linkVisitedGrey};
        }
        /* mouse over link */
        & a:hover {
            color: ${colors.linkTextHover};
            text-decoration: underline;
            cursor:pointer;

        }
        /* selected link */
        & a:active {
            color: ${colors.linkActiveGrey};
            text-decoration: underline;
            cursor:default;
        }
    }

    .category {
        font-size: ${sizes.s13};
        line-height: ${sizes.s15};
        font-weight: 800;
        text-transform: uppercase;
        position: relative;
        padding-top: ${sizes.s16};
        padding-bottom: ${sizes.s16};
        color: ${colors.categoryGrey};

        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s14};
            line-height: ${sizes.s16};
            padding-bottom: ${sizes.s16};
        }
    }
    .contentwrap {
        position: relative;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        flex: 1;
        &:before {
            position: absolute;
            content: '';
            top: -11px;
            left: ${sizes.s24};
            height: 22px;
            width: 9px;
            z-index: 1;
            border-left: 1.5px solid ${colors.bgRed};
            border-right: 1.5px solid ${colors.bgRed};
            transform: skew(135deg);

            @media screen and ${breakpoints.tabletS} {
                top: -15px;
                left: ${sizes.s45};
                height: 30px;
                width: 14px;
            }
        }
    }
    .contentsection {
        position: relative;
        margin: 0px;
        padding-top: ${sizes.s24};
        padding-bottom: ${sizes.s12};
        display: flex;
        flex-flow: column;
        flex: 1 1 auto;
        @media screen and ${breakpoints.tabletS} {
            padding-top: ${sizes.s32};
            padding-bottom: ${sizes.s32};

        }
        @media screen and ${breakpoints.laptopS} {
            &--L, &--XL, &--XXL{
                padding-top: ${sizes.s32};
                padding-bottom: ${sizes.s32};
                flex-flow: row;
            }
        }

        &:after {
            position: absolute;
            content: '';
        }
        .columnwrap {
            position: relative;
            display: flex;
            flex-flow: column;
            padding-left: ${sizes.s16};
            padding-right: ${sizes.s16};
            @media screen and ${breakpoints.tabletS} {
                padding-left: ${sizes.s32};
                padding-right: ${sizes.s32};
            }
            @media screen and ${breakpoints.laptopS} {
                &--L, &--XL, &--XXL{
                    width: 50%;
                    padding-left: ${sizes.s32};
                }
            }
            .title {
                padding-bottom: 0px;
            }
            .category {
                @media screen and ${breakpoints.tabletS} {
                    padding-bottom: ${sizes.s32};
                }
            }
            .category--L,
            .category--XL,
            .category--XXL {
                @media screen and ${breakpoints.tabletS} {
                    padding-bottom: ${sizes.s16};
                }
            }
            &--M, &--S{
                :nth-last-child(1){
                    justify-content: space-between;
                    flex: 1 1 auto;
                }
            }
            :nth-last-child(1){
                justify-content: space-between;
                @media screen and ${breakpoints.laptopSMax} {
                    flex: 1 1 auto;
                }
            }
        }
    }
    .venue {
        position: ;
        font-size: ${sizes.s18};
    }
    .location {
        position: relative;
        font-size: ${sizes.s18};
        font-weight: bold;
        padding-bottom: ${sizes.s16};
    }

    .excerpt {
        font-size: ${sizes.s16};
        line-height: ${sizes.s22};
        padding-bottom: ${sizes.s16};
        @media screen and ${breakpoints.tabletS} {
            padding-bottom: ${sizes.s32};
        }
        &.readmore {
            color: ${colors.titleColor};
            text-transform: uppercase;
            &:link {
                text-decoration: none;
            }

            /* visited link */
            &:visited {
                color: ${colors.linkVisitedGrey};
            }

            /* mouse over link */
            &:hover {
                color: ${colors.linkTextHover};
                text-decoration: underline;
                cursor:pointer;
            }

            /* selected link */
            &:active {
                color: ${colors.linkActiveGrey};
                text-decoration: underline;
                cursor:default;
            }
        }
    }
    .imgzoomlink{
        max-width: 100%;
        overflow: hidden;
    }
    .img {
        max-width: 100%;
        height: auto;
        transition: transform .2s; /* Animation */
        overflow: hidden;

        &:link {
            text-decoration: none;
        }

        /* visited link */
        &:visited {
        }

        /* mouse over link */
        &:hover {
            transform: scale(1.05);
        }

        /* selected link */
        &:active {
            cursor:default;
            filter: brightness(80%);
        }
    }
    &--notsmall{
        @media screen and ${breakpoints.tabletS} {
            width: 528px;
            min-height: 680px;

        }
        @media screen and ${breakpoints.laptopS} {
            .columnwrap:nth-child(1) {
                border-right: 1px solid ${colors.cardBorder};
            }
            .title {
                top: -3px;
            }
            .date {
                font-size: ${sizes.s52};
                line-height: ${sizes.s52};
            }
            .excerpt {
                font-size: ${sizes.s18};
                line-height: ${sizes.s26};
                padding-bottom: 0px;
            }
        }
    }

    &--S{
        @media screen and ${breakpoints.tabletS} {
            width: 344px;
            max-width: 344px;
            min-height: 680px;
        }
    }
    &--M{
        .columnwrap:nth-child(1) {
            border-right: none;
        }
    }

    &--L{
        @media screen and ${breakpoints.laptopS} {
            width: 712px;

        }
    }
    &--XL{
        @media screen and ${breakpoints.laptopS} {
            width: 896px;
        }
    }
    &--XXL{
        @media screen and ${breakpoints.laptopS} {
            width: 1080px;
        }
    }
    &--Wide{
        @media screen and ${breakpoints.laptopS} {
            width: 1080px;
            flex-flow: row;
            min-height: 230px;
            border-top: 1px solid ${colors.cardBorder};
            &:before {
                position: absolute;
                content: "";
                display: block;
                width: 345px;
                height: 6px;
                top: -6px;
                left: -1px;
                background-color: ${colors.cardBorder};
            }
            .headersection {
                border-bottom: none;
                padding-left: 0px;
                padding-right: 0px;
                flex: 0 0 344px;
                .headerImg{
                    display: block;
                    width: 344px;
                    height: 172px;
                }
            }
            .date {
                padding-left: ${sizes.s32};
                padding-right: ${sizes.s32};
                padding-top: ${sizes.s28};
            }
            .title {
                padding-left: ${sizes.s32};
                padding-right: ${sizes.s32};
                padding-top: ${sizes.s28};
            }
            .category {
                padding-left: ${sizes.s32};
            }
            .contentwrap {
                flex:2;
                .bodyImg{
                    display: none;
                }
                &:before {
                        top: 37px;
                        left: -9px;
                        height: 30px;
                        width: 14px;
                }
            }
            .contentsection {
                flex-flow: row;
            }
            .columnwrap {
                flex:1;
            }

        }
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