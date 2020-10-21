import React from "react"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import CardD from './CardD'
import { shortDate } from "../../utils/tools"

const ContentCardD = ({ className, startDate, endDate, title, eventsCategories, venue, excerpt, url, urlText })=> {

    console.log(title)
    const moreLinkText = urlText ? urlText+" >" : <nobr>Read More &gt;</nobr>

    /* let's make this a helper available anywhere we need to nicely shorten an excerpt */
    const maxLength = (title.length <= 28) ? 200 : 160
    const endIdx = excerpt.indexOf(' ', maxLength)
    const shortenedExcerpt = (excerpt && excerpt.length > maxLength && endIdx > 0) ? excerpt.substring(0,excerpt.indexOf(' ', maxLength)) + ' ...' : excerpt
    

    const categories = (eventsCategories && eventsCategories.nodes && eventsCategories.nodes.length > 0) ? eventsCategories.nodes : null

    const category = categories && categories[0].name ? categories[0].name : null
    const fmtStartDate = shortDate(startDate)
    let fmtEndDate = null
    if (endDate && shortDate(endDate) !== fmtStartDate) {
        fmtEndDate = shortDate(endDate)
    }
    const dateLinkText = (fmtEndDate) ? `<nobr>${fmtStartDate}</nobr> &ndash; <nobr>${fmtEndDate}</nobr>` : fmtStartDate;
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
                    { venue?.title && (
                        <div className={`${className}__venue`}>{venue.title}</div>
                    )}
                    { venue?.city && venue.state && (
                        <div className={`${className}__location`}>{venue.city},{venue.state}</div>
                    )}
                    { excerpt && (!startDate) && (
                        <div className={`${className}__excerpt excerpt`}>
                            <span  dangerouslySetInnerHTML={{ __html: shortenedExcerpt }} />
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
text-align: left;
text-decoration: none;
background-color: ${colors.bgWhite};
opacity: 0.9;
color: ${colors.cardText};
min-height: 256px;
width: 100%;
@media screen and ${breakpoints.laptopS} {
    padding: ${sizes.s32};
    min-height: 344px;
}
&_wrapper {
    position: relative;
}
&__date {
    font-family: ${fonts.eaves};
    position: relative; 
    top: -5px;
    font-weight: bold;
    font-size: ${sizes.s24};
    font-style: italic;
    color: ${colors.startDateColor};
    margin-bottom: ${sizes.s7}; /* 12 - 5 for the upshift */
    @media screen and ${breakpoints.laptopS} {
        font-size: ${sizes.s32};
        margin-bottom: ${sizes.s20}; /* 24 - 4 for the upshift */
        top: -4px;
    }
}
&__titlesection {
    position: relative; 
    top: -3px;
    margin-bottom: ${sizes.s9}; /* 12 - 3 for the up-shift */
    padding-bottom: ${sizes.s13}; /* 12 - 3 for the up-shift + 4 for the red bar */
    @media screen and ${breakpoints.laptopS} {
        margin-bottom: ${sizes.s17}; /* 18 - 1 for the up-shift */
        padding-bottom: ${sizes.s21};   /* 18 + 4 for the red bar - 1 for the up-shift */
        top: -1px;
    }
    &:after {
        position: absolute; 
        bottom: 0;
        left: 0;
        width: ${sizes.s34};
        height: ${sizes.s4};
        background-color: ${colors.titleColor};
        content: '';
    }
}
&__title {
    ${mixins.cardTitle}
    position: relative; 
    top: -3px;
    margin-bottom: 0px;
    font-size: ${sizes.s20};
    line-height: ${sizes.s24};
    text-decoration: none;
    @media screen and ${breakpoints.laptopS} {
        font-size: ${sizes.s24};
        line-height: ${sizes.s26};
        top: -4px;
    }
}
&__category {
    font-size: ${sizes.s13};
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    top: -3px;
    margin-top: ${sizes.s8};
    color: ${colors.categoryGrey};
    line-height: ${sizes.s13};
    @media screen and ${breakpoints.laptopS} {
        margin-top: ${sizes.s15};
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
    @media screen and ${breakpoints.laptopS} {
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