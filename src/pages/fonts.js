import React from "react"
import styled from 'styled-components'

import Layout from "../../components/Layout"
import PageSection from '../../components/page-sections/PageSection'
import { sizes, breakpoints, mixins } from '../../components/css-variables'


const pageBlock = ({ className }) => {
    return (
<Layout className={className}>
    <PageSection>
        <h1>Text Styles and sizes</h1>
        <div className={`${className}__cardTitle`}>Card Title Style</div>
        <p>Mrs. Eaves XL Serif Narrow OT, Bold &amp; Italic, #c5050c, 24px/32px</p>
        <div className={`${className}__cardTitleSmall`}>Card D Title Style</div>
        <p>Mrs. Eaves XL Serif Narrow OT, Bold &amp; Italic, #c5050c, 20px/24px</p>
        <div className={`${className}__cardDate`}>Card Date Style</div>
        <p>Mrs. Eaves XL Serif  OT, Bold &amp; Italic, #c5050c, 42px/52px</p>
        <div className={`${className}__cardDateSmall`}>Card D Date Style</div>
        <p>Mrs. Eaves XL Serif  OT, Bold &amp; Italic, #c5050c, 24px/32px</p>

    </PageSection>
    
</Layout>
    )
}

const styledPageBlock = styled(pageBlock)`
    p {
        margin-top: 1rem;
    }
    &__cardTitle {
        ${mixins.cardTitle}
    }
    &__cardTitleSmall {
        ${mixins.cardTitle}
        font-size: ${sizes.s20};
        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s24};
        }
    }
    &__cardDate {
        ${mixins.cardDate}
    }
    &__cardDateSmall {
        ${mixins.cardTitle}
        font-size: ${sizes.s24};
        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s32};
        }
    }
`

export default styledPageBlock