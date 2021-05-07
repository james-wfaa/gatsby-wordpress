import React, { useState } from 'react'
import parse, { domToReact } from 'html-react-parser';
import PageSectionFromBlocks from "../page-sections/PageSectionFromBlocks"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import EventRegistration from "../content-blocks/EventRegistration"
import TitleSection from '../parts/WordPressTitleSection'
import EventMapDetails from "../content-blocks/EventMapDetails"
import SocialShareLinks from "../parts/SocialShareLinks"
import Button from "../parts/Button"
import GenericModal from '../content-modules/GenericModal'
import Block from './WordPressBlock'
import { Tag } from '@chakra-ui/core';



const WordPressEventContentBlocks = ({className, date, startDate, endDate, link, venue, cost, organizers, title, eventDetails, blocks, content}) => {
    //console.log('WordPressEventContentBlocks - blocks:',blocks)
    //console.log(blocks)

    const [show, setShow] = useState(false);

    const handleModal = () => {
      let currentshow = show;
      setShow(!currentshow)
      //console.log("Is Shown" + show);
    }
    let mapLinkText = "View Map and Event Details";
    const showMapDetails = () => {
        let showMap = true;
        if(eventDetails){
            if ((eventDetails.virtualEvent && !eventDetails.eventlocationDetails) || !venue || eventDetails.trip){
                showMap = false;
            }
        }
        return showMap;
    }
    const timezone = eventDetails?.timeZoneInfoFreeText
        ? eventDetails.timeZoneInfoFreeText
        : null


    const parsedContent = parse(content, { trim: true })
    //console.log(parsedContent)
    let parsedEventLinks = <div />
    let parsedEventPriceDetails = null
    parsedContent.forEach((tag) => {
        const classes = tag?.props?.className ? tag.props.className : ''
        const children = tag?.props?.children ? tag.props.children : null
        if (classes.includes('tribe-block__events-link')) {
            //console.log(tag)
            let modifiedChildren = []
            /**
             * we need to modify the incoming HTML to 
             * 1) add a target="_blank" to the gcal link
             * 2) correct the URL of the gcal link to switch the WP URL for the Gatsby URL
             * 3) point the ical link at the WordPress URL so the download works correctly
             * */ 

            const arrayChildren = (Array.isArray(tag.props.children))
                ? tag.props.children
                : [tag.props.children]
                
                arrayChildren.forEach((child) => {
                    if (child.props.className.includes('tribe-block__events-gcal')) {
                        console.log(child.props.children.props.href)
                        var clonedElementWithMoreProps = React.cloneElement(
                            child.props.children, 
                            { 
                                target: "_blank",
                                href: child.props.children.props.href.replace(/(uwalumni|uwalumstaging|uwalumdev).wpengine.com/g, 'uwalumni.com')
                            }
                        )
                        modifiedChildren.push(clonedElementWithMoreProps)
                    }
                    if (child.props.className.includes('tribe-block__-events-ical')) {
                        var clonedElementWithMoreProps = React.cloneElement(
                            child.props.children, 
                            { href: `https://uwalumni.wpengine.com${child.props.children.props.href}` }
                        )
                        modifiedChildren.push(clonedElementWithMoreProps)
                    }
                })
            
            parsedEventLinks = React.cloneElement(
                tag,
                { children: modifiedChildren }
            )
            
        }
        if (classes.includes('tribe-block__event-price')) {
            children.forEach((priceDiv) => {
                //console.log(priceDiv)
                if (priceDiv?.props?.className && priceDiv.props.className.includes('tribe-block__event-price__description')) {
                    //console.log(priceDiv.props.children)
                    parsedEventPriceDetails = (<span dangerouslySetInnerHTML={{__html: priceDiv.props.children }} />)
                }
            })

        }
    })

   

    const RenderedBlocks = (blocks) ? blocks.map((block) => {
        const borderTop = (block.originalContent.indexOf(' border-top') > 0)
        //console.log(block.name)
        switch(block.name) {
            case "tribe/event-datetime":
            case "tribe/featured-image":
            case "tribe/event-links":
            case "tribe/classic-event-details":
            case "tribe/event-venue":
            case "tribe/event-links":
            case "tribe/related-events":
            case "tribe/event-organizer":
                break
            case "tribe/event-website":
                if(block.dynamicContent){
                    return (<Block key={block.order} className={block.name.replace('/', '-')} block={block} />)
                }
                break
            case "core/freeform":
            case "core/paragraph":
            case "core/list":
            case "core/heading":
            case "core/table":
            case "core/image":
            case "core/html":
                return (<Block  key={block.order} className={block.name.replace('/', '-')} block={block} />)
            case "core/group":
                if (block.innerBlocks && block.originalContent.indexOf(' page-section') > 0) {
                    return (<PageSectionFromBlocks key={block.order}  blocks={block.innerBlocks} borderTop={borderTop} />)
                }
                if (block.innerBlocks && block.originalContent.indexOf(' gallery') > 0) {
                    return (<PageSectionFromBlocks key={block.order}  blocks={block.innerBlocks} gallery borderTop={borderTop} />)
                }
                break
            case "core/separator":
                return (<div key={block.order} dangerouslySetInnerHTML={{__html: block.originalContent}} />)
                break
            default:
                return (<Block key={block.order} className={block.name.replace('/', '-')} block={block} />)
                break
        }
        }
    ) : null

    //console.log('RenderedBlocks:',RenderedBlocks)
    const questionsDiv = <div dangerouslySetInnerHTML={{__html: eventDetails.questions}} />
    return(
        <div className={className} id="Top">
            {show ?
            <GenericModal
            data={questionsDiv}
            opacity={0.9}
            closeCallback={() => handleModal()}/>
            : null}

            <div className="desktopWrap">
                <TitleSection className="header" heading={title} event />
                <div className="mobileWrap">
                { RenderedBlocks && (
                    <div className="content">{RenderedBlocks}</div>
                )}
                { !RenderedBlocks && (
                    <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
                )}

                    <EventRegistration
                        className="reg-mobile"
                        date={date}
                        startDate={startDate}
                        endDate={endDate}
                        timezone={timezone}
                        venue={venue}
                        cost={cost}
                        organizers={organizers}
                        eventDetails={eventDetails}
                        priceDetails={parsedEventPriceDetails}
                        calendarLinks={parsedEventLinks}
                        showMapLink={showMapDetails()}
                    />
                </div>
                <div className="social-mobile">
                    { eventDetails && eventDetails.questions && (
                        <div className="buttonWrap" onClick={() => handleModal()}>
                            <Button link="#Top" text="Questions?" fullwidth alt altborder />
                        </div>
                    )}

                    <h3>Invite Others:</h3>
                    <SocialShareLinks></SocialShareLinks>
                </div>
                {showMapDetails() && (
                    <EventMapDetails
                    className="eventMap"
                    venue={venue}
                    eventDetails={eventDetails}
                    />

                )}

            </div>
            <div className="reg-desktop">

                <EventRegistration
                    className="reg-Wrap"
                    date={date}
                    registrationLink={link}
                    startDate={startDate}
                    endDate={endDate}
                    timezone={timezone}
                    venue={venue} cost={cost}
                    organizers={organizers}
                    eventDetails={eventDetails}
                    priceDetails={parsedEventPriceDetails}
                    calendarLinks={parsedEventLinks}
                    showMapLink={showMapDetails()}
                />
                <div className="social-desktop">
                { eventDetails && eventDetails.questions && (
                    <div className="buttonWrap" onClick={() => handleModal()}>
                        <Button link="#Top" text="Questions?" fullwidth alt altborder />
                    </div>
                )}
                    <h3>Invite Others:</h3>
                    { typeof window !== "undefined" && (
                        <SocialShareLinks className="SocailShare" title={title} url={link} event></SocialShareLinks>
                    )}
                    
                </div>

            </div>


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
    margin: 0 ${sizes.s32};
    @media screen and ${breakpoints.tabletS} {
        margin: 0;
    }
}

.header{
    @media screen and ${breakpoints.tabletS} {
        max-width: 536px;
    }
}

.desktopWrap{
    @media screen and ${breakpoints.tabletL} {
        width: 534px;
        max-width: 534px;
    }
    @media screen and ${breakpoints.laptopS} {
        width: 712px;
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
        .reg-Wrap{
            max-width: 187px;
        }
    }
    @media screen and ${breakpoints.laptopS} {
        margin-left: 116px;
        max-width: 252px;
        .reg-Wrap{
            max-width: 252px;
        }
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

.social-mobile{
    ${mixins.socialStyles}
    min-width: 300px;
    max-width: 303px;
    margin: 0 auto;
    text-align: center;
    h3{
        padding-top: ${sizes.s40};
    }
    @media screen and ${breakpoints.tabletS} {
        max-width: 536px;
    }
    @media screen and ${breakpoints.tabletL} {
        display: none;
    }
}

.social-desktop{
    ${mixins.socialStyles}
    display: none;
    text-align: left;
    .buttonWrap{
        margin-bottom: ${sizes.s40};
    }
    h2{
        padding-top: 0px;
    }
    @media screen and ${breakpoints.tabletL} {
        display: block;
    }
}


.content{
    
    h2,
    .core-freeform h2 {
        font-size: ${sizes.s24};
        line-height: ${sizes.s30};
        margin-bottom: ${sizes.s24};
        font-family: ${fonts.eaves};
        font-weight: bold;
        font-style: italic;
        color: ${colors.titleColor};
        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s28};
            line-height: ${sizes.s34};
        }
    }

    h3,
    .core-freeform h3 {
        font-size: ${sizes.s20};
        margin-bottom: ${sizes.s16};
        line-height: ${sizes.s28};
        font-style: normal;
        margin-left: 0px;
        margin-right: 0px;
        color: ${colors.captionBlack};
        font-weight: bold;
        font-family: ${fonts.verlag};
    }

    h4,
    .core-freeform h4,
    h5,
    .core-freeform h5,
    h6,
    .core-freeform h6 {
        font-size: ${sizes.s18};
        margin-bottom: 0px;
        line-height: ${sizes.s26};
        font-style: normal;
        margin-left: 0px;
        margin-right: 0px;
        color: ${colors.captionBlack};
        font-weight: bold;
        font-family: ${fonts.verlag};
    }

    .tribe-block__events-link,
    .tribe-events-event-image,
    .tribe-block__venue,
    .tribe-events-event-meta,
    .tribe-block__related-events__title,
    .tribe-related-events,
    .tribe-block__venue,
    .tribe-block__event-price,
    .tribe-block__organizer__details
     {
        display: none;
    }
    a {
        ${mixins.a}
    }
    .callout,
    .callout-bold {
        font-family: ${fonts.verlag};
        background-color: ${colors.calloutGrey};
        padding: ${sizes.s18};
        @media screen and ${breakpoints.tabletS} {
            padding: ${sizes.s24};
        }
        @media screen and ${breakpoints.laptopL} {
            &.has-text-align-right{
                width: 272px;
                float: right;
                margin: 16px -184px 16px 16px;
            }
            &.has-text-align-left{
                width: 272px;
                float: left;
                margin: 16px 16px 16px -184px;
            }
        }
    }
    .callout-bold {
        font-weight: bold;
    }
}



`


export default StyledWordPressEventContentBlocks