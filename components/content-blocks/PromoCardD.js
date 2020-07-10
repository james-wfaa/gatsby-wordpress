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
            <div className={`${className}__wrapper`}>
                <a href={url}>{title}</a>
            </div>
            </div>
        </CardD>
    )
}

const StyledPromoCardD = styled(PromoCardD)`
background-color: ${colors.promoRed};
height: 100%;
width: 100%;
position: absolute;

&__wrapper {
    position: relative;
    overflow: hidden;
    padding: 1.778rem;
    height: 100%;
    width: 100%;
    color: ${colors.titleWhite};
    font-size: 2.333rem;
    line-height: 3rem;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    display: table;

    &:after {
        position: absolute; 
        bottom: -80px;
        left: 270px;
        width: 150px;
        height: 150px;
        background-image: repeating-linear-gradient(0deg,
            transparent,
            transparent 10px,
            white 10px,
            white 10.5px);
        transform: rotate(-45deg);
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