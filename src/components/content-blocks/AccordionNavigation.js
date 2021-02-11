import React from "react"
import parse from 'html-react-parser';
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'
import Accordian from "../parts/Accordian"
import { element } from "prop-types";


const AccordionNavigation = ({ blockContent, className }) => {


    const parsed = parse(blockContent)

    const RenderedBlocks = (parsed.props.children) ? parsed.props.children.map((block) => {
        let accordionHeader = ''
        let accordionContent = ''
        if(block.props && block.props.className == "accordion__item"){
            block.props.children.map((element) => {
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
            return (<Accordian opentext={accordionHeader} closetext={accordionHeader} >
                        <div className={className}>
                            {accordionContent}
                        </div>
                    </Accordian>)
        }

    }) : null

      
        return (
            <div className={className} id="Top">
                { RenderedBlocks && (
                    
                    <div className="content">
                        {RenderedBlocks}
                    </div>
                )}
            </div>
        )
}

const StyledAccordionNavigation = styled(AccordionNavigation)`

`

export default StyledAccordionNavigation