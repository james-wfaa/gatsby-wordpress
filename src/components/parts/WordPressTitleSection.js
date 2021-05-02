import React from "react"
import styled from 'styled-components'
import { mixins, sizes, colors, fonts, breakpoints } from '../css-variables'
import FeaturedImage from "../content-blocks/FeaturedImage"

const TitleSection = ({ className, heading, author, product, date, excerpt, series, event = false, smImg, size, category, largeSpace = false }) => {


    const classesList = !event ? `${className}` : `${className} ${className}--event`
    const defaultAuthor = "Wisconsin Alumni Association";
    const resolvedAuthor = author && author.toLowerCase() !== defaultAuthor.toLowerCase() && author.toLowerCase() !== 'uwalumni' 
        ? author
        : null
    const largeSpacer = largeSpace ? "largeSpace" : "";
    const dateFirst = !resolvedAuthor
        ? ' date-first'
        : ''

    return (
        <div className={`${classesList} ${largeSpacer}`}>
            <div className="headersection">
            { heading && (
                <h1>{heading}</h1>
            )}
            <div className="titlesection">
                {excerpt && (
                <div className="headingexcerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />)}
                { resolvedAuthor && (
                    <div className={`${className}__author`}>{author}</div>
                )}
                { date && (
                    <div className={`${className}__date${dateFirst}`}>{date}</div>
                )}
                { product && (
                    <div className={`${className}__category`}>
                        { product?.pages?.nodes[0]?.uri && (
                            <a className="category__item" href={`${product.pages.nodes[0].uri}`}>{product.name}<span> &gt;</span></a>
                        )}
                        { !product?.pages?.nodes[0] && (
                            <>{product.name}</>
                        )}
                        
                        </div>
                )}
                { series && (
                    <div className={`${className}__series`}>{series}</div>
                )}
                { category && (
                    <div className="noteCategory">
                        {category?.slug ? 
                        (<>Category: <a className="category__link" href={`/${category.slug}`}>{category.description}</a></>  )
                        :(<>Category: {category.description}</>)
                        }
                    </div>
                )}
            </div>
            </div>
            { smImg && (<FeaturedImage featuredImage={smImg} size={size}/>)}
        </div>
    )
}

const StyledTitleSection = styled(TitleSection)`
    position: relative;
    min-width: 300px;
    width: 80%;
    max-width: 712px;
    margin-left: auto;
    margin-right: auto;
    padding-top: ${sizes.s58};
    @media screen and ${breakpoints.tabletS} {
        padding-top: ${sizes.s45};
    }

    &.largeSpace{
        .headersection{
            margin-bottom: 58px;
        }
        
    }

    &.header--event{
        min-width: 300px;
        width: 100%;
        padding: 0 ${sizes.s36};



        @media screen and ${breakpoints.tabletS} {
            margin: 0 auto;
            padding: 0;

        }
        @media screen and ${breakpoints.laptopS} {
        margin: 0;
        max-width: 712px;
        }
    }

    h1 {

        color: ${colors.titleColor};
        text-align: left;
        font-family: ${fonts.eaves};
        font-weight: bold;
        font-style: italic;
        font-size: ${sizes.s36};
        line-height: ${sizes.s40};
        width: 100%;
        /*margin-bottom: ${sizes.s24};*/
        margin-bottom: 0;

        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s42};
            line-height: ${sizes.s52};
            padding: 0;
        }
    }
    .titlesection{
        text-align: left;
        overflow-wrap: break-word;
        position: relative;
        font-size: ${sizes.s18};
        line-height: ${sizes.s18};
        font-weight: bold;
        color: ${colors.copyText};
        >div{
            display: inline-block;
        }
        div:first-child{
            margin-top: ${sizes.s24};
        }
        div:last-child {
            border-right: none !important;
        }
        .headingexcerpt{
            text-align: left;
            font-size: ${sizes.s18};
            font-weight: normal;
            line-height: ${sizes.s26};
            margin: ${sizes.s24} 0;
            padding-left: 0px;

            display:block;
            p {
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
        .noteCategory{
            display: block;
            margin-top: 12px;
            color: ${colors.categoryGrey};

            a{
                color: ${colors.categoryGrey};
                text-decoration: none;
                &:visited {
                    color: ${colors.categoryGrey};
                }
                
                &:hover {
                    color: ${colors.linkTextHover};
                }
                &:active {
                    color: ${colors.linkTextActive};
                }
            }
        }
    }
    
    &__author,
    &__date,
    &__category {
        padding: 0 ${sizes.s10} 0 ${sizes.s10};
    }
    &__author {
        border-right: 2px solid ${colors.copyText};
        padding-left: 0;
    }
    .date-first {
        padding-left: 0;
    }
  

    &__category{
        color: ${colors.titleColor};
        border-left: 2px solid ${colors.copyText};
        a{
            color: ${colors.titleColor};
            &:hover{
                color: ${colors.linkTextHover};
            }
            &:active{
                color: ${colors.linkTextActive};
            }

        }
    }

    .headersection {
        ${mixins.headingShortUnderline}
    }

`

export default StyledTitleSection