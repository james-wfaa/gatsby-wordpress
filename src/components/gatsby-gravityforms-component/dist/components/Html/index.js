"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _InputWrapper = _interopRequireDefault(require("../../components/InputWrapper"));

const Html = ({
  fieldData,
  name,
  wrapClassName,
  ...wrapProps
}) => {
  const {
    content,
    cssClass,
    type
  } = fieldData;
  return /*#__PURE__*/_react.default.createElement(_InputWrapper.default, (0, _extends2.default)({}, wrapProps, {
    inputData: fieldData,
    labelFor: name,
    wrapClassName: (0, _classnames.default)(wrapClassName, 'gfield_html', 'gfield_html_formatted', 'gfield_no_follows_desc', 'gravityform__' + type + '__wrap', cssClass)
  }), (0, _reactHtmlParser.default)(content));
};

var _default = Html;
exports.default = _default;
Html.propTypes = {
  fieldData: _propTypes.default.shape({
    cssClass: _propTypes.default.string,
    content: _propTypes.default.string,
    type: _propTypes.default.string
  }),
  name: _propTypes.default.string,
  wrapClassName: _propTypes.default.string,
  wrapProps: _propTypes.default.object
};