import React from "react"
import styled from 'styled-components'
import { colors, sizes, breakpoints, fonts } from '../css-variables'
import quotationMarks from '../../svg/Testimonial_Quotation_Marks_2x.svg'

const Testimonial = ({ className, data }) => {

    return (
        <div className={className} dangerouslySetInnerHTML={{__html: data}} />
    )
}

const StyledTestimonial = styled(Testimonial)`

    max-width: 1080px;
    margin: 0 auto;
    width: 256px;
    display: flex;
    flex-flow: column;
    text-align: left;
    position: relative;
    margin-bottom: ${sizes.s48};
    
    &:last-child {
        margin-bottom: 0;
    }
    &:first-child {
        margin-top: ${sizes.s58};
    }

   
    border: 1px solid ${colors.cardBorder};
    border-top: 6px solid ${colors.cardBorder};
    background-color: ${colors.bgWhite};
    opacity: 0.9;

    font-family: ${fonts.eaves};

    @media screen and ${breakpoints.tabletS} {
        width: 528px;
    }
    @media screen and ${breakpoints.laptopS} {
        width: 1080px;
        min-height: 230px;  
        border-top: 1px solid ${colors.cardBorder};
        &:before {
            position: absolute;
            content: "";
            display: block;
            width: 345px;
            height: 6px;
            top: -6px;
            left: -1px;
            background-color: ${colors.cardBorder};
        }
        &:after {
            position: absolute;
            background: url(${quotationMarks}) no-repeat;
            content: "";
            display: block;
            width: 345px;
            min-height: 100%;  
            top: 0px;
            left: 0px;
            background-color: ${colors.bgActiveGrey};
        }
    }
    blockquote{
        font-size: ${sizes.s24};
        line-height: ${sizes.s36};
        font-style: italic;
        margin: ${sizes.s16};
        @media screen and ${breakpoints.laptopS} {
            margin: 32px 32px 32px 376px;
            &:before {
                position: absolute;
                content: '';
                top: 32px;
                left: 338px;
                height: 30px;
                width: 14px;
                z-index: 1;
                border-left: 1.5px solid ${colors.bgRed};
                border-right: 1.5px solid ${colors.bgRed};
                transform: skew(135deg);
            }
        }
    }
    figCaption{
        font-size: ${sizes.s18};
        line-height: ${sizes.s26};    
        margin: ${sizes.s16};
        @media screen and ${breakpoints.laptopS} {
            margin: 0px 32px 32px 376px;
        }
    }

`

export default StyledTestimonial