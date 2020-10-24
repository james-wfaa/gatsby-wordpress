import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, sizes, breakpoints } from '../css-variables'
import BackgroundImage from 'gatsby-background-image'

import PageSectionHeader from '../parts/PageSectionHeader'
import PageSectionButtons from '../parts/PageSectionButtons'



const PageSection = ({
<<<<<<< HEAD
    className,
    preheading,
    heading,
    headingAlt,
    headingCompact,
    pageTitle,
    withSocial,
    plainText,
    popOut,
    excerpt,
    buttons,
    buttonsAlt,
    buttonsCompact,
    alt,
    topBorder,
    bgImage,
    fromBlocks,
=======
    className,
    preheading,
    heading,
    headingAlt,
    headingCompact,
    leftAlign,
    pageTitle,
    withSocial,
    plainText,
    popOut,
    excerpt,
    buttons,
    buttonsAlt,
    buttonsCompact,
    alt,
    topBorder,
    bgImage,
    fromBlocks,
>>>>>>> 356824dc37f15d4d36625e8536a006420527c63f
    children,
    stagger
 }) => {


    const background =  typeof bgImage !== "undefined" && bgImage !== null
    const bgClass = (background) ? 'withBg' : ''
    const classesList = alt ? `${className} ${className}--alt` : className
    const altClass = alt ? 'alt' : ''
    const plainTextContent = plainText ? ` plaintext` : ''
    const topBorderClass = topBorder ? ` ${className}--topborder` : ''
    const hasPreHeading = preheading && !heading ?  ` ${className}--hasPreHeading` : ''
    const hasNoHeading = !preheading && !heading ? ` ${className}--hasNoHeading` : ''
    const popClass = popOut ? `${className}__popOut` : ''
    const staggerClass = (stagger) ? ' stagger' : ''

    return (
        <div className={`${className}__wrapper ${staggerClass} ${altClass} ${bgClass}`} >
            { ! background &&  (
            <div className={`${className} ${hasPreHeading} ${hasNoHeading} ${topBorderClass} ${popClass}` }>
                { preheading && (
                <div className={`${className}__preheading`}>{preheading}</div>
            )}
                  { heading && (
                <PageSectionHeader heading={heading} headingAlt={headingAlt} pageTitle={pageTitle} withSocial={withSocial} headingCompact={headingCompact} fromBlocks={fromBlocks} leftAlign={leftAlign} />
            )}
            { excerpt && (
                <div className="sectionexcerpt"  dangerouslySetInnerHTML={{ __html: excerpt }} />
            )}
            <div className={`content ${plainTextContent}`}>
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
          ><div className="wrapper">
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
          </div>



      </BackgroundImage>
        )
        }


        </div>
    )
}

const StyledPageSection = styled(PageSection)`

    position: relative;
    text-align: center;
    padding-top: 88px;
    .sectionexcerpt {
        a {
            color: ${colors.bgRed}
        }
    &.leftAlign {
        text-align: left;
    }
    &__wrapper {
        margin: 0 auto;

        padding-bottom: 56px;
        &:last-child {
            padding-bottom: 128px;
        }
        &.stagger:nth-child(odd) {
            background-color: ${colors.bgActiveGrey};
        }
        &.alt {
            background-color: ${colors.bgActiveGrey};
        }
        &.withBg {
            padding-bottom: 0;
        }
    }

    &--hasPreHeading {
        padding-top: 0;
    }
    &--hasNoHeading {
        padding-top: 58px;
    }
    &--topborder {
        border-top: ${sizes.s36} solid ${colors.sectionBorder};
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
        max-width: 712px;
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
    .content {
        > p {
            min-width: 300px;
            width: 80%;
            max-width: 897px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
        }
        &.plaintext {
            max-width: 712px;
            margin: 0 auto;
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
