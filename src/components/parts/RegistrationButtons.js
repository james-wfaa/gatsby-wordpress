import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints } from '../css-variables'
import Button from './Button'

const RegistrationButtons = ({ className, buttonsAlt, registrationLink }) => {

    const buttons = [
        {
            link: '"' + {registrationLink} + '"',
            text: "Register",
        },
        ]


    const renderedButtons = buttons.map(item =>(
        <Button key={item.link} alt={buttonsAlt} link={item.link} text={item.text} />
    ))

    return (
        <div className={`${className}`} >
            <div>{renderedButtons}</div>
        </div>
    )
}

const StyledRegistrationButtons = styled(RegistrationButtons)`
    position: relative;
    margin: ${sizes.s32} ${sizes.s36} 0;

    @media screen and ${breakpoints.laptopS} {
        margin-top: ${sizes.s58};
    }
    &.compact {
        margin-top: ${sizes.s40};
    }
    
    
`

export default StyledRegistrationButtons