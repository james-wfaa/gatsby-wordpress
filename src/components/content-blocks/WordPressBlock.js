import React from 'react'
import styled from 'styled-components'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import arrowSVG from '../../svg/Arrow_45-degrees_white_1x.svg'



const WordPressBlock = ({className, block, product = false}) => {
    //console.log(block)
    const isProduct = product ? 'product' : null
    if (block) {
        if (block.originalContent || block.dynamicContent || block.saveContent) {
            const blockContent = (block.isDynamic)
            ? block.dynamicContent
            : (block.saveContent)
                ? block.saveContent
                : block.originalContent

            return (
                <div className={`${className} ${isProduct}`} dangerouslySetInnerHTML={{__html: blockContent}} />
            )

        } else {
            return (
                <div className={`${className} ${isProduct}`} dangerouslySetInnerHTML={{__html: block}} />
            )

        }

    }
    return null



}

const StyledWordPressBlock = styled(WordPressBlock)`

text-align: left;
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
    margin-left: 0;
    max-width: 712px;
}
>p {
    &.button{
        margin: ${sizes.s40} 0;
        a{
        ${mixins.buttons};
          width: 100%;
          position: relative;
          @media screen and ${breakpoints.laptopS} {
            width: 50%;
          }
          :after {
            position: absolute;
            bottom: 38%;
            left: calc( 50% + ${sizes.s34} );
            width: ${sizes.s12};
            height: ${sizes.s12};
            background-color: ${colors.bgWhite};
            -webkit-mask-image: url(${arrowSVG});
            mask: url(${arrowSVG}) no-repeat;
            content: '';
          }
        }
      }
}


>h2,
>h3,
.core-freeform h2,
.core-freeform h3 {
    font-family: ${fonts.eaves};
    font-weight: bold;
    font-style: italic;
    color: ${colors.titleColor};
}
>h2,
.core-freeform h2 {
    font-size: ${sizes.s32};
    line-height: ${sizes.s38};
    margin-bottom: ${sizes.s32};
    margin-top: ${sizes.s32}; // ex: email login page
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s36};
        line-height: ${sizes.s40};
    }
    
}
.altH2 {
    font-size: ${sizes.s36};
    line-height: ${sizes.s40};
    padding-top: ${sizes.s88}; 
    border-top: 18px solid ${colors.sectionBorder};
    
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s42};
        line-height: ${sizes.s52};
    }
    position: relative;
    padding-bottom: ${sizes.s40};
    margin-bottom: ${sizes.s32};
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

>h3,
.core-freeform h3 {
    font-size: ${sizes.s24};
    margin-bottom: ${sizes.s24};
    line-height: ${sizes.s30};
    @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s28};
        line-height: ${sizes.s34};
    }
}

>h4,
.core-freeform h4 {
    font-size: ${sizes.s20};
    font-weight: bold;
    line-height: ${sizes.s28};
    margin-bottom: ${sizes.s16};
    color: ${colors.captionBlack};
}

>h5,
>h6,
.core-freeform h5,
.core-freeform h6 {
    font-size: ${sizes.s18};
    line-height: ${sizes.s26};
    font-weight: bold;
    color: ${colors.captionBlack};
    margin-bottom: 0px;
}

&.product{
    >h2,
    >h3,
    .core-freeform h2,
    .core-freeform h3 {
        font-family: ${fonts.eaves};
        font-weight: bold;
        font-style: italic;
        color: ${colors.titleColor};
    }
    >h2,
    .core-freeform h2 {
        font-size: ${sizes.s36};
        line-height: ${sizes.s40};
        position: relative;
        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s42};
            line-height: ${sizes.s52};
        }
    }

    >h3,
    .core-freeform h3 {
        font-size: ${sizes.s24};
        margin-bottom: ${sizes.s24};
        line-height: ${sizes.s30};
        margin-left: 0px;
        margin-right: 0px;
        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s28};
            line-height: ${sizes.s34};
        }
    }

    >h4,
    .core-freeform h4 {
        font-size: ${sizes.s20};
        margin-bottom: ${sizes.s16};
        line-height: ${sizes.s28};
    }

    >h5,
    >h6,
    .core-freeform h5,
    .core-freeform h6 {
        font-size: ${sizes.s18};
        line-height: ${sizes.s26};
        margin-bottom: 0px;
        font-weight: bold;
        color: ${colors.captionBlack};
    }
    
}

ul {
    list-style-position: outside;
    margin-left: ${sizes.s18};
    @media screen and ${breakpoints.tabletS} {
        margin-left: ${sizes.s40};
    }
}
li{
    margin-bottom: ${sizes.s12};
    >ul{
        margin-left: ${sizes.s40};
    }

}
a {
    ${mixins.a}
}
.core-freeform {
    margin-bottom: ${sizes.s32};
    text-align: left;
}

> p,
> h2,
> h3,
>.wp-block-image {
    min-width: 300px;
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
        margin-left: 0;
        max-width: 712px;
    }
}

>.wp-block-image {
    @media screen and ${breakpoints.laptopS} {
        margin-left: 0;
        max-width: 712px;

        .alignright{
            float: right;
            margin-left:24px;
            margin-top: 8px;
            margin-bottom: 0px;
        }
        .alignleft{
            float: left;
            margin-right: 24px;
            margin-bottom: 0px;
            margin-top: 8px;
        }
        .aligncenter{
            text-align: center;
        }
    }
}

.callout-bold {
    font-weight: bold;
    font-family: ${fonts.verlag};
    background-color: ${colors.calloutGrey};
    padding: ${sizes.s18};
    @media screen and ${breakpoints.tabletS} {
        padding: ${sizes.s24};
        width: 584px;
    }
    @media screen and ${breakpoints.laptopL} {
        width: 272px;
        float: left;
        margin: 16px 16px 16px 0;

        &.has-text-align-right{
            float: right;
            margin: 16px -184px 16px 16px;
        }
        &.has-text-align-left{
            float: left;
            margin: 16px 16px 16px -184px;
        }

    }

}

&.core-button{
    width: 100%;
    max-width: 500px;
    min-width: 0px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${sizes.s24};
    justify-content: center;

    .wp-block-button{
        width: 100%;
    }
    .wp-block-button__link {
        ${mixins.buttons};
    }
    @media screen and ${breakpoints.tabletS} {
        margin: ${sizes.s12};
        width: auto;
    }
}
//styles for block quotes on news and stories
&.core-quote{
    margin:0 auto;
    clear: both; //need this for left float
    .wp-block-quote {
        color: ${colors.badgerRed};
        font-family: ${fonts.eavesNarrow};
        font-style: italic;
        font-size: ${sizes.s24};
        line-height: ${sizes.s38};
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 712px;
        @media screen and ${breakpoints.laptopS} {
            width: 252px;
            float: right;
            margin: 24px -126px 24px 24px;
            &.has-text-align-left{
                float: left;
                margin: 24px 24px 24px -126px;
            }
            &.has-text-align-right{
                float: right;
                margin: 24px -126px 24px 24px;
            }
        }
    }
}
//not sure if I can delete this or if it is used elsewhere, commenting out for now
/*.wp-block-quote {
    color: ${colors.badgerRed};
    font-family: ${fonts.eavesNarrow};
    font-style: italic;
    font-size: ${sizes.s24};
    line-height: ${sizes.s38};
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    max-width: 712px;
    @media screen and ${breakpoints.laptopL} {
        width: 252px;
        float: right;
        margin: 24px 0px 24px 24px;

        &.has-text-align-left{
            float: left;
            margin: 24px 24px 24px -184px;
        }
        &.has-text-align-right{
            float: right;
            margin: 24px -184px 24px 24px;
        }
    }
    @media screen and ${breakpoints.laptopS} {
        max-width: 536px;
    }
}*/
.wp-block-table{
    border: 1px solid ${colors.borderGrey};
    border-bottom: none;
    margin-top: 58px;
    margin-bottom: 88px;

    th{
        font-weight: bold;
        border-bottom: 4px solid ${colors.borderGrey};
        padding: 16px;
        border-right: 1px solid ${colors.borderGrey};
    }
    th:last-child{
        border-right: none;
    }

    td{
        padding: 16px;
        border-right: 1px solid ${colors.borderGrey};
    }
    td:last-child{
        border-right: none;
    }
    tr:nth-child(even) {
        background-color: ${colors.tableRowGrey};
    }
}
`


export default StyledWordPressBlock