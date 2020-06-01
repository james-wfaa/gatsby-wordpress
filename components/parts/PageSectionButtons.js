import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints } from '../css-variables'
import Button from './Button'

const PageSectionButtons = ({ className, buttons }) => {

    const renderedButtons = buttons.map(item =>(
        <Button link={item.link} text={item.text} />
    ))


    return (
        <div className={className}>
            <div>{renderedButtons}</div>
        </div>
    )
}

const StyledPageSectionButtons = styled(PageSectionButtons)`
    position: relative;
    margin-top: ${sizes.s32};
    @media screen and ${breakpoints.laptopS} {
        margin-top: ${sizes.s58};
    }
    
`

export default StyledPageSectionButtons