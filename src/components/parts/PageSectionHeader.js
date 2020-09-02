import React from "react"
import styled from 'styled-components'
import { mixins } from '../css-variables'

const PageSectionHeader = ({ className, heading, pageTitle, withSocial, bgimage }) => {

    const classBgImage = bgimage ? `${className}--bgimage` : ''
    const classSocialImage = withSocial ? `${className}--social` : ''
    const classesList = `${className} ${classBgImage} ${classSocialImage}`
    return (
        <div className={classesList}>
            { pageTitle && (
                <h1>{heading}</h1>
            )}
            { (!pageTitle || typeof pageTitle === 'undefined') && (
                <h2>{heading}</h2>
            )}
        </div>
    )
}

const StyledPageSectionHeader = styled(PageSectionHeader)`
    ${mixins.sectionHeader}
`

export default StyledPageSectionHeader