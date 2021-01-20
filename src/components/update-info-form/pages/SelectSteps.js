import React, { useState, useEffect } from "react"
//import { useForm } from "react-hook-form"
import IntroPageSection from "../../page-sections/IntroPageSection"

import { sizes, breakpoints, mixins, colors } from '../../css-variables'
import Buttons from './formButtons'


const SelectSteps = ({ handleCheckboxes }) => {
  
  let variantObject = {
    background_color: colors.formIntroBg,
    color: colors.bgRed,
    scroll_color: colors.bgRed,
    text_align: `center`
  }
  
    return (
        <div className="select-steps">
            <IntroPageSection
            excerpt='Thanks so much. Now, let us know what else you are wanting to update, if anything.'
            heading='Update My Info'
            variantObject={variantObject}
            headingAlt
            headingCompact
            />
            <form>
                <input type="checkbox" name="address" id="address" checked />
                <label for="address" selected>Mailing Address</label>
                <input type="checkbox" name="phone" id="phone" checked />
                <label for="phone" selected>Phone Number</label>
                <input type="checkbox" name="employment" id="employment" checked />
                <label for="employment" selected>Employment Information</label>
                <input type="checkbox" name="demographic" id="demographic" checked />
                <label for="demographic" selected>Demographic/Identity/Country Information</label>
                <input type="checkbox" name="spouse" id="spouse" checked />
                <label for="spouse" selected>Spouse Update (Marriage/Divorce/Death)</label>
            </form>
            <Buttons back finish next />

        </div>
    )

}

export default SelectSteps