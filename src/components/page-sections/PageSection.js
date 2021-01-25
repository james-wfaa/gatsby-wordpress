import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'
import BackgroundImage from 'gatsby-background-image'

import PageSectionHeader from '../parts/PageSectionHeader'
import PageSectionButtons from '../parts/PageSectionButtons'



const PageSection = ({
    className,
    id,
    preheading,
    heading,
    headingAlt,
    headingCompact,
    leftAlign,
    pageTitle,
    withSocial,
    plainText,
    centered, // a centered-content page section e.g. Product Page or Aggregate Page
    popOut,
    excerpt,
    buttons,
    buttonsAlt,
    buttonsCompact,
    alt,
    topBorder,
    bgImage,
    divider,
    fromBlocks,
    children,
    stagger,
    desktopOnly,
    onlyChild,
    defaultPage // one page section with no top padding
 }) => {


    const background =  typeof bgImage !== "undefined" && bgImage !== null
    const bgClass = (background) ? 'withBg' : ''
    const desktopOnlyClass = (desktopOnly) ? 'desktopOnly' : ''
    const classesList = alt ? `${className} ${className}--alt` : className
    const altClass = alt ? 'alt' : ''
    const plainTextContent = plainText ? ` plaintext` : ''
    const topBorderClass = topBorder ? 'topborder' : ''
    const onlyChildClass = onlyChild ? ' onlychild' : ''
    const hasPreHeading = preheading && !heading ?  ' hasPreHeading' : ''
    const hasNoHeading = !preheading && !heading ? ' hasNoHeading' : ''
    const popClass = popOut ? `${className}__popOut` : ''
    const staggerClass = (stagger) ? ' stagger' : ''
    const defaultClass = (defaultPage) ? ' defaultClass' : ''
    const dividerClass = (divider) ? ' divider' : ''
    const centeredContentClass = (centered) ? ' centered' : ''

    return (
        <div id={id} className={`${className} ${staggerClass} ${altClass} ${topBorderClass} ${desktopOnlyClass}${onlyChildClass}${hasPreHeading}${hasNoHeading}${defaultClass} ${bgClass}`}  >
            { ! background &&  (
            <div className={`${className}__innerwrap   ${popClass}${dividerClass}` }>
                { preheading && (
                <div className={`${className}__preheading`}>{preheading}</div>
            )}
                  { heading && (
                <PageSectionHeader heading={heading} headingAlt={headingAlt} pageTitle={pageTitle} withSocial={withSocial} headingCompact={headingCompact} fromBlocks={fromBlocks} leftAlign={leftAlign} />
            )}
            { excerpt && (
                <div className="sectionexcerpt"  dangerouslySetInnerHTML={{ __html: excerpt }} />
            )}
            <div className={`content ${plainTextContent}${centeredContentClass}`}>
                {children}
            </div>
            { buttons && (<PageSectionButtons buttons={buttons} buttonsAlt={buttonsAlt} compact={buttonsCompact} />
            )}
            </div>

        )}
        { background && (
            <BackgroundImage
            Tag="div"
            className={`${classesList} ${className}--bgimage`}
            fluid={bgImage.childImageSharp.fluid}
            preserveStackingContext
          >
            { heading && (
                <PageSectionHeader heading={heading} pageTitle={pageTitle} withSocial={withSocial} bgimage />
            )}
             { excerpt && (
                <div className={`sectionexcerpt ${className}__excerpt ${className}__excerpt--bgimage`}  dangerouslySetInnerHTML={{ __html: excerpt }} />
            )}
            <div className={`content content--bgimage`}>
                {children}
            </div>
            { buttons && (<PageSectionButtons buttons={buttons} bgimage buttonsAlt/>
            )}
         



      </BackgroundImage>
        )
        }


        </div>
    )
}

const StyledPageSection = styled(PageSection)`

    &.desktopOnly {
        display: none;
        @media screen and ${breakpoints.laptopS} {
           display: block;
        }
    }
    position: relative;
    margin: 0 auto;
    text-align: center;
    padding-top: 58px;
    padding-bottom: 58px;
    &:last-child {
        padding-bottom: 88px;
    }
    &__innerwrap.divider{
        padding-left:56px;
        border-left: 6px solid #F3F3F3;
    }
    @media screen and ${breakpoints.tabletS} {
        padding-top: 88px;
        padding-bottom: 88px;
        &:last-child {
            padding-bottom: 128px;
        }
        &.onlychild {
            &:last-child {
                padding-bottom: 88px;
            }
        }
        
    }
    &.defaultClass {
        padding-top: 0;
    }
    
    &.stagger:nth-child(even) {
        background-color: ${colors.bgActiveGrey};
    }
    &.alt {
        background-color: ${colors.bgActiveGrey};
    }
    &.withBg {
        padding-top: 0;
        padding-bottom: 0;
    }
    &.topborder {
        border-top: ${sizes.s36} solid ${colors.sectionBorder};
    }
    .sectionexcerpt {
        a {
            color: ${colors.bgRed}
        }
    }
    &.leftAlign {
        text-align: left;
        
    }
    &.hasPreHeading {
        padding-top: 0;
    }
    &.hasNoHeading {
        padding-top: 58px;
    }
    
    &--addPad {
        padding-bottom: 116px;
    }
    &__popOut{
        position: relative;
        top: -58px;
        padding-top: 0;
        margin-bottom: -58px;
    }



    &--bgimage {
        /*background-color: rgba(0, 0, 0, 0.3) !important; */
        &:before,
        &:after {
            /*background-color: rgba(0, 0, 0, 0.3) !important;*/
        }
        &:before {
            z-index: 0;
        }
    }

    &__preheading {
        text-transform: uppercase;
        font-size: ${sizes.s18};
        line-height: ${sizes.s24};
        font-weight: bold;
        padding: 58px 0;
        @media screen and ${breakpoints.laptopS} {
            font-size: ${sizes.s20};
        }
    }


    .sectionexcerpt {
        font-size: ${sizes.s24};
        line-height: ${sizes.s36};
        max-width: 896px;
        margin: 0 auto;
        margin-bottom: ${sizes.s32};
        padding: 0 ${sizes.s36};

        p:last-child {
            margin-bottom: 0;
        }
        @media screen and ${breakpoints.laptopS} {
           padding: 0;
           font-size: ${sizes.s26};
        }
        &--bgimage {
            color: ${colors.bgWhite} !important;

        }
        &.withsocial {

        }
    }
    /* some wordpress content pieces */
    .content.centered {
        > p,
        > .core-heading,
        > .core-image,
        > .core-freeform,
        > .core-paragraph,
        > .core-list,
        > .core-table,
        > .core-buttons,
        > .core-columns {
            min-width: 300px;
            width: 80%;
            max-width: 712px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
        }

        > .core-buttons {
            display: flex;
            justify-content: center;
            flex-direction: column;

            @media screen and ${breakpoints.tabletS} {
                flex-direction: row;
            }        
        }

        .core-columns{
            max-width: 303px;
            
            @media screen and ${breakpoints.tabletS} {
                display: flex;
                max-width: 536px;
                .core-column{
                    margin-right: 12px;
                    margin-left: 12px;
                }
            }
            @media screen and ${breakpoints.laptopS} {
                max-width: 712px;
            }
            .core-column{
                flex: 1 1 auto;
                flex-shrink: 1;
                min-width: 50px;
            }
        }
        
    }


`


PageSection.propTypes = {
    preHeading: PropTypes.string,
    heading: PropTypes.string,
    postHeading: PropTypes.string,
    excerpt: PropTypes.string,
    content: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string,
        text: PropTypes.string,
    })
    )
  }

  export default StyledPageSection
