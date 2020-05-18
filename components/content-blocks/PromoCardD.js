import React from "react"
import styled from 'styled-components'
import { colors } from '../css-variables'
import CardD from './CardD'

const PromoCardD = ({ className, title, url, isNav = false })=> {

    const navClass = isNav ? `${className}__nav` : ''
    const classes = `${className} ${navClass}`

    return (
        <CardD>
            <div className={classes}>
                <a href={url}>{title}</a>
            </div>
        </CardD>
    )
}

const StyledPromoCardD = styled(PromoCardD)`
padding: 1.778rem;
background-color: ${colors.promoRed};
color: ${colors.titleWhite};
font-size: 2.333rem;
line-height: 3rem;
font-weight: bold;
font-style: italic;
height: 100%;
width: 100%;
position: absolute;
text-align: center;
a {
    color: ${colors.titleWhite};
    text-decoration: none;
}

&__nav {
    background-color: ${colors.navcardGrey};
    color: ${colors.titleColor};
    a {
        color: ${colors.titleColor};
    }

}

body {
    background-image: repeating-linear-gradient(-45deg,
        transparent,
        transparent 20px,
        black 20px,
        black 40px);
    /* with multiple color stop lengths */
    background-image: repeating-linear-gradient(-45deg, 
        transparent 0 20px, 
        black 20px 40px);
  }


`
export default StyledPromoCardD