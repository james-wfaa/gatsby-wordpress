import React, { useContext } from "react"
import IntroPageSection from "../../page-sections/IntroPageSection"
import { colors } from '../../css-variables'
import { AppContext } from "../../../context/AppContext"

const UpdateSuccess = () => {
    const { state, actions } = useContext(AppContext);
    const { setAddressStep,  } = actions;
  
    const variantObject = {
        background_color: colors.formIntroBg,
        color: colors.bgRed,
        scroll_color: colors.bgRed,
        text_align: `center`
    }
  
    return (
        <div className="communications-success-page">
            <IntroPageSection
            excerpt='Thanks so much for signing up for those communications.
            You will get a confirmation at the email you provided. Again, if you’d like to make any changes to your communication preferences in the future, simply email <span class="red">recordsupdates@supportuw.org</span> to let us know.'
            heading='Thanks so much. Your info has been updated.'
            variantObject={variantObject}
            headingAlt
            headingCompact
            />
        </div>
    )
}

export default UpdateSuccess