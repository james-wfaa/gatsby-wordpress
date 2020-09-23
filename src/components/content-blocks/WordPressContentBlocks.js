import React from 'react'
import PageSectionFromBlocks from "../page-sections/PageSectionFromBlocks"


const WordPressContent = ({className, blocks}) => {
    console.log(blocks);


    const RenderedBlocks = blocks.map((block) => {
        switch(block.name) {
            case "core/group":
                if (block.innerBlocks && block.originalContent.indexOf(' page-section') > 0) {
                    const borderTop = (block.originalContent.indexOf(' border-top') > 0)
                    return (<PageSectionFromBlocks blocks={block.innerBlocks} borderTop={borderTop} />)
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