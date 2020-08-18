'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  border: solid 3px #1976d2;\n  background-color: #1976d2;\n  border-radius: 50%;\n  box-sizing: border-box;\n  box-shadow:\n    0 0 0 1px rgba(0,0,0,0.3),\n    0 0 0 2px rgba(0,0,0,0.2),\n    0 5px 4px rgba(0,0,0,0.4);\n\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0);\n  display: inline-block;\n  &:before {\n    content: "";\n    display: inline-block;\n    vertical-align: middle;\n    padding-top: 100%;\n    height: 0;\n  }\n  text-align: center;\n  line-height: 1;\n  box-sizing: content-box;\n  white-space: nowrap;\n  &:span{\n    display: inline-block;\n  vertical-align: middle;\n  }\n'], ['\n  border: solid 3px #1976d2;\n  background-color: #1976d2;\n  border-radius: 50%;\n  box-sizing: border-box;\n  box-shadow:\n    0 0 0 1px rgba(0,0,0,0.3),\n    0 0 0 2px rgba(0,0,0,0.2),\n    0 5px 4px rgba(0,0,0,0.4);\n\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0);\n  display: inline-block;\n  &:before {\n    content: "";\n    display: inline-block;\n    vertical-align: middle;\n    padding-top: 100%;\n    height: 0;\n  }\n  text-align: center;\n  line-height: 1;\n  box-sizing: content-box;\n  white-space: nowrap;\n  &:span{\n    display: inline-block;\n  vertical-align: middle;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Constants = require('../../utils/Constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = _styledComponents2.default.div(_templateObject);

function Point(props) {
  var _props$annotation = props.annotation,
      geometry = _props$annotation.geometry,
      data = _props$annotation.data;

  if (!geometry) return null;

  return _react2.default.createElement(
    Container,
    {
      style: {
        top: geometry.y + '%',
        left: geometry.x + '%',
        minHeight: '' + (props.zoomScale >= 2 && props.zoomScale <= 3.5 ? _Constants.POINTS_FIRST_ZOOM_WIDTH + "px" : props.zoomScale > 3.5 && props.zoomScale <= 8 ? _Constants.POINTS_SECOND_ZOOM_WIDTH + "px" : _Constants.POINTS_WIDTH + "px"),
        minWidth: '' + (props.zoomScale >= 2 && props.zoomScale <= 3.5 ? _Constants.POINTS_FIRST_ZOOM_WIDTH + "px" : props.zoomScale > 3.5 && props.zoomScale <= 8 ? _Constants.POINTS_SECOND_ZOOM_WIDTH + "px" : _Constants.POINTS_WIDTH + "px"),
        color: "white",
        fontWeight: "bold",
        fontSize: "11px"
      }
    },
    _react2.default.createElement(
      'span',
      null,
      data.id
    )
  );
}

exports.default = Point;
module.exports = exports['default'];