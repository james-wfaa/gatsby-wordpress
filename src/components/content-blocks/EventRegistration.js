import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import styled from 'styled-components'
import FaTwitter from "../../svg/twitter_icon_gray.svg";
import FaFacebook from "../../svg/fb_icon_gray.svg";
import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";
import RegistrationButtons from '../parts/RegistrationButtons'



const EventRegistration = ({className, content, date, registrationLink}) => {

    return(
        <div className={className}>
            <div className={className}__regHeader>
                { date && (
                    <div className={`${className}__dateDay`}>{date}{registrationLink}</div>
                )}
                { registrationLink && (<RegistrationButtons buttonsAlt='reg' registrationLink={registrationLink} />
                )}
            </div>
        </div>
    )
}
const StyledEventRegistration = styled(EventRegistration)`


`
export default StyledEventRegistration