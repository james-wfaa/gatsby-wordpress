import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import styled from 'styled-components'
import FaTwitter from "../../svg/twitter_icon_gray.svg";
import FaFacebook from "../../svg/fb_icon_gray.svg";
import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";
import RegistrationButtons from '../parts/RegistrationButtons'
import { convertTime } from "../../utils/tools"




const EventRegistration = ({className, content, date, startDate, endDate, registrationLink}) => {

    const startDS = new Date(startDate);
    const endDS = new Date(endDate);

    return(
        <div className={className}>
            <div className={className}__regHeader>
                { date && (
                    <div className={`${className}__dateDay`}>{date}</div>
                )}
                { registrationLink && (<RegistrationButtons buttonsAlt='reg' registrationLink={registrationLink} />
                )}
            </div>
            <div className={className}__regWrapper>
                <div className={className}__time>
                    { date && (
                        <div className={`${className}__dateDay`}>{date}</div>
                    )}
                    { startDate && (
                        <div className={`${className}__dateTime`}>{convertTime(startDate, endDate)}</div>
                    )}
                </div>
                <div className={className}__location>
                    <div className={`${className}__header`}>WHERE</div>
                    { date && (
                        <div className={`${className}__dateDay`}>{date}</div>
                    )}
                </div>
                <div className={className}__cost>
                    <div className={`${className}__header`}>COST</div>
                    { date && (
                        <div className={`${className}__dateDay`}>{date}</div>
                    )}
                </div>
                <div className={className}__organizer>
                    <div className={`${className}__header`}>ORGANIZER</div>
                    { date && (
                        <div className={`${className}__dateDay`}>{date}</div>
                    )}
                </div>

            </div>
        </div>
    )
}
const StyledEventRegistration = styled(EventRegistration)`


`
export default StyledEventRegistration