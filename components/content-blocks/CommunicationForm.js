import React, { Component } from 'react'
import styled from 'styled-components'
import { breakpoints, fonts, sizes, colors, mixins } from '../css-variables'
import PageSection from "../page-sections/PageSection"




function validate(firstname, lastname, email, postalcode) {
    // true means invalid, so our conditions got reversed
    return {
        firstname: firstname.length === 0,
        lastname: lastname.length === 0,
        email: email.length === 0,
        postalcode: postalcode.length === 0
    };
  }

class ActiveCommunicationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            postalcode: '',
            touched: {
                firstname: false,
                lastname: false,
                email: false,
                postalcode: false,
            },
        }
        this.shouldShowForm = this.shouldShowForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
    }
    handleFirstnameChange = evt => {
        this.setState({ firstname: evt.target.value });
    };
    handleLastnameChange = evt => {
        this.setState({ lastname: evt.target.value });
    };
    handleEmailChange = evt => {
        this.setState({ email: evt.target.value });
    };
    handlePostalcodeChange = evt => {
        this.setState({ postalcode: evt.target.value });
    };

    shouldShowForm() {
        return (this.state.firstname.length > 1)
    }

    handleSubmit = evt => {
        if (!this.canBeSubmitted()) {
            console.log('no.')
          evt.preventDefault();
          return;
        }
        const { firstname, lastname, email, postalcode } = this.state;
        alert(`Signed up with firstname: ${firstname}, lastname: ${lastname}, email: ${email}, postalcode: ${postalcode}`);
      };

    canBeSubmitted() {
        const errors = validate(this.state.firstname, this.state.lastname, this.state.email, this.state.postalcode);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
      }
    
    render() {
        const errors = validate(this.state.firstname, this.state.lastname, this.state.email, this.state.postalcode);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
    
        return (
            <PageSection>
                <StyledCommunicationForm>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label htmlFor="firstname">My name is</label>
                        <input type="text" onKeyPress={this.shouldShowForm} onChange={this.handleFirstnameChange} value={this.state.firstname} name="firstname" id="firstname" placeholder="First Name" />
                    </fieldset>
                    <fieldset className={this.shouldShowForm() ? "active" : "hiddenfields"} id="hiddenfields">
                        <input type="text" name="lastname" id="lastname" placeholder="Last Name"  value={this.state.lastname}  onChange={this.handleLastnameChange} />
                        <label htmlFor="emailaddress">My email is</label>
                        <input type="text" name="emailaddress" id="emailaddress" placeholder="Email"  value={this.state.email}  onChange={this.handleEmailChange} />
                        <label htmlFor="postalcode">My postal code is</label>
                        <input type="text" name="postalcode" id="postalcode" placeholder="postal code"  value={this.state.postalcode}  onChange={this.handlePostalcodeChange}/>
                        <div>and I Badger On.</div>
                        <input type="submit" name="submitbutton" id="submitbutton" value="SUBMIT"  disabled={isDisabled} aria-disabled />
                    </fieldset>
                </form>
                </StyledCommunicationForm>
            </PageSection>
        )
      }

}


const StyledCommunicationForm = styled.div`
width: 100%;
margin: 0 auto;
padding: 0 ${sizes.s32};
max-width: 528px;
font-family: ${fonts.eaves};
font-size: ${sizes.s36};
color: ${colors.titleColor};
font-weight: bold;
font-style: italic;
text-align: center;
@media screen and ${breakpoints.tabletS} {
    font-size: ${sizes.s42};
}
label { 
    display: block;
    margin-bottom: ${sizes.s24};
    @media screen and ${breakpoints.tabletS} {
        margin-bottom: ${sizes.s32};
    }
}

input {
    display: block;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${colors.bgRed};
    text-align: center;
    padding-bottom: ${sizes.s8};
    margin-bottom: ${sizes.s32};
}
input[type="submit"] {
    ${mixins.buttons};
    margin-top: ${sizes.s58};
    &:disabled {
        color: grey;
    }
}


fieldset {
    border: none;
    &.hiddenfields {
        display: none;
    }
}



`

export default ActiveCommunicationForm