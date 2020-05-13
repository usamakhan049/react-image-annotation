"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(["\n  box-shadow: 0px 0px 1px 1px white inset;\n  border: solid 3px #1976d2;\n  background-color: rgba(25, 118, 210, 0.27);\n  box-sizing: border-box;\n  transition: box-shadow 0.21s ease-in-out;\n"], ["\n  box-shadow: 0px 0px 1px 1px white inset;\n  border: solid 3px #1976d2;\n  background-color: rgba(25, 118, 210, 0.27);\n  box-sizing: border-box;\n  transition: box-shadow 0.21s ease-in-out;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Constants = require("../../utils/Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = _styledComponents2.default.div(_templateObject);

var textCenter = _styledComponents2.default.div(_templateObject2);

function Rectangle(props) {
  var _props$annotation = props.annotation,
      geometry = _props$annotation.geometry,
      data = _props$annotation.data;

  if (!geometry) return null;
  return _react2.default.createElement(
    Container,
    {
      className: props.className,
      style: _extends({
        position: "absolute",
        left: geometry.x + "%",
        top: geometry.y + "%",
        height: geometry.height + "%",
        width: geometry.width + "%",
        boxShadow: props.active && "0 0 1px 1px yellow inset",
        borderWidth: "" + (props.zoomScale >= 2 && props.zoomScale <= 3.5 ? _Constants.RECTANGLE_FIRST_ZOOM_WIDTH + "px" : props.zoomScale > 3.5 && props.zoomScale <= 8 ? _Constants.RECTANGLE_SECOND_ZOOM_WIDTH + "px" : _Constants.RECTANGLE_WIDTH + "px")
      }, props.style)
    },
    _react2.default.createElement(
      "div",
      {
        style: {
          border: "solid 3px #00bfa5",
          backgroundColor: "#00bfa5",
          borderRadius: "50%",
          boxSizing: "border-box",
          //boxShadow: "0 0 0 1px rgba(0,0,0,0.3)",
          height: "25px",
          position: "absolute",
          transform: "translate3d(-50%, -50%, 0)",
          width: "25px",
          left: geometry.x + geometry.width / 2 + "%",
          top: geometry.y + geometry.height / 2 + "%"
        }
      },
      _react2.default.createElement(
        "p",
        {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold"
            //paddingTop:"6px"
          }
        },
        data.id
      )
    )
  );
}

Rectangle.defaultProps = {
  className: "",
  style: {}
};

exports.default = Rectangle;
module.exports = exports["default"];