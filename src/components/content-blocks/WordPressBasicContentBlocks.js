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
    margin-left: 0;
    max-width: 712px;
}
.core-freeform {
    margin-bottom: ${sizes.s32};
}
/* End Styles copied form WPBlock*/ 

text-align: left;
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
.product-card{
    ${mixins.contentCardBase}
    ${mixins.contentCardSizes}
    display: flex;
    flex-flow: column;
    .title {
        ${mixins.cardTitle}
    }

    .button{
        a {
            ${mixins.buttons};
        }
    }
    .button--alt{
        a {
            ${mixins.buttonAlt};
        }
    }

    .columnwrap {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        height: 100%;
    }

    .jumbo-contentwrap{
        display: flex;
        flex-flow: column;
        width: 100%;
        flex-grow: 1;
    }


    &--XXL50{
        margin: 0 auto;
        .jumbo-img{
            display: none;
        }
        @media screen and ${breakpoints.tabletL} {
            width: 814px;
            min-height: 398px;
            flex-flow: row;
            border-top: 1px solid ${colors.cardBorder};
            .jumbo-img{
                display: block;
                width: 398px;
            }

            .jumbo-contentwrap{
                .attachment-full {
                    display: none;
                }
                .columnwrap{
                    border-right: none;
                }
            }

        }
        @media screen and ${breakpoints.laptopS} {
            width: 1080px;
            min-height: 528px;
            .columnwrap{
                :nth-last-child(1){
                    flex: 1 1 auto;
                }
            }
            .jumbo-img{
                width: 528px;
            }
        }
    }
}
`

export default StyledWordPressContentBlocks