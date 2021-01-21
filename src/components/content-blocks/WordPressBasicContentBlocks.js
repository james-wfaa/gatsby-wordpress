import React from 'react'
import styled from 'styled-components'
import { breakpoints, mixins, sizes } from '../css-variables'
import Block from './WordPressBlock'
import GravityFormForm from 'gatsby-gravityforms-component'
import { useStaticQuery, graphql } from 'gatsby'


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

    console.log(AllGravityData())

        const RenderedBlocks = (blocks) ? blocks.map((block) => {
        const borderTop = (block.originalContent.indexOf(' border-top') > 0)
        //console.log(block.name)
        switch(block.name) {
            case "core/separator":
                return(<div dangerouslySetInnerHTML={{__html: block.originalContent}} />)
                break
            case "core/group":
            case "acf/events-listing-section":
                break  
            case "core/columns":
                if(block.innerBlocks && block.innerBlocks[0].originalContent){
                    let innerRenderedBlocks = [];
                    block.innerBlocks.forEach((innerBlock) => {
                        //console.log("Columns in" + innerBlock.originalContent);
                        innerRenderedBlocks.push(<Block className={innerBlock.name.replace('/', '-')} block={innerBlock} />) 
                    })
                    //console.log("blocks: " + innerRenderedBlocks)
                    return (<div className={block.name.replace('/', '-')}>{innerRenderedBlocks}</div>)
                }
            //Add case to handle news/stories that use the freeform block but do not have blocks... and then use content instead of original content because it has the html tags
            //Also added css below that is duplicated from WPBlock
            case "core/freeform":
                return(<div className={block.name.replace('/', '-')} dangerouslySetInnerHTML={{__html: content}} />)
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
                    <GravityFormForm
                        id={1}
                        formData={AllGravityData()}
                        lambda={process.env.LAMBDA_ENDPOINT}
                        successCallback={handleSuccess}
                        errorCallback={handleError}
                    />
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