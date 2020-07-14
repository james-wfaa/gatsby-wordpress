import React from "react"
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import CardD from './CardD'
import diagRightSVG from '../../src/svg/Diagonals_Card_Corners_White_bottom-rght_2x.svg'
import diagLeftSVG from '../../src/svg/Diagonals_Card_Corners_White_top-left_2x.svg'
import arrowSVG from '../../src/svg/Arrow_45-degrees_white_1x.svg'



const PromoCardD = ({ className, title, url, isNav = false })=> {

    const navClass = isNav ? `${className}__nav` : ''
    const classes = `${className} ${navClass}`

    return (
        <CardD>
            <a href={url}className={classes}>
                <div className={`${className}__wrapper`}>
                    <div className={`${className}__title`}>{title}</div>
                    <span className={`${className}__arrow`}></span>
                </div>

            </a>
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    justify-content: space-between;

    &:before {
        position: absolute; 
        bottom: 110px;
        left: -1px;
        width: 150px;
        height: 150px;
        background-color: ${colors.bgWhite};
        -webkit-mask-image: url(${diagLeftSVG});
        mask: url(${diagLeftSVG}) no-repeat;
        content: '';
        @media screen and ${breakpoints.laptopS} {
            bottom: 195px;
            left: -1px;    
        }
    }
    &:after {
        position: absolute; 
        bottom: -15px;
        left: 195px;
        width: 150px;
        height: 150px;
        background-color: ${colors.bgWhite};
        -webkit-mask-image: url(${diagRightSVG});
        mask: url(${diagRightSVG}) no-repeat;
        content: '';
        @media screen and ${breakpoints.laptopS} {
            bottom: -15px;
            left: 195px;       
        }
    }
}


&__title {
    position: relative;
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

&__arrow {
    mask: url(${arrowSVG}) no-repeat;
    display: table-cell;;
    width: 30px;
    height: 30px;
    align-self: flex-end;
    background: ${colors.bgWhite};
}



`
export default StyledPromoCardD