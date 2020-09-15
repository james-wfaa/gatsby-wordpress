import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { mixins } from '../css-variables'

const Button = ({ className, link, text, bgimage, alt }) => {
    let classesList = className
    if (bgimage) { 
        classesList += ` ${className}--bgimage`
    }
    if (alt) {
        classesList += ` ${className}--alt`
    }
    

 return   (
    <Link className={classesList} to={link}>{text}</Link>
)
    }
const StyledButton = styled(Button)`
${mixins.buttons};
`

export default StyledButton