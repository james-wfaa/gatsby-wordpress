import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints, mixins, colors } from '../css-variables'

import Img from 'gatsby-image'

const CardE = ({ className, img, caption, marginTop, center, bold, enhancedHomepageCaption}) => {
    
    const marginTopClass = marginTop ? 'marginTop' : ''
    const centerClass = center ? 'center' : ''
    const boldClass = bold ? 'bold' : ''

    return (
        <div className={className}>
            <figure >
                {img && (
                    <Img 
                        className={`${className}__img`}
                        fluid={img.childImageSharp.fluid}
                    />
                )}
            <figcaption className={`${marginTopClass} ${centerClass} ${boldClass} ${enhancedHomepageCaption}`}>{caption}</figcaption>
            </figure>
        </div>
        
    )
}

const StyledCardE = styled(CardE)`
${mixins.imageWithCaption}
`

export default StyledCardE