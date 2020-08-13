import React from "react"
import styled from 'styled-components'
import { mixins } from '../css-variables'

const PageSectionHeader = ({ className, heading, pageTitle, bgimage }) => {

    const classesList = bgimage ? `${className} ${className}--bgimage` : className
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