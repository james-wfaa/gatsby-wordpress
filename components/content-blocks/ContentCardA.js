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
                { title && (
                    <h3 className={`${className}__title title`} dangerouslySetInnerHTML={{ __html: title }} />        
                )}
                { category && (
                    <div className={`${className}__category`}>{category}</div>
                )}
            </div>
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
    background-color: ${colors.cardHeaderBGGrey};
    max-width: 712px;
    min-height: 680px;
    margin: 0 auto;

    &_wrapper {
        position: relative;
    }
    &__date {
        font-family: ${fonts.eaves};
        position: relative; 
        font-weight: bold;
        font-size: ${sizes.s24};
        font-style: italic;
        color: ${colors.startDateColor};
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s52};
        }
    }
`

  export default StyledContentCardA
