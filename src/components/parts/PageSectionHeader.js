import React from "react"
import styled, { css } from "styled-components"
import { colors, sizes, breakpoints, fonts } from "../css-variables"



const PageSectionHeader = (
  {
    className,
    heading,
    headingAlt,
    headingCompact,
    pageTitle,
    withSocial,
    variantObject,
    bgimage,
    fromBlocks,
  },
  props
) => {
  const classBgImage = bgimage ? " bgimage" : ""
  const classSocialImage = withSocial ? " social" : ""
  const classAlt = headingAlt ? "headingAlt" : ""
  const classCompact = headingCompact ? " compact" : ""
  const classesList = `${
    className ? className : ""
  }${classAlt}${classCompact}${classBgImage}${classSocialImage}`

  const StyledSection = styled.div`
    text-align: center;
    position: relative;
    padding-bottom: ${sizes.s40};
    margin-bottom: ${sizes.s58};
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
    }
    &:after {
      background-color: ${variantObject.color};
      position: absolute;
      bottom: 0;
      right: calc(50% - ${sizes.s34});
      height: ${sizes.s8};
      width: calc(${sizes.s34} * 2);
      content: "";
    }

    &.bgimage,
    &.headingAlt {
      h2 {
        color: ${variantObject.color};
      }
      &:after {
        background-color: ${variantObject.color};
      }
    }

    &.social,
    &.compact {
      margin-bottom: ${sizes.s32};
    }
  `

  return (
    <StyledSection className={classesList}>
      {fromBlocks && <div dangerouslySetInnerHTML={{ __html: heading }} />}
      {!fromBlocks && pageTitle && <h1>{heading}</h1>}
      {!fromBlocks && (!pageTitle || typeof pageTitle === "undefined") && (
        <h2>{heading}</h2>
      )}
    </StyledSection>
  )
}

// const StyledPageSectionHeader = styled(PageSectionHeader)`
//     ${mixins.sectionHeader}
// `



export default PageSectionHeader