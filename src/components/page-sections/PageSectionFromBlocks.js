import React from 'react'
import PageSection from './PageSection'
import Testimonial from '../content-blocks/Testimonial'
import ImageSection from '../content-blocks/ImageSection'
import ImageWithCaption from '../content-blocks/ImageWithCaption'
import SimpleSlider from '../content-modules/SimpleSlider'
import CardSet from "../content-modules/CardSet"
import Block from '../content-blocks/WordPressBlock'
import Button from "../parts/Button"


const PageSectionFromBlocks = ({ blocks, gallery, cardset, borderTop, stagger, centered }) => {
    // preheading, heading, headingAlt, headingCompact, pageTitle, withSocial, plainText, popOut, excerpt, buttons, buttonsAlt, buttonsCompact, alt, topBorder, bgImage, children

    // get the title
    let title = null
    blocks.map((block) => {
        switch(block.name) {
            case "acf/section-header":
                title = (block.isDynamic) ? block.dynamicContent : block.originalContent
                break
            case "core/heading":
                console.log ("normal heading")
                if (block.originalContent.indexOf('<h2') > -1) {
                    console.log ("normal h2 heading")
                    title = (block.isDynamic) ? block.dynamicContent : block.originalContent
                }
                break
            default:
                break
        }
    })

    // determine inner content (slider or no slider)
    let excerpt = null;
    const innerContent = (gallery)
        ?
        (<SimpleSlider className="center"
        slidesToShow="1"
        dots
        centerMode
        variableWidth
        centerPadding="100px"
        >
            { blocks.map((block) => {
                const innerContent =  ((block.dynamicContent && block.dynamicContent !== "") ? block.dynamicContent : block.originalContent)
                if (block.name === "core/image") {
                    return (
                        <ImageWithCaption><div dangerouslySetInnerHTML={{__html: innerContent}} /></ImageWithCaption>
                    )
                } else {
                    return <div dangerouslySetInnerHTML={{__html: innerContent}} />
                }

            })
            }
        </SimpleSlider>)

        : (cardset)
            ? (<CardSet>{
                blocks.map((block) => {
                const innerContent =  ((block.dynamicContent && block.dynamicContent !== "") ? block.dynamicContent : block.originalContent)
                return innerContent


            })}</CardSet>)
            : blocks.map((block) => {

                switch(block.name) {
                    case "acf/section-header":
                        break
                    case "core/heading":
                        if (block.originalContent.indexOf('<h2') > -1) {
                            break
                        }
                        else {
                            return (<div dangerouslySetInnerHTML={{__html: block.originalContent}} />)
                        }
                    case "core/paragraph":
                        if (block.originalContent.indexOf('excerpt') > 0) {
                            if(excerpt){
                                excerpt += (block.isDynamic) ? block.dynamicContent : block.originalContent
                            }
                            else{
                                excerpt = (block.isDynamic) ? block.dynamicContent : block.originalContent
                            }
                            break
                        }
                        else{
                            return (<Block className={block.name.replace('/', '-')} block={block} />)
                        }
                    case "acf/testimonial":
                        const testimonial = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                        return (<Testimonial data={testimonial} />)
                    case "acf/image-section":
                        const imagesection = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                        return (<ImageSection data={imagesection} />)
                    case "acf/product-card":
                        const productcard = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                        return (<div dangerouslySetInnerHTML={{__html: productcard}} />)
                    case "core/buttons":
                        console.log("Found a button");
                        if(block.innerBlocks && block.innerBlocks[0].originalContent){
                            let innerRenderedBlocks = [];
                            block.innerBlocks.forEach((innerBlock) => {
                                innerRenderedBlocks.push(<Block className={innerBlock.name.replace('/', '-')} block={innerBlock} />) 
                            })
                            console.log("blocks: " + innerRenderedBlocks)
                            return (<div className={block.name.replace('/', '-')}>{innerRenderedBlocks}</div>)
                        }
                        break
                    default:
                        //console.log('default block', block.name)
                        
                        return (<Block className={block.name.replace('/', '-')} block={block} />)
                }

            })

    return (
        <PageSection heading={title} topBorder={borderTop} fromBlocks stagger={stagger} centered={centered} excerpt={excerpt} >
            { innerContent }
        </PageSection>
    )

}

export default PageSectionFromBlocks
