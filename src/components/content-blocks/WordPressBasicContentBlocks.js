import React from 'react'
import PageSectionFromBlocks from "../page-sections/PageSectionFromBlocks"
import PageSection from "../page-sections/PageSection"
import CardHandler from "../content-modules/CardHandler"
import styled from 'styled-components'
import { colors, breakpoints, mixins } from '../css-variables'
import Block from './WordPressBlock'


const WordPressContentBlocks = ({className, blocks, content, eventCategory, stagger}) => {

    const RenderedBlocks = (blocks) ? blocks.map((block) => {
        const borderTop = (block.originalContent.indexOf(' border-top') > 0)

        switch(block.name) {
            
            case "core/group":
                if (block.innerBlocks && block.originalContent.indexOf(' page-section') > 0) {
                    console.log('page-section')
                    return(<PageSectionFromBlocks blocks={block.innerBlocks} borderTop={borderTop} stagger={stagger} />)
                }
                if (block.innerBlocks && block.originalContent.indexOf(' gallery') > 0) {
                    console.log('gallery')
                    return(<PageSectionFromBlocks blocks={block.innerBlocks} gallery borderTop={borderTop} stagger={stagger} />)
                }
                if (block.innerBlocks && block.originalContent.indexOf(' card-set') > 0) {
                    console.log('card-set')
                    return(<PageSectionFromBlocks blocks={block.innerBlocks} cardset borderTop={borderTop} stagger={stagger} />)
                }

                break
            case "core/freeform":
            case "core/paragraph":
            case "core/list":
            case "core/heading":
            case "core/table":
            case "core/image":
            case "core/html":
                console.log(block);
                return (<Block className={block.name.replace('/', '-')} block={block.originalContent} />)
                break
        
            case "core/separator":
                return(<div dangerouslySetInnerHTML={{__html: block.originalContent}} />)
            case "acf/events-listing-section":
                console.log('events-listing-section')
                if(eventCategory){
                    const { slug, events } = eventCategory
                    const eventsToShow = (events?.nodes) ? events.nodes : null
                    const buttons = (eventsToShow.length > 2) 
                        ? [{
                            link: `/events/search/?category=${slug}`,
                            text: 'See All Events'
                        }]
                        : null
                        return(<PageSection id="event-listing" heading="Upcoming Events" borderTop={borderTop} stagger={stagger} buttons={buttons}><CardHandler items={eventsToShow} size="M" /></PageSection>)
                    break
                }
                else{
                    break;
                }
                
            default:
                console.log('default case')
                return(<PageSectionFromBlocks blocks={[block]} heading="Default" borderTop={borderTop} stagger={stagger} />)
                
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