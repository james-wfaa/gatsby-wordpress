import React, { useState, useEffect } from "react"
//import { useForm } from "react-hook-form"
import IntroPageSection from "../../page-sections/IntroPageSection"

import { sizes, breakpoints, mixins, colors } from '../../css-variables'
import Buttons from './FormButtons'


const SelectSteps = ({ handleCheckboxes }) => {
  
  let variantObject = {
    background_color: colors.formIntroBg,
    color: colors.bgRed,
    scroll_color: colors.bgRed,
    text_align: `center`
  }
  
    return (
        <div>
            <IntroPageSection
            excerpt='Thanks so much. Now, let us know what else you are wanting to update, if anything.'
            heading='Update My Info'
            variantObject={variantObject}
            headingAlt
            headingCompact
            />
            <form className="select-steps">
                
                <label for="address" selected><input type="checkbox" name="address" id="address" />Mailing Address</label>
                <label for="phone" selected><input type="checkbox" name="phone" id="phone" />Phone Number</label>
                <label for="employment" selected><input type="checkbox" name="employment" id="employment" />Employment Information</label>
                <label for="demographic" selected><input type="checkbox" name="demographic" id="demographic" />Demographic/Identity/Country Information</label>
                <label for="spouse" selected><input type="checkbox" name="spouse" id="spouse" />Spouse Update (Marriage/Divorce/Death)</label>
            </form>
            <Buttons back finish next />

        </div>
    )

}

export default SelectSteps