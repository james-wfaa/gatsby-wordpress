import React, { useState } from 'react'
import parse from 'html-react-parser';
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import EventRegistration from "./EventRegistration"
import TitleSection from '../parts/WordPressTitleSection'
import EventMapDetails from "./EventMapDetails"
import SocialShareLinks from "../parts/SocialShareLinks"
import Button from "../parts/Button"
import GenericModal from '../content-modules/GenericModal'

const WordPressEventContent = ({className, date, startDate, endDate, link, venue, cost, organizers, title, eventDetails, blocks, content}) => {
    //console.log('WordPressEventContent - blocks:',blocks)
    console.log(blocks)

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

    const options = {
        replace: ({ attribs }) => {
          if (!attribs) return;
          if(attribs?.class){
              switch(true){
                    case attribs?.class?.includes("tribe-block__events-link"):
                    case attribs?.class?.includes("tribe-events-schedule"):
                    case attribs?.class?.includes("tribe-events-event-image"):
                    case attribs?.class?.includes("tribe-block__venue"):
                    case attribs?.class?.includes("tribe-events-event-meta"):
                    case attribs?.class?.includes("tribe-block__related-events__title"):
                    case attribs?.class?.includes("tribe-related-events"):
                    case attribs?.class?.includes("tribe-event-details"):
                    case attribs?.class?.includes("tribe-block__event-price"):
                    case attribs?.class?.includes("tribe-block__organizer__details"):
                    case attribs?.class?.includes("tribe-events-single-section"):
                    case attribs?.class?.includes("tribe-block_events-link"):
                    case attribs?.class?.includes("tribe-block_events-website"):
                        return(<></>);
                    default:
                      break;
              }
          }
          return
        }
    };

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

            React.Children.forEach((child) => {
                if (child.props.className.includes('tribe-block__events-gcal')) {
                    //console.log(child.props.children.props.href)
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
            React.Children.forEach((priceDiv) => {
                //console.log(priceDiv)
                if (priceDiv?.props?.className && priceDiv.props.className.includes('tribe-block__event-price__description')) {
                    //console.log(priceDiv.props.children)
                    parsedEventPriceDetails = (<span dangerouslySetInnerHTML={{__html: priceDiv.props.children }} />)
                }
            })
        }
    })

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
                <div className="content" >{parse(content, options)}</div>

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

const StyledWordPressEventContent = styled(WordPressEventContent)`
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

export default StyledWordPressEventContent