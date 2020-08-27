import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints } from '../css-variables'

import Img from 'gatsby-image'

const CardE = ({ className, img, caption }) => {

    return (
        <figure className={className}>
            {img && (
                <Img 
                    className={`${className}__img`}
                    fluid={img.childImageSharp.fluid}
                />
            )}
            
        <figcaption>{caption}</figcaption>
        </figure>
    )
}

const StyledCardE = styled(CardE)`
max-width: 254px;
margin: 0;

@media screen and ${breakpoints.laptopS} {
    max-width: 344px;

}

img {
    
}
figcaption {
    margin-top: ${sizes.s32};
    font-weight: bold;
}
`

export default StyledCardE