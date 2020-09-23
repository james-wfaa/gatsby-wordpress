import React from 'react'
import PropTypes from 'prop-types'
import PageSection from './PageSection'
import Testimonial from '../content-blocks/Testimonial'
import ImageSection from '../content-blocks/ImageSection'
import SimpleSlider from '../content-modules/SimpleSlider'



const PageSectionFromBlocks = ({ blocks, borderTop }) => {
    // preheading, heading, headingAlt, headingCompact, pageTitle, withSocial, plainText, popOut, excerpt, buttons, buttonsAlt, buttonsCompact, alt, topBorder, bgImage, children
            
    let title = null
    blocks.map((block) => {
        console.log(block.name)
        switch(block.name) {
            case "acf/section-header":
                title = (block.dynamicContent) ? block.dynamicContent : block.originalContent
                break
            default:
                console.log(block)
                //return ((block.dynamicContent) ? block.dynamicContent : block.originalContent)
                break
        }
        
    })
        
    return (
        <PageSection heading={title} topBorder={borderTop} fromBlocks>
            {
                blocks.map((block) => {
                    console.log(block.name)
                    switch(block.name) {
                        case "acf/section-header":
                            break
                        case "acf/testimonial":
                            const testimonial = ((block.dynamicContent) ? block.dynamicContent : block.originalContent)
                            return (<Testimonial data={testimonial} />)
                            case "acf/image-section":
                            const imagesection = ((block.dynamicContent) ? block.dynamicContent : block.originalContent)
                            return (<ImageSection data={imagesection} />)
                        case "core/gallery":
                            const gallery = ((block.dynamicContent) ? block.dynamicContent : block.originalContent)
                            return (<SimpleSlider className="center"
                            slidesToShow="1"
                            dots
                            centerMode
                            variableWidth
                            centerPadding="100px">
                                <div dangerouslySetInnerHTML={{__html: gallery}} />
                            </SimpleSlider>)
                            break;
                        default:
                            console.log(block)
                            return ((block.dynamicContent) ? block.dynamicContent : block.originalContent)
                            break
                    }
                    
                })

            }
        </PageSection>
    )
           
}

export default PageSectionFromBlocks
