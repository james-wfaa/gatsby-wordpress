import React from "react"
import Layout from "../components/layout"
import PageSection from '../components/page-sections/GenericPageSection'

const FooterPage = () => {
    return (
<Layout>
    <PageSection pad>
        <h1>Footer</h1>

        <p>The footer appears at the bottom of all pages:</p>

        <p>At mobile (screens smaller than 768px wide), the footer format changes to a single column.</p>
        <p>Social Media icons currently do not change color when hovered over, this will be fixed in a future release</p>
        <p>Some consideration should be done for how we want the footer to appear when between the larger tablet sizes and the smaller 375 mobile size.</p>
    </PageSection>
</Layout>
    )
}         
export default FooterPage