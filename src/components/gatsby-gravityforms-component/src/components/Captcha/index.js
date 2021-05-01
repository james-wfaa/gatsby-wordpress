import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect } from 'react'
//import Recaptcha from 'recaptcha'
import ReCAPTCHA from "react-google-recaptcha"
import InputWrapper from '../InputWrapper'

const Captcha = ({
    captchaTheme,
    errors,
    fieldData,
    name,
    register,
    setValue,
    ...wrapProps
}) => {
    const captchaRef = useRef(null)
    const [isLoaded, setLoaded] = useState(false)

    const changeCaptchaToken = (token = '') => {
        setValue('g-recaptcha-response', token, true)
    }

    useEffect(() => {
        if (isLoaded && errors && errors.message) {
            captchaRef.current.reset()
        }
    }, [errors, isLoaded])

    if (!process.env.GATSBY_RECAPTCHA_SITE_KEY) {
        return (
            <div className="gravityform__captcha_notification">
                <p>
                    <strong>
                        To use reCAPTCHA, you need to sign up for an API key
                        pair for your site and use it as a node environment
                        variable named GATSBY_RECAPTCHA_SITE_KEY. The key pair
                        consists of a site key and secret. The site key is used
                        to display the widget on your site. Sign up for an API
                        key pair at
                        <a
                            href="http://www.google.com/recaptcha"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="This link opens a new page"
                        >
                            http://www.google.com/recaptcha
                        </a>
                    </strong>
                </p>
            </div>
        )
    }

    return (
        <InputWrapper
            errors={errors}
            inputData={fieldData}
            labelFor={name}
            {...wrapProps}
        >
            <ReCAPTCHA
                onExpired={changeCaptchaToken}
                onLoad={() => setLoaded(true)}
                onChange={changeCaptchaToken}
                ref={captchaRef}
                sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                theme={captchaTheme || 'light'}
                size="invisible"
            />
            <input
                name="g-recaptcha-response"
                ref={register({})}
                type="hidden"
            />
        </InputWrapper>
    )
}

Captcha.propTypes = {
    captchaTheme: PropTypes.string,
    errors: PropTypes.object,
    fieldData: PropTypes.object,
    name: PropTypes.string,
    register: PropTypes.func,
    setValue: PropTypes.func,
    wrapClassName: PropTypes.string,
}

export default Captcha
