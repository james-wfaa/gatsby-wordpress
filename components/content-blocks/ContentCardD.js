import React from "react"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import CardD from './CardD'

const ContentCardD = ({ className, startDate, endDate, title, category, venue, location, excerpt, url, urlText })=> {

    const moreLinkText = urlText ? urlText+" >" : <nobr>Read More ></nobr>
    const dateLinkText = endDate ? `${startDate}&nbsp;&ndash;&nbsp;${endDate}` : startDate
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
                            <span> </span>
                            { url && (
                                <span className={`${className}__excerpt excerpt readmore`}>{moreLinkText}</span>
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
opacity: 0.9;
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
    position: relative; 
    top: -4px;
    font-weight: bold;
    font-size: ${sizes.s24};
    font-style: italic;
    color: ${colors.startDateColor};
    margin-bottom: ${sizes.s12};
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s32};
        margin-bottom: ${sizes.s24};
    
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
    top: -4px;
    font-size: ${sizes.s20};
    text-decoration: none;
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s24};
    }
}
&__category {
    font-size: ${sizes.s13};
    font-weight: 800;
    text-transform: uppercase;
    margin-top: .667rem;
    color: ${colors.categoryGrey};
    line-height: ${sizes.s13};
    @media screen and ${breakpoints.tabletS} {
        margin-top: 1rem;
        font-size: ${sizes.s14};
        line-height: ${sizes.s14};
    }
}
&__location {
    font-weight: bold;
}
&__excerpt {
    font-size: ${sizes.s16};
    line-height: ${sizes.s22};
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s18};
        line-height: ${sizes.s26};
    }
    &.readmore {
        color: ${colors.titleColor};
    }
}

&:visited {
    background-color: ${colors.bgActiveGrey};

    .date {
        color: ${colors.startDateColor};
        text-decoration: underline;
        cursor:default;
    }
    .title {
        color: ${colors.titleColor};
        text-decoration: underline;
        cursor:default;
    }
    .readmore {
        color: ${colors.titleColor};
        text-decoration: underline;
        cursor:default;
    }
}

&:hover {
    box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
    opacity: 1;

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
    background-color: ${colors.bgActiveGrey};
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