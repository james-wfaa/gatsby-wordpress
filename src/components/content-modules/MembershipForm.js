import React, { useContext } from 'react'
import { AppContext } from "../../context/AppContext"
import styled from "styled-components"
import PageSectionHeader from "../parts/PageSectionHeader"

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

  const onGraduateChanged = (e) => {
    setMembershipGraduate(e.target.value)
  }

  const onAgeChanged = (e) => {
    setMembershipAge(e.target.value)
  }

  const onMembershipChanged = (e) => {
    setMembershipType(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
  }

  return (
    <div>
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
        {state.membershipGraduate && state.membershipAge && state.membershipType ?
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
        : <button disabled>Submit</button>
        }
      </form>
    </div>
  )
}

export default MembershipForm
