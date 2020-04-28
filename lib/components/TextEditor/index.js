'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: 8px 16px;\n\n  textarea {\n    border: 0;\n    font-size: 14px;\n    margin: 6px 0;\n    min-height: 60px;\n    outline: 0;\n  }\n'], ['\n  padding: 8px 16px;\n\n  textarea {\n    border: 0;\n    font-size: 14px;\n    margin: 6px 0;\n    min-height: 60px;\n    outline: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('antd/dist/antd.css');

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var TextArea = _antd.Input.TextArea;


var Inner = _styledComponents2.default.div(_templateObject);

// const Button = styled.div`
//   background: whitesmoke;
//   border: 0;
//   box-sizing: border-box;
//   color: #363636;
//   cursor: pointer;
//   font-size: 1rem;
//   margin: 0;
//   outline: 0;
//   padding: 8px 16px;
//   text-align: center;
//   text-shadow: 0 1px 0 rgba(0,0,0,0.1);
//   width: 100%;

//   transition: background 0.21s ease-in-out;

//   &:focus, &:hover {
//     background: #eeeeee;
//   }
// `

function content(props) {
  var _React$createElement;

  return _react2.default.createElement(
    _antd.Row,
    null,
    _react2.default.createElement(
      _antd.Col,
      null,
      _react2.default.createElement(
        _antd.Row,
        null,
        _react2.default.createElement(TextArea, (_React$createElement = {
          onChange: function onChange(e) {
            return props.onChange(_extends({}, props.annotation, {
              data: _extends({}, props.annotation.data, {
                text: e.target.value
              })
            }));
          },
          rows: 3,
          onFocus: props.onFocus,
          onBlur: props.onBlur
        }, _React$createElement['onChange'] = props.onChange, _React$createElement.value = props.value, _React$createElement))
      ),
      _react2.default.createElement(
        _antd.Row,
        { style: { marginTop: "10px" } },
        _react2.default.createElement(
          _antd.Button,
          { onClick: props.onSubmit, type: 'primary', block: true },
          'Comment'
        )
      )
    )
  );
};
function TextEditor(props) {

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      _antd.Popover,
      {
        overlayClassName: 'imagemap',
        content: content(props),
        trigger: 'click',
        visible: true,
        placement: 'bottom'
      },
      console.log("************11", props)
    )
  );
}

exports.default = TextEditor;
module.exports = exports['default'];