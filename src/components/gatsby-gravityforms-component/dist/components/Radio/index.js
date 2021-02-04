"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _inputSettings = require("../../utils/inputSettings");

var _strings = _interopRequireDefault(require("../../utils/strings"));

var _jsxFileName = "C:\\projects\\gatsby-gravityforms-component\\src\\components\\Radio\\index.js";

const Radio = ({
  className,
  description,
  descriptionPlacement,
  errors,
  label,
  name,
  options,
  register,
  required,
  wrapClassName
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(wrapClassName, errors && 'gravityform__field--error'),
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react.default.createElement("legend", {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, label), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'above'), options.map((choice, index) => {
    const choiceID = index + 1;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: `${name}-${choiceID}`,
      __self: void 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, /*#__PURE__*/_react.default.createElement("input", {
      className: (0, _classnames.default)('gravityform__field__input__radio', 'gravityform__field__input__radio--' + choiceID, className),
      defaultChecked: choice.isSelected,
      id: `${name}_${choiceID}`,
      name: `${name}`,
      ref: register({
        required: required && _strings.default.errors.required
      }),
      type: "radio",
      value: choice.value,
      __self: void 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: `${name}_${choiceID}`,
      __self: void 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, choice.text));
  }), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'below'), errors && /*#__PURE__*/_react.default.createElement("div", {
    className: "gravityform__error_message",
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, errors.message));
};

var _default = Radio;
exports.default = _default;
Radio.propTypes = {
  className: _propTypes.default.string,
  description: _propTypes.default.string,
  descriptionPlacement: _propTypes.default.string,
  errors: _propTypes.default.array,
  label: _propTypes.default.string,
  name: _propTypes.default.string,
  options: _propTypes.default.array,
  register: _propTypes.default.func,
  required: _propTypes.default.bool,
  wrapClassName: _propTypes.default.string
};