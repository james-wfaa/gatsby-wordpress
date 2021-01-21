"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _sanitizeHtml = _interopRequireDefault(require("sanitize-html"));

const defaultOptions = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a'],
  allowedAttributes: {
    a: ['href']
  }
};

const sanitize = (dirty, options) => {
  const mergedOptions = Object.assign({}, defaultOptions, {}, options);
  return {
    __html: (0, _sanitizeHtml.default)(dirty, mergedOptions)
  };
};

const SanitizeHTML = (_ref) => {
  let _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'div' : _ref$tag,
      html = _ref.html,
      options = _ref.options,
      other = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["tag", "html", "options"]);
  const Tag = tag;
  const clean = sanitize(html, options);

  if (clean.__html) {
    return _react.default.createElement(Tag, (0, _extends2.default)({
      dangerouslySetInnerHTML: clean
    }, other));
  }

  return null;
};

var _default = SanitizeHTML;
exports.default = _default;