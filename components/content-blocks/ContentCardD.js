import React from "react"
import styled from 'styled-components'
import { colors, fonts, breakpoints, sizes } from '../css-variables'
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
    font-family: ${fonts.eavesNarrow};
    font-weight: bold;
    font-size: ${sizes.s32};
    font-style: none;
    color: ${colors.dateColor};
    margin-bottom: 0.667rem;
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s32};
    }
}
&__title {
    color: ${colors.titleColor};
    font-family: ${fonts.eaves};
    font-size: ${sizes.s24};
    font-weight: bold;
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s24};
    }
    
}
&__category {
    font-size: 0.722rem;
    font-weight: 800;
    text-transform: uppercase;
    color: ${colors.categoryGrey};
    @media screen and ${breakpoints.tabletS} {
        font-size: 0.778rem;
    }
}
&__venue {
    font-size: 0.778rem;
}
&__location {
    font-size: 0.778rem;
    font-weight: bold;
}
`

export default StyledContentCardD