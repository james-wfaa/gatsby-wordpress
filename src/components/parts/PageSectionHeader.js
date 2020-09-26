import React from "react"
import styled from 'styled-components'
import { mixins } from '../css-variables'

const PageSectionHeader = ({
  className,
  heading,
  headingAlt,
  headingCompact,
  pageTitle,
  withSocial,
  variantObject,
  bgimage,
  fromBlocks,
}) => {
  const classBgImage = bgimage ? " bgimage" : ""
  const classSocialImage = withSocial ? " social" : ""
  const classAlt =
    headingAlt && !variantObject
      ? " headingAlt"
      : variantObject
      ? "headingAlt_variant"
      : null
  const classCompact = headingCompact ? " compact" : ""
  const classesList = `${className}${classAlt}${classCompact}${classBgImage}${classSocialImage}`
  return (
    <div className={classesList}>
      {fromBlocks && <div dangerouslySetInnerHTML={{ __html: heading }} />}
      {!fromBlocks && pageTitle && <h1>{heading}</h1>}
      {!fromBlocks && (!pageTitle || typeof pageTitle === "undefined") && (
        <h2>{heading}</h2>
      )}
    </div>
  )
}

const StyledPageSectionHeader = styled(PageSectionHeader)`
    ${mixins.sectionHeader}
`

export default StyledPageSectionHeader