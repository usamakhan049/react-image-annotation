'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  border: solid 3px #1976d2;\n  background-color: #1976d2;\n  border-radius: 50%;\n  box-sizing: border-box;\n  box-shadow:\n    0 0 0 1px rgba(0,0,0,0.3),\n    0 0 0 2px rgba(0,0,0,0.2),\n    0 5px 4px rgba(0,0,0,0.4);\n  height: 16px;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0);\n  width: 16px;\n'], ['\n  border: solid 3px #1976d2;\n  background-color: #1976d2;\n  border-radius: 50%;\n  box-sizing: border-box;\n  box-shadow:\n    0 0 0 1px rgba(0,0,0,0.3),\n    0 0 0 2px rgba(0,0,0,0.2),\n    0 5px 4px rgba(0,0,0,0.4);\n  height: 16px;\n  position: absolute;\n  transform: translate3d(-50%, -50%, 0);\n  width: 16px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Constants = require('../../utils/Constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = _styledComponents2.default.div(_templateObject);

function PointSelector(props) {
  var geometry = props.annotation.geometry;

  if (!geometry) return null;

  return _react2.default.createElement(Container, {
    style: {
      top: geometry.y + '%',
      left: geometry.x + '%',
      height: '' + (props.zoomScale >= 2 && props.zoomScale <= 3.5 ? _Constants.POINTS_FIRST_ZOOM_WIDTH + "px" : props.zoomScale > 3.5 && props.zoomScale <= 8 ? _Constants.POINTS_SECOND_ZOOM_WIDTH + "px" : _Constants.POINTS_WIDTH + "px"),
      width: '' + (props.zoomScale >= 2 && props.zoomScale <= 3.5 ? _Constants.POINTS_FIRST_ZOOM_WIDTH + "px" : props.zoomScale > 3.5 && props.zoomScale <= 8 ? _Constants.POINTS_SECOND_ZOOM_WIDTH + "px" : _Constants.POINTS_WIDTH + "px")
    }
  });
}

exports.default = PointSelector;
module.exports = exports['default'];