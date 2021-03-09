import React from "react"
import parse from 'html-react-parser';
import styled from 'styled-components'
import SimpleSlider from '../content-modules/SimpleSlider'
import CardE from './CardE'
import { getJsonObjects } from "../../utils/tools"
import { colors, fonts,sizes, breakpoints } from '../css-variables'
import { element } from "prop-types";


const FooGallery = ({ block, className }) => {

    const blockContent = block.dynamicContent ? block.dynamicContent : ''
    console.log("GalleryBlocks")    

    let RenderedBlocks = []

    const parsed = parse(blockContent)
    const parsedContnet = parsed.props ? parsed : parsed[0]


    //Recursive loop to find objects by ClassName. Currently only seems to be checking down one branch
    const searchForClassName = (element, className) => {
        if(element?.props?.className === className){
            return element
        }
        if(element?.props?.children){
            //console.log(element.props.className)
            let result = null
            if(element?.props?.children.length){
                let i = 0
                for(i = 0; result == null && i < element.props.children.length; i++){
                    result = searchForClassName(element.props.children[i], className)
                    console.log(result)
                }
            }
            else{
                
                result = searchForClassName(element.props.children, className)
                console.log(result)
            }

            return result

        }
        else{
            console.log(element.props.className)
            return "not Found"
        }
    }
        
    
    //console.log(parsedContnet)
    const getGalleryImages = () => {
        const ImagesFromFoo = parsedContnet.props.children.map((child) => {
            //console.log(child)
            if (child?.props?.className === 'fg-item') {
                console.log('match')
                let childImage = ''
                let childCaption = searchForClassName(child, 'fg-caption')
                
                
                //console.log(searchForClassName(child, 'fg-image'))
                //console.log("FOUND IT")
                
                return (
                    <CardE
                        img={childImage}
                        caption={childCaption}
                        captionStyleProps={{textAlign:`center`, fontWeight: `normal`, color: `${colors.captionBlack}`, marginTop: `${sizes.s32}`, fontSize: `${sizes.s18}`}}
                    />
                  )

                // get image and caption
                // pass as a CardE to an array of CardE (similar to RenderedBlocks in WordPressContentBlocks)
                // pass that array to the slider
            }
        })
        console.log(ImagesFromFoo)
        return (ImagesFromFoo)
    }

    /*if(parsed[0]){
        //console.log(parsed[0])
        parsed[0].props.children.map((child) => {
            RenderedBlocks.push(child)
        })
    }
    else{
        RenderedBlocks = parsed.props.children
    }*/
    
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


`

export default StyledFooGallery