import React from "react"
import styled from 'styled-components'
import { sizes, breakpoints, mixins } from '../css-variables'

import Img from 'gatsby-image'

const CardE = ({ className, children }) => {
console.log(children)
    return (
        <div className={className}>
            {children}
        </div>
        
    )
}

const StyledCardE = styled(CardE)`
${mixins.imageWithCaption}
`

export default StyledCardE