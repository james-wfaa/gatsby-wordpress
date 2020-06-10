import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { colors,  sizes, breakpoints } from '../css-variables'

const Button = ({ className, link, text, bgimage }) => {
    const classesList = bgimage ? `${className} ${className}--bgimage` : className

 return   (
    <Link className={classesList} to={link}>{text}</Link>
)
    }
const StyledButton = styled(Button)`
display: inline-block;
width: 100%;
min-width: 6.5rem;
background-color: ${colors.buttonRed};
font-size: ${sizes.s16};
line-height: ${sizes.s26};
font-weight: bold;
color: ${colors.titleWhite};
padding: ${sizes.s16};
text-align: center;
text-transform: uppercase;
text-decoration: none;
margin: ${sizes.s24} 0 0 ;
&:first-of-type {
    margin-top: 0;
}
&:last-of-type {
    margin-right: 0;
}
&:hover {
    background-color: ${colors.buttonHoverRed};
    box-shadow: 4px 4px 6px rgba(0,0,0,0.2);
}
&:active {
    background-color: ${colors.buttonActiveGrey};
}
@media screen and ${breakpoints.tabletS} {
    width: auto;
    margin-right: ${sizes.s24};
 }
 &--bgimage {
     border: 1px solid ${colors.bgWhite};
     background-color: transparent;
     &:hover {
         background-color: ${colors.buttonActiveGrey};
     }
     &:active {
         color: ${colors.buttonActiveGrey};
         background-color: ${colors.bgWhite};
     }
 }
`

export default StyledButton