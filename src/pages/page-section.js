import React from "react"
import Layout from "../../components/Layout"
import PageSection from '../../components/page-sections/PageSection'
import MobileHr from '../../components/parts/MobileHr'

const buttons1 = [
    
    {
        link: '#',
        text: 'Learn More'
    },
    
]

export default () => {
    return (
<Layout>
    <MobileHr />
    <PageSection  heading="Basic Page Section" buttons={buttons1} >
        <p>This Component is the main building block for most of the distinct sections of most of the top-level pages.</p>

        <p>The Basic Page Section consists of a few optional header elements at the top,
             and an optional buttons / CTA section at the end.
        </p>
        <p>In between these two optional sections, all sorts of content components can live.</p>
    </PageSection>
    <PageSection alt heading="Basic Page Section" buttons={buttons1} >
        <p>This Component is the main building block for most of the distinct sections of most of the top-level pages.</p>

        <p>The Basic Page Section consists of a few optional header elements at the top,
             and an optional buttons / CTA section at the end.
        </p>
        <p>In between these two optional sections, all sorts of content components can live.</p>
    </PageSection>
</Layout>
    )
}