import React from "react"
import parse from 'html-react-parser'
import styled from 'styled-components'
import SimpleSlider from '../content-modules/SimpleSlider'
import CardE from './CardE'


const FooGallery = ({ content, id, className }) => {
    //console.log('FooGallery ' , id)
    const parsed = (typeof content === "string") 
        ? parse(content, { trim: true })
        : null

    let fooGallery = null
    if (Array.isArray(parsed)) {
        parsed.forEach((block) => {
           // console.log(block)
            if (block.type === 'div' && block?.props?.id && block.props.id === id) {
                fooGallery = block
            }
        })
    }
    //console.log(fooGallery)


    const getGalleryImages = () => {
        let galleryImages = []
        if (fooGallery?.props?.children) {
            if (Array.isArray(fooGallery.props.children)) {
                //console.log(fooGallery.props.children)
                React.Children.forEach(fooGallery.props.children,child => {
                    if (child?.props?.className === 'fg-item') {
                        if (child?.props?.children?.[0]) {
                            React.Children.forEach(child.props.children,innerChild => {
                                if (innerChild.props.className === "fg-item-inner" && innerChild.props?.children) {
                                    React.Children.forEach(innerChild.props.children,item => {
                                        if (item.type === "a") {
                                            if (item.props?.children) {
                                                if (item.props.children?.props?.className === "fg-image-wrap") {
                                                    const {  title: caption, alt, "data-src-fg":dataSrcFg } = item.props.children.props.children.props
                                                    //console.log(item.props.children.props.children.props)
                                                    const renderedCaption = (caption && caption !== '') ? caption : alt
                                                    galleryImages.push(
                                                    <CardE key={dataSrcFg} fooImage={dataSrcFg} caption={renderedCaption} alt={alt} />
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
            else if (fooGallery.props.children?.props?.className && fooGallery.props.children.props.className === "fiv-inner") {
                //console.log(fooGallery.props.children.props.children)
                React.Children.forEach(fooGallery.props.children.props.children,child => {
                    if (child?.props?.className === 'fiv-inner-container') {
                        //console.log('found the items')
                        if (child?.props?.children?.[0]) {
                            React.Children.forEach(child.props.children,innerChild => {
                               // console.log(innerChild)
                                if (innerChild.props.className === "fg-item" && innerChild.props?.children) {
                                    //console.log('fg-item')
                                    React.Children.forEach(innerChild.props.children,item => {
                                        let src = null
                                        let resolvedCaption = ''
                                        let resolvedAlt = ''
                                        if (item.props.className === "fg-item-inner" && item.props?.children) {
                                            //console.log('.fiv-inner-container .fg-item-inner')

                                            React.Children.forEach(item.props.children,inner => {
                                                
                                                if (inner.type === "a") {
                                                    //console.log('inner type a', inner)
                                                    const { "data-caption-title": dataCaptionTitle } = inner.props
                                                    //console.log(dataCaptionTitle)
                                                    if (dataCaptionTitle && dataCaptionTitle !== '') {
                                                        resolvedCaption = dataCaptionTitle
                                                    }
                                                    if (inner.props?.children) {
                                                        //console.log(inner.props.children)
                                                        if (inner.props.children?.props?.className === "fg-image-wrap") {
                                                            //console.log('here it is')
                                                            const {  title: caption, alt, "data-src-fg":dataSrcFg } = inner.props.children.props.children.props
                                                            src = dataSrcFg
                                                            resolvedCaption = (resolvedCaption === '') 
                                                                ? caption
                                                                    ? caption
                                                                    : alt
                                                                : resolvedCaption
                                                            
                                                            resolvedAlt = alt
                                                            
                                                        }
                                                    }
                                                }

                                            })
                                        }
                                        if (src) {
                                            galleryImages.push(
                                                <CardE key={src} fooImage={src} caption={resolvedCaption} alt={resolvedAlt} />
                                                )

                                        }
                                    })
                                }
                            })
                        }
                    }
                })
               // console.log(fooGallery.props.children.props.children)
            }

        }
        return(galleryImages)
    }
    
    return (
        <div className={className}>
            <SimpleSlider
                className="center"
                slidesToShow="1"
                centerMode
                variableWidth>
                    {getGalleryImages()}
            </SimpleSlider>
        </div>

    )
}

const StyledFooGallery = styled(FooGallery)`
width: 100%;
margin: 2em auto;


`

export default StyledFooGallery