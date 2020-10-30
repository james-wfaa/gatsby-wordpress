import React from 'react'
import PageSectionFromBlocks from "../page-sections/PageSectionFromBlocks"
import styled from 'styled-components'
import {  colors, sizes, breakpoints, mixins } from '../css-variables'

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
                if (block.innerBlocks && block.originalContent.indexOf(' card-set') > 0) {
                    return (<PageSectionFromBlocks blocks={block.innerBlocks} cardset borderTop={borderTop} />)
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
        @media screen and ${breakpoints.laptopL} {
            width: 1080px;
            min-height: 528px;
            .jumbo-img{
                width: 528px;
            }
        }
    }
}
`

export default StyledWordPressContent