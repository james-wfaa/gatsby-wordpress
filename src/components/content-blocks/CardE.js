import React from "react"
import styled from 'styled-components'
import {  mixins } from '../css-variables'

import Img from 'gatsby-image'

const CardE = ({ className, img, fooImage, alt, caption, marginTop, center, enhancedHomepageCaption, pillar}) => {
    
    const marginTopClass = marginTop ? ' marginTop' : ''
    const centerClass = center ? ' center' : ''
    const enhancedHomepageCaptionClass = enhancedHomepageCaption ? ' enhancedHomepageCaption' : ''
    const pillarClass = (pillar) ? ' pillar' : ''

    return (
        <div className={`${className}${pillarClass}`}>
            <figure >
                {img && (
                    <Img 
                        className={`${className}__img `}
                        fluid={img.childImageSharp.fluid}
                        alt={alt}
                    />
                )}
                {fooImage && (
                    <img alt={alt} src={fooImage} />
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