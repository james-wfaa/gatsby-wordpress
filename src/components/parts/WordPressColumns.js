import React from "react"
import styled from 'styled-components'
import { breakpoints } from '../css-variables'
import Block from '../content-blocks/WordPressBlock'
import Testimonial from '../content-blocks/Testimonial'
import ImageSection from '../content-blocks/ImageSection'
import GravityForm from '../content-blocks/GravityForm'
import EmbedBlock from "../content-blocks/EmbedBlock"
import AdvocacyEmbed from "../content-blocks/AdvocacyEmbed"
import SpecialBlock from '../content-modules/SpecialBlock'
import AccordionNavigation from '../content-blocks/AccordionNavigation'
import FooGallery from '../content-blocks/FooGallery'


const WordPressColumns = ({ block, className }) => {

    const Columns = (block && block.innerBlocks) ? block.innerBlocks : null
    const RenderedColumns = (Columns) ? Columns.map((column) => {
        if (column?.innerBlocks) {
            const innerContent = column.innerBlocks.map((block) => {
                //console.log(block.name)
                switch (block.name) {
                  case "acf/section-header":
                    break
                  case "core/heading":
                    if (block?.originalContent.indexOf("<h2") > -1) {
                      break
                    } else {
                      return (
                          <Block
                            className={block.name.replace("/", "-")}
                            block={block}
                            product
                          />
                      )
                    }
                  case "core/paragraph":
                    return (
                        <Block
                          className={block.name.replace("/", "-")}
                          block={block}
                          product
                        />
                      )      
                  case "acf/advocacy-embed":
                      return <AdvocacyEmbed block={block} />
                  case "acf/testimonial":
                    const testimonial = block?.isDynamic
                      ? block.dynamicContent
                      : block.originalContent
                    return <Testimonial data={testimonial} />
                  case "acf/image-section":
                    const imagesection = block?.isDynamic
                      ? block.dynamicContent
                      : block.originalContent
                    return <ImageSection data={imagesection} />
                  case "acf/product-card":
                    const productcard = block?.isDynamic
                      ? block.dynamicContent
                      : block.originalContent
                    return (
                      <div dangerouslySetInnerHTML={{ __html: productcard }} />
                    )
                  case "acf/accordion-navigation":
                    return (
                      <AccordionNavigation
                        className={block.name.replace("/", "-")}
                        block={block}
                      />
                    )
                  case "acf/staff-search":
                    return(
                      <Block
                          className={block.name.replace("/", "-")}
                          block={block}
                          product
                        />
                    )
                  case "acf/special-block":
                    return (<SpecialBlock block={block} />)
                  
                  case "gravityforms/form":
                    //console.log("form found")
                    const shortcode = block?.isDynamic
                      ? block.dynamicContent
                      : block.originalContent
                    //console.log(shortcode)
                    let idStart = shortcode.indexOf('id="')
                    if (idStart > -1) {
                      idStart += 4
                      let idEnd = shortcode.indexOf('"', idStart)
                      //console.log(idEnd)
                      //console.log(idStart)
                      const formId = shortcode.substring(idStart, idEnd)
                      //console.log(formId)
                      return (
                        <GravityForm
                          className={block.name.replace("/", "-")}
                          id={formId}
                        />
                      )
                    }

                    break

                  case "core/buttons":
                    if (
                      block?.innerBlocks &&
                      Array.isArray(block.innerBlocks) &&
                      block.innerBlocks[0]?.originalContent
                    ) {
                      let innerRenderedBlocks = []
                      block.innerBlocks.forEach(innerBlock => {
                        innerRenderedBlocks.push(
                          <Block
                            className={innerBlock.name.replace("/", "-")}
                            block={innerBlock}
                            product
                          />
                        )
                      })
                      //console.log("blocks: " + innerRenderedBlocks)
                      return (
                        <div className={block.name.replace("/", "-")}>
                          {innerRenderedBlocks}
                        </div>
                      )
                    }
                    break
                 

                  case "core-embed/vimeo":
                    //console.log("vimeo")
                    //console.log(block)
                    //return <div>foo</div>//
                    return (
                      <div className="wp-block-embed">
                        <EmbedBlock
                          source={block.originalContent}
                          type="vimeo"
                        />
                      </div>
                    )
                  case "core-embed/youtube":
                    return (
                      <div className="wp-block-embed">
                        <EmbedBlock
                          source={block.originalContent}
                          type="youtube"
                        />
                      </div>
                    )
                  case "core-embed/instagram":
                    return (
                      <div className="wp-block-embed">
                        <EmbedBlock
                          source={block.originalContent}
                          type="instagram"
                        />
                      </div>
                    )
                  case "core/embed":
                      return (
                        <div className="wp-block-embed">
                            <EmbedBlock
                            source={block.originalContent}
                            type="base"
                            />
                        </div>
                      )
                    case "fooplugins/foogallery":
                      return (
                        <FooGallery
                          className={block.name.replace("/", "-")}
                          block={block}
                        />
                      )
                  default:
                    //console.log('default block', block.name)
                    if (block.originalContent.length > 0) {
                      return (
                        <Block
                          className={block.name.replace("/", "-")}
                          block={block}
                          product
                        />
                      )
                    } else {
                      return null
                    }
                }
                return null

            })
            return (<div className="core-column">{innerContent}</div>)

        }
        
        if(column.originalContent){
            //console.log(column)
            return (<Block className={column.name.replace('/', '-')} block={column} />)
        }
        return null
        
    }
    ) : null
      
    return (
        <div className={className}>
            { RenderedColumns && (
                <div className={block.name.replace('/', '-')}>{RenderedColumns}</div>
            )}
        </div>
    )
}

const StyledWordPressColumns = styled(WordPressColumns)`

.core-columns{
    
    @media screen and ${breakpoints.tabletS} {
        display: flex;
        flex: 1 1 auto;
        flex-shrink: 1;

        .core-column{
            margin-right: 12px;
            margin-left: 12px;
            max-width: 50%;
        }
        .core-column:first-child{
            margin-left: 0px;
        }
        .core-column:last-child{
            margin-right: 0px;
        }

    }
    @media screen and ${breakpoints.laptopS} {
        max-width: 712px;
    }
    .core-column{
        min-width: 50px;
    }
}

`

export default StyledWordPressColumns