import React from "react"
import PageSection from "../../page-sections/PageSection"
import { colors } from "../../css-variables"


const UpdateSuccess = () => {
    return (
        <div className="communications-success-page">
            <PageSection
            excerpt='We’re excited to see your interest level in additional WAA offerings. Watch for communications from the area(s) of interest you chose to come your way. If, at any point, you’d like to make changes to your list of communications, please let us know by emailing <a href="mailto:recordsupdates@supportuw.org" className="red">recordsupdates@supportuw.org</a>.'
            heading='Thanks for your interest in learning more.'
            headingCompact
            backgroundColor={colors.formIntroBg}
            pageTitle
            formRefresh
            />
        </div>
    )
}

export default UpdateSuccess