import React from "react"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import CardD from './CardD'

const ContentCardD = ({ className, startDate, endDate, title, category, venue, location, excerpt, url, urlText })=> {

    const moreLinkText = urlText ? urlText+" >" : <nobr>Read More ></nobr>
    const dateLinkText = endDate ? `${startDate}&ndash;${endDate}` : startDate
    return (
        <CardD>
            <a href={url}className={className}>

                <div className={`${className}__wrapper`}>
                    { startDate && (
                        <div 
                            className={`${className}__date date`} 
                            dangerouslySetInnerHTML={{ __html: dateLinkText }} 
                        />
                                
                    )}
                    <div className={`${className}__titlesection`}>
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
                           &nbsp;
                            { url && (
                                <span className="readmore">{moreLinkText}</span>
                            )}
                        </div>
                    )}
                </div>
            </a>
        </CardD>
    )
}
const StyledContentCardD = styled(ContentCardD)`
display: block;
padding: 1rem;
text-decoration: none;
background-color: ${colors.bgWhite};
color: ${colors.cardText};
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
&__titlesection {
    position: relative; 
    margin-bottom: .667rem;
    padding-bottom: .889rem;
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
    position: relative; 
    margin-bottom: 0px;
    top: -3px;
    font-size: ${sizes.s20};
    text-decoration: none;
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s24};
        margin-bottom: 0px;
        top: 0px;
    }
}
&__category {
    font-size: ${sizes.s14};
    font-weight: 800;
    text-transform: uppercase;
    margin-top: .667rem;
    color: ${colors.categoryGrey};
    @media screen and ${breakpoints.tabletS} {
        font-size: 0.778rem;
        margin-top: 1rem;
    }
}
&__location {
    font-weight: bold;
}
&:hover {
    
    .date {
        color: ${colors.linkDateHover};
        text-decoration: underline;
    }
    .title {
        color: ${colors.linkTextHover};
        text-decoration: underline;
    }
    
    .readmore {
        color: ${colors.linkTextHover};
        text-decoration: underline;
    }
}
&:active {
    .date {
        color: ${colors.linkDateActive};
        text-decoration: underline;
        cursor:default;
    }
    .title {
        color: ${colors.linkTextActive};
        text-decoration: underline;
        cursor:default;
    }
    .readmore {
        color: ${colors.linkTextActive};
        text-decoration: underline;
        cursor:default;
    }
}

`

export default StyledContentCardD