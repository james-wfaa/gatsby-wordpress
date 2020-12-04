import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints, mixins, colors } from '../css-variables'

import Img from 'gatsby-image'

const CardE = ({ className, img, caption}) => {
    
    return (
        <div className={className}>
            <figure >
                {img && (
                    <Img 
                        className={`${className}__img`}
                        fluid={img.childImageSharp.fluid}
                    />
                )}
                
            <figcaption>{caption}</figcaption>
            </figure>
        </div>
        
    )
}

const StyledCardE = styled(CardE)`
${mixins.imageWithCaption}
    figure{
        figcaption {
            margin-top: ${sizes.s32};
            font-weight:bold;
            color: ${colors.captionBlack};
        }
    }
`

export default StyledCardE