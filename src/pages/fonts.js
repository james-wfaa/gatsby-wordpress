import React from "react"
import styled from 'styled-components'

import Layout from "../../components/Layout"
import PageSection from '../../components/page-sections/PageSection'
import { colors, fonts, mixins } from '../../components/css-variables'


const pageBlock = ({ className }) => {
    return (
<Layout className={className}>
    <PageSection>
        <h1>Text Styles and sizes</h1>
        <div className={`${className}__cardTitle`}>Card Title Style</div>
    </PageSection>
    
</Layout>
    )
}

const styledPageBlock = styled(pageBlock)`
    &__cardTitle {
        ${mixins.cardTitle}

    }
`

export default styledPageBlock