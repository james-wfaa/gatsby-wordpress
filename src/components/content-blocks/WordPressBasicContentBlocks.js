import React from 'react'
import PageSectionFromBlocks from "../page-sections/PageSectionFromBlocks"
import PageSection from "../page-sections/PageSection"
import CardHandler from "../content-modules/CardHandler"
import EmbedBlock from "./EmbedBlock"
import styled from 'styled-components'
import { breakpoints, mixins, sizes } from '../css-variables'
import Block from './WordPressBlock'
import GravityForm from '../content-blocks/GravityForm'
import { useStaticQuery, graphql } from 'gatsby'
import Column from '../parts/WordPressColumns'
import AccordionNavigation from './AccordionNavigation'



const AllGravityData = () => {
    const { allGfForm } = useStaticQuery(
        graphql`
            query {
                allGfForm {
                    edges {
                        node {
                            formId
                            slug
                            apiURL
                            descriptionPlacement
                            formFields {
                                id
                                label
                                description
                                descriptionPlacement
                                type
                                choices
                                content
                                errorMessage
                                inputMaskValue
                                isRequired
                                visibility
                                cssClass
                                placeholder
                                size
                                defaultValue
                                maxLength
                            }
                            button {
                                text
                            }
                            confirmations {
                                message
                            }
                        }
                    }
                }
            }
        `
    )
    return allGfForm
}

function handleError({values, error, reset}) {
    //handle error
}

function handleSuccess({values, reset, confirmations}) {
    //handle success
}
    

const WordPressContentBlocks = ({className, blocks, content, eventCategory, stagger}) => {

    //console.log(AllGravityData())

        const RenderedBlocks = (blocks) ? blocks.map((block) => {
        const borderTop = (block.originalContent.indexOf(' border-top') > 0)
        switch(block.name) {
            case "core/separator":
                return(<div dangerouslySetInnerHTML={{__html: block.originalContent}} />)
                break
            case "core/group":
            case "acf/events-listing-section":
                break
            case "acf/accordion-navigation":
                if(block.dynamicContent){
                    return <AccordionNavigation className={block.name.replace('/', '-')} blockContent={block.dynamicContent} />
                }
                break
            case "core/columns":
                return (<Column className={block.name.replace('/', '-')} block={block} />)
            case "core/buttons":
                if(block.innerBlocks && block.innerBlocks[0].originalContent){
                    let innerRenderedBlocks = [];
                    block.innerBlocks.forEach((innerBlock) => {
                        innerRenderedBlocks.push(<Block className={innerBlock.name.replace('/', '-')} block={innerBlock} />)
                    })
                    return (<div className={block.name.replace('/', '-')}>{innerRenderedBlocks}</div>)
                }
                break
                case "gravityforms/form":
                    const shortcode = ((block.isDynamic) ? block.dynamicContent : block.originalContent)
                    let idStart = shortcode.indexOf('id="')
                    if (idStart > -1) {
                        idStart += 4
                        let idEnd = shortcode.indexOf('"', idStart)
                        //console.log(idEnd)
                        //console.log(idStart)
                        const formId = shortcode.substring(idStart,idEnd)
                        //(formId)
                        return (<GravityForm className={block.name.replace('/', '-')} id={formId} />)
                    }
                    
                    break
    
            //Add case to handle news/stories that use the freeform block but do not have blocks... and then use content instead of original content because it has the html tags
            //Also added css below that is duplicated from WPBlock
            case "core/freeform":
                return(<div className={block.name.replace('/', '-')} dangerouslySetInnerHTML={{__html: content}} />)
                break
            case "core-embed/flickr":
                return <EmbedBlock data={block.originalContent} />
                break
            
            default:
                return (<Block className={block.name.replace('/', '-')} block={block} />)
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

`

export default StyledWordPressContentBlocks