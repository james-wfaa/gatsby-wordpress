import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints } from '../css-variables'
import Button from './Button'

const RegistrationButtons = ({ className, buttonsAlt, registrationLink }) => {

    return (
        <div className={`${className}`} >
            <Button alt={buttonsAlt} link={registrationLink} text="Register" fullwidth />
        </div>
    )
}

const StyledRegistrationButtons = styled(RegistrationButtons)`
    position: relative;
    width: 100%;
    margin: ${sizes.s32} ${sizes.s36} 0;

    @media screen and ${breakpoints.laptopS} {
        margin-top: ${sizes.s58};
    }
    &.compact {
        margin-top: ${sizes.s40};
    }
    
    
`

export default StyledRegistrationButtons