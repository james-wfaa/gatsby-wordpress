import React from "react"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
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
display: table;

&__wrapper {
    position: relative;

    &:after {
        position: absolute; 
        bottom: -100px;
        left: 230px;
        width: 150px;
        height: 150px;
        background-image: repeating-linear-gradient(0deg,
            transparent,
            transparent 10px,
            white 10px,
            white 10.5px);
        transform: rotate(-45deg);
        overflow: hidden;
        content: '';
    }
}


a {
    position: relative;
    color: ${colors.titleWhite};
    text-decoration: none;
    display: table-cell;
    vertical-align: middle;
}

&__nav {
    background-color: ${colors.navcardGrey};
    color: ${colors.titleColor};
    a {
        color: ${colors.titleColor};
    }

}



`
export default StyledPromoCardD