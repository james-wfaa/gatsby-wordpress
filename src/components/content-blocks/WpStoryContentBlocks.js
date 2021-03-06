import React from 'react'
import EmbedBlock from "./EmbedBlock"
import styled from 'styled-components'
import { breakpoints, mixins, sizes, fonts, colors } from '../css-variables'
import Block from './WordPressBlock'
import GravityForm from './GravityForm'
import Column from '../parts/WordPressColumns'
import ImageSection from './ImageSection'
import AccordionNavigation from './AccordionNavigation'
import SpecialBlock from '../content-modules/SpecialBlock'
import Shortcode from '../content-modules/Shortcode'
import FooGallery from './FooGallery'
import parse from 'html-react-parser'

const WpStoryContentBlocks = ({className, blocks, content }) => {
  const RenderedBlocks = (blocks) 
    ? blocks.map((block) => {
        switch (block.name) {
          case "core/separator":
            return (
              <div key={block.order}
                dangerouslySetInnerHTML={{ __html: block.originalContent }}
              />
            )
          case "core/shortcode":
            return (
              <Shortcode block={block} />
            )
          case "core/group":
          case "acf/events-listing-section":
            break
          case "acf/note-listing":
            break
          case "acf/image-section":
            const imagesection = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
            return (<ImageSection key={block.order} data={imagesection} defaultPage/>)
          case "acf/special-block":
            return (<SpecialBlock key={block.order} block={block} />)

          case "acf/accordion-navigation":
            return (
              <AccordionNavigation
                key={block.order}
                className={block.name.replace("/", "-")}
                block={block}
              />
            )
            
          case "acf/staff-search":
            //console.log(block.dynamicContent)
            return(
              <Block
                key={block.order}
                  className={block.name.replace("/", "-")}
                  block={block}
                  product
                />
            )
          case "core/columns":
            return (
              <Column className={block.name.replace("/", "-")} block={block} key={block.order} />
            )
          case "core/buttons":
            if (block.innerBlocks && block.innerBlocks[0]?.originalContent) {
              let innerRenderedBlocks = []
              block.innerBlocks.forEach(innerBlock => {
                innerRenderedBlocks.push(
                  <Block
                    className={innerBlock.name.replace("/", "-")}
                    block={innerBlock}
                    key={block.order}
                  />
                )
              })
              return (
                <div key={block.order} className={block.name.replace("/", "-")}>
                  {innerRenderedBlocks}
                </div>
              )
            }
            return null
            
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
                  key={block.order}
                  className={block.name.replace("/", "-")}
                  id={formId}
                />
              )
            }

            break

          //Add case to handle news/stories that use the freeform block but do not have blocks... and then use content instead of original content because it has the html tags
          //Also added css below that is duplicated from WPBlock
          case "core/freeform":
            return (
              <Block
                    className={block.name.replace("/", "-")}
                    block={block}
                    key={block.order}
                  />
            )
          case "core-embed/flickr":
            return <EmbedBlock data={block.originalContent} key={block.order} />
          case "core-embed/vimeo":
            return (
              <div className="wp-block-embed" key={block.order}>
                <EmbedBlock source={block.originalContent}  type="vimeo" />
              </div>
            )
          case "core-embed/youtube":
            return (
              <div className="wp-block-embed" key={block.order}>
                <EmbedBlock source={block.originalContent} type="youtube" />
              </div>
            )
          case "core-embed/instagram":
            return (
              <div className="wp-block-embed" key={block.order}>
                <EmbedBlock source={block.originalContent} type="instagram" />
              </div>
            )
          case "core/embed":
            const checkForInstagram = (block?.originalContent && block?.originalContent.includes('instagram'))
            const embedWrapperClass = (block?.originalContent && block?.originalContent.includes('flickr')) || 
            block?.originalContent.includes('tryinteract') || 
            (block?.originalContent && block?.originalContent.includes('instagram'))
              ? 'embed-wrapper' 
              : null
            return (
              <div className={`wp-block-embed ${embedWrapperClass}`} key={block.order}>
                <EmbedBlock source={block.originalContent} type={checkForInstagram ? "instagram" : "base"} />
              </div>
            )
          
          case "fooplugins/foogallery":
            // we have to pass in the whole content to get good image sources
            //console.log('found a foo gallery', block)
            // pass the ID
            const parsedFoo = parse(block.dynamicContent, { trim: true })
            const fooId = parsedFoo?.props?.id ? parsedFoo.props.id : null
            //console.log(parsedFoo)
            //console.log(fooId)
            return (
                <FooGallery
                className={block.name.replace("/", "-")}
                content={content}
                id={fooId}
                key={block.order}
                />
            )
          default:
            if (block.originalContent.length > 0) {
                return (
                  <Block key={block.order}
                    className={block.name.replace("/", "-")}
                    block={block}
                  />
                )
            } 
            else {
              return null
            } 
        }
        return null
    }) 
    : null

    return(
        <div className={className} id="Top">
            { RenderedBlocks && (
                <div className="content">
                    {RenderedBlocks}
                </div>
            )}
            { !RenderedBlocks && (
                <Block className={`${className} content core-freeform`} block={content} />
            )}
        </div>
    )

}

const StyledWpStoryContentBlocks = styled(WpStoryContentBlocks)`
/* Start Styles copied form WPBlock - should these be here?*/

  
.core-freeform {
    margin-bottom: ${sizes.s32};
}
/* End Styles copied form WPBlock*/

hr.wp-block-separator {
    ${mixins.separator}
}
.core-paragraph, 
.core-list,
.core-image,
.core-table,
.core-heading, 
.core-columns,
.core-freeform,
.gravityforms-form,
.embed-wrapper,
.wp-block-embed,
.core-shortcode {
  min-width: 300px;
  width: 100%;
  max-width: 300px;
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
    
    a {
      ${mixins.a}
    }
    
}

.content{
    
  h2,
  .core-freeform h2 {
      font-size: ${sizes.s24};
      line-height: ${sizes.s30};
      margin-bottom: ${sizes.s24};
      font-family: ${fonts.eaves};
      font-weight: bold;
      font-style: italic;
      color: ${colors.captionBlack};
      @media screen and ${breakpoints.tabletS} {
          font-size: ${sizes.s28};
          line-height: ${sizes.s34};
      }
  }

  h3,
  .core-freeform h3 {
      font-size: ${sizes.s20};
      margin-bottom: ${sizes.s16};
      line-height: ${sizes.s28};
      font-style: normal;
      margin-left: 0px;
      margin-right: 0px;
      color: ${colors.captionBlack};
      font-weight: bold;
      font-family: ${fonts.verlag};
  }

  h4,
  .core-freeform h4,
  h5,
  .core-freeform h5,
  h6,
  .core-freeform h6 {
      font-size: ${sizes.s18};
      margin-bottom: 0px;
      line-height: ${sizes.s26};
      font-style: normal;
      margin-left: 0px;
      margin-right: 0px;
      color: ${colors.captionBlack};
      font-weight: bold;
      font-family: ${fonts.verlag};
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
.wp-block-embed,
.core-shortcode { 
  margin-bottom: 26px;
  .quiz-embed{
    padding-bottom: 150% !important;
    @media screen and ${breakpoints.tabletS} {
      padding-bottom: 108% !important;
    }
    @media screen and ${breakpoints.laptopS} {
      padding-bottom: 100% !important;
    }
  }
}
.wp-block-embed{
  .instagram-embed{
    padding-bottom: 170% !important;
    @media screen and ${breakpoints.tabletS} {
      padding-bottom: 140% !important;
    }
    @media screen and ${breakpoints.laptopS} {
      padding-bottom: 134% !important;
    }
  }
}
`

export default StyledWpStoryContentBlocks