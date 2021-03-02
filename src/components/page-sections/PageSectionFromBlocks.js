import React from 'react'
import PageSection from './PageSection'
import Testimonial from '../content-blocks/Testimonial'
import ImageSection from '../content-blocks/ImageSection'
import GravityForm from '../content-blocks/GravityForm'
import ImageWithCaption from '../content-blocks/ImageWithCaption'
import SimpleSlider from '../content-modules/SimpleSlider'
import CardSet from "../content-modules/CardSet"
import Block from '../content-blocks/WordPressBlock'
import Column from '../parts/WordPressColumns'
import EmbedBlock from "../content-blocks/EmbedBlock"
import AccordionNavigation from '../content-blocks/AccordionNavigation'



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
                if (block.originalContent.indexOf('<h2') > -1) {
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
                        <ImageWithCaption storyCaption="storyCaption" ><div dangerouslySetInnerHTML={{__html: innerContent}} /></ImageWithCaption>
                    )
                } else {
                    return <div dangerouslySetInnerHTML={{__html: innerContent}} />
                }

            })
            }
        </SimpleSlider>)

        : (cardset)
            ? (<CardSet type="news">{
                blocks.map((block) => {
                const innerContent =  ((block.dynamicContent && block.dynamicContent !== "") ? block.dynamicContent : block.originalContent)
                return innerContent


            })}</CardSet>)
            : blocks.map((block) => {

                //console.log(block.name)

                switch (block.name) {
                  case "acf/section-header":
                    break
                  case "core/heading":
                    if (block.originalContent.indexOf("<h2") > -1) {
                      break
                    } else {
                      return (
                          <Block
                            className={block.name.replace("/", "-")}
                            block={block}
                          />
                      )
                    }
                  case "core/paragraph":
                    if (block.originalContent.indexOf("excerpt") > 0) {
                      if (excerpt) {
                        excerpt += block.isDynamic
                          ? block.dynamicContent
                          : block.originalContent
                      } else {
                        excerpt = block.isDynamic
                          ? block.dynamicContent
                          : block.originalContent
                      }
                      break
                    } else {
                      return (
                        <Block
                          className={block.name.replace("/", "-")}
                          block={block}
                        />
                      )
                    }                    
                  case "acf/testimonial":
                    const testimonial = block.isDynamic
                      ? block.dynamicContent
                      : block.originalContent
                    return <Testimonial data={testimonial} />
                  case "acf/image-section":
                    const imagesection = block.isDynamic
                      ? block.dynamicContent
                      : block.originalContent
                    return <ImageSection data={imagesection} />
                  case "acf/product-card":
                    const productcard = block.isDynamic
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
                    break
                  case "gravityforms/form":
                    //console.log("form found")
                    const shortcode = block.isDynamic
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
                      block.innerBlocks &&
                      Array.isArray(block.innerBlocks) &&
                      block.innerBlocks[0].originalContent
                    ) {
                      let innerRenderedBlocks = []
                      block.innerBlocks.forEach(innerBlock => {
                        innerRenderedBlocks.push(
                          <Block
                            className={innerBlock.name.replace("/", "-")}
                            block={innerBlock}
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
                  case "core/columns":
                    return (
                      <Column
                        className={block.name.replace("/", "-")}
                        block={block}
                      />
                    )

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
                    break
                  case "core-embed/youtube":
                    return (
                      <div className="wp-block-embed">
                        <EmbedBlock
                          source={block.originalContent}
                          type="youtube"
                        />
                      </div>
                    )
                    break
                  case "core-embed/instagram":
                    return (
                      <div className="wp-block-embed">
                        <EmbedBlock
                          source={block.originalContent}
                          type="instagram"
                        />
                      </div>
                    )
                    break
                  case "core/embed":
                      return (
                        <div className="wp-block-embed">
                            <EmbedBlock
                            source={block.originalContent}
                            type="base"
                            />
                        </div>
                      )
                  default:
                    //console.log('default block', block.name)
                    if (block.originalContent.length > 0) {
                      return (
                        <Block
                          className={block.name.replace("/", "-")}
                          block={block}
                        />
                      )
                    } else {
                      return null
                    }
                }

            })

    return (
        <PageSection heading={title} topBorder={borderTop} fromBlocks stagger={stagger} centered={centered} excerpt={excerpt} >
            { innerContent }
        </PageSection>
    )

}

export default PageSectionFromBlocks
