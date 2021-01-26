import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from "../../context/AppContext"
import styled from "styled-components"
import PageSection from "../page-sections/PageSection"
import { membershipFeeCalc } from "../../utils/tools"

const FormSection = styled.div`
  margin: 48px;
  border-bottom: 2px solid grey;
`
const StyledCheckbox = styled.div`
  display: inline-block;
  input, label {
    display: inline-block;
  }

`

const MembershipForm = () => {

  const { state, actions } = useContext(AppContext);
  const { setMembershipGraduate, setMembershipAge, setMembershipType } = actions;

  const [fees, setFees] = useState(null)
  const [showValues, setShowValues] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const convertStrToBool= (str) => {
    if (str.toLowerCase() === "true") return true;
    if (str.toLowerCase() === "false") return false;
    return false;
  }

  const onGraduateChanged = (e) => {
    setMembershipGraduate(convertStrToBool(e.target.value))
  }

  const onAgeChanged = (e) => {
    setMembershipAge(convertStrToBool(e.target.value))
  }

  const onMembershipChanged = (e) => {
    setMembershipType(e.target.value)
  }


  const handleSubmit = (e) => {
    setShowValues(true)
  }

  const handleClear = () => {
    setDisabled(true);
    setShowValues(false);
  }

  useEffect(() => {
      if ((state.membershipType === "joint" || state.membershipType === "individual") && state.membershipGraduate !== null && state.membershipAge !== null) {
        setFees(membershipFeeCalc(state.membershipGraduate, state.membershipAge, state.membershipType));
        setDisabled(false)
      } else {
        setDisabled(true)
      }
  }, [state.membershipGraduate, state.membershipAge, state.membershipType])

  return (
    <div>
      {showValues && fees ?
        <PageSection>
          <button onClick={() => handleClear()}>Submit</button>
          <div>
            <PageSection header="Lifetime Membership">
              <div>${fees.full}</div>
              <div>${fees.installments}</div>
            </PageSection>
            <PageSection header="Annual Membership">
              <div>${fees.oneYear}</div>
              <div>${fees.twoYear}</div>
            </PageSection>
          </div>
        </PageSection>
        :
        <PageSection heading="Let's Find the Best Membership for You">
          <p style={{fontSize: `26px`, maxWidth: `896px`, margin: `0 auto 58px`}}>Joining for the first time? Or are you a long-time member who wants to make sure you're getting
            the best deal? Either way, answer the following questions to see what's right for you.
          </p>
          <form>
            <FormSection>
              <h3>1.</h3>
              <p>Did you graduate from UW Madison within the last five years?</p>
              <StyledCheckbox>
                <input id="graduateYes" name="graduate" value={true} type="radio" onChange={(e) => onGraduateChanged(e)} />
                <label for="graduateYes">Yes</label>
              </StyledCheckbox>
              <StyledCheckbox>
                <input id="graduateNo" name="graduate" value={false} type="radio" onChange={(e) => onGraduateChanged(e)}/>
                <label for="graduateNo">No</label>
              </StyledCheckbox>
            </FormSection>
            <FormSection>
              <h3>2.</h3>
              <p>Are you 65 years of age or over?</p>
              <StyledCheckbox>
                <input id="ageYes" name="age" value={true} type="radio" onChange={(e) => onAgeChanged(e)}/>
                <label for="ageYes">Yes</label>
              </StyledCheckbox>
              <StyledCheckbox>
                <input id="ageNo" name="age" value={false} type="radio" onChange={(e) => onAgeChanged(e)}/>
                <label for="ageNo">No</label>
              </StyledCheckbox>
            </FormSection>
            <FormSection>
              <h3>3.</h3>
              <p>What type of member option are you looking for?</p>
              <StyledCheckbox>
                <input id="individual" name="accountType" value="individual" type="radio" onChange={(e) => onMembershipChanged(e)}/>
                <label for="individual">Individual</label>
              </StyledCheckbox>
              <StyledCheckbox>
                <input id="joint" name="accountType" value="joint" type="radio" onChange={(e) => onMembershipChanged(e)}/>
                <label for="joint">Joint</label>
              </StyledCheckbox>
            </FormSection>
            <p>You must answer all three questions before submitting</p>
            <button disabled={disabled} onClick={(e) => handleSubmit(e)}>Submit</button>
          </form>
        </PageSection>
      }

    </div>
  )
}

export default MembershipForm
