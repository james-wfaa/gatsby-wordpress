import React from 'react'
import PropTypes from 'prop-types'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import Img from 'gatsby-image'
import TagList from "../parts/TagList"
import styled from 'styled-components'

const WordPressContent = ({className, content}) => {
    console.log(content)

    return(
        <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
    )
}
const StyledWordPressContent = styled(WordPressContent)`
text-align: left;
> p, 
> ul {
    min-width: 300px;
    width: 80%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    
    
}
div.image-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: ${sizes.s58};
    @media screen and ${breakpoints.tabletS} {
        padding-top: ${sizes.s32};
        padding-bottom: ${sizes.s32};
        border-bottom: 8px solid ${colors.sectionBorder};
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

`
export default StyledWordPressContent