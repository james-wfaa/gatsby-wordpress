import React from "react"
import styled from 'styled-components'
import { mixins } from '../css-variables'


const ImageWithCaption = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

const StyledImageWithCaption = styled(ImageWithCaption)`
${mixins.imageWithCaption}
`
export default StyledImageWithCaption