import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints, mixins, colors } from '../css-variables'

import Img from 'gatsby-image'

const CardE = ({ className, img, caption, captionStyleProps, marginTop, center, bold, red, big, italic, fontFamily}) => {
    
    const marginTopClass = marginTop ? 'marginTop' : ''
    const centerClass = center ? 'center' : ''
    const boldClass = bold ? 'bold' : ''
    const redClass = red ? 'red' : ''
    const bigClass = big ? 'big' : ''
    const italicClass = italic ? 'italic' : ''
    const fontClass = fontFamily ? 'fontFamily' : ''

    return (
        <div className={className}>
            <figure >
                {img && (
                    <Img 
                        className={`${className}__img`}
                        fluid={img.childImageSharp.fluid}
                    />
                )}
            <figcaption style={captionStyleProps} className={`${marginTopClass} ${centerClass} ${boldClass} ${redClass} ${bigClass} ${italicClass} ${fontClass}`}>{caption}</figcaption>
            </figure>
        </div>
        
    )
}

const StyledCardE = styled(CardE)`
${mixins.imageWithCaption}
`

export default StyledCardE