import React, { useState } from "react"
import styled from "styled-components"
import { colors,  sizes, breakpoints, mixins } from "../css-variables"

const FormWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 8px 8px 0px 8px;
  
  margin-bottom: ${sizes.s48};
  text-align: left;
`
const InnerForm = styled.div`
  .firstline {
    font-size: 22px;
    font-weight: bold;
  }
  .inputlabel {
    margin-bottom: 4px;
  }

  input{
      color: ${colors.formTextBlack};
      display: inline-block;
      border: 2px solid ${colors.formInputBorder};
      margin-top: 12px;
      margin-right: 24px;
      margin-bottom: 24px;
      width: 100%;
      padding: ${sizes.s10} ${sizes.s16};
      @media screen and ${breakpoints.tabletS} {
          width: 344px;
          margin-bottom: 0;

      }
  }
`

const FormSubmitButton = styled.button`
  ${mixins.buttons};
  margin-top: 40px;
  border: none;
  padding: ${sizes.s14} ${sizes.s16};
  
`
const ErrorMessageVerbose = styled.div`
  border-top: 1px solid ${colors.bgRed};
  border-bottom: 1px solid ${colors.bgRed};
  margin-top: 22px;
  margin-bottom: 22px;
  font-size: 20px;
  font-weight: bold;
  p {
    text-align: center;
    width: 80%;
    margin: 22px auto;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: ${colors.bgRed};
    cursor: pointer;
  }
`
const ErrorMessageInput = styled.p`
  font-size: 16px;
  margin-top: 24px;
  color: ${colors.bgRed};
`

const LinkBlock = styled.div`
  a {
    text-decoration: none;
    color: ${colors.bgRed};
    cursor: pointer;
  }
`

const InputLabel = styled.div`
  font-size: ${sizes.s18};
  font-weight: bold;
  color: ${colors.badgerRed};
`

const LbraryResourceForm = () => {
  const [memberNumber, setMemberNumber] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [member, setMember] = useState(false)

  const checkMemberNumber = () => {
    let pattern = /^\d[-]\d{8}$/
    var res = pattern.test(memberNumber)
    return res
  }

  const handleChange = e => {
    setMemberNumber(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setMember(checkMemberNumber())
  }

  return (
    <FormWrapper>
      {!submitted || !member ? (
        <div>
          <InnerForm>
          {submitted && !member ? (
            <ErrorMessageVerbose>
              <p>
                Sorry. Your entry doesn’t appear to be a valid WAA member ID
                number. Please try again. If you think you’re seeing this
                message in error, please contact WAA via chat,{" "}
                <a href="mailto:waa@uwalumni.com">email</a>, or phone
                (888-947-2586) for assistance.
              </p>
            </ErrorMessageVerbose>
          ) : null}
      
          <InputLabel>Enter your WAA Member Number</InputLabel>
          <input
            type="text"
            value={memberNumber}
            onChange={e => handleChange(e)}
          /><FormSubmitButton onClick={e => handleSubmit(e)}>
          SUBMIT
        </FormSubmitButton>
          {submitted && !member ? (
            <div>
              <ErrorMessageInput>
                The WAA number you have entered is not valid.
              </ErrorMessageInput>
            </div>
          ) : null}
          
        </InnerForm>

        </div>
        
      ) : (
        <div>
          {member && (
            <div>
              <h3>Thanks for being a member</h3>
              <LinkBlock>
                <a href="/about/librarian">
                  Ask a Reference Librarian
                </a>
                <p>
                  If you’ve ever spent a considerable amount of time researching
                  a topic, you might need help acquiring those hard-to-find
                  articles! Paid Wisconsin Alumni Association members may
                  receive e-mail reference services from a UW-Madison librarian.
                  And, upon request, library staff can help to locate — then
                  copy and deliver — a limited number of articles that are owned
                  in print in campus libraries.
                </p>
              </LinkBlock>
              <LinkBlock>
                <a href="https://search.proquest.com/refurl?accountid=31077">
                  ABI/INFORM Global
                </a>
                <p>
                  ABI/INFORM Complete provides thousands of full-text journals,
                  dissertations, working papers, and key newspapers such as The
                  Wall Street Journal and The Financial Times, as well as
                  country and industry profiles. The database covers a wide
                  range of business topics including accounting, finance,
                  management, marketing and real estate.
                </p>
              </LinkBlock>
              <LinkBlock>
                <a href="https://muse.jhu.edu/refer">Project Muse</a>
                <p>
                  Project Muse provides full-text access to more than 300
                  humanities and social science journals from various
                  publishers. Disciplines covered include art, anthropology,
                  literature, film, theatre, history, ethnic and cultural
                  studies, music, philosophy, religion, psychology, sociology
                  and women's studies.
                </p>
              </LinkBlock>
            </div>
          )}
        </div>
      )}
    </FormWrapper>
  )
}

export default LbraryResourceForm
