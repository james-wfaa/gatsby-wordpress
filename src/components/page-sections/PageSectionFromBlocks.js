import React from 'react'
import PageSection from './PageSection'
import Testimonial from '../content-blocks/Testimonial'
import ImageSection from '../content-blocks/ImageSection'
import ImageWithCaption from '../content-blocks/ImageWithCaption'
import SimpleSlider from '../content-modules/SimpleSlider'
import CardSet from "../content-modules/CardSet"





const PageSectionFromBlocks = ({ blocks, gallery, cardset, borderTop, stagger }) => {
    // preheading, heading, headingAlt, headingCompact, pageTitle, withSocial, plainText, popOut, excerpt, buttons, buttonsAlt, buttonsCompact, alt, topBorder, bgImage, children

    // get the title
    let title = null
    blocks.map((block) => {
        switch(block.name) {
            case "acf/section-header":
                title = (block.isDynamic) ? block.dynamicContent : block.originalContent
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

                switch(block.name) {
                    case "acf/section-header":
                        break
                    case "acf/testimonial":
                        const testimonial = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                        return (<Testimonial data={testimonial} />)
                        case "acf/image-section":
                        const imagesection = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                        return (<ImageSection data={imagesection} />)
                    case "acf/product-card":
                        const productcard = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                        return (<div dangerouslySetInnerHTML={{__html: productcard}} />)
                    default:
                        const basiccontent = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                        return (<div dangerouslySetInnerHTML={{__html: basiccontent}} />)
                        break
                }

            })

    return (
        <PageSection heading={title} topBorder={borderTop} fromBlocks stagger={stagger} >
            { innerContent }
        </PageSection>
    )

}

export default PageSectionFromBlocks
