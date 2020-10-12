import React, { Component } from 'react'
import PageSection from "../page-sections/PageSection"
import StyledCommunicationForm from "./StyledCommunicationForm"



function validate(firstname, lastname, email, postalcode) {
    // true means invalid, so our conditions got reversed
    return {
        firstname: firstname.length === 0,
        lastname: lastname.length === 0,
        email: email.length === 0,
        postalcode: postalcode.length === 0
    };
}

export default class ActiveCommunicationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          firstname: "",
          lastname: "",
          email: "",
          postalcode: "",
          errorMsg: {},
          touched: {
            firstname: false,
            lastname: false,
            email: false,
            postalcode: false,
          },

          firstnameValid: false,
          lastnameValid: false,
          emailValid: false,
          postalcodeValid: false,
          gnameValid: false,
          formValid: false,
          hasTyped: false,
        }
        this.handleShowForm = this.handleShowForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    componentDidUpdate(prevProps, prevState) {
        //console.log('did update: ', this.state)

        if ( this.state.firstname && prevState.firstname !== this.state.firstname) {
            // console.log('validating firstname because ', prevState.firstname, '...', this.props.firstname)
            this.validateName('firstname', 'firstnameValid')
        }
        if (this.state.lastname && prevState.lastname !== this.state.lastname) {
            // console.log('validating lastname because ', prevState.lastname, '...', this.props.lastname)

            this.validateName('lastname', 'lastnameValid')
        }
        if (this.state.email && prevState.email !== this.state.email) {
            // console.log('validating email because ', prevState.email, '...', this.props.email)


            this.validateEmail('email', 'emailValid')
        }
        if (this.state.postalcode && prevState.postalcode !== this.state.postalcode) {
            // console.log('validating postalcode')
            // console.log('validating postalcode because ', prevState.postalcode, '...', this.props.postalcode)

            this.validatePostalCode('postalcode', 'postalcodeValid')
        }

    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
    }
    handleNameChange = (field, val) => {
        this.setState({ ...this.state, [field]: val},
           this.validateName(field, val)
        );
        //console.log('handleNameChange results: ', this.state)

    }
    validateEmail = (field, validationField) => {
        const val = this.state[field]
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let nameValid = true
        let errorString = ''
        if( !re.test(val)) {
            nameValid = false;
            errorString = ('Email validation failed.')
        }
        // console.log('errorMsg: ', errorString)


        // console.log(field, '  valid? ', nameValid)

        // console.log('valid by fieldname (', validationField, '): ', this.state[validationField])

        this.setState({[validationField]: nameValid }, this.validateForm)
    }

    validateName = (field, validationField)  => {
        const val = this.state[field]
        // console.log('validateName got this value from saved state for ' , field , ': ', val)
        const touched = this.state.touched[field]
        // console.log('field: ', field,  ', touched: ', touched, 'new val: ', val)

        let nameValid = true
        var letters = /^[A-Za-z @-]+$/;
        let errorString = ''


        if (val.length < 2) {
            // console.log("too short")
            nameValid = false
            errorString = ('Must be at least 2 characters long')
        }
        if(!val.match(letters)) {
            // console.log("bad char found")
            nameValid = false;
            errorString = ('Only letters, spaces and hyphens are allowed.')

        }

        // console.log('errorMsg: ', errorString)


        // console.log(field, '  valid? ', nameValid)

        // console.log('valid by fieldname (', validationField, '): ', this.state[validationField])

        this.setState({[validationField]: nameValid }, this.validateForm)
       /* this.setState(prevState => ({
            valid: {
                ...prevState.valid,
                [field]: nameValid
            }
        }
        ), this.validateForm
        )*/
    }
    validatePostalCode = (field, validationField) => {
        console.log("check postal")
        const val = this.state[field]
        if (val.length > 0) {
            this.setState({[validationField]: true})
        } else {
            this.setState({[validationField]: false})
        }
    }
    validateForm = () => {
        const {firstnameValid, lastnameValid, emailValid, postalcodeValid } = this.state;
        // console.log('firstname valid: ', firstnameValid, ', lastname valid: ', lastnameValid);
        // console.log('are all fields valid? ', firstnameValid && lastnameValid)
        this.setState({
            formValid: firstnameValid && lastnameValid && emailValid && postalcodeValid
        })
    }
    /* REMOVE */
    handleFirstnameChange = evt => {
        this.setState({ firstname: evt.target.value }
        );

    };
    /* REMOVE */
    handleLastnameChange = evt => {
        this.setState({ lastname: evt.target.value });

    };
    /* ADD VALIDATION */
    handleEmailChange = evt => {
        this.setState({ email: evt.target.value });
        // just for now

    };
    /* ADD VALIDATION */
    handlePostalcodeChange = evt => {
        this.setState({ postalcode: evt.target.value });
        // just for now

    };

    /* Show the rest of the form if user has started typing in FirstName */
    handleShowForm = () => {
      if (!this.state.hasTyped) {
        this.setState({ hasTyped: true })
      }
    }
    formIsValid = () => {
        const status = (this.valid.firstname && this.valid.lastname)
        // console.log('formIsValid: ', status)
        return status

    }

    handleSubmit = evt => {
        if (!this.canBeSubmitted()) {
            console.log('no.')
          evt.preventDefault();
          return;
        }
        const { firstname, lastname, email, postalcode } = this.state;
        alert(`Signed up with firstname: ${firstname}, lastname: ${lastname}, email: ${email}, postalcode: ${postalcode}`);
      }

    canBeSubmitted = () => {
        const errors = validate(this.state.firstname, this.state.lastname, this.state.email, this.state.postalcode);
        const isDisabled = Object.keys(errors).some(x => errors[x])
        return !isDisabled
    }

    render () {
        // console.log(this.state)
        return (
          <PageSection preheading="Sign up for WAA Communications" topBorder>
            <StyledCommunicationForm>
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <label htmlFor="firstname">My name is</label>
                  <input
                    type="text"
                    onKeyPress={this.handleShowForm}
                    onChange={this.handleFirstnameChange}
                    onBlur={this.handleBlur("firstname")}
                    value={this.state.firstname}
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                  />
                </fieldset>
                {this.state.hasTyped ? <><fieldset
                  className="hiddenfields"
                  id="hiddenfields"
                >
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    onChange={this.handleLastnameChange}
                    onBlur={this.handleBlur("lastname")}
                  />
                  <label htmlFor="emailaddress">My email is</label>
                  <input
                    type="email"
                    name="emailaddress"
                    id="emailaddress"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  />
                  <label htmlFor="postalcode">My postal code is</label>
                  <input
                    type="text"
                    name="postalcode"
                    id="postalcode"
                    placeholder="postal code"
                    value={this.state.postalcode}
                    onChange={this.handlePostalcodeChange}
                  />
                </fieldset>

                <div className="label">and I Badger On.</div>
                <fieldset
                  className="hiddenfields"
                >
                  <input
                    type="submit"
                    name="submitbutton"
                    id="submitbutton"
                    value="SUBMIT"
                    disabled={!this.state.formValid}
                  />
                </fieldset></> : null}

              </form>
            </StyledCommunicationForm>
          </PageSection>
        )
    }
}