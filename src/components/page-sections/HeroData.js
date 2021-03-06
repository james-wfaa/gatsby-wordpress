import React from 'react'
import styled from 'styled-components'
import { colors, sizes, breakpoints, fonts } from "../css-variables"
import PageSectionButtons from '../parts/PageSectionButtons'



const PageSection = ({className, preheading, heading, plainText, popOut, excerpt, buttons, buttonsAlt, buttonsCompact, alt, topBorder, variantObject, bgImage, children, productPage }) => {
  const background = (typeof bgImage !== "undefined" && bgImage !== null)
  const excerptBottom = variantObject.scroll_color === '#9E9E9E'? 0 : buttons ? sizes.s32 : 0;

  const altClass = alt ? ` ${className}--alt` : ""
  const plainTextContent = plainText ? ` plaintext` : ""
  const topBorderClass = topBorder ? ` ${className}--topborder` : ""
  const hasPreHeading =
    preheading && !heading ? ` ${className}--hasPreHeading` : ""
  const hasNoHeading =
    !preheading && !heading ? ` ${className}--hasNoHeading` : ""
  const popClass = popOut ? `${className}__popOut` : ""
  const removeHeadingAfter = productPage ? `productPage` : ""


  const StyledPageSection = styled.div`
  position: relative;
  text-align: center;
  .headingWrapper {
    position: relative;
    padding-bottom: ${sizes.s32};
    margin-bottom: ${sizes.s32};
    h1,
    h2 {
    color: ${variantObject.color};
    font-family: ${fonts.eaves};
    font-weight: bold;
    font-style: italic;
    font-size: ${sizes.s36};
    line-height: ${sizes.s40};
    margin: 0;
    padding: 0 1em;

    @media screen and ${breakpoints.laptopS} {
      font-size: ${sizes.s42};
      line-height: ${sizes.s52};
      padding: 0;
    }
    &:after {
      position: absolute;
      bottom: 0;
      right: calc(50% - ${sizes.s34});
      height: ${sizes.s8};
      width: calc(${sizes.s34} * 2);
      background-color: ${variantObject.color};
      content: "";
    }
  }
  &.productPage{
    margin-bottom: 0;
    h1,
    h2{
      font-size: ${sizes.s36};
      @media screen and ${breakpoints.tabletS} {
        font-size: ${sizes.s42};
      }
    }
    h2:after{
      display:none;
    }
  }

  }
  &__wrapper {
    margin: 0 auto;

    padding-bottom: 88px;
    &:last-child {
      padding-bottom: 128px;
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
  &__popOut {
    position: relative;
    top: -58px;
    padding-top: 0;
    margin-bottom: -58px;
  }

  &--alt {
    background-color: ${colors.bgActiveGrey};
  }
  &--bgimage {
    padding-bottom: 128px;
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

  .excerpt {
    font-size: ${sizes.s24};
    line-height: ${sizes.s36};
    max-width: 896px;
    margin: 0 auto;
    margin-bottom: ${excerptBottom};
    padding: 0 ${sizes.s36};
    text-align: ${variantObject.text_align};
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

  return (
    <StyledPageSection className={`${className}__wrapper`}>
      {!background && (
        <div
          className={`${className} ${altClass} ${hasPreHeading} ${hasNoHeading} ${topBorderClass} ${popClass}`}
        >
          {preheading && (
            <div className={`${className}__preheading`}>{preheading}</div>
          )}
          {heading && (
            (
            <div className={`headingWrapper ` + `${removeHeadingAfter}`}>
              <h2>{heading}</h2>
            </div>
          )
          )}
          {excerpt && (
            <div
              className="excerpt"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          )}
          <div className={`content ${plainTextContent}`}>{children}</div>
          {buttons && (
            <PageSectionButtons
              buttons={buttons}
              buttonsAlt={buttonsAlt}
              compact={buttonsCompact}
            />
          )}
        </div>
      )}
    </StyledPageSection>
  )
}



  export default PageSection
