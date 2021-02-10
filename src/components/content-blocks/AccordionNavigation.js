import React from "react"
import parse from 'html-react-parser';
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'
import Accordian from "../parts/Accordian"
import { element } from "prop-types";


const AccordionNavigation = ({ blockContent, className }) => {


    const navOpenText =  'temp' 
    const navCloseText = 'temp'

    const parsed = parse(blockContent)
    console.log(parsed.props)

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
                            console.log(element.props.children);
                            break
                        default:
                            break
    
                    }
                }
            })
            return (<Accordian opentext={accordionHeader} closetext={navCloseText} useAsMenu>
                        <div className={className}>
                            Testing
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