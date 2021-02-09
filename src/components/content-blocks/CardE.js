import React from "react"
import styled from 'styled-components'
import {  mixins } from '../css-variables'

import Img from 'gatsby-image'

const CardE = ({ className, img, caption, marginTop, center, enhancedHomepageCaption}) => {
    
    const marginTopClass = marginTop ? 'marginTop' : ''
    const centerClass = center ? 'center' : ''
    const enhancedHomepageCaptionClass = enhancedHomepageCaption ? 'enhancedHomepageCaption' : ''

    return (
        <div className={className}>
            <figure >
                {img && (
                    <Img 
                        className={`${className}__img`}
                        fluid={img.childImageSharp.fluid}
                    />
                )}
            <figcaption className={`${marginTopClass} ${centerClass} ${enhancedHomepageCaptionClass}`}>{caption}</figcaption>
            </figure>
        </div>
        
    )
}

const StyledCardE = styled(CardE)`
${mixins.imageWithCaption}
`

export default StyledCardE