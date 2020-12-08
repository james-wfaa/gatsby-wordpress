import React, { useState } from 'react'
import PageSectionFromBlocks from "../page-sections/PageSectionFromBlocks"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import EventRegistration from "../content-blocks/EventRegistration"
import TitleSection from '../parts/WordPressTitleSection'
import EventMapDetails from "../content-blocks/EventMapDetails"
import SocialShareLinks from "../parts/SocialShareLinks"
import Button from "../parts/Button"
import GenericModal from '../content-modules/GenericModal'



const WordPressEventContentBlocks = ({className, date, startDate, endDate, link, venue, cost, organizers, title, eventDetails, blocks, content}) => {
    //console.log('WordPressEventContentBlocks - blocks:',blocks)

    const [show, setShow] = useState(false);

    const handleModal = () => {
      let currentshow = show;
      setShow(!currentshow)
      console.log("Is Shown" + show);
    }

    const showMapDetails = () => {
        if(eventDetails){
            if (eventDetails.virtualEvent){
                if(eventDetails.eventlocationDetails){
                    console.log("Virtual With Details");
                    return true;
                }
                console.log("Virtual No Details");
                return false;
            }
            else{
                console.log("Not Virtual");
                return true;
            }
        }
        console.log("No Event");
        return false;
    }

    
  
    const EventLinksContent = (blocks) ? blocks.map((block) => {
        switch(block.name) {
            case "tribe/event-links":
                const blockContent = (block.isDynamic) ? block.dynamicContent : block.originalContent
                return (<div className={block.name.replace('/', '-')} dangerouslySetInnerHTML={{__html: blockContent}} />)
                break
            default:
                break
        }
    } )
    : null
    

    const RenderedBlocks = (blocks) ? blocks.map((block) => {
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
                return (<PageSectionFromBlocks blocks={[block]}  />)
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
                        venue={venue}
                        cost={cost}
                        organizers={organizers}
                        eventDetails={eventDetails}
                        calendarLinks={EventLinksContent}
                    />
                </div>
                <div className="social-mobile">
                    <div className="buttonWrap" onClick={() => handleModal()}>
                        <Button link="#Top" text="Questions" fullwidth alt altborder />
                    </div>
                    <h2>Invite Others</h2>
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
                    venue={venue} cost={cost} 
                    organizers={organizers} 
                    eventDetails={eventDetails}
                    calendarLinks={EventLinksContent}
                />
                <div className="social-desktop">
                    <div className="buttonWrap" onClick={() => handleModal()}>
                        <Button link="#Top" text="Questions" fullwidth alt altborder />
                    </div>
                    <h2>Invite Others</h2>
                    <SocialShareLinks></SocialShareLinks>
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
    h2{
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
    h2{
        padding-top: ${sizes.s40};
    }
    @media screen and ${breakpoints.tabletL} {
        display: block;
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