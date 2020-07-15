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
                    <div className={`${className}__title title`}>{title}</div>
                    <span className={`${className}__arrow arrow`}></span>
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
text-decoration: none;


&__wrapper {
    position: relative;
    overflow: hidden;
    padding: ${sizes.s16};
    height: 100%;
    width: 100%;
    color: ${colors.titleWhite};
    font-size: ${sizes.s36};
    line-height: ${sizes.s40};
    font-weight: bold;
    font-style: italic;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and ${breakpoints.laptopS} {
        padding: ${sizes.s24};
        font-size: ${sizes.s42};
        line-height: ${sizes.s58};

    }
    &:before {
        position: absolute; 
        bottom: 125px;
        left: -15px;
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
        bottom: -30px;
        left: 125px;
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
    margin-top: auto;
    @media screen and ${breakpoints.laptopS} {
        padding-left: ${sizes.s8};
        padding-right: ${sizes.s8};         
    }

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
    margin-top: auto;
}

&:visited {
    .title{
        color: ${colors.linkTextVisitedLight};
    }
    .arrow{
        background: ${colors.linkTextVisitedLight};
    }
}

&:hover {
    box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
    .title{
        text-decoration: underline;
    }
}
&:active {
    cursor:default;
}



`
export default StyledPromoCardD