import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints, mixins, colors } from '../css-variables'

import Img from 'gatsby-image'

const CardE = ({ className, img, caption, captionStyleProps, fontColor, fontSize, marginTop, textAlign, fontWeight}) => {
    
    const fontColorClass = fontColor ? 'fontColor' : ''
    const fontSizeClass = fontSize ? 'fontSize' : ''
    const marginTopClass = marginTop ? 'marginTop' : ''
    const textAlignClass = textAlign ? 'textAlign' : ''
    const fontWeightClass = fontWeight ? 'fontWeight' : ''

    return (
        <div className={className}>
            <figure >
                {img && (
                    <Img 
                        className={`${className}__img`}
                        fluid={img.childImageSharp.fluid}
                    />
                )}
                
            <figcaption style={captionStyleProps} className={`${marginTopClass} ${fontColorClass} ${fontSizeClass} ${textAlignClass} ${fontWeightClass}`}>{caption}</figcaption>
            </figure>
        </div>
        
    )
}

const StyledCardE = styled(CardE)`
${mixins.imageWithCaption}
figure{
    figcaption{
        &.fontColor {
            color: ${colors.captionBlack};
        }
        &.marginTop{
            margin-top: ${sizes.s32};
        }
        &.fontSize{
            font-size: ${sizes.s18};
        }
        &.textAlign{
            text-align: center;
        }
        &.fontWeight{
            font-weight: normal;
        }
    }
}
`

export default StyledCardE