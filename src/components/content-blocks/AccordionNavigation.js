import React from "react"
import parse from 'html-react-parser';
import styled from 'styled-components'
import { colors, fonts,sizes, mixins, breakpoints } from '../css-variables'
import Accordian from "../parts/Accordian"

const AccordionNavigation = ({ block, className }) => {

    const blockContent = block.dynamicContent ? block.dynamicContent : ''
    const parsed = parse(blockContent)

    const RenderedBlocks = (parsed?.props?.children && Array.isArray(parsed.props.children)) ? React.Children.map(parsed.props.children, child => {
        let accordionHeader = ''
        let accordionContent = ''
        if(child.props && child.props.className === "accordion__item"){
            React.Children.forEach(child.props.children,element => {
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
        } return null

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
        margin: 24px;
        border-bottom: 8px ${colors.cardTitleBg} solid;

        h3{
            margin-bottom: 0px;
            font-family: ${fonts.eaves};
            color: ${colors.navMenuBlack};
            font-weight: bold;
            font-style: italic;
            font-size: ${sizes.s24};
            line-height: ${sizes.s30};
            text-transform: none;
            text-align: left;

            @media screen and ${breakpoints.tabletS} {
                font-size: ${sizes.s28};
                line-height: ${sizes.s34};
            }
        }

        h4{
            font-weight: bold;
            font-size: ${sizes.s20};
            line-height: ${sizes.s28};
            margin-bottom: 16px;
            padding-top: 32px;
            border-top: 2px solid ${colors.navMenuBorderGrey};
        }

        h4:first-child{
            padding-top: 0px;
            border-top: none;
        }

        @media screen and ${breakpoints.tabletS} {
            margin: 32px;
            h3{
                font-size: ${sizes.s28};
                line-height: ${sizes.s34};
            }
        }

        .separator{
            ${mixins.separator}
        }
    }

    .AccordionWrap:last-child{
        border-bottom: none;
    }

    .AccordionInputWrap{
        margin: 32px 0px;
    }

    .accordion__content{
        text-align: left;

        a{
            ${mixins.a}
        }

    }
    
}
`

export default StyledAccordionNavigation