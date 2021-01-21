import React from 'react'
import PageSection from './PageSection'
import Testimonial from '../content-blocks/Testimonial'
import ImageSection from '../content-blocks/ImageSection'
import GravityForm from '../content-blocks/GravityForm'
import ImageWithCaption from '../content-blocks/ImageWithCaption'
import SimpleSlider from '../content-modules/SimpleSlider'
import CardSet from "../content-modules/CardSet"
import Block from '../content-blocks/WordPressBlock'






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

                //console.log(block)

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
                            
            
                            
                    case "acf/testimonial":
                        const testimonial = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                        return (<Testimonial data={testimonial} />)
                        case "acf/image-section":
                        const imagesection = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                        return (<ImageSection data={imagesection} />)
                    case "acf/product-card":
                        const productcard = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                        return (<div dangerouslySetInnerHTML={{__html: productcard}} />)

                    case "gravityforms/form":
                        const shortcode = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                        console.log(shortcode)
                        let idStart = shortcode.indexOf('id="')
                        if (idStart > -1) {
                            idStart += 4
                            let idEnd = shortcode.indexOf('"', idStart)
                            console.log(idEnd)
                            console.log(idStart)
                            const formId = shortcode.substring(idStart,idEnd)
                            console.log(formId)
                            return (<GravityForm id={formId} />)
                        }
                        
                        break

                    default:
                        //console.log('default block', block.name)
                        
                        return (<Block className={block.name.replace('/', '-')} block={block} />)
                        break
                }

            })

    return (
        <PageSection heading={title} topBorder={borderTop} fromBlocks stagger={stagger} centered={centered} >
            { innerContent }
        </PageSection>
    )

}

export default PageSectionFromBlocks
