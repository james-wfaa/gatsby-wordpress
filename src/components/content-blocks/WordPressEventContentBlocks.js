import React from 'react'
import PageSectionFromBlocks from "../page-sections/PageSectionFromBlocks"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import EventRegistration from "../content-blocks/EventRegistration"
import TitleSection from '../parts/WordPressTitleSection'
import EventMapDetails from "../content-blocks/EventMapDetails"

const WordPressEventContentBlocks = ({className, date, startDate, endDate, link, venue, cost, organizers, title, eventDetails, blocks}) => {
    console.log(blocks);


    const RenderedBlocks = blocks.map((block) => {
        const borderTop = (block.originalContent.indexOf(' border-top') > 0)
       
        switch(block.name) {
            case "tribe/event-datetime":
            case "tribe/featured-image":
            case "tribe/event-links":
            case "tribe/classic-event-details":
            case "tribe/event-venue":
            case "tribe/event-links":
            case "tribe/related-events":
                break
            case "core/freeform":
            case "core/paragraph":
            case "core/list":
            case "core/heading":
            case "core/html":
                return (<div className={block.name.replace('/', '-')} dangerouslySetInnerHTML={{__html: block.originalContent}} />)
                break
            case "core/group":
                if (block.innerBlocks && block.originalContent.indexOf(' page-section') > 0) {
                    return (<PageSectionFromBlocks blocks={block.innerBlocks} borderTop={borderTop} />)
                }
                if (block.innerBlocks && block.originalContent.indexOf(' gallery') > 0) {
                    return (<PageSectionFromBlocks blocks={block.innerBlocks} gallery borderTop={borderTop} />)
                }
                break 
            case "core/separator":
                return (<div dangerouslySetInnerHTML={{__html: block.originalContent}} />)
                break
            default: 
                console.log(block)
                return (<PageSectionFromBlocks blocks={[block]}  />)
                break
        }
        }
    )

    return(
        <div className={className}>
           
            <div className="desktopWrap">
                <TitleSection className="header" heading={title} event />
                <div className="mobileWrap">
                <div className="content">{RenderedBlocks}</div>
                    <EventRegistration 
                        className="reg-mobile" 
                        date={date} 
                        startDate={startDate} 
                        endDate={endDate} 
                        venue={venue} 
                        cost={cost} 
                        organizers={organizers} 
                        eventDetails={eventDetails}
                    />
                </div>
                <EventMapDetails 
                    className="eventMap" 
                    venue={venue}
                />

            </div>
            <EventRegistration 
                className="reg-desktop" 
                date={date}
                registrationLink={link} 
                startDate={startDate} 
                endDate={endDate} 
                venue={venue} cost={cost} 
                organizers={organizers} 
                eventDetails={eventDetails}
            />

           
        </div>
    )
}

const StyledWordPressEventContentBlocks = styled(WordPressEventContentBlocks)`
padding-bottom: ${sizes.s58};
margin: ${sizes.s48} auto 0;

@media screen and ${breakpoints.tabletL} {
    display: flex;
    max-width: 814px;
    padding-bottom: ${sizes.s88};
    margin-top: ${sizes.s58}; 
}
@media screen and ${breakpoints.laptopS} {
    max-width: 1080px;
}
@media screen and ${breakpoints.laptopL} {
    width: 1080px;
}

.mobileWrap {
    display: flex;
    flex-direction: column-reverse;
    @media screen and ${breakpoints.tabletL} {
        display: block;
    }
}

.header{
    @media screen and ${breakpoints.tabletS} {
        max-width: 536px;
    }
}

.desktopWrap{
    @media screen and ${breakpoints.tabletL} {
        max-width: 534px;
    }
    @media screen and ${breakpoints.laptopS} {
        max-width: 712px;
    }
}

.reg-desktop {
    display: none;
    @media screen and ${breakpoints.tabletL} {
        display: block;
        margin-left: 93px;
        margin-top: 12px; /* to align with the header in the janky font */
        max-width: 187px;
    }
    @media screen and ${breakpoints.laptopS} {
        margin-left: 116px;
        max-width: 252px;
    }

    
}
.reg-mobile {
    min-width: 300px;
    width: 100%;   
    padding: 0 0 ${sizes.s32};
    margin: 0 auto ${sizes.s32};
    border-bottom: 18px solid ${colors.sectionBorder};
    @media screen and ${breakpoints.tabletL} {
        display: none;
    }

}
    
.content{
    > p, 
    > ul,
    > h2,
    > h3,
    > div,
    > table,
    > div.callout,
    > div.call-out,
    .core-freeform > p, 
    .core-freeform > ul,
    .core-freeform > h2,
    .core-freeform > h3,
    .core-freeform > div,
    .core-freeform > table,
    .core-freeform > div.callout,
    .core-freeform > div.call-out
     {
        min-width: 300px;
        width: 100%;
        max-width: 303px;
        margin-left: auto;
        margin-right: auto;
       
        @media screen and ${breakpoints.tabletS} {
            max-width: 536px;
            padding-left: 0;
            padding-right: 0;
            margin-left: auto;
            margin-right: auto;

        }
        @media screen and ${breakpoints.laptopS} {
            margin-left: 0;
            max-width: 712px;
        }
        
    }
    ul {
        list-style-position: inside;
    }
    a {
        ${mixins.a}
    }
    .core-freeform {
        margin-bottom: ${sizes.s32};
    }
    
}
h2 {
    font-size: ${sizes.s18};
    font-weight: bold;
    margin-bottom: ${sizes.s16};
}


`


export default StyledWordPressEventContentBlocks