import React from "react"
import Layout from "../../components/Layout"
import JamesCard from "../../components/content-blocks/JamesCard"
import JamesCardGreen from "../../components/content-blocks/JamesCardGreen"

export default () => {
    return (
<Layout>
    <div>uwalumni.com | homepage</div>
    <JamesCard heading="This is the default JamesCard" />
    <JamesCardGreen heading="This is JamesCardGreen using styled-components for overrides" />
</Layout>
    )
}