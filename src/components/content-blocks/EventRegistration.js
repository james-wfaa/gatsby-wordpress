import React, { useState } from 'react'
import { colors, mixins, sizes, breakpoints } from '../css-variables'
import styled from 'styled-components'
import EventLinksBlock from "./EventLinks"

import Button from '../parts/Button'
import { convertTime, compareDate } from "../../utils/tools"
import GenericModal from '../content-modules/GenericModal'


const EventRegistration = ({className, date, startDate, endDate, venue, cost, organizers, eventDetails, calendarLinks}) => {

    const classesList = `${className}`;
    const costDisplay = (cost) => {
        if (!cost || cost == 0){
            return "Free Entrance"
        }
        else{
            return "$" + cost
        }
    }
    const calcDate = (date) => {
        var compDateString = compareDate(startDate, endDate);
        if (compDateString){
            return compDateString;
        }
        else{
            return date
        }
    }

    const organizerList = organizers?.nodes?.map((org) => (
         <div className="organizer">{org.title}</div>
      ))
    const addressString = (venue && venue.address)
        ? `${venue.title} <br />${venue.address}<br >${venue.city ? venue.city : ""}${venue.state ? `, ${venue.state}` : ""} `
        : (venue)
            ? venue.title
            : null;
    const registrationLink = eventDetails.registrationUrl ? eventDetails.registrationUrl : '';
    const registrationText = eventDetails.eventFullSoldOut ? eventDetails.eventFullText : 'Register';
    const regIsFull = eventDetails.eventFullSoldOut;
    const [show, setShow] = useState(false);
    const mapLinkText = (venue && venue.address) ? "View Map and Event Details" : "View Event Details";

    const handleModal = () => {
      let currentshow = show;
      setShow(!currentshow)
      console.log("Is Shown" + show);
    }

    return(
        <div className={classesList}>
            {show ?
            <GenericModal
            data={
            <EventLinksBlock>
                <div class="tribe-block tribe-block__events-link">
					<div class="tribe-block__btn--link tribe-block__events-gcal">
				        <a href="https://www.google.com/calendar/event?action=TEMPLATE&amp;text=Virtual+Wine+Tasting&amp;dates=20210228T080000/20210228T170000&amp;details=+%0A+%0AJoin+UW+alumnus+David+Eckert+%E2%80%9988%2C+owner+and+winemaker+of+the+Zo+Wines+boutique+winery+in+Sonoma+for+a+live%2C+virtual+wine+tasting+event+on+Friday%2C+Nov.+13+at+6%3A30+p.m.+CST.+%0AThe+event+includes+six+wine+samples+%2850+ml+size%29+sent+to+your+home+and+a+60-minute+Zoom+session+with+winemaker+David+Eckert+as+he+walks+you+through+a+remote+wine+tasting+experience+that+includes+assisting+you+in+your+evaluation+and+assessment+of+the+wines+and+helping+you+determine+things+you+like+about+wine.+%0AAttendees+must+purchase+a+wine+kit+directly+through+Zo+Wines+for+%2450.+Each+kit+serves+one+person.+%0AZoom+details+and+calendar+invites+will+be+provided+by+Zo+Wines+closer+to+the+event+date..+%0A+%0A+%0A+%0A&amp;location=In+Your+Home%2C+Anywhere&amp;trp=false&amp;sprop=website:https://uwalumni.wpengine.com&amp;ctz=Atlantic%2FAzores" title="Add to Google Calendar">
					        <img style={{'maxWidth':'100%','width':'1024px'}} class=" inline-gatsby-image-wrapper" loading="eager" src="/static/e7fa23801e893ae661613678529fc411/null.svg" data-reactroot="" />
					        Google Calendar
                        </a>
			        </div>
                    <div class="tribe-block__btn--link tribe-block__events-ical">
				        <a href="/event/virtual-wine-tasting/?ical=1" title="Download .ics file">
					        <img style={{'max-width':'100%','width':'1024px'}} class=" inline-gatsby-image-wrapper" loading="eager" src="/static/e7fa23801e893ae661613678529fc411/null.svg" data-reactroot="" />
					        iCal Export				
                        </a>
			        </div>
			    </div>
            </EventLinksBlock>
            }
            opacity={0.9}
            closeCallback={() => handleModal()}/>
            : null}
            <div className="regHeader">
                { date && (
                    <div className="dateDay">{date}</div>
                )}
                {(registrationLink) && (
                    <div className="regButton" >
                        <Button link={registrationLink} text={registrationText} fullwidth disabled={regIsFull} external />
                    </div>
                )}
            </div>
            <div className="regWrapper">
                <div className="subHeader">WHEN</div>
                <div>{calcDate(date)}</div>
                <div className="dateTime" dangerouslySetInnerHTML={{ __html: convertTime(startDate, endDate) }}></div>
                <a href="#" alt="Add to Calendar" onClick={() => handleModal()}>Add to Calendar</a>
                { addressString && (
                    <div className="subHeader">WHERE</div>
                )}
                <div className="venue" dangerouslySetInnerHTML={{ __html: addressString }} />
                { (venue && (venue.address || eventDetails.eventlocationDetails)) && (
                    <a href="#EventMap" alt="View Map">{mapLinkText}</a>
                )}
                <div className="subHeader">COST</div>
                <div className="amount ">{costDisplay(cost)}</div>
                {organizerList.length < 5 ?
                    <>
                    <div className="subHeader">ORGANIZER</div>
                    <div className="orgName ">{organizerList}</div>
                    </>
                :
                    null
                }

            </div>
        </div>
    )
}
const StyledEventRegistration = styled(EventRegistration)`


    font-size: ${sizes.s18};
    line-height: ${sizes.s26};
    margin-bottom: ${sizes.s32};
    text-align: left;

    @media screen and ${breakpoints.tabletL} {
        width: 252px;
    }
    .regHeader {
        width: 100%;
        background-color: ${colors.calloutGrey};
        /*box-shadow: 0 -10px 10px -10px rgba(0 0 0 /29%);*/
        box-shadow: 0 -3px 6px rgba(0 0 0 /16%);
        padding: 0 ${sizes.s36};
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;

        .dateDay{
            padding: ${sizes.s16} 0 ${sizes.s16} 0;
            font-size: ${sizes.s18};
            line-height: ${sizes.s26};
            font-weight: bold;
        }

        .regButton{
            margin: 0 auto;
            padding: 0 0 ${sizes.s24} 0;
            max-width: 304px;
            position: relative;
            width: 100%;
            @media screen and ${breakpoints.tabletS} {
                max-width: 536px;
            }

            &.compact {
                margin-top: ${sizes.s40};
            }

        }

        @media screen and ${breakpoints.tabletL} {
            position: static;
            background-color: transparent;
            box-shadow: none;
            padding: 0;

            .dateDay{
                display: none;
            }
            .regButton{
                width: 100%;
                padding: 0 0 ${sizes.s32} 0;
            }
        }
    }

    .regWrapper{
        position: relative;
        max-width: 303px;
        margin: 0 auto;

        @media screen and ${breakpoints.tabletS} {
            max-width: 536px;
        }

        .subHeader{
            position: relative;
            font-weight: 800;
            margin-top: ${sizes.s32};
            padding-bottom: ${sizes.s10};
            border-bottom: 2px solid ${colors.borderGrey};
            margin-bottom: ${sizes.s8};
            font-size: ${sizes.s14};
            line-height: ${sizes.s16};

            @media screen and ${breakpoints.tabletL} {
                border-bottom: none;
                &:after {
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: ${sizes.s34};
                    height: ${sizes.s4};
                    background-color: ${colors.borderGrey};
                    content: '';
                }
            }
        }

        .subHeader:first-child{
            @media screen and ${breakpoints.tabletL} {
                margin-top: 0;
            }
        }

        a{
            ${mixins.a}
        }
    }


`
export default StyledEventRegistration