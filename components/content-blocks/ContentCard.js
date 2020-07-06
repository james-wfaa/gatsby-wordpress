import React from 'react'
import PropTypes from 'prop-types'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import Img from 'gatsby-image'
import TagList from "../parts/TagList"
import styled from 'styled-components'

const ContentCard = ({ className, startDate, endDate, title, category, venue, location, excerpt, url, urlText, img, caption, tags, size }) => {

    const moreLinkText = urlText ? urlText+" >" : <nobr>Read More ></nobr>;
    const dateLinkText = endDate ? `${startDate}&nbsp;&ndash;&nbsp;${endDate}` : startDate;
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    if(!sizes.includes(size)){
        size = "S";
    }

    var notSmall = (size != 'S') ? "notsmall" : "";


    return (

        <div className={`${className} ${className}--${size} ${className}--${notSmall}`}>  
                <div className={`${className}__headersection ${className}__headersection--${size} ${className}__headersection--${notSmall}`}>
                    { startDate && (
                        <div className={`${className}__date ${className}__date--${size} ${className}__date--${notSmall}`}> 
                            <a href={url} dangerouslySetInnerHTML={{ __html: dateLinkText }}/>
                        </div>

                    )}
                    { !startDate && (
                        <div className={`${className}__category category ${className}__category--${size} ${className}__category--${notSmall}`}>{category}</div>
                    )}
                    { !startDate && (
                        <h3 className={`${className}__title title ${className}__title--${size} ${className}__title--${notSmall}`} dangerouslySetInnerHTML={{ __html: title }} />        
                    )}
                    
                </div>
                <div className={`${className}__contentwrap`}>
                    {img && (
                        <a href={url} className={`${className}__imgzoomlink`} >
                            <Img 
                                className={`${className}__img`}
                                fluid={img.childImageSharp.fluid}
                            />
                        </a>
                    )}

                    <div className={`${className}__contentsection ${className}__contentsection--${size} ${className}__contentsection--${notSmall}`}>
                        
                        <div className="columnwrap">
                            { startDate && (
                                <a href={url} >
                                    <h3 className={`${className}__title title`}>
                                        <a href={url} dangerouslySetInnerHTML={{ __html: title }}/>
                                    </h3>
                                </a>
                            )}
                            { startDate && (
                                <div className={`${className}__category category`}>{category}</div>
                            )}
                            { excerpt && (
                                <div className={`${className}__excerpt excerpt`}>
                                    <span  dangerouslySetInnerHTML={{ __html: excerpt }} />
                                </div>
                            )}
                        </div>
                        <div className="columnwrap">
                            { venue && (
                                <div className={`${className}__venuewrap`}>
                                { venue && (
                                    <div className={`${className}__venue`}>{venue}</div>
                                )}
                                { location && (
                                    <div className={`${className}__location`}>{location}</div>
                                )}
                            </div>
                            )}
                            { excerpt && (
                                <a href={url} className={`${className}__excerpt excerpt readmore`}>{moreLinkText}</a>
                            )}
                            { tags && (
                                <TagList
                                    className={`${className}__tag`}
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
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid ${colors.cardBorder};
    border-top: 6px solid ${colors.cardBorder};

    &--notsmall{
        @media screen and ${breakpoints.tabletS} {
            width: 528px;
            min-height: 680px;
            .columnwrap:nth-child(1) {
                border-right: 1px solid ${colors.cardBorder};
            }
        }
    }

    &--S{
        @media screen and ${breakpoints.tabletS} {
            width: 344px;
            max-width: 344px;
        }
    }  
    &--M{
        .columnwrap:nth-child(1) {
            border-right: none;
        }
    }
   
    &--L{
        @media screen and ${breakpoints.laptopS} {
            width: auto;
            max-width: 712px;
        }
    }
    &--XL{
        @media screen and ${breakpoints.laptopS} {
            width: 896px;
            max-width: 896px;
        }
    }
    &--XXL{
        @media screen and ${breakpoints.laptopS} {
            width: 1080px;
            max-width: 1080px;
        }
    }

    & a{
        text-decoration: none;
    }

    &_wrapper {
        position: relative;
        
    }

    &__headersection {
        position: relative; 
        background-color: ${colors.cardHeaderBGGrey};
        margin: 0px;
        padding-left: ${sizes.s16};
        padding-right: ${sizes.s16};
        min-height: 80px;
        overflow: hidden;
        overflow-y: visible;
        border-bottom: 1px solid ${colors.cardHeaderBGGrey};

        @media screen and ${breakpoints.tabletS} {
            &--notsmall{
                padding-left: ${sizes.s32};
                padding-right: ${sizes.s32};
            } 
        }
        @media screen and ${breakpoints.laptopS} {
            &--notsmall{
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
        } 
    }

    &__date {
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
            &--notsmall{
                font-size: ${sizes.s52};
                line-height: ${sizes.s52};
                top: -3px;
                padding-top: ${sizes.s32};
                padding-bottom: ${sizes.s32};
            } 
        }
        @media screen and ${breakpoints.laptopS} {
            &--notsmall{
                font-size: ${sizes.s52};
                line-height: ${sizes.s52};
            } 
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

    &__title {
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
        @media screen and ${breakpoints.laptopS} {
            top: -3px;
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

    &__category {
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

    &__contentwrap {
        position: relative; 
        display: flex;
        flex-grow: 1;
        flex-direction: column;

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

    &__contentsection {
        position: relative;
        margin: 0px;
        padding-top: ${sizes.s12}; 
        padding-bottom: ${sizes.s12}; 
        display: flex;
        flex-flow: column;
        flex: 1 1 auto;
        @media screen and ${breakpoints.tabletS} {
            &--notsmall{
                padding-top: ${sizes.s32}; 
                padding-bottom: ${sizes.s32};     
            } 

        }
        @media screen and ${breakpoints.laptopS} {
            &--notsmall{
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
                &--notsmall{
                    padding-left: ${sizes.s32}; 
                    padding-right: ${sizes.s32};         
                } 
            }
            @media screen and ${breakpoints.laptopS} {
                &--notsmall{
                    padding-left: ${sizes.s32}; 
                    width: 50%;        
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
    
            :nth-last-child(1){
                justify-content: space-between;
                flex: 1 1 auto;
            }
        }
    }

    

    &__venue {
        position: ; 
        font-size: ${sizes.s18};

    }
    &__location {
        position: relative; 
        font-size: ${sizes.s18};
        font-weight: bold;
        padding-bottom: ${sizes.s16};
    }

    &__excerpt {
        font-size: ${sizes.s16};
        line-height: ${sizes.s22};
        padding-bottom: ${sizes.s16};
        @media screen and ${breakpoints.tabletS} {
            padding-bottom: ${sizes.s32};
        }
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s18};
            line-height: ${sizes.s26};
            padding-bottom: 0px;
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

    &__imgzoomlink{
        max-width: 256px;
        overflow: hidden;
        @media screen and ${breakpoints.tabletS} {
            max-width: 528px;
        }
        @media screen and ${breakpoints.laptopS} {
            max-width: 712px;
        }
    }

    &__img {
        padding: 32px;
        max-width: 256px;
        transition: transform .2s; /* Animation */
        overflow: hidden;
        @media screen and ${breakpoints.tabletS} {
            max-width: 528px;
        }
        @media screen and ${breakpoints.laptopS} {
            max-width: 712px;
        }
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
   
`

  export default StyledContentCard
