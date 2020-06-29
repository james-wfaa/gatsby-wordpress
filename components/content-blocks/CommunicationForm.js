import React from "react"
import styled from 'styled-components'
import { breakpoints, fonts, sizes, colors, mixins } from '../css-variables'
import PageSection from "../page-sections/PageSection"
const CommunicationForm = ({ className }) => {

    return (
        <PageSection>
            <div className={className}>
                <form>
                    <label for="firstname">My name is</label>
                    <input type="text" name="firstname" id="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
                    <label for="emailaddress">My email is</label>
                    <input type="text" name="emailaddress" id="emailaddress" placeholder="Email" />
                    <label for="postalcode">My postal code is</label>
                    <input type="text" name="postalcode" id="postalcode" placeholder="postal code" />
                    <div>and I Badger On.</div>
                    <input type="submit" name="submitbutton" id="submitbutton" value="SUBMIT" />
                </form>
            </div>
        </PageSection>
        
    )
}

const StyledCommunicationForm = styled(CommunicationForm)`
width: 100%;
margin: 0 auto;
padding: 0 ${sizes.s32};
max-width: 528px;
font-family: ${fonts.eaves};
font-size: ${sizes.s36};
color: ${colors.titleColor};
font-weight: bold;
font-style: italic;
text-align: center;
@media screen and ${breakpoints.tabletS} {
    font-size: ${sizes.s42};
}
label { 
    display: block;
    margin-bottom: ${sizes.s24};
    @media screen and ${breakpoints.tabletS} {
        margin-bottom: ${sizes.s32};
    }
}

input {
    display: block;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${colors.bgRed};
    text-align: center;
    padding-bottom: ${sizes.s8};
    margin-bottom: ${sizes.s32};
}
input[type="submit"] {
    ${mixins.buttons};
    margin-top: ${sizes.s58};
}



`

export default StyledCommunicationForm