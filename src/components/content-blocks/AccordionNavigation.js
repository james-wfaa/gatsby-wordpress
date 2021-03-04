import React from "react"
import parse from 'html-react-parser';
import styled from 'styled-components'
import { colors, fonts,sizes, breakpoints } from '../css-variables'
import Accordian from "../parts/Accordian"

const AccordionNavigation = ({ block, className }) => {

    const blockContent = block.dynamicContent ? block.dynamicContent : ''
    const parsed = parse(blockContent)

    const RenderedBlocks = (parsed?.props?.children && Array.isArray(parsed.props.children)) ? parsed.props.children.map((child) => {
        let accordionHeader = ''
        let accordionContent = ''
        if(child.props && child.props.className === "accordion__item"){
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
            <div className={className}>
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
margin-top: 56px;

.AccordionNavigation{
    .AccordionWrap{
        background-color: ${colors.bgWhite};
        margin: 32px;
        border-top: 8px ${colors.cardTitleBg} solid;
    }

    .AccordionWrap:first-child{
        border-top: none;
    }

    .AccordionInputWrap{
        margin: 32px 0px;

        .menuTitle h3{
            margin-bottom: 0px;
            font-family: ${fonts.eaves};
            color: ${colors.navMenuBlack};
            font-weight: bold;
            font-style: italic;
            font-size: ${sizes.s26};
            line-height: ${sizes.s32};
            text-transform: none;
            text-align: left;
           
        }
    }

    .accordion__content{
        text-align: left;
    }
    
}
`

export default StyledAccordionNavigation