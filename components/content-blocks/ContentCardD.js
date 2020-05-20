import React from "react"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import CardD from './CardD'

const ContentCardD = ({ className, startDate, endDate, title, category, venue, location, excerpt, url, urlText })=> {

    const moreLinkText = urlText ? urlText : 'Read More'
    return (
        <CardD>
            <div className={className}>
            <div className={`${className}__wrapper`}>
<<<<<<< HEAD
                { date && (
                    <a className={`${className}__dateurl`} href={url}>
                        <div className={`${className}__date`}>{date}</div>
                    </a>
=======
                { startDate && (
                    <div className={`${className}__date`}>{startDate}</div>
>>>>>>> 00d073d73478185491e4ab82afa4511f371f34ef
                )}
                <div className={`${className}__titlesection`}>
                    { title && (
                        <a className={`${className}__titleurl`} href={url}>
                            <h3 className={`${className}__title`}>{title}</h3>
                        </a>
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
min-height: 256px;
width: 100%;

@media screen and ${breakpoints.tabletS} {
    padding: ${sizes.s32};
    min-height: 344px;

}

&_wrapper {
    position: relative;
}


&__date {
    font-family: ${fonts.eaves};
    font-weight: bold;
    font-size: ${sizes.s32};
    font-style: italic;
    color: ${colors.startDateColor};
    margin-bottom: 0.888rem;
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s32};
        margin-bottom: 1.334rem;
    }
}
&__dateurl {
    text-decoration: none;
}

&__titlesection {
    position: relative; 
    margin-bottom: .667rem;
    padding-bottom: .889px;
    @media screen and ${breakpoints.tabletS} {
        margin-bottom: 1rem;
        padding-bottom: 1.223rem;    }
    &:after {
        position: absolute; 
        bottom: 0;
        left: 0;
        width: 1.889rem;
        height: .222rem;
        background-color: ${colors.titleColor};
        content: '';
    }
}
&__title {
    ${mixins.cardTitle}
    font-size: ${sizes.s20};
    margin-bottom: .667rem;
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s24};
        margin-bottom: 1rem;
    }
}
&__titleurl {
    text-decoration: none;
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