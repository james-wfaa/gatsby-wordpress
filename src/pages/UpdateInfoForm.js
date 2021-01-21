import React, { useEffect, useContext } from "react"
//import { useForm } from "react-hook-form"
import styled from 'styled-components'
import Layout from "../components/layout"
import { AppContext } from "../context/AppContext"
import ContactInfo from "../components/update-info-form/pages/ContactInfo"
import SelectSteps from "../components/update-info-form/pages/SelectSteps"
import Context from '../components/update-info-form/form-context'
import { mixins, colors, fonts, sizes } from '../components/css-variables'


const UpdateInfoForm = () =>  {
  const { state, actions } = useContext(AppContext);
  const { setCurrentStep, setContactInfo } = actions;

  useEffect(() => {
    setContactInfo({
      firstname: "Jakey",
      lastname: "Jacobs",
      email: 'jjacobs@defaultsDeep.com',
      undergrad: '1993',
      postgrad: '1995',
    });
  }, [])

  useEffect(() => {
    console.log(state)
  }, [state])

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     currentStep: 1,
  //     contactInfo: {
  //       firstname: '',
  //       lastname: '',
  //       othernames: '',
  //       email: '',
  //       phone: '',
  //       undergrad: '',
  //       postgrad: '',
  //     },
  //     selectedSteps: {
  //       address: true,
  //       phone: true,
  //       employment: true,
  //       demographic: true,
  //       spouse: true,
  //     },
  //   }
  //   this.handleInputChange = this.handleInputChange.bind(this);
  // }

  // const renderCurrentStep = () => {
  //   switch(this.state.currentStep){
  //     case 1:
  //       return <ContactInfo onChange={handleInputChange} />
  //     case 2:
  //       return <SelectSteps />
  //     case 3:
  //       return <SelectSteps />
  //   }
  // }

  const handleNextBtn = () => {
    // let currentStep = this.state.currentStep
    // currentStep = currentStep + 1
    // this.setState({
    //   currentStep: currentStep
    // })
  }

  const handleBackBtn = () => {
    // let currentStep = this.state.currentStep
    // currentStep = currentStep - 1
    // this.setState({
    //   currentStep: currentStep
    // })
  }

  const handleInputChange = (event) => {
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
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    // const contextValue = {
    //   currentStep: this.state.currentStep,
    //   handleNextBtn: this.handleNextBtn,
    //   handleBackBtn: this.handleBackBtn,
    // }

    <Layout>
      <StyledUpdateInfoForm>
        {/* {this.renderCurrentStep()} */}
        {/* {!(this.state.currentStep === 8) && <p className="disclaimer">By entering your information above, you give consent to the Wisconsin Foundation and Alumni Association to store your information and communicate with you. You can withdraw your consent at any time by emailing recordsupdates@supportuw.org. To learn more, please review our Privacy Statement.</p>} */}

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
}
form{
  margin-top: 24px;
  legend{
    text-transform: uppercase;
    margin-bottom: 12px;
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
  }
  input{
    margin-top: 12px;
    height: 48px;
    padding-left: 12px;
  }
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
    display: inline-block;
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

  }

}

.disclaimer{
  margin-bottom: 128px;
}
`
export default UpdateInfoForm