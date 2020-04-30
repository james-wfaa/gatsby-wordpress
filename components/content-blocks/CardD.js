import React from "react"
import styled from 'styled-components'
import { baseSize, colors } from '../css-variables'
import CardTitle from '../parts/CardTitle'
const CardD = ({ className, date, title, category, venue, location, excerpt, url, urlText }) => {

    return (
        <div className={className}>
            { date && (
                <div className={`${className}__date`}>{date}</div>
            )}
            { title && (
                <CardTitle title={title} />
            )}
            { category && (
                <div className={`${className}__category`}>{category}</div>
            )}

        </div>
    )
}

const StyledCardD = styled(CardD)`
font-size: ${baseSize};
background-color: ${colors.bgWhite};

width: 344px;
min-height: 344px;
padding: 1.778em;
margin: 30px;

&__date {
    font-size: 1.778rem;
    color: ${colors.dateColor};
    font-style: italic;
    margin-bottom: 0.667rem;
}
&__category {
    font-size: 0.778rem;
    text-transform: uppercase;
    color: ${colors.darkGrey};
}
`

export default StyledCardD