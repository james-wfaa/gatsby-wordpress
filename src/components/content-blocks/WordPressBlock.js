import React from 'react'
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'



const WordPressBlock = ({className, block}) => {
    console.log('WordPressBlock - block:',block)

    return (
        <div className={className} dangerouslySetInnerHTML={{__html: block.originalContent}} />
    )
}

const StyledWordPressBlock = styled(WordPressBlock)`
`


export default StyledWordPressBlock