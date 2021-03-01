import React from "react"
import styled from 'styled-components'
import { colors, sizes, breakpoints, fonts, mixins } from '../css-variables'

const ImageSection = ({ className, data, defaultPage }) => {
    const defaultClass = (defaultPage) ? 'default' : '';

    return (
        <div className={`${className} ${defaultClass} image-section-wrapper`} dangerouslySetInnerHTML={{__html: data}} />
    )
}

const StyledImageSection = styled(ImageSection)`
&.image-section-wrapper {
    max-width: 1080px;
    margin: 0 auto;
    width: 100%;
   
    text-align: left;
    padding-bottom: ${sizes.s58};
    
    &:last-child {
        padding-bottom: 0;
    }
    @media screen and ${breakpoints.tabletS} {
        
        padding-bottom: ${sizes.s32};
        
        /* add top padding to all but the first one */
        ~ .image-section-wrapper {
            padding-top: ${sizes.s32};
        }
        
        width: 80%;
        
        max-width: 1080px;
        margin-left: auto;
        margin-right: auto;

        &:last-of-type {
            border-bottom: none;
        }
        &+div.image-section-wrapper {
            border-top: 8px solid ${colors.sectionBorder};
        }
        &.default {
            width: 100%;
        }
    }
}
    
.image-section {
    display: flex;
    flex-direction: column;
    a {
        ${mixins.textlink}
    }
    &--small {
        .image-section__image {
            width: calc(100% - 72px);
            margin: 0 auto;
        }

    }
    @media screen and ${breakpoints.tabletS} {
        
        
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

    

`

export default StyledImageSection