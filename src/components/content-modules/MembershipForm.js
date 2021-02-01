import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from "../../context/AppContext"
import styled from "styled-components"
import { colors, mixins, fonts } from '../css-variables'
import PageSection from "../page-sections/PageSection"
import PageSectionHeader from "../parts/PageSectionHeader"
import { membershipFeeCalc } from "../../utils/tools"

const QuestionForm = styled.form`
  border: 1px solid ${colors.iconGrey};
`

const FormHeader = styled.div`
  background-color: ${colors.bgActiveGrey};
  padding: 48px;
  border-top: 3px solid ${colors.iconGrey};
  border-collapse: collapse;
  p {
    margin: 0;
    font-size: 18px;
    color: ${colors.badgerRed};
  }
`

const FormSection = styled.div`
  padding: 48px;
  border-bottom: 9px solid ${colors.cardTitleBg};
  h3 {
    font-size: 54px;
    color: ${colors.badgerRed};
    font-family: ${fonts.eaves};
  }
`
const FormQuestion = styled.p`
  font-size: 32px;
  font-family: ${fonts.eavesNarrow};
  margin-bottom: 48px;
`
const StyledCheckbox = styled.div`
  display: inline-block;
  margin: 12px;
  input, label {
    display: inline-block;
    margin: 12px;
    font-size: 26px;
  }
`
const FeeBoxHeading = styled.div`
  ${mixins.sectionHeader}
`
const FeeBox = styled.div`
  background-color: ${colors.bgActiveGrey};
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 58px 58px 0 58px;
`

const FeeCard = styled.div`
  ${mixins.contentCardBase}
  ${mixins.contentCardSizes}
  * {
    text-align: center;
  }
  justify-self: center;
  padding: 1rem;
  text-align: left;
  text-decoration: none;
  background-color: ${colors.bgWhite};
  opacity: 0.9;
  color: ${colors.cardText};
  min-height: 256px;
  width: 100%;
`

const Fee = styled.p`
  font-size: 54px;
  font-weight: bold;
  text-align: center;
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
    setMembershipGraduate(null);
    setMembershipAge(null);
    setMembershipType(null);
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
    <div style={{maxWidth: `896px`, margin: `0 auto`}}>
      {showValues && fees ?
        <PageSection>
          <button onClick={() => handleClear()}>Submit</button>
          <FeeBox>
            <FeeBoxHeading style={{gridColumn: "1 / span 2"}}>
              <h1>Lifetime Membership</h1>
            </FeeBoxHeading>
            <div style={{gridColumn: "1 / span 2"}}>
              <p>
                Solidify your pride. Become a lifetime member. Your love of the UW knows no bounds,
                and neither does this membership community dedicated to supporting all alumni
                and strengthening WAA’s mission. Plus, you’ll enjoy a lifetime of member benefits
                including an exclusive added bonus!
              </p>
            </div>
            <FeeCard>
              <div>
                <p>Param List</p>
                <h2>Pay in Full</h2>
              </div>
              <div className="contentwrap">
                <Fee>
                  ${fees.full}
                </Fee>
              </div>
            </FeeCard>
            <FeeCard>
              <div>
                <p>Param List</p>
                <h2>Installments</h2>
              </div>
              <div className="contentwrap">
                <Fee>
                  ${fees.installments}
                </Fee>
              </div>
            </FeeCard>
            <p>Make a one-time payment to become a lifetime member and save a total of $30 off installment pricing.</p>
            <p>This simple online installment plan automatically bills your credit card monthly — and in less than two
              years you’re a WAA lifetime member!</p>
          </FeeBox>
          <FeeBox>
            <FeeBoxHeading style={{gridColumn: "1 / span 2"}}>
              <h1>Annual Membership</h1>
            </FeeBoxHeading>
            <div style={{gridColumn: "1 / span 2"}}>
              <p>
                Becoming a WAA member is the best way to stay connected to the UW.
                You’ll join a community that shares your pride in the achievements of the university,
                supports all alumni, and celebrates Badger spirit. Plus, enjoy a variety of special benefits
                and being where Badgers belong.
              </p>
            </div>
            <FeeCard>
              <div>
                <p>Param List</p>
                <h2>Two Year</h2>
              </div>
              <div className="contentwrap">
                <Fee>
                  ${fees.twoYear}
                </Fee>
              </div>
            </FeeCard>
            <FeeCard>
              <div>
                <p>Param List</p>
                <h2>One Year</h2>
              </div>
              <div className="contentwrap">
                <Fee>
                  ${fees.oneYear}
                </Fee>
              </div>
            </FeeCard>
            <p>Extend your stay in this Badger community and save off the one-year option.</p>
            <p>Enjoy the benefits of being a WAA member at an affordable price. </p>
          </FeeBox>

        </PageSection>
        :
        <PageSection heading="Let's Find the Best Membership for You">
          <p style={{fontSize: `26px`, maxWidth: `896px`, margin: `0 auto 58px`}}>Joining for the first time? Or are you a long-time member who wants to make sure you're getting
            the best deal? Either way, answer the following questions to see what's right for you.
          </p>
          <QuestionForm>
            <FormHeader>
              <p>IT'S AS EASY AS ONE, TWO, THREE</p>
            </FormHeader>
            <FormSection>
              <h3>1.</h3>
              <FormQuestion>Did you graduate from UW Madison within the last five years?</FormQuestion>
              <StyledCheckbox>
                <input id="graduateYes" name="graduate" checked={state.membershipGraduate} value={true} type="radio" onChange={(e) => onGraduateChanged(e)} />
                <label for="graduateYes">Yes</label>
              </StyledCheckbox>
              <StyledCheckbox>
                <input id="graduateNo" name="graduate" checked={state.membershipGraduate !== null && !state.membershipGraduate} value={false} type="radio" onChange={(e) => onGraduateChanged(e)}/>
                <label for="graduateNo">No</label>
              </StyledCheckbox>
            </FormSection>
            <FormSection>
              <h3>2.</h3>
              <FormQuestion>Are you 65 years of age or over?</FormQuestion>
              <StyledCheckbox>
                <input id="ageYes" name="age" checked={state.membershipAge} value={true} type="radio" onChange={(e) => onAgeChanged(e)}/>
                <label for="ageYes">Yes</label>
              </StyledCheckbox>
              <StyledCheckbox>
                <input id="ageNo" name="age" checked={state.membershipAge !== null && !state.membershipAge} value={false} type="radio" onChange={(e) => onAgeChanged(e)}/>
                <label for="ageNo">No</label>
              </StyledCheckbox>
            </FormSection>
            <FormSection>
              <h3>3.</h3>
              <FormQuestion>What type of member option are you looking for?</FormQuestion>
              <StyledCheckbox>
                <input id="individual" name="accountType" checked={state.membershipType === 'individual'} value="individual" type="radio" onChange={(e) => onMembershipChanged(e)}/>
                <label for="individual">Individual</label>
              </StyledCheckbox>
              <StyledCheckbox>
                <input id="joint" name="accountType" checked={state.membershipType === 'joint'} value="joint" type="radio" onChange={(e) => onMembershipChanged(e)}/>
                <label for="joint">Joint</label>
              </StyledCheckbox>
            </FormSection>
            <p style={{margin: `32px auto 0`}}>You must answer all three questions before submitting</p>
            <button style={{margin: `40px auto`}} disabled={disabled} onClick={(e) => handleSubmit(e)}>Submit</button>
          </QuestionForm>
        </PageSection>
      }

    </div>
  )
}

export default MembershipForm
