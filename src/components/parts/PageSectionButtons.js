import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints } from '../css-variables'
import Button from './Button'

const PageSectionButtons = ({ className, buttons, bgimage }) => {

    const renderedButtons = buttons.map(item =>(
        <Button key={item.link} link={item.link} text={item.text} bgimage={bgimage} />
    ))


    return (
        <div className={className}>
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
    
    
`

export default StyledPageSectionButtons