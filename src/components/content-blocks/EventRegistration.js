import React, { useState } from 'react'
import { colors, mixins, sizes, breakpoints } from '../css-variables'
import styled from 'styled-components'
import EventLinksBlock from "./EventLinks"
import Button from '../parts/Button'
import { convertTime, compareDate } from "../../utils/tools"
import GenericModal from '../content-modules/GenericModal'


const EventRegistration = ({className, date, startDate, endDate, timezone, venue, cost, organizers, eventDetails, priceDetails, calendarLinks, showMapLink}) => {

    const { virtualEvent } = eventDetails
    const classesList = `${className}`;
    const costDisplay = (cost) => {
        if (!cost || cost === 0){
            return "Free Entrance"
        }
        else{
            return "$" + cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
    let priceDetailsDisplay = (priceDetails)
        ? <span>({priceDetails})</span>
        : null

    const calcDate = (date) => {
        var compDateString = compareDate(startDate, endDate);
        if (compDateString){
            return compDateString;
        }
        else{
            const startDS = new Date(startDate.replace(/\s/, 'T'))
            return startDS.toLocaleString('default', { month: 'long' }) + ' ' + startDS.getDate() + ', ' + startDS.getFullYear()
        }
    }

    const organizerList = organizers?.nodes?.map((org) => (
         <div key={org.title} className="organizer">{org.title}</div>
      ))
    const addressString = virtualEvent
        ? 'Online Event'
        : (venue?.address)
            ? `${venue.title} <br />${venue.address}<br >${venue.city ? venue.city : ""}${venue.state ? `, ${venue.state}` : ""} `
            : (venue?.title)
                ? venue.title
                : null;
    const registrationLink = eventDetails.registrationUrl ? eventDetails.registrationUrl : '';
    const registrationText = eventDetails.eventFullSoldOut ? eventDetails.eventFullText 
    : eventDetails.trip ? 'Book Now' : 'Register Now';

    const hostText = eventDetails.trip ? "TOUR OPERATOR(S)" : "HOST(S)"

    const regIsFull = eventDetails.eventFullSoldOut;
    const [show, setShow] = useState(false);
    const mapLinkText = (venue && venue.address) ? "View Map and Event Details" : "View Event Details";

    const handleModal = () => {
      let currentshow = show;
      setShow(!currentshow)
      //console.log("Is Shown" + show);
    }
    let datetime = convertTime(startDate, endDate)
    if (timezone) {
        datetime = `${datetime} ${timezone}`
    }

    return(
        <div className={classesList}>
            {show ?
            <GenericModal
            data={
            <EventLinksBlock>{ calendarLinks }</EventLinksBlock>
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
                <div>{calcDate(startDate)}</div>
                <div className="dateTime" dangerouslySetInnerHTML={{ __html: datetime }}></div>
                { addressString && (
                    <div className="subHeader">WHERE</div>
                )}
                <div className="venue" dangerouslySetInnerHTML={{ __html: addressString }} />
                { showMapLink && !eventDetails.trip && (
                    <a href="#EventMap" alt="View Map">{mapLinkText}</a>
                )}
                <div className="subHeader">COST</div>
                <div className="amount ">{costDisplay(cost)} {priceDetailsDisplay}</div>
                {organizerList.length < 5 ?
                    <>
                    <div className="subHeader">{hostText}</div>
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