import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import InputWrapper from '../../components/InputWrapper'

const Html = ({ fieldData, name, wrapClassName, fieldHidden, ...wrapProps }) => {
    const { content, cssClass, type } = fieldData

    const fieldHiddenClass = fieldHidden === true ? 'gform_hidden' : ''

    return (
        <InputWrapper
            {...wrapProps}
            inputData={fieldData}
            labelFor={name}
            wrapClassName={classnames(
                wrapClassName,
                'gfield_html',
                'gfield_html_formatted',
                'gfield_no_follows_desc',
                'gravityform__' + type + '__wrap',
                cssClass,
                fieldHiddenClass
            )}
        >
            {ReactHtmlParser(content)}
        </InputWrapper>
    )
}

export default Html

Html.propTypes = {
    fieldData: PropTypes.shape({
        cssClass: PropTypes.string,
        content: PropTypes.string,
        type: PropTypes.string,
    }),
    name: PropTypes.string,
    wrapClassName: PropTypes.string,
    wrapProps: PropTypes.object,
}
