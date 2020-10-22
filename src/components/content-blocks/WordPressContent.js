import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import styled from 'styled-components'
import quotationMarks from '../../svg/Testimonial_Quotation_Marks_2x.svg'


const WordPressContent = ({className, content}) => {

    return(
        <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
    )
}
const StyledWordPressContent = styled(WordPressContent)`

text-align: left;
margin: 0 auto;
position: relative;

.page-section {
    padding-top: 88px;
    padding-bottom: 88px;
    &:last-child {
        padding-bottom: 128px;
    }
    &.border-top {
        border-top: 36px solid ${colors.sectionBorder};
    }
}

.image-section,
.testimonial {
    max-width: 1080px;
    margin: 0 auto;

}
> p, 
> ul,
> h2,
> h3 {
    min-width: 300px;
    width: 80%;
    max-width: 712px;
    margin-left: auto;
    margin-right: auto;
    
    
}
a {
    ${mixins.textlink}
}
.testimonial {
    width: 256px;
    display: flex;
    flex-flow: column;
    text-align: left;
    position: relative;
    margin-bottom: ${sizes.s48};
    
    &:last-child {
        margin-bottom: 0;
    }
    &:first-child {
        margin-top: ${sizes.s58};
    }

   
    border: 1px solid ${colors.cardBorder};
    border-top: 6px solid ${colors.cardBorder};
    background-color: ${colors.bgWhite};
    opacity: 0.9;

    font-family: ${fonts.eaves};

    @media screen and ${breakpoints.tabletS} {
        width: 528px;
    }
    @media screen and ${breakpoints.laptopS} {
        width: 1080px;
        min-height: 230px;  
        border-top: 1px solid ${colors.cardBorder};
        &:before {
            position: absolute;
            content: "";
            display: block;
            width: 345px;
            height: 6px;
            top: -6px;
            left: -1px;
            background-color: ${colors.cardBorder};
        }
        &:after {
            position: absolute;
            background: url(${quotationMarks}) no-repeat;
            content: "";
            display: block;
            width: 345px;
            min-height: 100%;  
            top: 0px;
            left: 0px;
            background-color: ${colors.testimonialGrey};
        }

    }
    blockquote{
        font-size: ${sizes.s24};
        line-height: ${sizes.s36};
        font-style: italic;
    
        
        margin: ${sizes.s16};
        @media screen and ${breakpoints.laptopS} {
            margin: 32px 32px 32px 376px;

            &:before {
                position: absolute;
                content: '';
                top: 32px;
                left: 338px;
                height: 30px;
                width: 14px;
                z-index: 1;
                border-left: 1.5px solid ${colors.bgRed};
                border-right: 1.5px solid ${colors.bgRed};
                transform: skew(135deg);
            }
        }
        
    }
    figCaption{
        font-size: ${sizes.s18};
        line-height: ${sizes.s26};    
        margin: ${sizes.s16};

        @media screen and ${breakpoints.laptopS} {
            margin: 0px 32px 32px 376px;
        }

    }
    &__name{

    }
    &__location{

    }
}
.image-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: ${sizes.s58};
    
    &:last-child {
        padding-bottom: 0;
    }

    &--small {
        .image-section__image {
            width: calc(100% - 72px);
            margin: 0 auto;
        }

    }
    @media screen and ${breakpoints.tabletS} {
        
        padding-bottom: ${sizes.s32};
        
        /* add top padding to all but the first one */
        ~ .image-section {
            padding-top: ${sizes.s32};
        }
        
        width: 80%;
        
        max-width: 1080px;
        margin-left: auto;
        margin-right: auto;
        flex-direction: row;
        &--small {
            .image-section__image {
                width: 33.3%;
            }
    
        }
        &--medium {
            .image-section__image {
                width: 50%;
            }
    
        }
        &--large {
            .image-section__image {
                width: 66.6%;
            }
    
        }
        &:last-of-type {
            border-bottom: none;
        }
        &+div.image-section {
            border-top: 8px solid ${colors.sectionBorder};
        }
    }
    &--right {
        @media screen and ${breakpoints.tabletS} {
            flex-direction: row-reverse;
            .image-section__text {
                margin-left: 0;
                margin-right: ${sizes.s32};

            }
        }
    }

    &__image {
        width: 100%;
        img {
            max-width: 100%;
            height: auto;
        }
        
    }
    
    &__text {
        padding-top: ${sizes.s32};
        min-width: 250px;
        width: calc(100% - 72px);
        margin: 0 auto;
        @media screen and ${breakpoints.tabletS} {
            padding-top: 0;
            width: 100%;
            margin-left: ${sizes.s32};
        }
        p {
            &:last-of-type {
                margin-bottom: 0;
            }
        }

    }
    h3 {
        font-family: ${fonts.eavesNarrow};
        font-size: ${sizes.s24};
        font-weight: bold;
        font-style: italic;
        margin-bottom: ${sizes.s24};
        color: ${colors.titleColor};
        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s26};
        }

    }
    
}
hr.wp-block-separator {
    ${mixins.separator}
}

div.section-header {
    ${mixins.sectionHeader}

}
.callout-bold {
    font-weight: bold;
    background-color: ${colors.calloutGrey};
    padding: ${sizes.s18};
    @media screen and ${breakpoints.laptopS} {
        width: 272px;
        float: left;
        margin: 16px 16px 16px 0;
        
        &.has-text-align-right{
            float: right;
            margin: 16px;       
        }
    
    }

}

.wp-block-quote {
    color: ${colors.badgerRed};
    font-family: ${fonts.eavesNarrow};
    font-style: italic; 
    font-size: ${sizes.s24};
    line-height: ${sizes.s38};
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    @media screen and ${breakpoints.laptopS} {
        width: 252px;
        float: right;
        margin: 24px;   
        
        &.has-text-align-left{
            float: left;
            margin: 24px 24px 24px 0;     
        }
    }
}

.product-card{
    ${mixins.contentCardBase}
    ${mixins.contentCardSizes}

    .headersection {
        ${mixins.contentCardHeader}
    }
    .contentsection {
        ${mixins.contentCardContent}
    }

    .title {
        ${mixins.cardTitle}
        ${mixins.contentCardTitle}
        padding-top: ${sizes.s24};
    }

}

`
export default StyledWordPressContent