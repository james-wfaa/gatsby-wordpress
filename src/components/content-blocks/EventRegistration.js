import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import styled from 'styled-components'
import FaTwitter from "../../svg/twitter_icon_gray.svg";
import FaFacebook from "../../svg/fb_icon_gray.svg";
import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";
import RegistrationButtons from '../parts/RegistrationButtons'
import { convertTime } from "../../utils/tools"

const EventRegistration = ({className, date, startDate, endDate, registrationLink, venue, cost, organizers}) => {

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
         <div className={`${className}__organizer`}>{org.title}</div>
      ))

    

    return(
        <div className={classesList}>
            <div className={`${className}__regHeader regHeader`}>
                { date && (
                    <div className={`${className}__dateDay dateDay`}>{date}</div>
                )}
                { registrationLink && (<RegistrationButtons className={`${className}__regButton regButton`} registrationLink={registrationLink} />
                )}
            </div>
            <div className={`${className}__regWrapper regWrapper`}>
                <div className={`${className}__time ${className}__regSection time regSection`}>
                    <div className={`${className}__subHeader subHeader`}>WHEN</div>
                    <div className={`${className}__dateDay dateDay`}>{date}</div>
                    <div className={`${className}__dateTime dateTime`}>{convertTime(startDate, endDate)}</div>
                    <a href="#" alt="Add to Calendar">Add to Calendar</a>
                </div>
                <div className={`${className}__location ${className}__regSection location regSection`}>
                    <div className={`${className}__subHeader subHeader`}>WHERE</div>
                    <div className={`${className}__venue ${className}__subContent subContent venue`}>{venue.address}<br></br>{venue.city}, {venue.state}</div>
                    <a href="#" alt="View Map">View Map and Event Details</a>

                </div>
                <div className={`${className}__cost ${className}__regSection cost regSection`}>
                    <div className={`${className}__subHeader subHeader`}>COST</div>
                    <div className={`${className}__amount ${className}__subContent amount subContent`}>{costDisplay(cost)}</div>
                </div>
                <div className={`${className}__organizer ${className}__regSection organizer regSection`}>
                    <div className={`${className}__subHeader subHeader`}>ORGANIZER</div>
                    <div className={`${className}__orgName ${className}__subContent orgName subContent`}>{organizerList}</div>
                </div>

            </div>
        </div>
    )
}
const StyledEventRegistration = styled(EventRegistration)`

    
    width: 303px;
    font-size: ${sizes.s18};
    line-height: ${sizes.s26};
    margin-bottom: ${sizes.s32};
    text-align: left;

    @media screen and ${breakpoints.tabletS} {
        width: 536px;
    } 
    @media screen and ${breakpoints.laptopS} {
        width: 252px;
    }

    .regHeader {
        width: 100%;
        background-color: ${colors.calloutGrey};
        box-shadow: 0 -10px 10px -10px rgba(0 0 0 /29%);
        position: fixed;
        bottom: 0%
        z-index: 1;

        .dateDay{   
            padding: ${sizes.s16} 0 ${sizes.s16} 0;
            font-size: ${sizes.s18};
            line-height: ${sizes.s26};
            font-weight: bold;
        }

        .regButton{
            width: 304px;
            margin: 0 auto;
            padding: 0 0 ${sizes.s24} 0;
        }

        @media screen and ${breakpoints.laptopS} {
            position: static;
            background-color: transparent;
            box-shadow: none;

            .dateDay{
                display: none;
            }
        
            .regButton{
                padding: 0 0 ${sizes.s32} 0;
                width: 252px;

            }
        }
    }

    .regWrapper{
        position: relative;

        .subHeader{
            position: relative;
            padding-bottom: ${sizes.s8};
            border-bottom: 2px solid ${colors.borderGrey};
            font-size: ${sizes.s14};
            line-height: ${sizes.s16};
    
            @media screen and ${breakpoints.laptopS} {
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
        .subContent{
            margin-top: ${sizes.s8};
            font-weight: bold;
            @media screen and ${breakpoints.laptopS} {
            }
        
        }
    
        .time{
            border-top: 2px solid ${colors.borderGrey};
            margin-top: ${sizes.s8};
            padding-top: ${sizes.s8};
            .subHeader{
                display: none;
            }
            @media screen and ${breakpoints.laptopS} {
                border-top: none;
                margin-top: 0;
                padding-top: 0;
            
                .dateDay{
                    margin-top: ${sizes.s8};
                }
                .subHeader{
                    display: block;
                }
            
            }
    
        }
        .regSection{
            a{
                color: ${colors.linkText};
    
                :hover{
                    color: ${colors.linkTextHover};
                }
                :active{
                    color: ${colors.linkTextActive};
                }
            }
    
        }
    
    
    }


`
export default StyledEventRegistration