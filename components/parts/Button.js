import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { colors,  sizes, breakpoints } from '../css-variables'

const Button = ({ className, link, text }) => (
    <Link className={className} to={link}>{text}</Link>
)

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
margin: ${sizes.s18} ${sizes.s18} 0 0 ;
&:first-of-type {
    margin-top: 0;
}
&:last-of-type {
    margin-right: 0;
}
&:hover {
    background-color: ${colors.buttonHoverRed};
}
&:active {
    background-color: ${colors.buttonActiveGrey};
}
@media screen and ${breakpoints.tabletS} {
    width: auto;
 }
`

export default StyledButton