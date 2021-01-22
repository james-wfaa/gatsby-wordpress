import React, { useEffect, useContext } from "react"
//import { useForm } from "react-hook-form"
import styled from 'styled-components'
import Layout from "../components/layout"
import { AppContext } from "../context/AppContext"
import ContactInfo from "../components/update-info-form/pages/ContactInfo"
import SelectSteps from "../components/update-info-form/pages/SelectSteps"
import { mixins, colors, fonts, sizes, breakpoints } from '../components/css-variables'


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
         return <ContactInfo />
       case 2:
         return <SelectSteps />
       case 3:
         return <SelectSteps />
     }
   }

  /*const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // this.setState({
    //   [name]: value
    // });
    // if (this.state.currentStep === 1){
    //   this.setState({
    //     contactInfo:{
    //       [name]: value
    //     }
    //   });
    // }
  }*/

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
  padding: 0 2rem;
  @media screen and ${breakpoints.tabletL} {
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
  }
  label, input  {
    display: block;
    width:100%;
  }
  label{
    margin-top: 24px;
    position:relative;
    &.required:before {
      content:" *";
      color: ${colors.buttonRed};
    }
  }
  input{
    margin-top: 12px;
    height: 48px;
    padding-left: 12px;
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
      width: 30%;
      display: inline-block;
    }
 }
  
  &.select-steps{
    text-align:center;
    input{
      display: inline-block;
      width: auto;
      height:auto;
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
    line-height: ${sizes.s26};
    font-weight: bold;
    padding: ${sizes.s16};
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    margin: ${sizes.s24} 0 0 ;
    border:none;
    &:hover {
      cursor:pointer;
    }
    &.next{
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
          background-color: ${colors.buttonActiveGrey};
      }
    }
    &.back{
      border: 2px solid ${colors.buttonRed};
      background-color: ${colors.bgWhite};
      color: ${colors.buttonRed};
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
    }
    @media screen and ${breakpoints.tabletS} {
      width: auto;
    }
    @media screen and ${breakpoints.tabletS} {
      display: inline-block;
    }

  }

}

.disclaimer{
  margin-bottom: 128px;
}
`
export default UpdateInfoForm