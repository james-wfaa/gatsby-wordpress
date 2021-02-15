import React from "react"
import parse from 'html-react-parser';
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'
import Accordian from "../parts/Accordian"
import { element } from "prop-types";


const AccordionNavigation = ({ block, className }) => {

    const blockContent = block.dynamicContent ? block.dynamicContent : ''
    const parsed = parse(blockContent)

    const RenderedBlocks = (parsed.props.children) ? parsed.props.children.map((child) => {
        let accordionHeader = ''
        let accordionContent = ''
        if(child.props && child.props.className == "accordion__item"){
            child.props.children.map((element) => {
                if(element.props){
                    switch(element.props.className){
                        case "accordion__header":
                            accordionHeader = element.props.children ? element.props.children : ''
                            break
                        case "accordion__content":
                            accordionContent = element
                            break
                        default:
                            break
    
                    }
                }
            })
            return (<Accordian opentext={accordionHeader} closetext={accordionHeader} useAsNav>
                        {accordionContent}
                    </Accordian>)
        }

    }) : null

      
        return (
            <div className={className} id="Top">
                { RenderedBlocks && (
                    
                    <div className="AccordionNavigation">
                        {RenderedBlocks}
                    </div>
                )}
            </div>
        )
}

const StyledAccordionNavigation = styled(AccordionNavigation)`

border: 1px solid ${colors.cardBorder};
border-top: 6px solid ${colors.cardBorder};

.AccordionNavigation{
    .AccordionWrap{
        background-color: ${colors.bgWhite};
        margin-left: 32px;
    }

    .accordion__content{
        text-align: left;
    }
    
}


`

export default StyledAccordionNavigation