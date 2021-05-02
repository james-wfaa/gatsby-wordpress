import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import {  mixins,  } from '../css-variables'


const CustomLink = ({ className, to, children }) => {
    return <span className={className}><Link to={to}>{children}</Link></span>
}
const StyledTextLink = styled(CustomLink)`
a {
    ${mixins.a}
}
`
export default StyledTextLink