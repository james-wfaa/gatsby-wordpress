import React, { useEffect, useContext } from "react"
//import { useForm } from "react-hook-form"
import styled from 'styled-components'
import Layout from "../components/layout"
import { AppContext } from "../context/AppContext"
import ContactInfo from "../components/update-info-form/pages/ContactInfo"
import SelectSteps from "../components/update-info-form/pages/SelectSteps"
import MailingAddress from "../components/update-info-form/pages/MailingAddress"
import PhoneInfo from "../components/update-info-form/pages/PhoneInfo"
import EmploymentInfo from "../components/update-info-form/pages/EmploymentInfo"
import IdentityInfo from "../components/update-info-form/pages/IdentityInfo"
import SpouseInfo from "../components/update-info-form/pages/SpouseInfo"
import UpdateSuccess from "../components/update-info-form/pages/UpdateSuccess"
import { mixins, colors, fonts, sizes, breakpoints } from '../components/css-variables'
import downCaret from './../../static/down-caret-red.png'


const UpdateInfoForm = () =>  {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep } = actions;
  
  /*useEffect(() => {
    setContactInfo({
      firstname: "Jakey",
      lastname: "Jacobs",
      email: 'jjacobs@defaultsDeep.com',
      undergrad: '1993',
      postgrad: '1995',
    });
  }, [])*/

  /*useEffect(() => {
    console.log(state)
  }, [state])*/

 const renderCurrentStep = () => {
      //console.log(state.currentStep)
      switch(state.currentStep){
        case 1:
            return <ContactInfo />
        case 2:
            return <SelectSteps />
        case 3:
            return <MailingAddress />
        case 4:
            return <PhoneInfo />
        case 5:
            return <EmploymentInfo />
        case 6:
            return <IdentityInfo />
        case 7:
            return <SpouseInfo />
        case 8:
            return <UpdateSuccess />
     }
   }

  const onSubmit = (data) => {
    
    console.log(data)
    console.log(state.currentStep)
    
  }

  return (

    <Layout>
      <StyledUpdateInfoForm>
        { renderCurrentStep() }
        {console.log(state)}
        { !(state.currentStep === 8) && <p className="disclaimer">By entering your information above, you give consent to the Wisconsin Foundation and Alumni Association to store your information and communicate with you. You can withdraw your consent at any time by emailing recordsupdates@supportuw.org. To learn more, please review our Privacy Statement.</p>} 
      </StyledUpdateInfoForm>
    </Layout>

  )
}

const StyledUpdateInfoForm = styled.div`
.excerpt{
  color: ${colors.copyText}
}
form, .form-btns, .disclaimer{
  max-width: 896px;
  margin: 0 auto;
  @media screen and ${breakpoints.laptopS} {
    padding: 0;
 }
}
form, .disclaimer{
  padding: 0 2rem;
  @media screen and ${breakpoints.laptopS} {
    padding: 0;
 }
}
form{
  margin-top: 58px;
  legend{
    text-transform: uppercase;
    margin-bottom: 12px;
    display:block;
    position:relative;
    font-weight:bold;
    .requiredInfo{
      position:absolute;
      color: ${colors.buttonRed};
      left: 0;
      top: -30px;
      font-size: 0.778rem;
      text-transform: capitalize;
      font-weight:normal;
      @media screen and ${breakpoints.tabletS} {
        right: 0;
        top: 0;
        left: unset;
      }
    }
  }
  hr{
    margin-bottom: 0;
    color: ${colors.formInputBorder};
    height: 2px;
  }
  label, input, textarea  {
    display: block;
    width:100%;
  }
  label{
    margin-top: 24px;
    position:relative;
    /*&.required:before {
      content:" *";
      color: ${colors.buttonRed};
    }*/
    span.required{
      color: ${colors.buttonRed};
    }
  }
  input, textarea{
    margin-top: 12px;
    height: 48px;
    padding-left: 12px;
    border: 2px solid ${colors.formInputBorder};
    border-radius: 0;
  }
  textarea{
    padding-top:8px;
  }
  select {
    display: block;
    width:100%;
    border-radius: 0;
    margin-top: 12px;
    height: 48px;
    padding-left: 12px;
    border: 2px solid ${colors.formInputBorder};
    -webkit-appearance: none; /* Remove default arrow */
    -moz-appearance: none;    /* Remove default arrow */
    appearance: none;         /* Remove default arrow */
    background-image: url(${downCaret});
    background-repeat:no-repeat;
    background-position: 96% 50%; 
  }
  
  
  @media screen and ${breakpoints.tabletS} {
    label.half, input.half  {
      width: 49%;
      display: inline-block;
    }
    label.leftMargin{
      margin-left: 2%;
    }
    label.third, input.third  {
      width: 32%;
      display: inline-block;
    }
 }
  
  &.select-steps, 
  &.identity-info,
  &.success-page,
  &.spouse-info,
  &.mailing-address{
    fieldset{
      margin: 0 auto;
      border:none;
    }
    .checkboxWrap{
      margin: 0 auto;
      max-width: 390px;
    }
    input[type='checkbox'], input[type='radio'] {
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
    }
    input[type='checkbox'] + label, input[type='radio'] + label{
      display: block;
      position: relative;
      padding: 0 1.5rem;
      cursor:pointer;
    }
    input[type='checkbox'] + label::before, input[type='radio'] + label::before {
      content: '';
      position: relative;
      display: inline-block;
      margin-right: 10px;
      width: 20px;
      height: 20px;
      border: 2px solid grey;
      top: 3px;
    }
    input[type='radio'] + label::before {
      border-radius: 50%;
    }
    input[type='checkbox']:checked + label::before, input[type='radio']:checked + label::before {
      background: ${colors.buttonRed};
      border: 2px solid ${colors.buttonRed};
    }
    input[type='checkbox']:checked + label::after, input[type='radio']:checked + label::after {
      content: '';
      position: absolute;
      top: 7px;
      left: 30px;
      border-left: 2px solid white;
      border-bottom: 2px solid white;
      height: 8px;
      width: 14px;
      transform: rotate(-45deg);
    }
    input[type='radio']:checked + label::after {
      content: '';
      position: absolute;
      border: 2px solid white;
      top: 6px;
      left: 30px;
      height: 14px;
      width: 14px;
      border-radius: 50%;
    }
    input[type='checkbox']:focus + label::before, input[type='radio']:focus + label::before {
      outline: #5d9dd5 solid 1px;
      box-shadow: 0 0px 8px #5e9ed6;
    }
  }
  &.identity-info,
  &.spouse-info{
    input[type='checkbox'] + label, input[type='radio'] + label {
      padding: 0;
    }
    input[type='checkbox']:checked + label::after, input[type='radio']:checked + label::after {
      left: 3px;
    }
  }
  &.success-page{
    legend{
      font-family: ${fonts.eaves};
      color: ${colors.buttonRed};
      text-transform: none;
      font-style: italic;
      font-weight: bold;
      font-size: ${sizes.s26};
      text-align:center;
    }
    .checkboxWrap{
      max-width: 180px;
    }
  }
  &.identity-info{
    textarea#identitydescrip{
      height:96px;
      resize: none;
    }
  }
}


.form-btns{
  margin: 58px auto;
  text-align: center;
  button{
    display: block;
    width: 100%;
    min-width: 6.5rem;
    font-family: ${fonts.verlag};
    font-style: normal;
    font-size: ${sizes.s16};
    line-height: ${sizes.s16};
    font-weight: bold;
    padding: ${sizes.s16};
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    margin: ${sizes.s24} auto 0 ;
    border:none;
    max-width:310px;
    &:hover {
      cursor:pointer;
    }
    &.next, &.save{
      background-color: ${colors.buttonRed};
      color: ${colors.titleWhite};
      &:after{
        content:'';
            border: solid #ffffff;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 5px;
            transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            margin-left:12px;
      }
      &:hover {
        background-color: ${colors.buttonHoverRed};
        box-shadow: 4px 4px 6px rgba(0,0,0,0.2);
      }
      &:active {
          background-color: ${colors.buttonHoverRed};
      }
      /*&.disabled {
        background-color: grey;
      }*/
      &:disabled {
        background-color: ${colors.disabledButtonGrey};
        box-shadow:none;
      }
    }
    &.back{
      border: 1px solid ${colors.buttonRed};
      background-color: ${colors.bgWhite};
      color: ${colors.buttonRed};
      line-height: ${sizes.s12};
      &:before{
        content:'';
            border: solid ${colors.buttonRed};
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 5px;
            transform: rotate(135deg);
            -webkit-transform: rotate(135deg);
            margin-right:8px;
      }
      @media screen and ${breakpoints.tabletS} {
        margin-right: 40px;
      }
    }
    &.signup, 
    &.address{
      color:white;
      background-color: ${colors.buttonRed};
    }
    &.address{
      margin-right:40px;
    }
    &#submitbutton{
      background-color: ${colors.buttonRed};
      color: ${colors.titleWhite};
      &:disabled {
        background-color: ${colors.disabledButtonGrey};
      }
      @media screen and ${breakpoints.tabletS} {
        margin-right: 40px;
      }
    }
    @media screen and ${breakpoints.tabletS} {
      width: auto;
      display: inline-block;
    }

  }

}
.success-page{
  .progress-bar-wrapper .progress::after{
    border-radius:0;
    height:28px;
    width: 4px;
    bottom:-1px;
    top:unset;
    background-color:${colors.buttonRed};
  }
  .progress-bar-wrapper .progress::before{
    content:'100';
    color:${colors.buttonRed};
    position:absolute;
    right: -16px;
    top:-40px;
    font-weight:bold;
  }
  .successPageIcon{
    position:relative;
    top: -95px;
    height: 0;
    width: 60px;
    margin: 0 auto;
    :before {
      content: '';
      position: relative;
      display: inline-block;
      margin-right: 10px;
      width: 58px;
      height: 58px;
      border: 4px solid ${colors.buttonRed};
      top: 0;
      border-radius:50%;
    }
    :after {
      content: '';
      position: absolute;
      top: 18px;
      left: 13px;
      border-left: 4px solid ${colors.buttonRed};
      border-bottom: 4px solid ${colors.buttonRed};
      height: 16px;
      width: 32px;
      transform: rotate(-55deg);
    }
  }
  .content{
    margin-bottom: 70px;
  }
}


.disclaimer{
  margin-bottom: 128px;
}
`
export default UpdateInfoForm