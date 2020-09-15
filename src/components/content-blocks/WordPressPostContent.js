import React from 'react'
import { colors, mixins, sizes, breakpoints, fonts } from '../css-variables'
import styled from 'styled-components'
import FaTwitter from "../../svg/twitter_icon_gray.svg";
import FaFacebook from "../../svg/fb_icon_gray.svg";
import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";


const WordPressContent = ({className, content}) => {
    console.log(content)

    return(
        <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
    )
}
const StyledWordPressContent = styled(WordPressContent)`
max-width: 1080px;
margin: 0 auto;
text-align: left;

> p, 
> ul,
> h2 {
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
}

a {
    ${mixins.textlink}
}
div.image-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: ${sizes.s58};
    &--small {
        .image-section__image {
            width: calc(100% - 72px);
            margin: 0 auto;
        }

    }
    @media screen and ${breakpoints.tabletS} {
        padding-top: ${sizes.s32};
        padding-bottom: ${sizes.s32};
        
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
    height: ${sizes.s36};
    background-color: ${colors.sectionBorder};
    margin: ${sizes.s36} 0;
    @media screen and ${breakpoints.tabletS} {
        margin: ${sizes.s52} 0;
        
    }
}
div.section-header {
    ${mixins.sectionHeader}

}
.callout-bold {
    font-weight: bold;
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
            margin: 16px 0px 16px 16px;      
        }
    
    }

}
.wp-block-gallery {
    display: none;
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
    max-width: 712px;
    @media screen and ${breakpoints.laptopL} {
        width: 252px;
        float: right;
        margin: 24px 0px 24px 24px;    
        
        &.has-text-align-left{
            float: left;
            margin: 24px 24px 24px 0;     
        }
    }
    @media screen and ${breakpoints.laptopS} {
        max-width: 536px;
    }
}

`
export default StyledWordPressContent