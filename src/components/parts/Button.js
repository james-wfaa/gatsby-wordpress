import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { mixins } from '../css-variables'

const Button = ({ className, link, text, bgimage, alt, fullwidth, disabled = false }) => {
    let classesList = className
    if (bgimage) { 
        classesList += ` ${className}--bgimage`
    }
    if (alt) {
        classesList += ` ${className}--alt`
    }
    if (fullwidth) {
        classesList += ` ${className}--fullwidth`
    }
    

 return   (
    <Link className={classesList} to={link} disabled={disabled}>{text} </Link>
)
    }
const StyledButton = styled(Button)`
${mixins.buttons};
`

export default StyledButton