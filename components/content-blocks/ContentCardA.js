import React from 'react'
import PropTypes from 'prop-types'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'



import styled from 'styled-components'

const ContentCardA = ({ className, startDate, endDate, title, category, venue, location, excerpt, url, urlText }) => {

    const moreLinkText = urlText ? urlText+" >" : <nobr>Read More ></nobr>
    const dateLinkText = endDate ? `${startDate}&nbsp;&ndash;&nbsp;${endDate}` : startDate

    return (

        <div className={className}>            
            <div className={`${className}__headersection`}>
                { startDate && (
                    <div 
                        className={`${className}__date date`} 
                        dangerouslySetInnerHTML={{ __html: dateLinkText }} 
                    />
                )}
                { !startDate && (
                    <div className={`${className}__category`}>{category}</div>
                )}
                { !startDate && (
                    <h3 className={`${className}__title title`} dangerouslySetInnerHTML={{ __html: title }} />        
                )}
                
            </div>
            { startDate && (
                <div className={`${className}__category`}>{category}</div>
            )}
            { venue && (
                <div className={`${className}__venue`}>{venue}</div>
            )}
            { location && (
                <div className={`${className}__location`}>{location}</div>
            )}
            { excerpt && (
                <div className={`${className}__excerpt excerpt`}>
                    <span  dangerouslySetInnerHTML={{ __html: excerpt }} />
                    <span> </span>
                    { url && (
                        <span className={`${className}__excerpt excerpt readmore`}>{moreLinkText}</span>
                    )}
                </div>
            )}
        </div>
    )
}

const StyledContentCardA = styled(ContentCardA)`
    display: block;
    text-align: left;
    width: 344px;
    min-height: 503px;
    margin-left: 20px;
    margin-right: 20px;
    border: 1px solid ${colors.cardBorder};
    border-top: 6px solid ${colors.cardBorder};
    @media screen and ${breakpoints.laptopS} {
        margin: 0 auto;
        width: auto;
        max-width: 712px;
        min-height: 680px;
    }

    &_wrapper {
        position: relative;
        
    }

    &__headersection {
        position: relative; 
        background-color: ${colors.cardHeaderBGGrey};
        margin: 0px;
        min-height: 80px;
        @media screen and ${breakpoints.laptopS} {
            top: -1px;
        }
        &:after {
            position: absolute;
            content: '';
        }
    }

    &__date {
        font-family: ${fonts.eaves};
        position: relative; 
        padding-top: ${sizes.s16};
        padding-left: ${sizes.s16};
        padding-right: ${sizes.s16};
        padding-bottom: ${sizes.s24};
        font-weight: bold;
        font-size: ${sizes.s42};
        line-height: ${sizes.s42};
        font-style: italic;
        color: ${colors.startDateColor};
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s52};
        }
    }

    &__title {
        ${mixins.cardTitle}
        position: relative; 
        top: -3px;
        padding-left: ${sizes.s16};
        padding-right: ${sizes.s16};
        padding-bottom: ${sizes.s24};        
        font-size: ${sizes.s24};
        line-height: ${sizes.s26};
        text-decoration: none;
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s24};
            line-height: ${sizes.s26};
            top: -4px;
        }
    }

    &__category {
        font-size: ${sizes.s13};
        line-height: ${sizes.s15};
        font-weight: 800;
        text-transform: uppercase;
        position: relative;
        padding-top: ${sizes.s16};
        padding-left: ${sizes.s16};
        padding-right: ${sizes.s16};
        padding-bottom: ${sizes.s16};           
        color: ${colors.categoryGrey};
        @media screen and ${breakpoints.laptopS} {
            margin-top: ${sizes.s15};
            font-size: ${sizes.s14};
            line-height: ${sizes.s14};
        }
    }
`

  export default StyledContentCardA
