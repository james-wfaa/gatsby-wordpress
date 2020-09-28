import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import styled from 'styled-components'
import FaTwitter from "../../svg/twitter_icon_gray.svg";
import FaFacebook from "../../svg/fb_icon_gray.svg";
import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";
import RegistrationButtons from '../parts/RegistrationButtons'
import { convertTime } from "../../utils/tools"




const EventRegistration = ({className, content, date, startDate, endDate, registrationLink, venue, cost, organizers}) => {

    const startDS = new Date(startDate);
    const endDS = new Date(endDate);
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
        <div className={className}>
            <div className={`${className}__regHeader`}>
                { date && (
                    <div className={`${className}__dateDay dateDay`}>{date}</div>
                )}
                { registrationLink && (<RegistrationButtons className={`${className}__regButton regButton`} registrationLink={registrationLink} />
                )}
            </div>
            <div className={`${className}__regWrapper`}>
                <div className={`${className}__time ${className}__regSection`}>
                    <div className={`${className}__subHeader subHeader`}>WHEN</div>
                    <div className={`${className}__dateDay dateDay`}>{date}</div>
                    <div className={`${className}__dateTime`}>{convertTime(startDate, endDate)}</div>
                    <a href="#" alt="Add to Calendar">Add to Calendar</a>
                </div>
                <div className={`${className}__location ${className}__regSection`}>
                    <div className={`${className}__subHeader subHeader`}>WHERE</div>
                    <div className={`${className}__venue ${className}__subContent`}>{venue.address}<br></br>{venue.city}, {venue.state}</div>
                    <a href="#" alt="View Map">View Map and Event Details</a>

                </div>
                <div className={`${className}__cost ${className}__regSection`}>
                    <div className={`${className}__subHeader subHeader`}>COST</div>
                    <div className={`${className}__amount ${className}__subContent`}>{costDisplay(cost)}</div>
                </div>
                <div className={`${className}__organizer ${className}__regSection`}>
                    <div className={`${className}__subHeader subHeader`}>ORGANIZER</div>
                    <div className={`${className}__orgName ${className}__subContent`}>{organizerList}</div>
                </div>

            </div>
        </div>
    )
}
const StyledEventRegistration = styled(EventRegistration)`



&__regHeader{
    width: auto;
    background-color: ${colors.calloutGrey};
    box-shadow: 0 -10px 10px -10px rgba(0 0 0 /29%);

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
}
&__regSection{
    width: 303px;
    margin: 0 auto;
    font-size: ${sizes.s18};
    line-height: ${sizes.s26};
    margin-bottom: ${sizes.s32};

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

&__subHeader{
    padding-bottom: ${sizes.s8};
    border-bottom: 2px solid ${colors.borderGrey};
    font-size: ${sizes.s14};
    line-height: ${sizes.s16};
}
&__subContent{
    margin: ${sizes.s8} 0 0 0;
}

&__time{
    border-top: 2px solid ${colors.borderGrey};
    margin-top: ${sizes.s8};
    padding-top: ${sizes.s8};
    .subHeader{
        display: none;
    }
}

`
export default StyledEventRegistration