import React from 'react'
import PropTypes from 'prop-types'
import PageSection from './PageSection'
import Testimonial from '../content-blocks/Testimonial'
import ImageSection from '../content-blocks/ImageSection'
import ImageWithCaption from '../content-blocks/ImageWithCaption'
import SimpleSlider from '../content-modules/SimpleSlider'

import LeftArrow from "../parts/SliderArrowLeft"
import RightArrow from "../parts/SliderArrowRight"




const PageSectionFromBlocks = ({ blocks, gallery, borderTop }) => {
    // preheading, heading, headingAlt, headingCompact, pageTitle, withSocial, plainText, popOut, excerpt, buttons, buttonsAlt, buttonsCompact, alt, topBorder, bgImage, children
    
    // get the title
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

    // helper for Slider, hopefully this gets integrated
    const settings = {
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
      }

    // determine inner content (slider or no slider)
    const innerContent = (gallery) 
        ? 
        (<SimpleSlider className="center"
        slidesToShow="1"
        dots
        centerMode
        variableWidth
        centerPadding="100px"
        {...settings}>
            { blocks.map((block) => {
                console.log(block)
                const innerContent =  ((block.dynamicContent && block.dynamicContent !== "") ? block.dynamicContent : block.originalContent)
                console.log(innerContent)
                if (block.name === "core/image") {
                    // send "large" prop
                    return (
                        <ImageWithCaption><div dangerouslySetInnerHTML={{__html: innerContent}} /></ImageWithCaption>
                    )
                } else {
                    return <div dangerouslySetInnerHTML={{__html: innerContent}} />
                }
                
            })
            }
        </SimpleSlider>)

        : blocks.map((block) => {
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
                
                default:
                    console.log(block)
                    return ((block.dynamicContent) ? block.dynamicContent : block.originalContent)
                    break
            }
            
        })
        
    return (
        <PageSection heading={title} topBorder={borderTop} fromBlocks>
            {
                innerContent

            }
        </PageSection>
    )
           
}

export default PageSectionFromBlocks
