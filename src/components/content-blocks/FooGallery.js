import React from "react"
import parse from 'html-react-parser'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import styled from 'styled-components'
import SimpleSlider from '../content-modules/SimpleSlider'
import CardE from './CardE'
import { getJsonObjects } from "../../utils/tools"
import { colors, sizes } from '../css-variables'
import { element } from "prop-types"

const FooGallery = ({ content, className }) => {

    //console.log(content)
    
    const parsed = (typeof content === "String") 
        ? parse(content, { trim: true })
        : null
    let fooGallery = null
    if (Array.isArray(parsed)) {
        parsed.forEach((block) => {
            //console.log(block)
            if (block.type === 'div' && block.props.className.indexOf('foogallery') > -1) {
                fooGallery = block
            }
        })
    }
    


    const getGalleryImages = () => {
        let galleryImages = []
        if (fooGallery?.props?.children) {
            fooGallery.props.children.forEach((child) => {
                if (child?.props?.className === 'fg-item') {
                    if (child?.props?.children) {
                        child.props.children.forEach((innerChild) => {
                            if (innerChild.props.className === "fg-item-inner" && innerChild.props?.children) {
                                innerChild.props.children.forEach((item) => {
                                    if (item.type === "a") {
                                        if (item.props?.children) {
                                            if (item.props.children?.props?.className === "fg-image-wrap") {
                                                const {  title: caption, alt, "data-src-fg":dataSrcFg } = item.props.children.props.children.props
                                                galleryImages.push(
                                                <CardE fooImage={dataSrcFg} caption={caption} alt={alt} />
                                                )
                                                
                                            }
                                        }
                                    }
                                })
                            }
                        })
                    }
                }
            })
        }
        return(galleryImages)
    }
    
    return (
        <div className={className}>
            <SimpleSlider
                className="center"
                slidesToShow="1"
                dots
                centerMode
                variableWidth>
                    {getGalleryImages()}
            </SimpleSlider>
        </div>

    )
}

const StyledFooGallery = styled(FooGallery)`
width: 100%;


`

export default StyledFooGallery