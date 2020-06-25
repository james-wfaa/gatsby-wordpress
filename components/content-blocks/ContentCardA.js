import React from 'react'
import PropTypes from 'prop-types'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import Img from 'gatsby-image'
import TagList from "../../components/parts/TagList"
import styled from 'styled-components'

const ContentCardA = ({ className, startDate, endDate, title, category, venue, location, excerpt, url, urlText, img, caption, tags }) => {

    const moreLinkText = urlText ? urlText+" >" : <nobr>Read More ></nobr>
    const dateLinkText = endDate ? `${startDate}&nbsp;&ndash;&nbsp;${endDate}` : startDate

    return (

        <div className={className}>            
            <div className={`${className}__headersection`}>
                { startDate && (
                    <a href={url} >
                        <div 
                            className={`${className}__date date`} 
                            dangerouslySetInnerHTML={{ __html: dateLinkText }} 
                        />
                    </a>

                )}
                { !startDate && (
                    <div className={`${className}__category`}>{category}</div>
                )}
                { !startDate && (
                    <h3 className={`${className}__title title`} dangerouslySetInnerHTML={{ __html: title }} />        
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

                <div className={`${className}__contentsection`}>
                    
                    <div className={`${className}__columnwrap`}>
                        { startDate && (
                             <a href={url} >
                                <h3 className={`${className}__title title`} dangerouslySetInnerHTML={{ __html: title }} />
                            </a>
                        )}
                        { startDate && (
                            <div className={`${className}__category`}>{category}</div>
                        )}
                        { excerpt && (
                            <div className={`${className}__excerpt excerpt`}>
                                <span  dangerouslySetInnerHTML={{ __html: excerpt }} />
                            </div>
                        )}
                    </div>
                    <div className={`${className}__columnwrap`}>
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
                            <span className={`${className}__excerpt excerpt readmore`}>{moreLinkText}</span>
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

const StyledContentCardA = styled(ContentCardA)`
    display: flex;
    flex-flow: column;
    text-align: left;
    width: 256px;
    min-height: 502px;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid ${colors.cardBorder};
    border-top: 6px solid ${colors.cardBorder};
    @media screen and ${breakpoints.tabletS} {
        width: 528px;
        min-height: 680px;
    }
    @media screen and ${breakpoints.laptopS} {
        width: auto;
        max-width: 712px;
        &__columnwrap:nth-child(1) {
            border-right: 1px solid ${colors.cardBorder};
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
            padding-left: ${sizes.s32};
            padding-right: ${sizes.s32};
        }
        @media screen and ${breakpoints.laptopS} {
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
            font-size: ${sizes.s52};
            line-height: ${sizes.s52};
            top: -3px;
            padding-top: ${sizes.s32};
            padding-bottom: ${sizes.s32};
    
        }
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s52};
            line-height: ${sizes.s52};
        }
        &:link {
            text-decoration: none;
        }
        
        /* visited link */
        &:visited {
            color: ${colors.linkVisitedGrey};
        }
        
        /* mouse over link */
        &:hover {
            color: ${colors.linkDateHover};
            text-decoration: underline;
            cursor:pointer;

        }
        
        /* selected link */
        &:active {
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
            padding-bottom: ${sizes.s32};           

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
            padding-top: ${sizes.s32}; 
            padding-bottom: ${sizes.s32}; 
            

        }
        @media screen and ${breakpoints.laptopS} {
           padding-top: ${sizes.s32}; 
           padding-bottom: ${sizes.s32}; 
           flex-flow: row;
        }
        
        &:after {
            position: absolute;
            content: '';
        }

        
    }

    &__columnwrap {
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
            padding-left: ${sizes.s32}; 
            width: 50%;
        }
        .title {
            padding-bottom: 0px;
        }
        :nth-last-child(1){
            justify-content: space-between;
            flex: 1 1 auto;
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

  export default StyledContentCardA
