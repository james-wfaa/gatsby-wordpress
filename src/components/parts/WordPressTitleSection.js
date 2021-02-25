import React from "react"
import styled from 'styled-components'
import { sizes, colors, fonts, breakpoints } from '../css-variables'
import FeaturedImage from "../content-blocks/FeaturedImage"

const TitleSection = ({ className, heading, author, product, date, excerpt, series, event = false, smImg, size, category }) => {

    const classesList = !event ? `${className}` : `${className} ${className}--event`
    const defaultAuthor = "Wisconsin Alumni Association";
    //console.log(smImg)

    return (
        <div className={classesList}>
            <div className="headersection">
            { heading && (
                <h1>{heading}</h1>
            )}
            <div className="titlesection">
                {excerpt && (
                <div className="headingexcerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />)}
                { author && author.toLowerCase() !== defaultAuthor.toLowerCase() &&  (
                    <div className={`${className}__author`}>{author}</div>
                )}
                { date && (
                    <div className={`${className}__date`}>{date}</div>
                )}
                { product && (
                    <div className={`${className}__category`}>
                        { product?.pages?.nodes[0]?.uri && (
                            <a className="category__item" href={`${product.pages.nodes[0].uri}`}>{product.name}</a>
                        )}
                        { !product?.pages?.nodes && (
                            <>{product.name}</>
                        )}
                        
                        <span> &gt;</span></div>
                )}
                { series && (
                    <div className={`${className}__series`}>{series}</div>
                )}
                { category && (
                    <div className="noteCategory">
                        Category: <a className="category__link" href={`/${category.slug}`}>{category.description}</a>                    
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
        padding-top: ${sizes.s88};
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
        padding-bottom: ${sizes.s40};
        margin-bottom: ${sizes.s32};

        >div{
            padding: 0 ${sizes.s10} 0 ${sizes.s10};
            border-left: 2px solid ${colors.copyText};
            display: inline-block;
        }
        div:first-child{
            padding-left: 0px;
            border-left: none;
            margin-top: ${sizes.s24};

        }
        div:nth-child(2){
            padding-left:0;
            border-left:none;
        }
        .headingexcerpt{
            text-align: left;
            font-size: ${sizes.s18};
            font-weight: normal;
            line-height: ${sizes.s26};
            margin: ${sizes.s24} 0;
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

    &__category{
        color: ${colors.titleColor};
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
        position: relative;
        :after {
            position: absolute;
            bottom:0;
            left: 0;
            height: ${sizes.s8};
            width: calc( 1.889rem * 2 );
            background-color: #c5050c;
            content: '';
        }
    }

`

export default StyledTitleSection