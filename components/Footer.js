import React from "react"
import styled from 'styled-components'

const Footer = ({ className} ) => {  
    return (
    <footer className={className}>
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