import React from "react"
import styled from 'styled-components'
import {  mixins } from '../css-variables'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const CardE = ({ className, img, width, fooImage, alt, caption, marginTop, center, enhancedHomepageCaption, pillar}) => {
    
    const marginTopClass = marginTop ? ' marginTop' : ''
    const centerClass = center ? ' center' : ''
    const enhancedHomepageCaptionClass = enhancedHomepageCaption ? ' enhancedHomepageCaption' : ''
    const pillarClass = (pillar) ? ' pillar' : ''
    const image = getImage(img)
    const imageFoo = getImage(fooImage)

    return (
        <div className={`${className}${pillarClass}`}>
            <figure >
                {image && (
                    <GatsbyImage image={image} alt={alt} layout="constrained" width={width} />
                )}
                {imageFoo && (
                    <GatsbyImage image={imageFoo} alt={alt} layout="constrained"  width={width} />
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