import React from 'react'
import EmbedBlock from "./EmbedBlock"
import styled from 'styled-components'
import { breakpoints, mixins, sizes, fonts, colors } from '../css-variables'
import Block from './WordPressBlock'
import GravityForm from '../content-blocks/GravityForm'
import Column from '../parts/WordPressColumns'
import ImageSection from '../content-blocks/ImageSection'
import AccordionNavigation from './AccordionNavigation'
import SpecialBlock from '../content-modules/SpecialBlock'

const WordPressContentBlocks = ({className, blocks, content, eventCategory, stagger}) => {

        const RenderedBlocks = (blocks) ? blocks.map((block) => {
        //console.log(block.name)
        switch (block.name) {
          case "core/separator":
            return (
              <div
                dangerouslySetInnerHTML={{ __html: block.originalContent }}
              />
            )
            break
          case "core/group":
          case "acf/events-listing-section":
            break
          case "acf/image-section":
            const imagesection = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
            return (<ImageSection data={imagesection} defaultPage/>)
          case "acf/special-block":
            return (<SpecialBlock block={block} />)

          case "acf/accordion-navigation":
            return (
              <AccordionNavigation
                className={block.name.replace("/", "-")}
                block={block}
              />
            )
            break
          case "acf/staff-search":
            //console.log(block.dynamicContent)
            return(
              <Block
                  className={block.name.replace("/", "-")}
                  block={block}
                  product
                />
            )
          case "core/columns":
            return (
              <Column className={block.name.replace("/", "-")} block={block} />
            )
          case "core/buttons":
            if (block.innerBlocks && block.innerBlocks[0]?.originalContent) {
              let innerRenderedBlocks = []
              block.innerBlocks.forEach(innerBlock => {
                innerRenderedBlocks.push(
                  <Block
                    className={innerBlock.name.replace("/", "-")}
                    block={innerBlock}
                  />
                )
              })
              return (
                <div className={block.name.replace("/", "-")}>
                  {innerRenderedBlocks}
                </div>
              )
            }
            break
          case "gravityforms/form":
            const shortcode = block.isDynamic
              ? block.dynamicContent
              : block.originalContent
            let idStart = shortcode.indexOf('id="')
            if (idStart > -1) {
              idStart += 4
              let idEnd = shortcode.indexOf('"', idStart)
              //console.log(idEnd)
              //console.log(idStart)
              const formId = shortcode.substring(idStart, idEnd)
              //(formId)
              return (
                <GravityForm
                  className={block.name.replace("/", "-")}
                  id={formId}
                />
              )
            }

            break

          //Add case to handle news/stories that use the freeform block but do not have blocks... and then use content instead of original content because it has the html tags
          //Also added css below that is duplicated from WPBlock
          case "core/freeform":
            /*return (
              <div
                className={block.name.replace("/", "-")}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )*/
            return (
              <Block
                    className={block.name.replace("/", "-")}
                    block={block}
                  />
            )
            break
          case "core-embed/flickr":
            return <EmbedBlock data={block.originalContent} />
            break
          case "core-embed/vimeo":
            return (
              <div className="wp-block-embed">
                <EmbedBlock source={block.originalContent} type="vimeo" />
              </div>
            )
            break
          case "core-embed/youtube":
            return (
              <div className="wp-block-embed">
                <EmbedBlock source={block.originalContent} type="youtube" />
              </div>
            )
            break
          case "core-embed/instagram":
            return (
              <div className="wp-block-embed">
                <EmbedBlock source={block.originalContent} type="instagram" />
              </div>
            )
            break
          case "core/embed":
            return (
              <div className="wp-block-embed">
                <EmbedBlock source={block.originalContent} type="base" />
              </div>
            )
          default:
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
            break
        }
    }
    ) : null


    return(
        <div className={className} id="Top">
            { RenderedBlocks && (

                <div className="content">
                    {RenderedBlocks}
                </div>
            )}
            { !RenderedBlocks && (
                <Block className={className} block={content} />
            )}
        </div>
    )

}

const StyledWordPressContentBlocks = styled(WordPressContentBlocks)`
/* Start Styles copied form WPBlock - should these be here?*/
    min-width: 300px;
    width: 100%;
    max-width: 303px;
    margin-left: auto;
    margin-right: auto;

@media screen and ${breakpoints.tabletS} {
    max-width: 536px;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;

}
@media screen and ${breakpoints.laptopS} {
    max-width: 712px;
}
.core-freeform {
    margin-bottom: ${sizes.s32};
}
/* End Styles copied form WPBlock*/

margin: 0 auto;
position: relative;
display: block;
max-width: 100%;
@media screen and ${breakpoints.laptopS} {
    max-width: 712px;
}

hr.wp-block-separator {
    ${mixins.separator}
}

.core-columns{
    max-width: 303px;

    @media screen and ${breakpoints.tabletS} {
        display: flex;
        max-width: 536px;
    }
    @media screen and ${breakpoints.laptopS} {
        max-width: 712px;
    }
    .core-column{
        flex: 1 1 auto;
        flex-shrink: 1;
        min-width: 50px;
    }
}
h2 {
  padding-bottom: 0; // REMOVE H2 UNDERLINE FROM DEFAULT PAGES
  &:after {
    display: none; // REMOVE H2 UNDERLINE FROM DEFAULT PAGES
  }
}
.core-freeform {
    margin-bottom: ${sizes.s32};
    text-align: left;
    h2,
    h3 {
      font-family: ${fonts.eaves};
      font-weight: bold;
      font-style: italic;
      color: ${colors.titleColor};
    }
    h2 {
      font-size: ${sizes.s32};
      line-height: ${sizes.s36};
      margin-bottom: ${sizes.s32};
      margin-top: ${sizes.s48}; // ex: email login page
      padding-bottom: 0;
      &:after {
        display: none; // REMOVE H2 UNDERLINE FROM DEFAULT PAGES
      }
      
      @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s36};
        line-height: ${sizes.s42};
        margin-top: ${sizes.s58}; // ex: email login page
      }
      
    }
    h3 {
      font-size: ${sizes.s26};
      margin-bottom: ${sizes.s24};
      line-height: ${sizes.s32};
    }
    a {
      ${mixins.a}
    }
}
.core-buttons {
  .core-button {
    &:first-child {
      @media screen and ${breakpoints.tabletS} {
        margin-left: 0;
      }
    }
    
  }
}

`

export default StyledWordPressContentBlocks