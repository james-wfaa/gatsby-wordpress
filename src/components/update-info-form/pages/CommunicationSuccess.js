import React from "react"
import IntroPageSection from "../../page-sections/IntroPageSection"
import { variantObject } from '../form-helpers'


const UpdateSuccess = () => {
    return (
        <div className="communications-success-page">
            <IntroPageSection
            excerpt='We’re excited to see your interest level in additional WAA offerings. Watch for communications from the area(s) of interest you chose to come your way. If, at any point, you’d like to make changes to your list of communications, please let us know by emailing <a href="mailto:recordsupdates@supportuw.org" class="red">recordsupdates@supportuw.org</a>.'
            heading='Thanks for your interest in learning more.'
            variantObject={variantObject}
            headingAlt
            headingCompact
            />
        </div>
    )
}

export default UpdateSuccess