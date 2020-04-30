import React from "react"
import styled from 'styled-components'
import { colors } from '../css-variables'
import CardD from './CardD'

const ContentCardD = ({ className, date, title, category, venue, location, excerpt, url, urlText })=> {

    const moreLinkText = urlText ? urlText : 'Read More'
    return (
        <CardD>
            <div className={className}>
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
        </CardD>
    )
}
const StyledContentCardD = styled(ContentCardD)`
padding: 1.778rem;
background-color: ${colors.bgWhite};
height: 100%;
position: absolute;



&__date {
    font-size: 1.778rem;
    color: ${colors.dateColor};
    font-style: italic;
    margin-bottom: 0.667rem;
}
&__title {
    color: ${colors.titleColor};
    font-size: 1.333rem;
    font-style: italic;
    font-weight: bold;
}
&__category {
    font-size: 0.778rem;
    text-transform: uppercase;
    color: ${colors.darkGrey};
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