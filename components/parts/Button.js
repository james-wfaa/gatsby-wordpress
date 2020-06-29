import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { colors,  sizes, breakpoints, mixins } from '../css-variables'

const Button = ({ className, link, text, bgimage }) => {
    const classesList = bgimage ? `${className} ${className}--bgimage` : className

 return   (
    <Link className={classesList} to={link}>{text}</Link>
)
    }
const StyledButton = styled(Button)`
${mixins.buttons};
`

export default StyledButton