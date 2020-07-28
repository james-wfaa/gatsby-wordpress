import React from "react"
import styled from 'styled-components'
import { colors, sizes, breakpoints, fonts } from '../css-variables'

const PageSectionHeader = ({ className, heading, pageTitle, bgimage }) => {

    const classesList = bgimage ? `${className} ${className}--bgimage` : className
    return (
        <div className={classesList}>
            { pageTitle && (
                <h1>{heading}</h1>
            )}
            { (!pageTitle || typeof pageTitle === 'undefined') && (
                <h2>{heading}</h2>
            )}
        </div>
    )
}

const StyledPageSectionHeader = styled(PageSectionHeader)`
    position: relative;
    padding-bottom:  ${sizes.s40};
    margin-bottom: ${sizes.s58};
    h1,
    h2 {
       
        color: ${colors.titleColor};
        font-family: ${fonts.eaves};
        font-weight: bold;
        font-style: italic;
        font-size: ${sizes.s36};
        line-height: ${sizes.s40};
        margin: 0;
        padding: 0 1em;

        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s42};
            line-height: ${sizes.s52};
            padding: 0;
        }
    }
    &:after {
        position: absolute;
        bottom: 0;
        right: calc( 50% - ${sizes.s34} );
        height: ${sizes.s8};
        width: calc( ${sizes.s34} * 2 );
        background-color: ${colors.titleColor};
        content: '';
    }

    &--bgimage {
        h2 {
            color: ${colors.titleWhite}
        }
        &:after {
            background-color: ${colors.bgWhite};
        }
    }
`

export default StyledPageSectionHeader