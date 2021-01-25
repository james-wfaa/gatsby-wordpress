import React from "react"
import styled from 'styled-components'
import { fonts, colors, sizes, breakpoints } from '../css-variables'
import CardD from './CardD'
import diagRightSVG from '../../svg/Diagonals_Card_Corners_White_bottom-rght_2x.svg'
import diagLeftSVG from '../../svg/Diagonals_Card_Corners_White_top-left_2x.svg'
import arrowSVG from '../../svg/Arrow_45-degrees_white_1x.svg'



const PromoCardD = ({ className, title, url, isNav = false })=> {

    const navClass = isNav ? `${className}__nav` : ''
    const classes = `${className} ${navClass}`

    return (
        <CardD>
            <a href={url}className={classes}>
                <div className={`${className}__wrapper wrapper`}>
                    <div className={`${className}__title title`}>{title}</div>
                    <span className={`${className}__arrow arrow`}></span>
                </div>

            </a>
        </CardD>
    )
}

const StyledPromoCardD = styled(PromoCardD)`
font-family: ${fonts.eaves};
background-color: ${colors.promoRed};
height: 100%;
width: 100%;
position: absolute;
text-decoration: none;
display: block;

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
        padding: ${sizes.s32};
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

}
&__arrow {
    position: absolute;
    mask: url(${arrowSVG}) no-repeat;
    bottom: ${sizes.s16};
    right: ${sizes.s16};
    width: 30px;
    height: 30px;
    background: ${colors.bgWhite};
    @media screen and ${breakpoints.laptopS} {
        bottom: ${sizes.s24};
        right: ${sizes.s24};        
    }
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
    .arrow{
        transform: scale(1.1);
    }
}
&:active {
    cursor:default;
}

&__nav {
    background-color: ${colors.navcardGrey};
    color: ${colors.titleColor};
    .title {
        color: ${colors.titleColor};
    }
    .wrapper{
        .arrow{
            display: none;
        }
        &:before {
            position: absolute; 
            bottom: 125px;
            left: -15px;
            width: 150px;
            height: 150px;
            background-color: ${colors.iconGrey};
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
            background-color: ${colors.iconGrey};
            -webkit-mask-image: url(${diagRightSVG});
            mask: url(${diagRightSVG}) no-repeat;
            content: '';
            @media screen and ${breakpoints.laptopS} {
                bottom: -15px;
                left: 195px;       
            }
        }
    }
    &:visited {
        .title{
            color: ${colors.titleColor};
        }
    }
    
    &:hover {
        box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
        .wrapper{
            &:before {
                background-color: ${colors.bgRed};
            }
            &:after {
                background-color: ${colors.bgRed};
            }
        }
        .title{
            color: ${colors.buttonHoverRed};
            text-decoration: underline;
        }
    }
    &:active {
        cursor:default;
        .wrapper{
            &:before {
                background-color: ${colors.bgRed};
            }
            &:after {
                background-color: ${colors.bgRed};
            }
        }

        .title{
            color: ${colors.linkActiveGrey};
            text-decoration: underline;
        }

    }
    
}







`
export default StyledPromoCardD