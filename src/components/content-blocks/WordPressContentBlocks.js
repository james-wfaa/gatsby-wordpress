import React from 'react'
import PageSectionFromBlocks from "../page-sections/PageSectionFromBlocks"
import styled from 'styled-components'
import {  mixins } from '../css-variables'

const WordPressContent = ({className, blocks}) => {
    console.log(blocks);


    const RenderedBlocks = blocks.map((block) => {
        const borderTop = (block.originalContent.indexOf(' border-top') > 0)
       
        switch(block.name) {
            case "core/group":
                if (block.innerBlocks && block.originalContent.indexOf(' page-section') > 0) {
                    return (<PageSectionFromBlocks blocks={block.innerBlocks} borderTop={borderTop} />)
                }
                if (block.innerBlocks && block.originalContent.indexOf(' gallery') > 0) {
                    return (<PageSectionFromBlocks blocks={block.innerBlocks} gallery borderTop={borderTop} />)
                }
                break 
            case "core/separator":
                return (<div dangerouslySetInnerHTML={{__html: block.originalContent}} />)
                break
            default: 
                console.log(block)
                return (<PageSectionFromBlocks blocks={[block]}  />)
                break
        }
        }
    )

    return(
        <div className={className}>{RenderedBlocks}</div>
    )
}

const StyledWordPressContent = styled(WordPressContent)`
hr.wp-block-separator {
    ${mixins.separator}
}
`

export default StyledWordPressContent