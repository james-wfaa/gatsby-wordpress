import React from 'react'
import PageSectionFromBlocks from "../page-sections/PageSectionFromBlocks"
import PageSection from "../page-sections/PageSection"
import CardHandler from "../content-modules/CardHandler"
import EmbedBlock from "./EmbedBlock"
import GravityForm from './GravityForm'
import AccordionNavigation from './AccordionNavigation'
import SpecialBlock from '../content-modules/SpecialBlock'

import styled from 'styled-components'
import { colors, breakpoints, mixins } from '../css-variables'
import Block from './WordPressBlock'


const WordPressContentBlocks = ({className, blocks, content, eventCategory, product, stagger}) => {

    // see if the product has event and/or post nodes

    const staggerBlocks = (stagger) 
        ? blocks.map((block) => {
            block.stagger = true
            block.key = block.id
            return block
        })
        : blocks

    let RenderedBlocks = []

    staggerBlocks.forEach((block) => {
        const borderTop = (block.originalContent.indexOf(' border-top') > 0)
        const stagger = block.stagger

        //console.log(block.name)

        switch(block.name) {            
            case "core/group":
                if (block.innerBlocks && block.originalContent.indexOf(' page-section') > 0) {
                    //console.log('page-section')
                    RenderedBlocks.push(<PageSectionFromBlocks blocks={block.innerBlocks} borderTop={borderTop} stagger={stagger} centered />)
                }
                if (block.innerBlocks && block.originalContent.indexOf(' gallery') > 0) {
                    //console.log('gallery')
                    RenderedBlocks.push(<PageSectionFromBlocks blocks={block.innerBlocks} gallery borderTop={borderTop} stagger={stagger} />)
                }
                if (block.innerBlocks && block.originalContent.indexOf(' card-set') > 0) {
                    //console.log('card-set')
                    RenderedBlocks.push(<PageSectionFromBlocks blocks={block.innerBlocks} cardset borderTop={borderTop} stagger={stagger} />)
                }

                break
            case "core/freeform":
            case "core/paragraph":
            case "core/list":
            case "core/heading":
            case "core/table":
            case "core/image":
            case "core/html":
                return (<Block className={block.name.replace('/', '-')} block={block.originalContent} />)
                break
            case "gravityforms/form":
                //console.log('form found')
                const shortcode = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                //console.log(shortcode)
                let idStart = shortcode.indexOf('id="')
                if (idStart > -1) {
                    idStart += 4
                    let idEnd = shortcode.indexOf('"', idStart)
                    //console.log(idEnd)
                    //console.log(idStart)
                    const formId = shortcode.substring(idStart,idEnd)
                    //console.log(formId)
                    return (<GravityForm className={block.name.replace('/', '-')} id={formId} />)
                }
                
                break
        
            case "core-embed/flickr":
                return <EmbedBlock source={block.originalContent} type="flickr" />
                break
            case "core-embed/vimeo":
                //console.log('vimeo')
                //console.log(block)
                //return <div>foo</div>//
                RenderedBlocks.push(<PageSection borderTop={borderTop} stagger={stagger}>
                    <EmbedBlock source={block.originalContent} type="vimeo" />
                    </PageSection>)
                break
            case "core/separator":
                RenderedBlocks.push(<div dangerouslySetInnerHTML={{__html: block.originalContent}} />)
            case "acf/accordion-navigation":
                return <AccordionNavigation className={block.name.replace('/', '-')} block={block} />
                break
            case "acf/product-story-listing":
                if ( product) {
                    const { slug, posts } = product
                    const postsToShow = (posts?.nodes) ? posts.nodes : null
                    const buttons = (postsToShow.length > 2) 
                        ? [{
                            link: `/posts/search/?category=${slug}`,
                            text: 'See More WAA Stories'
                        }]
                        : null
                    RenderedBlocks.push(<PageSection id="post-listing" heading="WAA Stories" borderTop={borderTop} stagger={stagger} buttons={buttons}><CardHandler items={postsToShow} type="news" size="M" /></PageSection>)    
                }
                
                break
            case "acf/special-block":
                RenderedBlocks.push(<SpecialBlock block={block} />)
            case "acf/events-listing-section":
                //console.log('events-listing-section')
                if ( product) {
                    const { slug, events } = product
                    const eventsToShow = (events?.nodes) ? events.nodes : null
                    const buttons = (eventsToShow.length > 2) 
                        ? [{
                            link: `/events/search/?category=${slug}`,
                            text: 'See More Events'
                        }]
                        : null
                    RenderedBlocks.push(<PageSection id="event-listing" heading="Upcoming Events" borderTop={borderTop} stagger={stagger} buttons={buttons}><CardHandler items={eventsToShow} size="M" type="event"/></PageSection>)
                }
                
                break
            
            default:
                //console.log('default')
                RenderedBlocks.push(<PageSectionFromBlocks blocks={[block]} heading="Default" borderTop={borderTop} stagger={stagger} />)
                
        }
    }
    )
    return(
        <div className={className}>{RenderedBlocks}</div>
    )
}

const StyledWordPressContentBlocks = styled(WordPressContentBlocks)`
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