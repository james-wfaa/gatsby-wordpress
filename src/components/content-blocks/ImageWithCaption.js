import React from "react"
import styled from 'styled-components'
import { mixins } from '../css-variables'


const ImageWithCaption = ({ className, children, storyCaption }) => {
    return (
        <div className={`${className} ${storyCaption}`}>
            {children}
        </div>
    )
}

const StyledImageWithCaption = styled(ImageWithCaption)`
${mixins.imageWithCaption}
`
export default StyledImageWithCaption