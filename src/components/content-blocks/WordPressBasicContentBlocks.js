import React from 'react'
import PageSectionFromBlocks from "../page-sections/PageSectionFromBlocks"
import PageSection from "../page-sections/PageSection"
import CardHandler from "../content-modules/CardHandler"
import styled from 'styled-components'
import { colors, breakpoints, mixins, sizes } from '../css-variables'
import Block from './WordPressBlock'


const WordPressContentBlocks = ({className, blocks, content, eventCategory, stagger}) => {

    const RenderedBlocks = (blocks) ? blocks.map((block) => {
        const borderTop = (block.originalContent.indexOf(' border-top') > 0)
        console.log(block.name)
        switch(block.name) {
            case "core/separator":
                return(<div dangerouslySetInnerHTML={{__html: block.originalContent}} />)
                break
            case "core/group":
            case "acf/events-listing-section":
                break  
            //Add case to handle news/stories that use the freeform block but do not have blocks... and then use content instead of original content because it has the html tags
            //Also added css below that is duplicated from WPBlock
            case "core/freeform":
                return(<div className={block.name.replace('/', '-')} dangerouslySetInnerHTML={{__html: content}} />)
                break
            default:
                return (<Block className={block.name.replace('/', '-')} block={block} />)    
                break
        }
    }
    ) : null


    return(
        <div className={className} id="Top">
            { RenderedBlocks && (
                <div className="content">{RenderedBlocks}</div>
            )}
            { !RenderedBlocks && (
                <Block className={className} block={content} />
            )}
        </div>
    )

}

const StyledWordPressContentBlocks = styled(WordPressContentBlocks)`
/* Start Styles copied form WPBlock - should these be here?*/ 
min-width: 300px;
    width: 100%;
    max-width: 303px;
    margin-left: auto;
    margin-right: auto;

@media screen and ${breakpoints.tabletS} {
    max-width: 536px;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;

}
@media screen and ${breakpoints.laptopS} {
    max-width: 712px;
}
.core-freeform {
    margin-bottom: ${sizes.s32};
}
/* End Styles copied form WPBlock*/ 

margin: 0 auto;
position: relative;
display: block;
max-width: 100%;
@media screen and ${breakpoints.laptopS} {
    max-width: 712px;
}

hr.wp-block-separator {
    ${mixins.separator}
}
`

export default StyledWordPressContentBlocks