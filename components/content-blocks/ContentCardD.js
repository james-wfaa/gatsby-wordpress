import React from "react"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import CardD from './CardD'

const ContentCardD = ({ className, date, title, category, venue, location, excerpt, url, urlText })=> {

    const moreLinkText = urlText ? urlText : 'Read More'
    return (
        <CardD>
            <div className={className}>
                <div className={`${className}__wrapper}`}>
                { date && (
                    <div className={`${className}__date`}>{date}</div>
                )}
                { title && (
                    <h3 className={`${className}__title`}>{title}</h3>
                )}
                { category && (
                    <div className={`${className}__category`}>{category}</div>
                )}
                { venue && (
                    <div className={`${className}__venue`}>{venue}</div>
                )}
                { location && (
                    <div className={`${className}__location`}>{location}</div>
                )}
                { excerpt && (
                    <div className={`${className}__excerpt`}>
                        {excerpt}
                        { url && (
                            <a href={url}>{moreLinkText}</a>
                        )}
                    </div>
                )}
                </div>
                
            </div>
        </CardD>
    )
}
const StyledContentCardD = styled(ContentCardD)`
padding: 1rem;
background-color: ${colors.bgWhite};
height: 100%;
position: absolute;

@media screen and ${breakpoints.tabletS} {
    padding: 1.778rem;
}

&_wrapper {
    position: relative;
}


&__date {
    font-family: ${fonts.eaves};
    font-weight: bold;
    font-size: ${sizes.s32};
    font-style: italic;
    color: ${colors.dateColor};
    margin-bottom: 0.667rem;
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s32};
    }
}
&__title {
    position: relative;
    ${mixins.cardTitle}
    font-size: ${sizes.s20};
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s24};
    }
    &:after {
        position: absolute; 
        bottom: -1rem;
        left: 0;
        width: 2rem;
        height: 0.5rem;
        background-color: ${colors.titleColor};
        content: '';
    }
}
&__category {
    font-size: ${sizes.s14};
    font-weight: 800;
    text-transform: uppercase;
    color: ${colors.categoryGrey};
    @media screen and ${breakpoints.tabletS} {
        font-size: 0.778rem;
    }
}
&__venue {
}
&__location {
    font-weight: bold;
}
`

export default StyledContentCardD