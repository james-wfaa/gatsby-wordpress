import React from 'react'
import PageSectionFromBlocks from "../page-sections/PageSectionFromBlocks"


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
            default: 
                console.log(block)
                return (<PageSectionFromBlocks blocks={[block]}  />)
                break
        }
        }
    )

    return(
        <>{RenderedBlocks}</>
    )
}
export default WordPressContent