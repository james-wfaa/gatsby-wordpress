import React from "react"
import styled from 'styled-components'
import { mixins } from '../css-variables'


const PageSectionHeader = ({ className, heading, headingAlt, headingCompact, pageTitle, excerpt, groupPage, withSocial, bgimage, fromBlocks, leftAlign }) => {

    const classBgImage = bgimage ? ' bgimage' : ''
    const classSocialImage = withSocial ? ' social' : ''
    const classAlt = headingAlt ? ' headingAlt' : ''
    const classCompact = headingCompact ? ' compact' : ''
    const classLeft = leftAlign ? ' leftAlign' : ''
    const classGroup = groupPage ? ' groupPage' : ''
    const classExcerpt = excerpt ? ' excerpt' : ''
    const classesList = `${className}${classAlt}${classCompact}${classBgImage}${classGroup}${classSocialImage}${classLeft}${classExcerpt}`
   
    return (
        <div className={classesList}>
            { fromBlocks && (
                <div dangerouslySetInnerHTML={{ __html: heading }} />
            )}
            { !fromBlocks && pageTitle && (
                <h1 className={classLeft}>{heading}</h1>
            )}
            { !fromBlocks && (!pageTitle || typeof pageTitle === 'undefined') && (
                <h2 className={classLeft}>{heading}</h2>
            )}     
        </div>
    )
}


const StyledPageSectionHeader = styled(PageSectionHeader)`
    ${mixins.sectionHeader}
`

export default StyledPageSectionHeader