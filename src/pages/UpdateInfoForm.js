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
  const { setCurrentStep, setContactInfo } = actions;
  
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
     switch(state.currentStep){
        case 1:
            console.log(state) 
            return <ContactInfo />
        case 2:
            console.log(state) 
            return <SelectSteps />
        case 3:
            if(state.addressStep){
              return <MailingAddress />
            } else{
              setCurrentStep(1)
            }
        case 4:
            if(state.phoneStep){
              return <PhoneInfo />
            } else{
              setCurrentStep(1)
            }
        case 5:
            if(state.employmentStep){
              return <EmploymentInfo />
            } else{
              setCurrentStep(1)
            }
        case 6:
            if(state.identityStep){
              return <IdentityInfo />
            } else{
              setCurrentStep(1)
            }
        case 7:
            if(state.lifeEventStep){
              return <SpouseInfo />
            } else{
              setCurrentStep(1)
            }
        case 8:
            return <UpdateSuccess />
     }
   }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (

    <Layout>
      <StyledUpdateInfoForm>
        { renderCurrentStep() }
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
  max-width: 712px;
  margin: 0 auto;
  @media screen and ${breakpoints.tabletL} {
    padding: 0;
 }
}
form, .disclaimer{
  padding: 0 2rem;
}
form{
  margin-top: 58px;
  legend{
    text-transform: uppercase;
    margin-bottom: 12px;
    display:block;
    position:relative;
    &:after {
      content:"* Required Information";
      color: ${colors.buttonRed};
      position: absolute;
      left: 0;
      top: -30px;
      font-size: 0.778rem;
      text-transform: capitalize;
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
  label, input  {
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
  input{
    margin-top: 12px;
    height: 48px;
    padding-left: 12px;
    border: 2px solid ${colors.formInputBorder};
    border-radius: 0;
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
  
  &.select-steps{
    fieldset{
      margin: 0 auto;
      border:none;
    }
    .checkboxWrap{
      margin: 0 auto;
      max-width: 390px;
    }
    input[type='checkbox'] {
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
    }
    input[type='checkbox'] + label {
      display: block;
      position: relative;
      padding: 0 1.5rem;
      cursor:pointer;
    }
    input[type='checkbox'] + label::before {
      content: '';
      position: relative;
      display: inline-block;
      margin-right: 10px;
      width: 20px;
      height: 20px;
      border: 2px solid ${colors.buttonRed};
      top: 3px;
    }
    input[type='checkbox']:checked + label::before {
      background: ${colors.buttonRed};
    }
    input[type='checkbox']:checked + label::after {
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
    input[type='checkbox']:focus + label::before {
      outline: #5d9dd5 solid 1px;
      box-shadow: 0 0px 8px #5e9ed6;
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


.disclaimer{
  margin-bottom: 128px;
}
`
export default UpdateInfoForm