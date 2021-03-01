import React from "react"
import parse from 'html-react-parser';
import styled from 'styled-components'
import SimpleSlider from '../content-modules/SimpleSlider'
import { colors, fonts,sizes, breakpoints } from '../css-variables'
import { element } from "prop-types";


const FooGallery = ({ block, className }) => {

    const blockContent = block.dynamicContent ? block.dynamicContent : ''
    const parsed = parse(blockContent)
    console.log("GalleryBlock")
    //console.log(parsed.props.children)

    let RenderedBlocks = []

    if(parsed[0]){
        console.log(parsed[0])
        parsed[0].props.children.map((child) => {
            RenderedBlocks.push(child)
        })
        

    }
    else{
        RenderedBlocks = parsed.props.children
    }
    
    
      
        return (
            <div className={className}>
                <SimpleSlider
                    className="center"
                    slidesToShow="1"
                    dots
                    centerMode
                    variableWidth>
                        {RenderedBlocks}
                </SimpleSlider>
            </div>

        )
}

const StyledFooGallery = styled(FooGallery)`


`

export default StyledFooGallery