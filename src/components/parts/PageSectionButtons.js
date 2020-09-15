import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints } from '../css-variables'
import Button from './Button'

const PageSectionButtons = ({ className, buttons, buttonsAlt, bgimage, compact }) => {

    const renderedButtons = buttons.map(item =>(
        <Button key={item.link} alt={buttonsAlt} link={item.link} text={item.text} bgimage={bgimage} />
    ))

    const compactClass = (compact) ? 'compact' : ''


    return (
        <div className={`${className} ${compactClass}`} >
            <div>{renderedButtons}</div>
        </div>
    )
}

const StyledPageSectionButtons = styled(PageSectionButtons)`
    position: relative;
    margin: ${sizes.s32} ${sizes.s36} 0;

    @media screen and ${breakpoints.laptopS} {
        margin-top: ${sizes.s58};
    }
    &.compact {
        margin-top: ${sizes.s40};
    }
    
    
`

export default StyledPageSectionButtons