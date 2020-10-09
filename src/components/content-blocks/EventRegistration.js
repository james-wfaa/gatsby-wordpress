import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import styled from 'styled-components'
import FaTwitter from "../../svg/twitter_icon_gray.svg";
import FaFacebook from "../../svg/fb_icon_gray.svg";
import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";
import RegistrationButtons from '../parts/RegistrationButtons'
import Button from '../parts/Button'
import { convertTime } from "../../utils/tools"

const EventRegistration = ({className, date, startDate, endDate, venue, cost, organizers, eventDetails}) => {

    const classesList = `${className}`;
    const costDisplay = (cost) => {
        if (!cost || cost == 0){
            return "Free Entrance"
        }
        else{
            return "$" + cost
        }
    }
    const organizerList = !organizers ? null : organizers.nodes.map((org) => (
         <div className="organizer">{org.title}</div>
      ))
    const addressString = venue.address ? venue.title + '<br />' + venue.address + '<br />' + venue.city + ', ' + venue.state : venue.title;
    const registrationLink = eventDetails.registrationUrl ? eventDetails.registrationUrl : '';

    return(
        <div className={classesList}>
            <div className="regHeader">
                { date && (
                    <div className="dateDay">{date}</div>
                )}
                {(registrationLink) && (
                    <div className="regButton" >
                        <Button link={registrationLink} text="Register" fullwidth />
                    </div>
                )}
            </div>
            <div className="regWrapper">
                <div className="subHeader">WHEN</div>
                <div>{date}</div>
                <div className="dateTime">{convertTime(startDate, endDate)}</div>
                <a href="#" alt="Add to Calendar">Add to Calendar</a>
                <div className="subHeader">WHERE</div>
                <div className="venue" dangerouslySetInnerHTML={{ __html: addressString }} />
                { venue.address && (
                    <a href="#EventMap" alt="View Map">View Map and Event Details</a>
                )}
                <div className="subHeader">COST</div>
                <div className="amount ">{costDisplay(cost)}</div>
                <div className="subHeader">ORGANIZER</div>
                <div className="orgName ">{organizerList}</div>

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
        padding: 0 ${sizes.s36};
        text-align: center;
       
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
        
            @media screen and ${breakpoints.laptopS} {
                margin-top: ${sizes.s58};
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