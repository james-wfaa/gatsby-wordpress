import React from "react"
import styled from 'styled-components'

import Layout from "../components/Layout"
import PageSection from '../components/page-sections/PageSection'
import { sizes, breakpoints, mixins } from '../components/css-variables'


const pageBlock = ({ className }) => {
    return (
<Layout>
    <PageSection>
        <div  className={className}>
            <h1>Text Styles and sizes</h1>
            <p>Font sizes increase from mobile at 656px screen width.</p>

            <div className={`${className}__cardTitle`}>Card Title Style</div>
            <p>Mrs. Eaves XL Serif Narrow OT, Bold &amp; Italic, #c5050c, 24px/32px</p>
            <div className={`${className}__cardTitleSmall`}>Card D Title Style</div>
            <p>Mrs. Eaves XL Serif Narrow OT, Bold &amp; Italic, #c5050c, 20px/24px</p>
            <div className={`${className}__cardDate`}>Card Date Style</div>
            <p>Mrs. Eaves XL Serif  OT, Bold &amp; Italic, #3c3c3c, 42px/52px</p>
            <div className={`${className}__cardDateSmall`}>Card D Date Style</div>
            <p>Mrs. Eaves XL Serif  OT, Bold &amp; Italic, #3c3c3c, 24px/32px</p>
            <div className={`${className}__category`}>Category Style</div>
            <p>Verlag Black (font-weight 800), uppercase, #777777, 13px/14px</p>

            <div className={`${className}__venue`}>Venue Style</div>
            <p>Verlag Book, #3c3c3c, 16px/18px</p>

            <div className={`${className}__location`}>Location Style</div>
            <p>Verlag Bold, #3c3c3c, 16px/18px</p>
        </div>
    
    </PageSection>
    
</Layout>
    )
}

const styledPageBlock = styled(pageBlock)`
    padding: 2rem;
    
    p {
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        font-size: ${sizes.s14};
        border-bottom: 1px solid #000;
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
        ${mixins.cardDate}
        font-size: ${sizes.s24};
        @media screen and ${breakpoints.tabletS} {
            font-size: ${sizes.s32};
        }
    }
    &__category {
        ${mixins.category}
    }
    &__venue {
        ${mixins.venue}
    }
    &__location {
        ${mixins.location}
    }
`

export default styledPageBlock