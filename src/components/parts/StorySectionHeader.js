import React from "react"
import styled from 'styled-components'
import { sizes, colors, fonts, breakpoints } from '../css-variables'

const PageSectionHeader = ({ className, heading, author, categories, date, excerpt }) => {

    const classesList = `${className}`
    const categoryList = categories.nodes.map((category) => (
        <a className="category__item" href={'category/' + `${category.slug}`}>{category.name}</a>
      ))
      
    return (
        <div className={classesList}>
            { heading && (
                <h1>{heading}</h1>
            )}
            <div className={`${className}__titlesection`}>
                { author && (
                    <div className={`${className}__author`}>{author.node.name}</div>       
                )}
                { date && (
                    <div className={`${className}__date`}>{date}</div>
                )}
                { categories && (
                    <div className={`${className}__category`}>{categoryList}<span> ></span></div>
                )}
            </div>
            { excerpt && (
                <div className={`${className}__excerpt`} dangerouslySetInnerHTML={{ __html: excerpt }} />       
            )}

        </div>
    )
}

const StyledPageSectionHeader = styled(PageSectionHeader)`
    position: relative;
    min-width: 300px;
    width: 80%;
    max-width: 712px;
    margin-left: auto;
    margin-right: auto;

    @media screen and ${breakpoints.tabletS} {
        width: 536px;
    }
    @media screen and ${breakpoints.laptopL} {
        width: 712px;
    }
    h1 {
    
        color: ${colors.titleColor};
        text-align: left;
        font-family: ${fonts.eaves};
        font-weight: bold;
        font-style: italic;
        font-size: ${sizes.s36};
        line-height: ${sizes.s40};
        margin-bottom: ${sizes.s24};

        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s42};
            line-height: ${sizes.s52};
            padding: 0;
        }
    }
    &__titlesection{
        text-align: left;
        overflow-wrap: break-word;
        position: relative;
        font-size: ${sizes.s18};
        line-height: ${sizes.s18};
        font-weight: bold;
        color: ${colors.copyText};
        padding-bottom: ${sizes.s40};
        margin-bottom: ${sizes.s32};

        >div{
            padding: 0 ${sizes.s10} 0 ${sizes.s10};
            border-left: 2px solid ${colors.copyText};
            display: inline-block;
        }
        div:first-child{
            padding-left: 0px;
            border-left: none;

        }
        :after {
            position: absolute;
            bottom:0;
            left: 0;
            height: ${sizes.s8};
            width: calc( 1.889rem * 2 );
            background-color: #c5050c;
            content: '';
        }
        
    }

    &__category{
        color: ${colors.titleColor};
        a{
            color: ${colors.titleColor};
            &:hover{
                color: ${colors.linkTextHover};
            }
            &:active{
                color: ${colors.linkTextActive};
            }
    
        }
    }

    &__excerpt{
        text-align: left;
        font-family: ${fonts.eaves};
        font-size: ${sizes.s18};
        line-height: ${sizes.s26};
    }
`

export default StyledPageSectionHeader