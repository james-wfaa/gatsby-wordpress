import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'

import React from "react"


const Footer = ({ className} ) => {  
    return (
    <footer class={className}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
    )
}

const StyledFooter = styled(Footer)`
background-color: #c5050c;
min-height: 200px;
width: 100%;

`
export default StyledFooter